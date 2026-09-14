"use client";

import type { RegionId } from "../i18n/regions";
import { REGION_IDS } from "../i18n/regions";

type Props = {
  selected: RegionId[];
  onChange: (next: RegionId[]) => void;
  labels: Record<RegionId, string>;
  allLabel: string;
  ariaLabel: string;
};

export function RegionChips({
  selected,
  onChange,
  labels,
  allLabel,
  ariaLabel,
}: Props) {
  const allSelected = REGION_IDS.every((id) => selected.includes(id));

  function toggle(id: RegionId) {
    if (selected.includes(id)) {
      // Keep at least one region selected
      if (selected.length === 1) return;
      onChange(selected.filter((r) => r !== id));
      return;
    }
    onChange([...selected, id]);
  }

  function selectAll() {
    onChange([...REGION_IDS]);
  }

  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className="flex flex-wrap items-center justify-center gap-2"
    >
      <button
        type="button"
        aria-pressed={allSelected}
        onClick={selectAll}
        className={`mono rounded-full border px-3 py-1.5 text-[10px] tracking-[0.12em] transition-all sm:px-3.5 sm:text-[11px] ${
          allSelected
            ? "border-[#8CFF4D]/50 bg-[#8CFF4D]/15 text-[#8CFF4D]"
            : "border-white/10 bg-white/[0.03] text-white/45 hover:border-white/20 hover:text-white/70"
        }`}
      >
        {allLabel}
      </button>
      {REGION_IDS.map((id) => {
        const active = selected.includes(id);
        return (
          <button
            key={id}
            type="button"
            aria-pressed={active}
            onClick={() => toggle(id)}
            className={`mono rounded-full border px-3 py-1.5 text-[10px] tracking-[0.08em] transition-all sm:px-3.5 sm:text-[11px] ${
              active
                ? "border-white/25 bg-white text-black"
                : "border-white/10 bg-white/[0.03] text-white/45 hover:border-white/20 hover:text-white/70"
            }`}
          >
            {labels[id]}
          </button>
        );
      })}
    </div>
  );
}
