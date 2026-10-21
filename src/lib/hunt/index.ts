import type { CountryId } from "../../app/i18n/countries";
import type { RegionId } from "../../app/i18n/regions";
import {
  filterAndSortProducts,
  type DemoProduct,
  type RiskMode,
  type SortMode,
} from "../../app/i18n/demo-products";
import { enrichSeeds, huntApiStatus } from "./enrich";
import { GLOBAL_HUNT_SEEDS, TR_HUNT_SEEDS } from "./seeds";

export { huntApiStatus } from "./enrich";
export type { HuntApiStatus } from "./enrich";

export async function resolveHuntProducts(opts: {
  regions: RegionId[];
  countries: CountryId[];
}): Promise<{
  products: DemoProduct[];
  source: "tr-catalog" | "global-catalog" | "mixed";
  apiStatus: ReturnType<typeof huntApiStatus>;
}> {
  const regionSet = new Set(opts.regions);
  const countrySet = new Set(opts.countries);
  const hasTr = regionSet.has("tr") || countrySet.has("tr");
  const hasNonTr =
    [...regionSet].some((r) => r !== "tr") ||
    [...countrySet].some((c) => c !== "tr");

  if (hasTr && !hasNonTr) {
    return {
      products: await enrichSeeds(TR_HUNT_SEEDS),
      source: "tr-catalog",
      apiStatus: huntApiStatus(),
    };
  }

  if (!hasTr && hasNonTr) {
    const filtered = GLOBAL_HUNT_SEEDS.filter((s) => s.region !== "tr");
    return {
      products: await enrichSeeds(filtered),
      source: "global-catalog",
      apiStatus: huntApiStatus(),
    };
  }

  const mixed = [
    ...TR_HUNT_SEEDS,
    ...GLOBAL_HUNT_SEEDS.filter((s) => s.region !== "tr"),
  ];
  return {
    products: await enrichSeeds(mixed),
    source: "mixed",
    apiStatus: huntApiStatus(),
  };
}

export async function huntProductsFiltered(opts: {
  regions: RegionId[];
  countries: CountryId[];
  riskMode: RiskMode;
  sort: SortMode;
}): Promise<{
  products: DemoProduct[];
  source: string;
  apiStatus: ReturnType<typeof huntApiStatus>;
}> {
  const resolved = await resolveHuntProducts({
    regions: opts.regions,
    countries: opts.countries,
  });

  const products = filterAndSortProducts(resolved.products, {
    regions: opts.regions,
    countries: opts.countries,
    riskMode: opts.riskMode,
    sort: opts.sort,
  });

  return {
    products,
    source: resolved.source,
    apiStatus: resolved.apiStatus,
  };
}
