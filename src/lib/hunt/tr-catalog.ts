import type { CountryId } from "../../app/i18n/countries";
import type { RegionId } from "../../app/i18n/regions";
import { withEconomics } from "./scoring";
import type { HuntProduct, RiskMode, SortMode } from "./types";
import { HUNT_RESULT_LIMIT } from "./types";
import { isLowRiskPath } from "./scoring";

/**
 * Verified TR marketplace listings — real title, CDN image, and product URL
 * from the same record (photo ↔ title ↔ link).
 *
 * Identity: live/catalog marketplace pages.
 * Scores (talep / doygunluk / risk / kâr): heuristic until fee/Keepa/PA-API keys.
 */
const TR_SEEDS: Array<
  Parameters<typeof withEconomics>[0] & { id: string }
> = [
  {
    id: "ty-cata-lizbon",
    title:
      "Cata CT-8429 Lizbon Mantar Gold Dokunmatik Şarjlı Dimmerli Masa Lambası",
    platform: "Trendyol",
    path: "marketplace",
    region: "tr",
    country: "tr",
    risk: 24,
    demand: 74,
    saturation: 38,
    imageSrc:
      "https://cdn.dsmcdn.com/ty1709/prod/QC_PREP/20250710/03/da8eda40-d76d-3ac4-a68b-9f122c9b828b/1_org_zoom.jpg",
    productUrl:
      "https://www.trendyol.com/cata/ct-8429-lizbon-mantar-gold-dokunmatik-sarjli-dimmerli-masa-lambasi-p-954699188",
    dataMode: "catalog",
    scoresMode: "heuristic",
    supplier: "Trendyol satıcı / alternatif tedarikçi ara",
    sellPrice: 489,
  },
  {
    id: "hb-hs-cable",
    title:
      "HS Global Masa Altı Kablo Yönetim Tepsisi Kablo Organizeri Kablo Düzenleyici",
    platform: "Hepsiburada",
    path: "marketplace",
    region: "tr",
    country: "tr",
    risk: 21,
    demand: 66,
    saturation: 32,
    imageSrc:
      "https://productimages.hepsiburada.net/s/205/600-800/110000179874529.jpg",
    productUrl:
      "https://www.hepsiburada.com/hs-global-masa-alti-kablo-yonetim-tepsisi-kablo-organizeri-kablo-duzenleyici-pm-HBC000021WWY9",
    dataMode: "catalog",
    scoresMode: "heuristic",
    supplier: "Hepsiburada satıcı / toptan tedarikçi",
    sellPrice: 250,
  },
  {
    id: "amz-tr-neo-vista",
    title:
      "Neo Vista Dokunmatik Mantar Masa Lambası, Şarjlı, Dim Edilebilir, Dekoratif, Rosegold Bakır Renkli",
    platform: "Amazon TR",
    path: "amazon",
    region: "tr",
    country: "tr",
    risk: 31,
    demand: 71,
    saturation: 44,
    imageSrc: "https://m.media-amazon.com/images/I/71ig7gWDXQL._SL500_.jpg",
    productUrl: "https://www.amazon.com.tr/dp/B0H622D187",
    dataMode: "live",
    scoresMode: "heuristic",
    supplier: "Amazon TR / FBA veya harici tedarikçi",
    sellPrice: 639,
  },
  {
    id: "amz-tr-unichrome",
    title:
      "UNİCHROME Dekoratif Şarjlı Dokunmatik Led Masa Lambası Usb Kablolu Gece Lambası ve Abajur Altın",
    platform: "Amazon TR",
    path: "amazon",
    region: "tr",
    country: "tr",
    risk: 27,
    demand: 68,
    saturation: 41,
    imageSrc: "https://m.media-amazon.com/images/I/61m2RnrJC6L._SL500_.jpg",
    productUrl: "https://www.amazon.com.tr/dp/B0DM65S4TH",
    dataMode: "live",
    scoresMode: "heuristic",
    supplier: "Amazon TR / Çin tedarik (dropship adayı)",
    sellPrice: 305.5,
  },
  {
    id: "amz-tr-arvale",
    title:
      "ARVALE Mıknatıslı Kablosuz Mutfak Tezgah Altı ve Çalışma Masası Lambası - 3 Renk Ayarlı 30 cm Şarjlı LED Bar",
    platform: "Amazon TR",
    path: "amazon",
    region: "tr",
    country: "tr",
    risk: 29,
    demand: 69,
    saturation: 40,
    imageSrc: "https://m.media-amazon.com/images/I/61KA+TQTpDL._SL500_.jpg",
    productUrl: "https://www.amazon.com.tr/dp/B0H3W71KCP",
    dataMode: "live",
    scoresMode: "heuristic",
    supplier: "Amazon TR / FBA veya harici tedarikçi",
    sellPrice: 300,
  },
  {
    id: "ptt-roborock-s8",
    title: "Roborock S8 Pro Beyaz Akıllı Robot Süpürge",
    platform: "PTT AVM",
    path: "marketplace",
    region: "tr",
    country: "tr",
    risk: 62,
    demand: 58,
    saturation: 48,
    imageSrc:
      "https://cdn-s3.pttavm.com/pimages/592/138/966/bccd5ac7-6876-4b7c-bb1b-f17aafe1163e.webp",
    productUrl:
      "https://www.pttavm.com/roborock-s8-pro-beyaz-akilli-robot-supurge-p-1389663412",
    dataMode: "catalog",
    scoresMode: "heuristic",
    supplier: "PTT AVM satıcı / marka distribütör",
    sellPrice: 14949,
  },
  {
    id: "ds-tr-cable-shopify",
    title:
      "HS Global Masa Altı Kablo Yönetim Tepsisi Kablo Organizeri Kablo Düzenleyici",
    platform: "CJ → Shopify",
    path: "dropship",
    region: "tr",
    country: "tr",
    risk: 18,
    demand: 64,
    saturation: 26,
    imageSrc:
      "https://productimages.hepsiburada.net/s/205/600-800/110000179874529.jpg",
    productUrl:
      "https://www.hepsiburada.com/hs-global-masa-alti-kablo-yonetim-tepsisi-kablo-organizeri-kablo-duzenleyici-pm-HBC000021WWY9",
    dataMode: "catalog",
    scoresMode: "heuristic",
    supplier: "CJ Dropshipping / AliExpress → Shopify",
    sellPrice: 250,
    buyPrice: 78,
  },
];

