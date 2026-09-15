import type { CountryId } from "../../app/i18n/countries";
import type { RegionId } from "../../app/i18n/regions";

export type RiskMode = "low" | "balanced" | "high";
export type SortMode = "profit" | "risk";
export type ProductPath = "dropship" | "shopify" | "amazon" | "marketplace";

/** How listing identity (title / image / URL) was sourced. */
export type DataMode = "live" | "catalog" | "demo";

/** How talep / doygunluk / risk / kâr scores were produced. */
export type ScoresMode = "live" | "heuristic";

export type CostBreakdown = {
  /** Ürün maliyeti (₺). */
  product: number | null;
  /** Kargo (₺). */
  shipping: number | null;
  /** Pazaryeri komisyonu (₺). */
  commission: number | null;
  /** Reklam / diğer (₺). */
  ads: number | null;
};

export type HuntProduct = {
  id: string;
  /** Display title — live marketplace title when available. */
  title: string;
  /** Optional i18n key for demo / fallback locales. */
  nameKey?: string;
  platform: string;
  path: ProductPath;
  region: RegionId;
  country: CountryId;
  /** Unit net profit (₺) — same as unitProfit; kept for filter/sort. */
  profit: number;
  /** Dragon risk score 1–100 (lower = safer). */
  risk: number;
  /** Demand score 1–100 (higher = stronger). */
  demand: number;
  /** Saturation score 1–100 (lower = less crowded). */
  saturation: number;
  /** Product photo — local path or remote CDN URL. */
  imageSrc: string;
  /** Marketplace product detail URL (must match image + title). */
  productUrl: string;
  dataMode: DataMode;
  scoresMode: ScoresMode;
  /** Nereden alınabilir — supplier / marketplace source. */
  supplier: string;
  /** Kaç liraya alınabilir — buy/cost price (₺). */
  buyPrice: number | null;
  /** List / sell price on marketplace when known (₺). */
  sellPrice: number | null;
  costs: CostBreakdown;
  /** Labels for unknown cost lines (i18n keys resolved in UI via copy). */
  costUnknown: Array<"product" | "shipping" | "commission" | "ads">;
  /** Kaç lira kâr — unit net profit (₺). */
  unitProfit: number;
  /** Aylık talep miktarı — estimated monthly units (adet). */
  monthlyDemandUnits: number;
  /** Aylık toplam kâr — monthlyDemandUnits × unitProfit (₺). */
  monthlyProfit: number;
};

/** @deprecated Prefer HuntProduct — alias for gradual migration. */
export type DemoProduct = HuntProduct;

export const HUNT_RESULT_LIMIT = 5;
