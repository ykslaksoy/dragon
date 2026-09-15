import { NextRequest, NextResponse } from "next/server";
import {
  filterAndSortProducts,
  huntApiStatus,
  resolveHuntProducts,
} from "@/lib/hunt";
import type { CountryId } from "@/app/i18n/countries";
import type { RegionId } from "@/app/i18n/regions";
import type { RiskMode, SortMode } from "@/lib/hunt";

export const revalidate = 3600;

function parseList<T extends string>(v: string | null): T[] {
  if (!v) return [];
  return v
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean) as T[];
}

export async function GET(req: NextRequest) {
  const sp = req.nextUrl.searchParams;
  const regions = parseList<RegionId>(sp.get("regions"));
  const countries = parseList<CountryId>(sp.get("countries"));
  const riskMode = (sp.get("risk") as RiskMode) || "low";
  const sort = (sp.get("sort") as SortMode) || "profit";

  const resolved = await resolveHuntProducts({
    regions: regions.length ? regions : ["tr"],
    countries: countries.length ? countries : ["tr"],
  });

  const products = filterAndSortProducts(resolved.products, {
    regions: regions.length ? regions : ["tr"],
    countries: countries.length ? countries : ["tr"],
    riskMode,
    sort,
  });

  return NextResponse.json({
    products,
    source: resolved.source,
    scoresMode: "heuristic",
    apiStatus: huntApiStatus(),
    blockers: {
      KEEPA_API_KEY:
        "Optional Amazon history (Keepa does not cover amazon.com.tr).",
      AMAZON_PAAPI_ACCESS_KEY: "Amazon Product Advertising API access key",
      AMAZON_PAAPI_SECRET_KEY: "Amazon PA-API secret",
      AMAZON_PAAPI_PARTNER_TAG: "Amazon Associates partner tag (TR)",
      TRENDYOL_SELLER_ID: "Trendyol seller / supplier id",
      TRENDYOL_API_KEY: "Trendyol Partner API key",
      TRENDYOL_API_SECRET: "Trendyol Partner API secret",
      HEPSIBURADA_MERCHANT_ID: "Hepsiburada merchant id",
      HEPSIBURADA_SERVICE_KEY: "Hepsiburada integration service key",
      PTTAVM_API_KEY: "PTT AVM partner API key (if issued)",
    },
  });
}
