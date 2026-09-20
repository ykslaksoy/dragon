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
  /** Local product photo under /public/products. */
  imageSrc: string;
  /** External marketplace / product URL (opens in new tab). */
  productUrl: string;
};

/** Top hunt picks shown in the results list. */
export const HUNT_RESULT_LIMIT = 5;

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
    imageSrc: "/products/desk-lamp.jpg",
    productUrl:
      "https://www.amazon.de/-/en/Touch-Desk-Lamp-Rechargeable-Adjustable/dp/B0G4JYNGW4",
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
    imageSrc: "/products/cable-organizer.jpg",
    productUrl: "https://www.aliexpress.com/item/1005006782854602.html",
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
    imageSrc: "/products/travel-mug.jpg",
    productUrl: "https://www.amazon.com/dp/B0DFMKH72M",
  },
  {
    id: "tr-ds-lamp",
    nameKey: "deskLamp",
    platform: "CJ → Shopify",
    path: "dropship",
    region: "tr",
    country: "tr",
    profit: 16,
    risk: 20,
    demand: 69,
    saturation: 26,
    imageSrc: "/products/desk-lamp.jpg",
    productUrl: "https://www.trendyol.com/indecor-houseware/metal-dokunmatik-mantar-masa-lambasi-3-isik-renkli-sarjli-modern-kafe-masa-lambasi-gold-p-1152926937",
  },
  {
    id: "tr-shop-mug",
    nameKey: "travelMug",
    platform: "Shopify",
    path: "shopify",
    region: "tr",
    country: "tr",
    profit: 14,
    risk: 23,
    demand: 61,
    saturation: 29,
    imageSrc: "/products/travel-mug.jpg",
    productUrl: "https://www.trendyol.com/dkadi/2-5l-premium-travel-pot-304-celik-vakumlu-kamp-seyahat-termosu-p-1188101285",
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
    imageSrc: "/products/home-organizer.jpg",
    productUrl: "https://www.trendyol.com/bino/mutfak-rafi-masaustu-duzenleyici-organizer-banyo-rafi-cok-amacli-duzenleyici-tezgah-ustu-raf-p-467236967",
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
    imageSrc: "/products/kitchen-kit.jpg",
    productUrl: "https://www.pttavm.com/6li-kasik-kupasi-pisirme-gerec-seti-seti-araclari-renkli-6-adet-mutfak-aletleri-olcum-kasik-seti-p-869539305",
  },
  {
    id: "tr-cable",
    nameKey: "cableOrganizer",
    platform: "Hepsiburada",
    path: "marketplace",
    region: "tr",
    country: "tr",
    profit: 11,
    risk: 21,
    demand: 63,
    saturation: 33,
    imageSrc: "/products/cable-organizer.jpg",
    productUrl: "https://www.hepsiburada.com/ugreen-3-1-kanalli-silikon-kablo-duzenleyici-organizator-70585-pm-HBC00003R17T0",
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
    imageSrc: "/products/wireless-buds.jpg",
    productUrl: "https://www.amazon.com/dp/B09DT48V16",
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
    imageSrc: "/products/protein-shaker.jpg",
    productUrl: "https://www.amazon.de/-/en/FSA-Nutrition-Compartment-Container-Leak-Proof/dp/B07C2ZHJNF",
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
    imageSrc: "/products/phone-mount.jpg",
    productUrl: "https://www.noon.com/uae-en/magnetic-car-phone-mount-vacuum-suction-foldable-dashboard-holder-universal-4-7-7-inch-smartphones-360-adjustable-strong-magnetic-grip-durable-aluminum-alloy-magnetic-phone-holder-car-mobile-holder-magnetic-phone-holder-for-car/ZF35CE0D5F420249849B1Z/p/",
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
    imageSrc: "/products/led-strip.jpg",
    productUrl: "https://www.amazon.com/dp/B07XGKX327",
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
    imageSrc: "/products/prayer-mat.jpg",
    productUrl: "https://www.noon.com/saudi-en/product/Z4F9AF3AFFE0D82380EBDZ/p/",
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
    imageSrc: "/products/mini-fan.jpg",
    productUrl: "https://shopee.sg/product/299068948/55860784071",
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
    imageSrc: "/products/gaming-chair.jpg",
    productUrl: "https://www.amazon.fr/-/en/GTPLAYER-GTPF59/dp/B0H68VN5MQ",
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

