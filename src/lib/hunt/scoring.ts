import type { CostBreakdown, HuntProduct, ProductPath } from "./types";

const LOW_RISK_PATHS = new Set<ProductPath>(["dropship", "shopify"]);

/** Clamp helper. */
export function clamp(n: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, n));
}

/**
 * Best-effort cost model until live fee APIs exist.
 * Marketplace flip: buy ≈ list × 0.62, commission ≈ 15%, ship ≈ flat, ads unknown.
 * Dropship: buy lower, commission = Shopify/payment estimate, ship from supplier.
 */
export function estimateCosts(opts: {
  path: ProductPath;
  sellPrice: number | null;
  buyPrice?: number | null;
}): {
  buyPrice: number | null;
  costs: CostBreakdown;
  costUnknown: Array<"product" | "shipping" | "commission" | "ads">;
  unitProfit: number;
} {
  const sell = opts.sellPrice;
  const costUnknown: Array<"product" | "shipping" | "commission" | "ads"> = [
    "ads",
  ];

  let buy =
    opts.buyPrice != null && opts.buyPrice > 0
      ? opts.buyPrice
      : sell != null
        ? Math.round(sell * (opts.path === "dropship" || opts.path === "shopify" ? 0.42 : 0.62))
        : null;

  if (buy == null) costUnknown.push("product");

  const shipping =
    opts.path === "dropship" || opts.path === "shopify"
      ? 45
      : sell != null
        ? Math.max(29, Math.round(sell * 0.04))
        : null;
  if (shipping == null) costUnknown.push("shipping");

  const commission =
    sell != null
      ? Math.round(
          sell *
            (opts.path === "amazon"
              ? 0.15
              : opts.path === "dropship" || opts.path === "shopify"
                ? 0.05
                : 0.14),
        )
      : null;
  if (commission == null) costUnknown.push("commission");

  const ads = null; // always unknown until ads API

  const knownCosts =
    (buy ?? 0) + (shipping ?? 0) + (commission ?? 0) + (ads ?? 0);
  const unitProfit =
    sell != null
      ? Math.max(1, Math.round(sell - knownCosts))
      : Math.round((buy ?? 100) * 0.2);

  return {
    buyPrice: buy,
    costs: { product: buy, shipping, commission, ads },
    costUnknown,
    unitProfit,
  };
}

/** Map demand score → rough monthly unit volume (heuristic). */
export function monthlyUnitsFromDemand(
  demandScore: number,
  sellPrice: number | null,
): number {
  const base = Math.round(40 + demandScore * 4.2);
  if (sellPrice != null && sellPrice > 5000) {
    return Math.max(8, Math.round(base * 0.15));
  }
  if (sellPrice != null && sellPrice > 1500) {
    return Math.max(15, Math.round(base * 0.35));
  }
  return base;
}

export function withEconomics(
  partial: Omit<
    HuntProduct,
    | "buyPrice"
    | "costs"
    | "costUnknown"
    | "unitProfit"
    | "monthlyDemandUnits"
    | "monthlyProfit"
    | "profit"
  > & {
    buyPrice?: number | null;
    profitHint?: number;
  },
): HuntProduct {
  const econ = estimateCosts({
    path: partial.path,
    sellPrice: partial.sellPrice,
    buyPrice: partial.buyPrice,
  });
  const unitProfit = partial.profitHint ?? econ.unitProfit;
  const monthlyDemandUnits = monthlyUnitsFromDemand(
    partial.demand,
    partial.sellPrice,
  );
  return {
    ...partial,
    buyPrice: econ.buyPrice,
    costs: econ.costs,
    costUnknown: econ.costUnknown,
    unitProfit,
    profit: unitProfit,
    monthlyDemandUnits,
    monthlyProfit: unitProfit * monthlyDemandUnits,
  };
}

export function isLowRiskPath(path: ProductPath): boolean {
  return LOW_RISK_PATHS.has(path);
}

export function riskBandLabel(risk: number): "low" | "mid" | "high" {
  if (risk <= 35) return "low";
  if (risk <= 60) return "mid";
  return "high";
}
