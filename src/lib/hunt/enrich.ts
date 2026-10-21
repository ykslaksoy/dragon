import {
  estimateAttainableSales,
  type DemoProduct,
  type PlatformSale,
  type SalesUnitsSource,
} from "../../app/i18n/demo-products";
import {
  asinFromAmazonUrl,
  fetchKeepaBatch,
  hasKeepaKey,
  keepaDomainFromProductUrl,
} from "./keepa";
import type { HuntSeed } from "./seeds";

/** Heuristic monthly units when no partner API — always tagged `estimate`. */
function estimateMonthlyUnits(demand: number, price: number): number {
  const base = Math.round(40 + demand * 4.2);
  if (price > 5000) return Math.max(8, Math.round(base * 0.15));
  if (price > 1500) return Math.max(15, Math.round(base * 0.35));
  return base;
}

function trPartnerApisReady(): boolean {
  return Boolean(
    (process.env.TRENDYOL_SELLER_ID &&
      process.env.TRENDYOL_API_KEY &&
      process.env.TRENDYOL_API_SECRET) ||
      (process.env.HEPSIBURADA_MERCHANT_ID &&
        process.env.HEPSIBURADA_SERVICE_KEY) ||
      process.env.PTTAVM_API_KEY,
  );
}

export type HuntApiStatus = {
  keepa: boolean;
  trPartnerApis: boolean;
};

export function huntApiStatus(): HuntApiStatus {
  return {
    keepa: hasKeepaKey(),
    trPartnerApis: trPartnerApisReady(),
  };
}

export async function enrichSeeds(seeds: HuntSeed[]): Promise<DemoProduct[]> {
  const keepaKey = process.env.KEEPA_API_KEY?.trim();
  const keepaItems: Array<{ asin: string; domain: number; seedId: string; platformIndex: number }> =
    [];

  for (const seed of seeds) {
    seed.platformSales.forEach((row, platformIndex) => {
      const asin = asinFromAmazonUrl(row.url);
      const domain = keepaDomainFromProductUrl(row.url);
      if (asin && domain != null) {
        keepaItems.push({
          asin,
          domain,
          seedId: seed.id,
          platformIndex,
        });
      }
    });
  }

  const keepaMap = await fetchKeepaBatch(
    keepaItems.map(({ asin, domain }) => ({
      asin,
      domain: domain as import("./keepa").KeepaDomainId,
    })),
    keepaKey,
  );

  const keepaBySeed = new Map<string, Map<number, number>>();
  for (const item of keepaItems) {
    const sold = keepaMap.get(`${item.domain}:${item.asin}`);
    if (sold == null) continue;
    if (!keepaBySeed.has(item.seedId)) keepaBySeed.set(item.seedId, new Map());
    keepaBySeed.get(item.seedId)!.set(item.platformIndex, sold);
  }

  const trApis = trPartnerApisReady();

  return seeds.map((seed) => {
    const platformSales: PlatformSale[] = seed.platformSales.map((row, i) => {
      const keepaUnits = keepaBySeed.get(seed.id)?.get(i);
      if (keepaUnits != null) {
        return {
          platform: row.platform,
          url: row.url,
          units: keepaUnits,
          unitsSource: "keepa" as SalesUnitsSource,
        };
      }

      const isTr =
        seed.region === "tr" &&
        !row.url.includes("amazon.com") &&
        !row.url.includes("amazon.de");

      if (isTr && !trApis) {
        return {
          platform: row.platform,
          url: row.url,
          units: estimateMonthlyUnits(seed.demand, seed.price),
          unitsSource: "estimate" as SalesUnitsSource,
        };
      }

      if (!isTr && !keepaKey && asinFromAmazonUrl(row.url)) {
        return {
          platform: row.platform,
          url: row.url,
          units: estimateMonthlyUnits(seed.demand, seed.price),
          unitsSource: "estimate" as SalesUnitsSource,
        };
      }

      if (!asinFromAmazonUrl(row.url)) {
        return {
          platform: row.platform,
          url: row.url,
          units: estimateMonthlyUnits(seed.demand, seed.price),
          unitsSource: "estimate" as SalesUnitsSource,
        };
      }

      return {
        platform: row.platform,
        url: row.url,
        units: null,
        unitsSource: "none" as SalesUnitsSource,
      };
    });

    const liveRows = platformSales.filter(
      (r) => r.unitsSource === "keepa" && r.units != null,
    );
    const estimateRows = platformSales.filter(
      (r) => r.unitsSource === "estimate" && r.units != null,
    );

    let monthlySales: number | null = null;
    let monthlySalesSource: SalesUnitsSource = "none";

    if (liveRows.length > 0) {
      monthlySales = liveRows.reduce((s, r) => s + (r.units ?? 0), 0);
      monthlySalesSource = "keepa";
    } else if (estimateRows.length > 0) {
      monthlySales = estimateRows.reduce((s, r) => s + (r.units ?? 0), 0);
      monthlySalesSource = "estimate";
    }

    const monthlySalesDisplay =
      monthlySalesSource === "none" ? 0 : (monthlySales ?? 0);

    const estMonthlySales =
      monthlySalesSource === "none"
        ? estimateAttainableSales(
            estimateMonthlyUnits(seed.demand, seed.price),
            seed.demand,
            seed.saturation,
          )
        : estimateAttainableSales(
            monthlySalesDisplay,
            seed.demand,
            seed.saturation,
          );

    return {
      id: seed.id,
      nameKey: seed.nameKey,
      title: seed.title,
      platform: seed.platform,
      path: seed.path,
      region: seed.region,
      country: seed.country,
      price: seed.price,
      profit: seed.profit,
      risk: seed.risk,
      demand: seed.demand,
      saturation: seed.saturation,
      monthlySales: monthlySalesDisplay,
      monthlySalesSource,
      platformSales,
      estMonthlySales,
      imageSrc: seed.imageSrc,
      productUrl: seed.productUrl,
      demandLead: seed.demandLead,
    };
  });
}
