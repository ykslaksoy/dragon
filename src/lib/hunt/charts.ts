import type { HuntProduct, ScoresMode } from "./types";

/** Whether sales/profit series come from live history APIs or heuristics. */
export type ChartHistoryMode = "live" | "estimated";

/** Forward outlook length in months (UI: Aylık | 3 aylık | 6 aylık). */
export type ForecastHorizonMonths = 1 | 3 | 6;

export type ChartPoint = {
  /** Stable key for i18n (launch | peak | now) or period index label. */
  key: string;
  /** Display label when not looked up via i18n (e.g. M3). */
  label: string;
  sales: number;
  profit: number;
};

export type ProductChartSeries = {
  historyMode: ChartHistoryMode;
  /** Açılış · Pik · Şimdi — comparable monthly units + monthly profit. */
  history: ChartPoint[];
  /**
   * Full next-6-month monthly series. UI slices to 1 / 3 / 6 months
   * (Aylık | 3 aylık | 6 aylık).
   */
  monthlyForecast: ChartPoint[];
};

/** Stable 0–1 pseudo-random from product id (deterministic per ASIN/SKU). */
function hash01(id: string, salt = 0): number {
  let h = (salt * 2654435761) >>> 0;
  for (let i = 0; i < id.length; i++) {
    h = Math.imul(h ^ id.charCodeAt(i), 16777619);
  }
  return ((h >>> 0) % 10_000) / 10_000;
}

function roundSales(n: number): number {
  return Math.max(1, Math.round(n));
}

function roundMoney(n: number): number {
  return Math.max(0, Math.round(n));
}

/**
 * Live history is available when Keepa or Amazon PA-API history keys exist.
 * Keepa does not cover amazon.com.tr — callers still fall back to estimated
 * series for TR until a TR-capable history source is wired.
 */
export function resolveChartHistoryMode(opts?: {
  scoresMode?: ScoresMode;
  platform?: string;
}): ChartHistoryMode {
  const keepa = Boolean(process.env.KEEPA_API_KEY?.trim());
  const paapi =
    Boolean(process.env.AMAZON_PAAPI_ACCESS_KEY?.trim()) &&
    Boolean(process.env.AMAZON_PAAPI_SECRET_KEY?.trim()) &&
    Boolean(process.env.AMAZON_PAAPI_PARTNER_TAG?.trim());

  // Client bundle has no secrets; always estimated in browser.
  if (typeof window !== "undefined") {
    return opts?.scoresMode === "live" ? "live" : "estimated";
  }

  const platform = (opts?.platform ?? "").toLowerCase();
  const isAmazonTr =
    platform.includes("amazon") &&
    (platform.includes(".tr") || platform.includes("tr "));

  // Keepa history for non-TR Amazon when key present; PA-API sales rank
  // history not yet ingested — keep estimated until wired.
  if (keepa && platform.includes("amazon") && !isAmazonTr) {
    return "estimated"; // stub: wire Keepa graph fetch here when ready
  }
  if (paapi) {
    return "estimated"; // stub: wire PA-API / sales-rank history when ready
  }
  return "estimated";
}

/** Slice the 6-month series to the selected horizon. */
export function forecastForHorizon(
  monthlyForecast: ChartPoint[],
  months: ForecastHorizonMonths,
): ChartPoint[] {
  return monthlyForecast.slice(0, months);
}

function buildMonthlyPoints(
  productId: string,
  monthlySales: number,
  unitProfit: number,
  count: number,
  live?: ChartPoint[],
): ChartPoint[] {
  if (live && live.length >= count) return live.slice(0, count);
  return Array.from({ length: count }, (_, i) => {
    // Planning curve: slight growth then plateau / soft decline.
    const growth =
      1 +
      i * (0.04 + hash01(productId, 30) * 0.03) -
      Math.max(0, i - 3) * 0.05;
    const noise = 1 + (hash01(productId, 40 + i) - 0.5) * 0.06;
    const sales = roundSales(monthlySales * growth * noise);
    return {
      key: `m${i + 1}`,
      label: `M${i + 1}`,
      sales,
      profit: roundMoney(sales * unitProfit),
    };
  });
}

/**
 * Build launch · peak · now history and a 6-month monthly forecast.
 * UI toggles Aylık (1) / 3 aylık (3) / 6 aylık (6); default 3.
 */
export function buildProductChartSeries(
  product: HuntProduct,
  live?: {
    history?: ChartPoint[];
    monthlyForecast?: ChartPoint[];
  },
): ProductChartSeries {
  const historyMode =
    live?.history && live.history.length >= 3
      ? ("live" as const)
      : resolveChartHistoryMode({
          scoresMode: product.scoresMode,
          platform: product.platform,
        });

  const monthlySales = Math.max(1, product.monthlyDemandUnits);
  const unitProfit = Math.max(1, product.unitProfit);
  const monthlyProfit = Math.max(
    1,
    product.monthlyProfit || monthlySales * unitProfit,
  );

  const launchRatio = 0.38 + hash01(product.id, 1) * 0.18; // 38–56% of now
  const peakRatio = 1.12 + hash01(product.id, 2) * 0.38; // 112–150% of now
  const launchSales = roundSales(monthlySales * launchRatio);
  const peakSales = roundSales(
    Math.max(monthlySales * peakRatio, monthlySales * 1.08),
  );
  const nowSales = roundSales(monthlySales);

  const launchProfit = roundMoney(
    launchSales * unitProfit * (0.85 + hash01(product.id, 3) * 0.1),
  );
  const peakProfit = roundMoney(
    peakSales * unitProfit * (0.95 + hash01(product.id, 4) * 0.08),
  );
  const nowProfit = roundMoney(monthlyProfit);

  const history: ChartPoint[] =
    live?.history && live.history.length >= 3
      ? live.history.slice(0, 3)
      : [
          {
            key: "launch",
            label: "launch",
            sales: launchSales,
            profit: launchProfit,
          },
          { key: "peak", label: "peak", sales: peakSales, profit: peakProfit },
          { key: "now", label: "now", sales: nowSales, profit: nowProfit },
        ];

  const monthlyForecast = buildMonthlyPoints(
    product.id,
    monthlySales,
    unitProfit,
    6,
    live?.monthlyForecast,
  );

  return { historyMode, history, monthlyForecast };
}
