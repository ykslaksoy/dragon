"use client";

import type { RiskMode, SortMode } from "../i18n/demo-products";
import { CompactSelect } from "./CompactSelect";

export type HuntFilterCopy = {
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
  sort: SortMode;
  onSortChange: (s: SortMode) => void;
  riskMode: RiskMode;
  onRiskModeChange: (r: RiskMode) => void;
  copy: HuntFilterCopy;
};

/** Compact profit/risk filters (country/region live in MarketPicker). */
export function HuntFilters({
  sort,
  onSortChange,
  riskMode,
  onRiskModeChange,
  copy,
}: Props) {
  return (
    <div
      role="group"
      aria-label={`${copy.sortAria} · ${copy.riskAria}`}
      className="flex flex-wrap items-center justify-center gap-2"
    >
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
