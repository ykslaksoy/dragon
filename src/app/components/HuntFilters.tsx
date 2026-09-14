"use client";

import { useMemo } from "react";
import type { CountryId } from "../i18n/countries";
import { countriesForRegions } from "../i18n/countries";
import type { RiskMode, SortMode } from "../i18n/demo-products";
import type { RegionId } from "../i18n/regions";
import { CompactSelect } from "./CompactSelect";

export type HuntFilterCopy = {
  countryAria: string;
  countryPrefix: string;
  countryAll: string;
  countries: Record<CountryId, string>;
  sortAria: string;
  sortPrefix: string;
  sortProfit: string;
  sortRisk: string;
  riskAria: string;
  riskPrefix: string;
  riskLow: string;
  riskLowHint: string;
  riskBalanced: string;
  riskBalancedHint: string;
  riskHigh: string;
  riskHighHint: string;
};

type Props = {
  regions: RegionId[];
  country: CountryId | "all";
  onCountryChange: (c: CountryId | "all") => void;
  sort: SortMode;
  onSortChange: (s: SortMode) => void;
  riskMode: RiskMode;
  onRiskModeChange: (r: RiskMode) => void;
  copy: HuntFilterCopy;
};

export function HuntFilters({
  regions,
  country,
  onCountryChange,
  sort,
  onSortChange,
  riskMode,
  onRiskModeChange,
  copy,
}: Props) {
  const countryOptions = useMemo(() => {
    const list = countriesForRegions(regions);
    return [
      { value: "all" as const, label: copy.countryAll },
      ...list.map((c) => ({
        value: c.id,
        label: copy.countries[c.id],
      })),
    ];
  }, [regions, copy.countryAll, copy.countries]);

  return (
    <div
      role="group"
      aria-label={`${copy.countryAria} · ${copy.sortAria} · ${copy.riskAria}`}
      className="flex flex-wrap items-center justify-center gap-2"
    >
      <CompactSelect
        value={country}
        onChange={onCountryChange}
        options={countryOptions}
        ariaLabel={copy.countryAria}
        prefix={copy.countryPrefix}
      />
      <CompactSelect
        value={sort}
        onChange={onSortChange}
        options={[
          { value: "profit", label: copy.sortProfit },
          { value: "risk", label: copy.sortRisk },
        ]}
        ariaLabel={copy.sortAria}
        prefix={copy.sortPrefix}
      />
      <CompactSelect
        value={riskMode}
        onChange={onRiskModeChange}
        options={[
          {
            value: "low",
            label: copy.riskLow,
            hint: copy.riskLowHint,
          },
          {
            value: "balanced",
            label: copy.riskBalanced,
            hint: copy.riskBalancedHint,
          },
          {
            value: "high",
            label: copy.riskHigh,
            hint: copy.riskHighHint,
          },
        ]}
        ariaLabel={copy.riskAria}
        prefix={copy.riskPrefix}
      />
    </div>
  );
}
