import {
  COUNTRIES,
  type CountryId,
  countriesInRegion,
} from "./countries";
import { REGION_IDS, type RegionId } from "./regions";

export type MarketGroupId =
  | "turkiye"
  | "amazon"
  | "noon"
  | "europe"
  | "americas"
  | "asia";

export type MarketGroup = {
  id: MarketGroupId;
  /** Brand line shown under the group title (not translated). */
  platforms: string;
  /** When set, selecting the group also covers this region. */
  region?: RegionId;
  countries: CountryId[];
};

/**
 * Marketplace-line groups (exclusive country membership).
 * Amazon US/UK/DE/FR share one line; noon/Amazon.ae another; TR locals under Türkiye.
 */
export const MARKET_GROUPS: MarketGroup[] = [
  {
    id: "turkiye",
    platforms: "Trendyol · Hepsiburada · PTT AVM · Amazon TR",
    region: "tr",
    countries: ["tr"],
  },
  {
    id: "amazon",
    platforms: "Amazon US · UK · DE · FR",
    countries: ["us", "uk", "de", "fr"],
  },
  {
    id: "noon",
    platforms: "noon · Amazon.ae",
    region: "me",
    countries: ["ae", "sa"],
  },
  {
    id: "europe",
    platforms: "Allegro · eBay · Shopify",
    countries: ["nl"],
  },
  {
    id: "americas",
    platforms: "Walmart · TikTok · Shopify",
    countries: ["ca"],
  },
  {
    id: "asia",
    platforms: "AliExpress · Temu · Shopee · Lazada",
    region: "asia",
    countries: ["cn", "jp", "sg"],
  },
];

export const ALL_COUNTRY_IDS: CountryId[] = COUNTRIES.map((c) => c.id);

export const DEFAULT_COUNTRIES: CountryId[] = ["tr"];

export function regionsFromCountries(ids: CountryId[]): RegionId[] {
  const set = new Set<RegionId>();
  for (const id of ids) {
    const row = COUNTRIES.find((c) => c.id === id);
    if (row) set.add(row.region);
  }
  return REGION_IDS.filter((r) => set.has(r));
}

export function normalizeCountries(ids: CountryId[]): CountryId[] {
  const set = new Set(ids);
  return ALL_COUNTRY_IDS.filter((id) => set.has(id));
}

export function isAllCountries(ids: CountryId[]): boolean {
  return ALL_COUNTRY_IDS.every((id) => ids.includes(id));
}

/** Countries that belong to a geographic region (across marketplace groups). */
export function selectCountriesForRegion(region: RegionId): CountryId[] {
  return countriesInRegion(region);
}

export function selectCountriesForRegions(regions: RegionId[]): CountryId[] {
  const set = new Set<CountryId>();
  for (const r of regions) {
    for (const id of countriesInRegion(r)) set.add(id);
  }
  return ALL_COUNTRY_IDS.filter((id) => set.has(id));
}

export type MarketSummaryCopy = {
  countriesAll: string;
  regionsAll: string;
  countryCount: string;
  regionCount: string;
  plusMore: string;
  regionPlus: string;
  countries: Record<CountryId, string>;
  regions: Record<RegionId, string>;
};

function regionFullySelected(
  region: RegionId,
  selected: Set<CountryId>,
): boolean {
  const ids = countriesInRegion(region);
  return ids.length > 0 && ids.every((id) => selected.has(id));
}

function fullySelectedRegions(selected: Set<CountryId>): RegionId[] {
  return REGION_IDS.filter((r) => regionFullySelected(r, selected));
}

/**
 * Smart trigger label:
 * - 1 country → name
 * - all countries → Ülke tümü
 * - exact full region(s) → region name(s) / Bölge tümü
 * - mixed → “Avrupa + TR”, “Almanya +2”, or “3 ülke”
 */
export function summarizeMarketSelection(
  selectedRaw: CountryId[],
  copy: MarketSummaryCopy,
): string {
  const selected = normalizeCountries(selectedRaw);
  if (selected.length === 0) return copy.countriesAll;
  if (isAllCountries(selected)) return copy.countriesAll;

  const set = new Set(selected);
  const fullRegions = fullySelectedRegions(set);

  if (selected.length === 1) {
    return copy.countries[selected[0]!];
  }

  // Exact union of one or more full regions (no stray countries)
  const regionCountryCount = fullRegions.reduce(
    (n, r) => n + countriesInRegion(r).length,
    0,
  );
  if (
    fullRegions.length > 0 &&
    regionCountryCount === selected.length &&
    selected.every((id) =>
      fullRegions.some((r) => countriesInRegion(r).includes(id)),
    )
  ) {
    if (fullRegions.length === REGION_IDS.length) return copy.regionsAll;
    if (fullRegions.length === 1) return copy.regions[fullRegions[0]!];
    if (fullRegions.length === 2) {
      return copy.regionPlus
        .replaceAll("{region}", copy.regions[fullRegions[0]!])
        .replaceAll("{extra}", copy.regions[fullRegions[1]!]);
    }
    return copy.regionCount.replaceAll("{n}", String(fullRegions.length));
  }

  // One full region + one extra country → “Avrupa + TR”
  if (fullRegions.length === 1) {
    const regionIds = new Set(countriesInRegion(fullRegions[0]!));
    const extras = selected.filter((id) => !regionIds.has(id));
    if (extras.length === 1) {
      return copy.regionPlus
        .replaceAll("{region}", copy.regions[fullRegions[0]!])
        .replaceAll("{extra}", copy.countries[extras[0]!]);
    }
  }

  // Prefer short “Name +N”
  if (selected.length >= 2) {
    const first = copy.countries[selected[0]!];
    const n = selected.length - 1;
    if (selected.length <= 4) {
      return copy.plusMore
        .replaceAll("{name}", first)
        .replaceAll("{n}", String(n));
    }
  }

  return copy.countryCount.replaceAll("{n}", String(selected.length));
}