export const TR_LIVE_PRODUCTS: HuntProduct[] = TR_SEEDS.map((s) =>
  withEconomics(s),
);

function riskBand(mode: RiskMode): { min: number; max: number } {
  if (mode === "low") return { min: 1, max: 35 };
  if (mode === "balanced") return { min: 20, max: 60 };
  return { min: 45, max: 100 };
}

export function filterAndSortProducts(
  products: HuntProduct[],
  opts: {
    regions: RegionId[];
    countries: CountryId[];
    riskMode: RiskMode;
    sort: SortMode;
    limit?: number;
  },
): HuntProduct[] {
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
      const aLow = isLowRiskPath(a.path) ? 0 : 1;
      const bLow = isLowRiskPath(b.path) ? 0 : 1;
      if (aLow !== bLow) return aLow - bLow;
    }
    if (opts.riskMode === "high") {
      return b.profit - a.profit;
    }
    return a.risk - b.risk;
  });

  return list.slice(0, limit);
}

/** Env flags for official APIs (reported as blockers when missing). */
export function huntApiStatus() {
  return {
    keepa: Boolean(process.env.KEEPA_API_KEY),
    amazonPaapi: Boolean(
      process.env.AMAZON_PAAPI_ACCESS_KEY &&
        process.env.AMAZON_PAAPI_SECRET_KEY &&
        process.env.AMAZON_PAAPI_PARTNER_TAG,
    ),
    trendyol: Boolean(
      process.env.TRENDYOL_SELLER_ID &&
        process.env.TRENDYOL_API_KEY &&
        process.env.TRENDYOL_API_SECRET,
    ),
    hepsiburada: Boolean(
      process.env.HEPSIBURADA_MERCHANT_ID &&
        process.env.HEPSIBURADA_SERVICE_KEY,
    ),
    pttAvm: Boolean(process.env.PTTAVM_API_KEY),
  };
}
