import type { ProductPath } from "../../app/i18n/demo-products";
import type { CountryId } from "../../app/i18n/countries";
import type { RegionId } from "../../app/i18n/regions";

/** Catalog row before sales enrichment — no invented monthly volumes. */
export type HuntSeed = {
  id: string;
  nameKey: string;
  /** Display title when nameKey missing in locale. */
  title?: string;
  platform: string;
  path: ProductPath;
  region: RegionId;
  country: CountryId;
  price: number;
  profit: number;
  risk: number;
  demand: number;
  saturation: number;
  imageSrc: string;
  productUrl: string | null;
  demandLead?: boolean;
  /** One row per marketplace with a real deep link for this SKU. */
  platformSales: Array<{ platform: string; url: string }>;
};

export const TR_HUNT_SEEDS: HuntSeed[] = [
  {
    id: "ty-cata-lizbon",
    nameKey: "deskLamp",
    title:
      "Cata CT-8429 Lizbon Mantar Gold Dokunmatik Şarjlı Dimmerli Masa Lambası",
    platform: "Trendyol",
    path: "marketplace",
    region: "tr",
    country: "tr",
    price: 489,
    profit: 16,
    risk: 24,
    demand: 74,
    saturation: 38,
    imageSrc:
      "https://cdn.dsmcdn.com/ty1709/prod/QC_PREP/20250710/03/da8eda40-d76d-3ac4-a68b-9f122c9b828b/1_org_zoom.jpg",
    productUrl:
      "https://www.trendyol.com/cata/ct-8429-lizbon-mantar-gold-dokunmatik-sarjli-dimmerli-masa-lambasi-p-954699188",
    platformSales: [
      {
        platform: "Trendyol",
        url: "https://www.trendyol.com/cata/ct-8429-lizbon-mantar-gold-dokunmatik-sarjli-dimmerli-masa-lambasi-p-954699188",
      },
    ],
  },
  {
    id: "hb-hs-cable",
    nameKey: "cableOrganizer",
    title:
      "HS Global Masa Altı Kablo Yönetim Tepsisi Kablo Organizeri Kablo Düzenleyici",
    platform: "Hepsiburada",
    path: "marketplace",
    region: "tr",
    country: "tr",
    price: 250,
    profit: 11,
    risk: 21,
    demand: 66,
    saturation: 32,
    imageSrc:
      "https://productimages.hepsiburada.net/s/205/600-800/110000179874529.jpg",
    productUrl:
      "https://www.hepsiburada.com/hs-global-masa-alti-kablo-yonetim-tepsisi-kablo-organizeri-kablo-duzenleyici-pm-HBC000021WWY9",
    platformSales: [
      {
        platform: "Hepsiburada",
        url: "https://www.hepsiburada.com/hs-global-masa-alti-kablo-yonetim-tepsisi-kablo-organizeri-kablo-duzenleyici-pm-HBC000021WWY9",
      },
    ],
  },
  {
    id: "amz-tr-neo-vista",
    nameKey: "deskLamp",
    title:
      "Neo Vista Dokunmatik Mantar Masa Lambası, Şarjlı, Dim Edilebilir",
    platform: "Amazon TR",
    path: "amazon",
    region: "tr",
    country: "tr",
    price: 639,
    profit: 18,
    risk: 31,
    demand: 71,
    saturation: 44,
    imageSrc: "https://m.media-amazon.com/images/I/71ig7gWDXQL._SL500_.jpg",
    productUrl: "https://www.amazon.com.tr/dp/B0H622D187",
    platformSales: [
      {
        platform: "Amazon TR",
        url: "https://www.amazon.com.tr/dp/B0H622D187",
      },
    ],
  },
  {
    id: "amz-tr-unichrome",
    nameKey: "deskLamp",
    title:
      "UNİCHROME Dekoratif Şarjlı Dokunmatik Led Masa Lambası Usb Kablolu",
    platform: "Amazon TR",
    path: "amazon",
    region: "tr",
    country: "tr",
    price: 306,
    profit: 14,
    risk: 27,
    demand: 68,
    saturation: 41,
    imageSrc: "https://m.media-amazon.com/images/I/61m2RnrJC6L._SL500_.jpg",
    productUrl: "https://www.amazon.com.tr/dp/B0DM65S4TH",
    platformSales: [
      {
        platform: "Amazon TR",
        url: "https://www.amazon.com.tr/dp/B0DM65S4TH",
      },
    ],
  },
  {
    id: "ptt-roborock-s8",
    nameKey: "homeOrganizer",
    title: "Roborock S8 Pro Beyaz Akıllı Robot Süpürge",
    platform: "PTT AVM",
    path: "marketplace",
    region: "tr",
    country: "tr",
    price: 14949,
    profit: 890,
    risk: 62,
    demand: 58,
    saturation: 48,
    imageSrc:
      "https://cdn-s3.pttavm.com/pimages/592/138/966/bccd5ac7-6876-4b7c-bb1b-f17aafe1163e.webp",
    productUrl:
      "https://www.pttavm.com/roborock-s8-pro-beyaz-akilli-robot-supurge-p-1389663412",
    platformSales: [
      {
        platform: "PTT AVM",
        url: "https://www.pttavm.com/roborock-s8-pro-beyaz-akilli-robot-supurge-p-1389663412",
      },
    ],
  },
  {
    id: "tr-home-ikea",
    nameKey: "homeOrganizer",
    title: "UPPDATERA çekmece düzenleyici 80 cm antrasit",
    platform: "IKEA",
    path: "marketplace",
    region: "tr",
    country: "tr",
    price: 799,
    profit: 28,
    risk: 24,
    demand: 76,
    saturation: 52,
    imageSrc: "/products/home-organizer.jpg",
    productUrl:
      "https://www.ikea.com.tr/urun/uppdatera-antrasit-80-cm-cekmece-duzenleyici-00460011",
    platformSales: [
      {
        platform: "IKEA",
        url: "https://www.ikea.com.tr/urun/uppdatera-antrasit-80-cm-cekmece-duzenleyici-00460011",
      },
    ],
  },
  {
    id: "ds-tr-cable-shopify",
    nameKey: "cableOrganizer",
    title:
      "HS Global Masa Altı Kablo Yönetim Tepsisi Kablo Organizeri",
    platform: "CJ → Shopify",
    path: "dropship",
    region: "tr",
    country: "tr",
    price: 250,
    profit: 12,
    risk: 18,
    demand: 64,
    saturation: 26,
    imageSrc:
      "https://productimages.hepsiburada.net/s/205/600-800/110000179874529.jpg",
    productUrl:
      "https://www.hepsiburada.com/hs-global-masa-alti-kablo-yonetim-tepsisi-kablo-organizeri-kablo-duzenleyici-pm-HBC000021WWY9",
    platformSales: [
      {
        platform: "Hepsiburada",
        url: "https://www.hepsiburada.com/hs-global-masa-alti-kablo-yonetim-tepsisi-kablo-organizeri-kablo-duzenleyici-pm-HBC000021WWY9",
      },
    ],
  },
];

