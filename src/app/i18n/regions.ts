export type RegionId = "tr" | "eu" | "us" | "me" | "asia";

export type PlatformKind = "marketplace" | "supplier" | "tool";

export type Platform = {
  id: string;
  name: string;
  src: string;
  regions: RegionId[];
  kind: PlatformKind;
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
    kind: "marketplace",
  },
  {
    id: "hepsiburada",
    name: "Hepsiburada",
    src: "/platforms/hepsiburada.svg",
    regions: ["tr"],
    kind: "marketplace",
  },
  {
    id: "amazon-tr",
    name: "Amazon TR",
    src: "/platforms/amazon.svg",
    regions: ["tr"],
    kind: "marketplace",
  },
  {
    id: "ptt",
    name: "PTT AVM",
    src: "/platforms/ptt.svg",
    regions: ["tr"],
    kind: "marketplace",
  },
  // Avrupa
  {
    id: "amazon-eu",
    name: "Amazon EU",
    src: "/platforms/amazon.svg",
    regions: ["eu"],
    kind: "marketplace",
  },
  {
    id: "allegro",
    name: "Allegro",
    src: "/platforms/allegro.svg",
    regions: ["eu"],
    kind: "marketplace",
  },
  {
    id: "ebay-eu",
    name: "eBay",
    src: "/platforms/ebay.svg",
    regions: ["eu", "us"],
    kind: "marketplace",
  },
  {
    id: "shopify-eu",
    name: "Shopify",
    src: "/platforms/shopify.svg",
    regions: ["eu", "us", "me"],
    kind: "marketplace",
  },
  // Amerika
  {
    id: "amazon-us",
    name: "Amazon US",
    src: "/platforms/amazon.svg",
    regions: ["us"],
    kind: "marketplace",
  },
  {
    id: "walmart",
    name: "Walmart",
    src: "/platforms/walmart.svg",
    regions: ["us"],
    kind: "marketplace",
  },
  {
    id: "tiktok-us",
    name: "TikTok",
    src: "/platforms/tiktok.svg",
    regions: ["us", "asia"],
    kind: "marketplace",
  },
  {
    id: "keepa",
    name: "Keepa",
    src: "/platforms/keepa.svg",
    regions: ["tr", "eu", "us"],
    kind: "tool",
  },
  // Orta Doğu
  {
    id: "noon",
    name: "noon",
    src: "/platforms/noon.svg",
    regions: ["me"],
    kind: "marketplace",
  },
  {
    id: "amazon-me",
    name: "Amazon.ae",
    src: "/platforms/amazon.svg",
    regions: ["me"],
    kind: "marketplace",
  },
  // Asya — sell + source
  {
    id: "aliexpress",
    name: "AliExpress",
    src: "/platforms/aliexpress.svg",
    regions: ["asia"],
    kind: "supplier",
  },
  {
    id: "temu",
    name: "Temu",
    src: "/platforms/temu.svg",
    regions: ["asia"],
    kind: "supplier",
  },
  {
    id: "cj",
    name: "CJ",
    src: "/platforms/cj.svg",
    regions: ["asia"],
    kind: "supplier",
  },
  {
    id: "shopee",
    name: "Shopee",
    src: "/platforms/shopee.svg",
    regions: ["asia"],
    kind: "marketplace",
  },
  {
    id: "lazada",
    name: "Lazada",
    src: "/platforms/lazada.svg",
    regions: ["asia"],
    kind: "marketplace",
  },
];

export function platformsForRegions(selected: RegionId[]): Platform[] {
  if (selected.length === 0) return [];
  const set = new Set(selected);
  const seen = new Set<string>();
  const out: Platform[] = [];
  for (const p of PLATFORMS) {
    if (!p.regions.some((r) => set.has(r))) continue;
    const key = `${p.name}|${p.src}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(p);
  }
  return out;
}

/** Surface platforms for copy/tabs — exclude analytics tools like Keepa. */
export function surfacePlatformsForRegions(selected: RegionId[]): Platform[] {
  return platformsForRegions(selected).filter((p) => p.kind !== "tool");
}

export function cardPlatformsForRegions(
  selected: RegionId[],
  limit = 3,
): Platform[] {
  return surfacePlatformsForRegions(selected).slice(0, limit);
}

export function copyPlatformsForRegions(
  selected: RegionId[],
  limit = 3,
): Platform[] {
  return surfacePlatformsForRegions(selected).slice(0, limit);
}

export function formatPlatformNames(platforms: Platform[]): string {
  return platforms.map((p) => p.name).join(", ");
}

export function logoForPlatformName(name: string): string | undefined {
  return PLATFORMS.find((p) => p.name === name)?.src;
}

export function fillPlatforms(template: string, platforms: string): string {
  return template.replaceAll("{platforms}", platforms);
}
