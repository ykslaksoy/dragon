import type { CountryId } from "./countries";
import type { RegionId } from "./regions";

export type RiskMode = "low" | "balanced" | "high";
export type SortMode = "profit" | "risk";
export type ProductPath = "dropship" | "shopify" | "amazon" | "marketplace";

export type DemoProduct = {
  id: string;
  nameKey: string;
  platform: string;
  path: ProductPath;
  region: RegionId;
  country: CountryId;
  /** Net profit in local display units (demo). */
  profit: number;
  /** Dragon risk score 1–100 (lower = safer). */
  risk: number;
  /** Demand / talep 1–100 (higher = stronger). */
  demand: number;
  /** Saturation / doygunluk 1–100 (lower = less crowded). */
  saturation: number;
};

/**
 * Demo hunt results — dropship/Shopify paths carry lower risk by design
 * so the default “low risk” filter soft-steers without blocking high risk.
 * Each row exposes talep · doygunluk · risk · net kâr.
 */
export const DEMO_PRODUCTS: DemoProduct[] = [
  {
    id: "ds-lamp",
    nameKey: "deskLamp",
    platform: "Shopify",
    path: "shopify",
    region: "eu",
    country: "de",
    profit: 18,
    risk: 22,
    demand: 71,
    saturation: 28,
  },
  {
    id: "ds-organizer",
    nameKey: "cableOrganizer",
    platform: "AliExpress → Shopify",
    path: "dropship",
    region: "asia",
    country: "cn",
    profit: 12,
    risk: 18,
    demand: 64,
    saturation: 22,
  },
  {
    id: "ds-mug",
    nameKey: "travelMug",
    platform: "CJ → Shopify",
    path: "dropship",
    region: "us",
    country: "us",
    profit: 15,
    risk: 24,
    demand: 68,
    saturation: 31,
  },
  {
    id: "tr-home",
    nameKey: "homeOrganizer",
    platform: "Trendyol",
    path: "marketplace",
    region: "tr",
    country: "tr",
    profit: 28,
    risk: 24,
    demand: 76,
    saturation: 52,
  },
  {
    id: "ptt-kit",
    nameKey: "kitchenKit",
    platform: "PTT AVM",
    path: "marketplace",
    region: "tr",
    country: "tr",
    profit: 22,
    risk: 22,
    demand: 58,
    saturation: 35,
  },
  {
    id: "amz-oa",
    nameKey: "wirelessBuds",
    platform: "Amazon",
    path: "amazon",
    region: "us",
    country: "us",
    profit: 54,
    risk: 72,
    demand: 88,
    saturation: 78,
  },
  {
    id: "amz-eu",
    nameKey: "proteinShaker",
    platform: "Amazon",
    path: "amazon",
    region: "eu",
    country: "de",
    profit: 41,
    risk: 65,
    demand: 74,
    saturation: 66,
  },
  {
    id: "noon-gadget",
    nameKey: "phoneMount",
    platform: "noon",
    path: "marketplace",
    region: "me",
    country: "ae",
    profit: 33,
    risk: 48,
    demand: 62,
    saturation: 44,
  },
  {
    id: "tt-viral",
    nameKey: "ledStrip",
    platform: "TikTok Shop",
    path: "marketplace",
    region: "us",
    country: "us",
    profit: 47,
    risk: 69,
    demand: 91,
    saturation: 71,
  },
  {
    id: "shop-me",
    nameKey: "prayerMat",
    platform: "Shopify",
    path: "shopify",
    region: "me",
    country: "sa",
    profit: 21,
    risk: 26,
    demand: 55,
    saturation: 24,
  },
  {
    id: "shopee-asia",
    nameKey: "miniFan",
    platform: "Shopee",
    path: "marketplace",
    region: "asia",
    country: "sg",
    profit: 19,
    risk: 44,
    demand: 67,
    saturation: 49,
  },
  {
    id: "amz-high",
    nameKey: "gamingChair",
    platform: "Amazon",
    path: "amazon",
    region: "eu",
    country: "fr",
    profit: 89,
    risk: 84,
    demand: 82,
    saturation: 86,
  },
];

const LOW_RISK_PATHS = new Set<ProductPath>(["dropship", "shopify"]);

function riskBand(mode: RiskMode): { min: number; max: number } {
  if (mode === "low") return { min: 1, max: 35 };
  if (mode === "balanced") return { min: 20, max: 60 };
  return { min: 45, max: 100 };
}

export function filterAndSortProducts(
  products: DemoProduct[],
  opts: {
    regions: RegionId[];
    country: CountryId | "all";
    riskMode: RiskMode;
    sort: SortMode;
  },
): DemoProduct[] {
  const regionSet = new Set(opts.regions);
  const band = riskBand(opts.riskMode);

  let list = products.filter((p) => {
    if (!regionSet.has(p.region)) return false;
    if (opts.country !== "all" && p.country !== opts.country) return false;
    return p.risk >= band.min && p.risk <= band.max;
  });

  list = [...list].sort((a, b) => {
    if (opts.sort === "profit") {
      const d = b.profit - a.profit;
      if (d !== 0) return d;
    } else {
      const d = a.risk - b.risk;
      if (d !== 0) return d;
    }
    if (opts.riskMode === "low") {
      const aLow = LOW_RISK_PATHS.has(a.path) ? 0 : 1;
      const bLow = LOW_RISK_PATHS.has(b.path) ? 0 : 1;
      if (aLow !== bLow) return aLow - bLow;
    }
    if (opts.riskMode === "high") {
      return b.profit - a.profit;
    }
    return a.risk - b.risk;
  });

  return list;
}

export function isLowRiskPath(path: ProductPath): boolean {
  return LOW_RISK_PATHS.has(path);
}