/** Non-TR catalog — Amazon / global marketplaces with verifiable deep links. */
export const GLOBAL_HUNT_SEEDS: HuntSeed[] = [
  {
    id: "ds-lamp",
    nameKey: "deskLamp",
    platform: "Amazon DE",
    path: "shopify",
    region: "eu",
    country: "de",
    price: 49,
    profit: 18,
    risk: 22,
    demand: 71,
    saturation: 28,
    imageSrc: "/products/desk-lamp.jpg",
    productUrl: "https://www.amazon.de/dp/B0CWHDF7K1",
    platformSales: [
      { platform: "Amazon DE", url: "https://www.amazon.de/dp/B0CWHDF7K1" },
    ],
  },
  {
    id: "ds-organizer",
    nameKey: "cableOrganizer",
    platform: "Amazon US",
    path: "dropship",
    region: "asia",
    country: "cn",
    price: 29,
    profit: 12,
    risk: 18,
    demand: 64,
    saturation: 22,
    imageSrc: "/products/cable-organizer.jpg",
    productUrl: "https://www.amazon.com/dp/B0DJPV1TT9",
    platformSales: [
      { platform: "Amazon US", url: "https://www.amazon.com/dp/B0DJPV1TT9" },
    ],
  },
  {
    id: "ds-mug",
    nameKey: "travelMug",
    platform: "Amazon US",
    path: "dropship",
    region: "us",
    country: "us",
    price: 35,
    profit: 15,
    risk: 24,
    demand: 68,
    saturation: 31,
    imageSrc: "/products/travel-mug.jpg",
    productUrl: "https://www.amazon.com/dp/B0FGJW5R8B",
    platformSales: [
      { platform: "Amazon US", url: "https://www.amazon.com/dp/B0FGJW5R8B" },
    ],
  },
  {
    id: "amz-oa",
    nameKey: "wirelessBuds",
    platform: "Amazon US",
    path: "amazon",
    region: "us",
    country: "us",
    price: 129,
    profit: 54,
    risk: 72,
    demand: 88,
    saturation: 78,
    imageSrc: "/products/wireless-buds.jpg",
    productUrl: "https://www.amazon.com/dp/B0BTYCRJSS",
    platformSales: [
      { platform: "Amazon US", url: "https://www.amazon.com/dp/B0BTYCRJSS" },
    ],
  },
  {
    id: "amz-eu",
    nameKey: "proteinShaker",
    platform: "Amazon DE",
    path: "amazon",
    region: "eu",
    country: "de",
    price: 89,
    profit: 41,
    risk: 65,
    demand: 74,
    saturation: 66,
    imageSrc: "/products/protein-shaker.jpg",
    productUrl: "https://www.amazon.de/dp/B07D9G8QZM",
    platformSales: [
      { platform: "Amazon DE", url: "https://www.amazon.de/dp/B07D9G8QZM" },
    ],
  },
  {
    id: "noon-gadget",
    nameKey: "phoneMount",
    platform: "noon AE",
    path: "marketplace",
    region: "me",
    country: "ae",
    price: 79,
    profit: 33,
    risk: 48,
    demand: 62,
    saturation: 44,
    imageSrc: "/products/phone-mount.jpg",
    productUrl:
      "https://www.noon.com/uae-en/magnetic-car-phone-mount-vacuum-suction-foldable-dashboard-holder-universal-4-7-7-inch-smartphones-360-adjustable-strong-magnetic-grip-durable-aluminum-alloy-magnetic-phone-holder-car-mobile-holder-magnetic-phone-holder-for-car/ZF35CE0D5F420249849B1Z/p/",
    platformSales: [
      {
        platform: "noon AE",
        url: "https://www.noon.com/uae-en/magnetic-car-phone-mount-vacuum-suction-foldable-dashboard-holder-universal-4-7-7-inch-smartphones-360-adjustable-strong-magnetic-grip-durable-aluminum-alloy-magnetic-phone-holder-car-mobile-holder-magnetic-phone-holder-for-car/ZF35CE0D5F420249849B1Z/p/",
      },
    ],
  },
  {
    id: "tt-viral",
    nameKey: "ledStrip",
    platform: "Amazon US",
    path: "marketplace",
    region: "us",
    country: "us",
    price: 24,
    profit: 47,
    risk: 69,
    demand: 91,
    saturation: 71,
    imageSrc: "/products/led-strip.jpg",
    productUrl: "https://www.amazon.com/dp/B07XGKX327",
    platformSales: [
      { platform: "Amazon US", url: "https://www.amazon.com/dp/B07XGKX327" },
    ],
  },
  {
    id: "shopee-asia",
    nameKey: "miniFan",
    platform: "Shopee SG",
    path: "marketplace",
    region: "asia",
    country: "sg",
    price: 18,
    profit: 19,
    risk: 44,
    demand: 67,
    saturation: 49,
    imageSrc: "/products/mini-fan.jpg",
    productUrl: "https://shopee.sg/product/299068948/55860784071",
    platformSales: [
      {
        platform: "Shopee SG",
        url: "https://shopee.sg/product/299068948/55860784071",
      },
    ],
  },
  {
    id: "amz-high",
    nameKey: "gamingChair",
    platform: "Amazon FR",
    path: "amazon",
    region: "eu",
    country: "fr",
    price: 299,
    profit: 89,
    risk: 84,
    demand: 82,
    saturation: 86,
    imageSrc: "/products/gaming-chair.jpg",
    productUrl: "https://www.amazon.fr/-/en/GTPLAYER-GTPF59/dp/B0H68VN5MQ",
    platformSales: [
      {
        platform: "Amazon FR",
        url: "https://www.amazon.fr/-/en/GTPLAYER-GTPF59/dp/B0H68VN5MQ",
      },
    ],
  },
];
