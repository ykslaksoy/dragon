export type RegionId = "tr" | "eu" | "us" | "me" | "asia";

export type Platform = {
  id: string;
  name: string;
  src: string;
  regions: RegionId[];
};

export const REGION_IDS: RegionId[] = ["tr", "eu", "us", "me", "asia"];

export const DEFAULT_REGIONS: RegionId[] = ["tr"];

/** Marketplaces / integrations scoped by region. Türkiye includes local PTT AVM. */
export const PLATFORMS: Platform[] = [
  // Türkiye — local marketplaces
  {
    id: "trendyol",
    name: "Trendyol",
    src: "/platforms/trendyol.svg",
    regions: ["tr"],
  },
  {
    id: "hepsiburada",
    name: "Hepsiburada",
    src: "/platforms/hepsiburada.svg",
    regions: ["tr"],
  },
  {
    id: "amazon-tr",
    name: "Amazon TR",
    src: "/platforms/amazon.svg",
    regions: ["tr"],
  },
  {
    id: "ptt",
    name: "PTT AVM",
    src: "/platforms/ptt.svg",
    regions: ["tr"],
  },
  // Avrupa
  {
    id: "amazon-eu",
    name: "Amazon",
    src: "/platforms/amazon.svg",
    regions: ["eu"],
  },
  {
    id: "allegro",
    name: "Allegro",
    src: "/platforms/allegro.svg",
    regions: ["eu"],
  },
  {
    id: "ebay-eu",
    name: "eBay",
    src: "/platforms/ebay.svg",
    regions: ["eu", "us"],
  },
  {
    id: "shopify-eu",
    name: "Shopify",
    src: "/platforms/shopify.svg",
    regions: ["eu", "us", "me"],
  },
  // Amerika
  {
    id: "amazon-us",
    name: "Amazon",
    src: "/platforms/amazon.svg",
    regions: ["us"],
  },
  {
    id: "walmart",
    name: "Walmart",
    src: "/platforms/walmart.svg",
    regions: ["us"],
  },
  {
    id: "tiktok-us",
    name: "TikTok",
    src: "/platforms/tiktok.svg",
    regions: ["us", "asia"],
  },
  {
    id: "keepa",
    name: "Keepa",
    src: "/platforms/keepa.svg",
    regions: ["tr", "eu", "us"],
  },
  // Orta Doğu
  {
    id: "noon",
    name: "noon",
    src: "/platforms/noon.svg",
    regions: ["me"],
  },
  {
    id: "amazon-me",
    name: "Amazon",
    src: "/platforms/amazon.svg",
    regions: ["me"],
  },
  // Asya
  {
    id: "aliexpress",
    name: "AliExpress",
    src: "/platforms/aliexpress.svg",
    regions: ["asia"],
  },
  {
    id: "temu",
    name: "Temu",
    src: "/platforms/temu.svg",
    regions: ["asia"],
  },
  {
    id: "shopee",
    name: "Shopee",
    src: "/platforms/shopee.svg",
    regions: ["asia"],
  },
  {
    id: "lazada",
    name: "Lazada",
    src: "/platforms/lazada.svg",
    regions: ["asia"],
  },
  {
    id: "cj",
    name: "CJ",
    src: "/platforms/cj.svg",
    regions: ["asia"],
  },
];

export function platformsForRegions(selected: RegionId[]): Platform[] {
  if (selected.length === 0) return [];
  const set = new Set(selected);
  const seen = new Set<string>();
  const out: Platform[] = [];
  for (const p of PLATFORMS) {
    if (!p.regions.some((r) => set.has(r))) continue;
    // Dedupe display by logo+name when multi-region (e.g. Amazon/Shopify)
    const key = `${p.name}|${p.src}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(p);
  }
  return out;
}
