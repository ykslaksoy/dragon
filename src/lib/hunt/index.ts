import { DEMO_PRODUCTS } from "./demo-catalog";
import { filterAndSortProducts, TR_LIVE_PRODUCTS, huntApiStatus } from "./tr-catalog";
import { fetchAmazonTrLive, hasAmazonPaapi } from "./amazon-tr";
import { requireProductDeepLinks } from "./product-url";
import type { HuntProduct } from "./types";
import type { CountryId } from "../../app/i18n/countries";
import type { RegionId } from "../../app/i18n/regions";

export type { HuntProduct, DemoProduct, RiskMode, SortMode, ProductPath, DataMode, ScoresMode, CostBreakdown } from "./types";
export { HUNT_RESULT_LIMIT } from "./types";
export { isLowRiskPath, riskBandLabel } from "./scoring";
export { filterAndSortProducts, TR_LIVE_PRODUCTS, huntApiStatus } from "./tr-catalog";
export { DEMO_PRODUCTS } from "./demo-catalog";
export { isMarketplaceProductDeepLink, requireProductDeepLinks } from "./product-url";

/**
 * Resolve hunt pool: TR uses live/catalog marketplace products;
 * other regions keep demo until those markets are wired.
 */
export async function resolveHuntProducts(opts: {
  regions: RegionId[];
  countries: CountryId[];
}): Promise<{
  products: HuntProduct[];
  source: "tr-live+catalog" | "demo" | "mixed";
  apiStatus: ReturnType<typeof huntApiStatus>;
}> {
  const wantsTr =
    opts.regions.includes("tr") || opts.countries.includes("tr");
  const wantsOther =
    opts.regions.some((r) => r !== "tr") ||
    opts.countries.some((c) => c !== "tr");

  const apiStatus = huntApiStatus();
  let tr: HuntProduct[] = requireProductDeepLinks([...TR_LIVE_PRODUCTS]);

  if (wantsTr) {
    try {
      // Refresh Amazon TR identities when public search works (no PA-API key).
      if (!hasAmazonPaapi()) {
        const live = requireProductDeepLinks(
          await fetchAmazonTrLive("dokunmatik masa lambasi", 3),
        );
        if (live.length > 0) {
          const byUrl = new Map(tr.map((p) => [p.productUrl, p]));
          for (const p of live) byUrl.set(p.productUrl, p);
          tr = [...byUrl.values()];
        }
      }
    } catch {
      // Keep verified catalog seeds
    }
  }

  if (wantsTr && !wantsOther) {
    return { products: tr, source: "tr-live+catalog", apiStatus };
  }
  if (!wantsTr && wantsOther) {
    return {
      products: requireProductDeepLinks(
        DEMO_PRODUCTS.filter((p) => p.country !== "tr"),
      ),
      source: "demo",
      apiStatus,
    };
  }
  return {
    products: requireProductDeepLinks([
      ...tr,
      ...DEMO_PRODUCTS.filter((p) => p.country !== "tr"),
    ]),
    source: "mixed",
    apiStatus,
  };
}
