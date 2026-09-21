import type { CountryId } from "./countries";
import type { RegionId } from "./regions";

export type RiskMode = "low" | "balanced" | "high";
/** Hunt sort: marketplace monthly units, net profit, or risk. */
export type SortMode = "sales" | "profit" | "risk";
export type ProductPath = "dropship" | "shopify" | "amazon" | "marketplace";

/** Per-marketplace monthly unit volume (demo / research estimate). */
export type PlatformSale = {
  platform: string;
  units: number;
  url?: string | null;
};

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
  /**
   * Total monthly units across tracked marketplaces
   * (= sum of platformSales.units).
   */
  monthlySales: number;
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
    monthlySales: 1860,
    platformSales: [
      { platform: "Amazon", units: 1240, url: "https://www.amazon.com/dp/B08N5WRWNW" },
      { platform: "Walmart", units: 420 },
      { platform: "eBay", units: 200 },
    ],
    estMonthlySales: estimateAttainableSales(1860, 71, 28),
    imageSrc: "/products/desk-lamp.jpg",
    productUrl:
      "https://www.amazon.com/dp/B08N5WRWNW",
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
    monthlySales: 4200,
    platformSales: [
      { platform: "AliExpress", units: 2800, url: "https://www.aliexpress.com/item/1005006782854602.html" },
      { platform: "Amazon", units: 980 },
      { platform: "eBay", units: 420 },
    ],
    estMonthlySales: estimateAttainableSales(4200, 64, 22),
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
    monthlySales: 2410,
    platformSales: [
      { platform: "Amazon", units: 1680, url: "https://www.amazon.com/dp/B01GWUBWWA" },
      { platform: "Walmart", units: 520 },
      { platform: "Target", units: 210 },
    ],
    estMonthlySales: estimateAttainableSales(2410, 68, 31),
    imageSrc: "/products/travel-mug.jpg",
    productUrl: "https://www.amazon.com/dp/B01GWUBWWA",
  },
  {
    id: "tr-ds-lamp",
    nameKey: "deskLamp",
    platform: "Trendyol",
    path: "marketplace",
    region: "tr",
    country: "tr",
    profit: 16,
    risk: 20,
    demand: 69,
    saturation: 26,
    monthlySales: 3120,
    platformSales: [
      { platform: "Trendyol", units: 2140, url: "https://www.trendyol.com/robeve/80-led-uzun-kollu-kelepceli-masa-lambasi-3-renk-10-kademe-parlaklik-360-ayarlanabilir-baslik-usb-mimar-calisma-okuma-cizim-lambasi-bilgisayar-masasi-lambasi-akrobatik-lamba-p-1198143553" },
      { platform: "Hepsiburada", units: 720 },
      { platform: "Amazon TR", units: 260 },
    ],
    estMonthlySales: estimateAttainableSales(3120, 69, 26),
    imageSrc: "/products/desk-lamp.jpg",
    productUrl:
      "https://www.trendyol.com/robeve/80-led-uzun-kollu-kelepceli-masa-lambasi-3-renk-10-kademe-parlaklik-360-ayarlanabilir-baslik-usb-mimar-calisma-okuma-cizim-lambasi-bilgisayar-masasi-lambasi-akrobatik-lamba-p-1198143553",
  },
  {
    id: "tr-shop-mug",
    nameKey: "travelMug",
    platform: "Trendyol",
    path: "marketplace",
    region: "tr",
    country: "tr",
    profit: 14,
    risk: 23,
    demand: 61,
    saturation: 29,
    monthlySales: 2680,
    platformSales: [
      { platform: "Trendyol", units: 1620, url: "https://www.trendyol.com/mepal/insulated-bottle-gri-termos-ellipse-yalitimli-sise-p-750367964" },
      { platform: "Hepsiburada", units: 740 },
      { platform: "Amazon TR", units: 320 },
    ],
    estMonthlySales: estimateAttainableSales(2680, 61, 29),
    imageSrc: "/products/travel-mug.jpg",
    productUrl:
      "https://www.trendyol.com/mepal/insulated-bottle-gri-termos-ellipse-yalitimli-sise-p-750367964",
  },
  {
    id: "tr-home",
    nameKey: "homeOrganizer",
    platform: "IKEA",
    path: "marketplace",
    region: "tr",
    country: "tr",
    profit: 28,
    risk: 24,
    demand: 76,
    saturation: 52,
    monthlySales: 4850,
    platformSales: [
      { platform: "IKEA", units: 3180, url: "https://www.ikea.com.tr/urun/uppdatera-antrasit-80-cm-cekmece-duzenleyici-00460011" },
      { platform: "Trendyol", units: 1120 },
      { platform: "Hepsiburada", units: 550 },
    ],
    estMonthlySales: estimateAttainableSales(4850, 76, 52),
    imageSrc: "/products/home-organizer.jpg",
    // IKEA UPPDATERA — live ikea.com.tr product page + matching lifestyle photo.
    productUrl: "https://www.ikea.com.tr/urun/uppdatera-antrasit-80-cm-cekmece-duzenleyici-00460011",
  },
  {
    id: "ptt-kit",
    nameKey: "kitchenKit",
    platform: "Trendyol",
    path: "marketplace",
    region: "tr",
    country: "tr",
    profit: 22,
    risk: 22,
    demand: 58,
    saturation: 35,
    monthlySales: 1540,
    platformSales: [
      { platform: "Trendyol", units: 980, url: "https://www.trendyol.com/mirilliahome/50-parca-paslanmaz-celik-mutfak-seti-profesyonel-mutfak-gerecleri-ve-saklama-kaplari-p-355743489" },
      { platform: "Hepsiburada", units: 410 },
      { platform: "PTT AVM", units: 150 },
    ],
    estMonthlySales: estimateAttainableSales(1540, 58, 35),
    imageSrc: "/products/kitchen-kit.jpg",
    productUrl:
      "https://www.trendyol.com/mirilliahome/50-parca-paslanmaz-celik-mutfak-seti-profesyonel-mutfak-gerecleri-ve-saklama-kaplari-p-355743489",
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
    monthlySales: 2210,
    platformSales: [
      { platform: "Hepsiburada", units: 1280, url: "https://www.hepsiburada.com/ugreen-3-1-kanalli-silikon-kablo-duzenleyici-organizator-70585-pm-HBC00003R17T0" },
      { platform: "Trendyol", units: 690 },
      { platform: "Amazon TR", units: 240 },
    ],
    estMonthlySales: estimateAttainableSales(2210, 63, 33),
    imageSrc: "/products/cable-organizer.jpg",
    productUrl:
      "https://www.hepsiburada.com/ugreen-3-1-kanalli-silikon-kablo-duzenleyici-organizator-70585-pm-HBC00003R17T0",
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
    monthlySales: 9200,
    platformSales: [
      { platform: "Amazon US", units: 6100, url: "https://www.amazon.com/dp/B09DT48V16" },
      { platform: "Amazon CA", units: 1800 },
      { platform: "Walmart", units: 1300 },
    ],
    estMonthlySales: estimateAttainableSales(9200, 88, 78),
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
    monthlySales: 5100,
    platformSales: [
      { platform: "Amazon DE", units: 2900, url: "https://www.amazon.de/-/en/FSA-Nutrition-Compartment-Container-Leak-Proof/dp/B07C2ZHJNF" },
      { platform: "Amazon FR", units: 1400 },
      { platform: "Amazon UK", units: 800 },
    ],
    estMonthlySales: estimateAttainableSales(5100, 74, 66),
    imageSrc: "/products/protein-shaker.jpg",
    productUrl:
      "https://www.amazon.de/-/en/FSA-Nutrition-Compartment-Container-Leak-Proof/dp/B07C2ZHJNF",
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
    monthlySales: 980,
    platformSales: [
      { platform: "noon AE", units: 620, url: "https://www.noon.com/uae-en/magnetic-car-phone-mount-vacuum-suction-foldable-dashboard-holder-universal-4-7-7-inch-smartphones-360-adjustable-strong-magnetic-grip-durable-aluminum-alloy-magnetic-phone-holder-car-mobile-holder-magnetic-phone-holder-for-car/ZF35CE0D5F420249849B1Z/p/" },
      { platform: "Amazon AE", units: 240 },
      { platform: "noon SA", units: 120 },
    ],
    estMonthlySales: estimateAttainableSales(980, 62, 44),
    imageSrc: "/products/phone-mount.jpg",
    productUrl:
      "https://www.noon.com/uae-en/magnetic-car-phone-mount-vacuum-suction-foldable-dashboard-holder-universal-4-7-7-inch-smartphones-360-adjustable-strong-magnetic-grip-durable-aluminum-alloy-magnetic-phone-holder-car-mobile-holder-magnetic-phone-holder-for-car/ZF35CE0D5F420249849B1Z/p/",
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
    monthlySales: 11200,
    platformSales: [
      { platform: "TikTok Shop", units: 6400, url: "https://www.amazon.com/dp/B07XGKX327" },
      { platform: "Amazon", units: 3100 },
      { platform: "Walmart", units: 1700 },
    ],
    estMonthlySales: estimateAttainableSales(11200, 91, 71),
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
    monthlySales: 640,
    platformSales: [
      { platform: "noon SA", units: 410, url: "https://www.noon.com/saudi-en/product/Z4F9AF3AFFE0D82380EBDZ/p/" },
      { platform: "Shopify", units: 150 },
      { platform: "Amazon SA", units: 80 },
    ],
    estMonthlySales: estimateAttainableSales(640, 55, 24),
    imageSrc: "/products/prayer-mat.jpg",
    // Unreliable SKU path — demand kept; no live product link.
    productUrl: "https://www.noon.com/saudi-en/product/Z4F9AF3AFFE0D82380EBDZ/p/",
    demandLead: true,
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
    monthlySales: 1730,
    platformSales: [
      { platform: "Shopee SG", units: 980, url: "https://shopee.sg/product/299068948/55860784071" },
      { platform: "Shopee MY", units: 480 },
      { platform: "Lazada", units: 270 },
    ],
    estMonthlySales: estimateAttainableSales(1730, 67, 49),
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
    monthlySales: 760,
    platformSales: [
      { platform: "Amazon FR", units: 420, url: "https://www.amazon.fr/-/en/GTPLAYER-GTPF59/dp/B0H68VN5MQ" },
      { platform: "Amazon DE", units: 220 },
      { platform: "Amazon ES", units: 120 },
    ],
    estMonthlySales: estimateAttainableSales(760, 82, 86),
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
