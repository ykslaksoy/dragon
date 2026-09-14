import type { RegionId } from "./regions";

export type CountryId =
  | "tr"
  | "de"
  | "fr"
  | "nl"
  | "uk"
  | "us"
  | "ca"
  | "ae"
  | "sa"
  | "cn"
  | "jp"
  | "sg";

export type Country = {
  id: CountryId;
  region: RegionId;
};

/** Countries under each market region (compact subset for UI). */
export const COUNTRIES: Country[] = [
  { id: "tr", region: "tr" },
  { id: "de", region: "eu" },
  { id: "fr", region: "eu" },
  { id: "nl", region: "eu" },
  { id: "uk", region: "eu" },
  { id: "us", region: "us" },
  { id: "ca", region: "us" },
  { id: "ae", region: "me" },
  { id: "sa", region: "me" },
  { id: "cn", region: "asia" },
  { id: "jp", region: "asia" },
  { id: "sg", region: "asia" },
];

export function countriesForRegions(regions: RegionId[]): Country[] {
  if (regions.length === 0) return [];
  const set = new Set(regions);
  return COUNTRIES.filter((c) => set.has(c.region));
}
