import type { CountryId } from "./countries";
import type { RegionId } from "./regions";

export type RiskMode = "low" | "balanced" | "high";
/** Hunt sort: marketplace monthly units, net profit, or risk. */
export type SortMode = "sales" | "profit" | "risk";
export type ProductPath = "dropship" | "shopify" | "amazon" | "marketplace";

export type SalesUnitsSource = "keepa" | "estimate" | "partner" | "none";

/** Per-marketplace row — only platforms with a real product URL. */
export type PlatformSale = {
  platform: string;
  units: number | null;
  unitsSource: SalesUnitsSource;
  url?: string | null;
};

export type DemoProduct = {
  id: string;
  nameKey: string;
  /** Live marketplace title (TR catalog); falls back to i18n nameKey. */
  title?: string;
  platform: string;
  path: ProductPath;
  region: RegionId;
  country: CountryId;
  /** Net profit in local display units (demo). */
  price: number;
  profit: number;
  /** Dragon risk score 1–100 (lower = safer). */
  risk: number;
  /** Demand / talep 1–100 (higher = stronger). */
  demand: number;
  /** Saturation / doygunluk 1–100 (lower = less crowded). */
  saturation: number;
  /**
   * Total monthly units across tracked marketplaces
   * (= sum of platformSales.units when sourced).
   */
  monthlySales: number;
  /** How monthlySales was produced — `none` hides volume on cards. */
  monthlySalesSource: SalesUnitsSource;
  /** Per-platform monthly units (drives detail breakdown). */
  platformSales: PlatformSale[];
  /**
   * Conservative attainable monthly units if you enter the niche —
   * NOT 100% of monthlySales / demand. Demo share ≈ 1.5–8%.
   */
  estMonthlySales: number;
  /** Local product photo under /public/products. */
  imageSrc: string;
  /**
   * External marketplace / product URL.
   * `null` = demand signal without a live SKU link (keep in list).
   */
  productUrl: string | null;
  /** Show “Talep var · ürün yok” on top; link may still appear below. */
  demandLead?: boolean;
};

/** Top hunt picks shown in the results list. */
export const HUNT_RESULT_LIMIT = 5;

/**
 * Conservative attainable share of marketplace monthly units.
 * Higher saturation → smaller share; higher demand → slight boost.
 * Cap ~8% so we never imply capturing full market demand.
 */
export function estimateAttainableSales(
  monthlySales: number,
  demand: number,
  saturation: number,
): number {
  const base = 0.05;
  const satPenalty = (saturation / 100) * 0.035;
  const demBoost = (demand / 100) * 0.02;
  const share = Math.max(0.015, Math.min(0.08, base - satPenalty + demBoost));
  return Math.max(1, Math.round(monthlySales * share));
}

export function hasProductLink(p: DemoProduct): boolean {
  return Boolean(p.productUrl && p.productUrl.trim().length > 0);
}

/**
 * Attainable share by how many platforms you list on — never 100% of volume.
 * min = 1 platform, mid = 2 (realistic), high = 3+.
 */
export type SalesScenarioId = "min" | "mid" | "high";

export type SalesScenario = {
  id: SalesScenarioId;
  units: number;
  platforms: number;
  multiple: number;
};

export function salesScenarios(
  estMonthlySales: number,
  monthlySales: number,
  trackedPlatforms = 2,
): SalesScenario[] {
  const base = Math.max(1, estMonthlySales);
  const n = Math.max(1, trackedPlatforms);
  const cap = Math.max(base, Math.floor(monthlySales * 0.1));
  const minU = Math.max(1, Math.round(base * 0.55));
  const midU = base;
  const scale = 1 + 0.28 * Math.min(Math.max(n, 3) - 2, 3);
  const highU = Math.min(cap, Math.round(base * scale));
  return [
    { id: "min", units: minU, platforms: 1, multiple: 0.55 },
    { id: "mid", units: midU, platforms: 2, multiple: 1 },
    {
      id: "high",
      units: highU,
      platforms: Math.max(3, n),
      multiple: Math.round((highU / base) * 100) / 100,
    },
  ];
}

export function totalProfit(unitProfit: number, units: number): number {
  return Math.round(unitProfit * units);
}

export function totalRevenue(price: number, units: number): number {
  return Math.round(price * units);
}

export function scenarioProfit(unitProfit: number, units: number): number {
  return Math.round(unitProfit * units);
}

/**
 * Demo hunt results — dropship/Shopify paths carry lower risk by design
 * so the default “low risk” filter soft-steers without blocking high risk.
 * Each row exposes talep · doygunluk · risk · net kâr · aylık satış.
 *
 * Rows with `productUrl: null` stay listed when demand exists
 * (“talep var · ürün linki yok”).
 */
/** Client-side placeholder until `/api/hunt` responds. */
export const DEMO_PRODUCTS: DemoProduct[] = [];

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
    /** Multi-country selection; empty treated as no match. */
    countries: CountryId[];
    riskMode: RiskMode;
    sort: SortMode;
    /** Cap list length; default top hunt picks. */
    limit?: number;
  },
): DemoProduct[] {
  const regionSet = new Set(opts.regions);
  const countrySet = new Set(opts.countries);
  const band = riskBand(opts.riskMode);
  const limit = opts.limit ?? HUNT_RESULT_LIMIT;

  let list = products.filter((p) => {
    if (!regionSet.has(p.region)) return false;
    if (countrySet.size > 0 && !countrySet.has(p.country)) return false;
    return p.risk >= band.min && p.risk <= band.max;
  });

  list = [...list].sort((a, b) => {
    if (opts.sort === "sales") {
      const d = b.monthlySales - a.monthlySales;
      if (d !== 0) return d;
      const e = b.estMonthlySales - a.estMonthlySales;
      if (e !== 0) return e;
    } else if (opts.sort === "profit") {
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

  return list.slice(0, limit);
}

export function isLowRiskPath(path: ProductPath): boolean {
  return LOW_RISK_PATHS.has(path);
}

export function riskBandLabel(risk: number): "low" | "mid" | "high" {
  if (risk <= 35) return "low";
  if (risk <= 60) return "mid";
  return "high";
}
