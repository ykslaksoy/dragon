import { NextRequest, NextResponse } from "next/server";
import { huntProductsFiltered } from "@/lib/hunt";
import type { CountryId } from "@/app/i18n/countries";
import type { RegionId } from "@/app/i18n/regions";
import type { RiskMode, SortMode } from "@/app/i18n/demo-products";

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
  const sort = (sp.get("sort") as SortMode) || "sales";

  const resolved = await huntProductsFiltered({
    regions: regions.length ? regions : ["tr"],
    countries: countries.length ? countries : ["tr"],
    riskMode,
    sort,
  });

  return NextResponse.json({
    products: resolved.products,
    source: resolved.source,
    apiStatus: resolved.apiStatus,
    blockers: {
      KEEPA_API_KEY:
        "Amazon US/EU monthlySold via Keepa (does not cover amazon.com.tr).",
      TRENDYOL_SELLER_ID: "Trendyol Partner API",
      TRENDYOL_API_KEY: "Trendyol Partner API key",
      TRENDYOL_API_SECRET: "Trendyol Partner API secret",
      HEPSIBURADA_MERCHANT_ID: "Hepsiburada merchant id",
      HEPSIBURADA_SERVICE_KEY: "Hepsiburada integration key",
      PTTAVM_API_KEY: "PTT AVM partner API (if issued)",
    },
  });
}
