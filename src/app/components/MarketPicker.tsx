"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import type { CountryId } from "../i18n/countries";
import {
  ALL_COUNTRY_IDS,
  MARKET_GROUPS,
  isAllCountries,
  normalizeCountries,
  selectCountriesForRegion,
  summarizeMarketSelection,
  type MarketSummaryCopy,
} from "../i18n/market-groups";
import { REGION_IDS, type RegionId } from "../i18n/regions";

export type MarketPickerCopy = MarketSummaryCopy & {
  ariaLabel: string;
  regionsAria: string;
  /** Short “Hepsi / All” chip inside the region row. */
  regionsChipAll: string;
  countriesSection: string;
  regionsSection: string;
  groupSelectAll: string;
  marketGroups: Record<string, string>;
};

type Props = {
  countries: CountryId[];
  onChange: (next: CountryId[]) => void;
  copy: MarketPickerCopy;
};

function toggleId(list: CountryId[], id: CountryId): CountryId[] {
  if (list.includes(id)) {
    const next = list.filter((c) => c !== id);
    return next.length === 0 ? list : normalizeCountries(next);
  }
  return normalizeCountries([...list, id]);
}

function toggleMany(list: CountryId[], ids: CountryId[], on: boolean): CountryId[] {
  const set = new Set(list);
  if (on) {
    for (const id of ids) set.add(id);
  } else {
    for (const id of ids) set.delete(id);
  }
  const next = ALL_COUNTRY_IDS.filter((id) => set.has(id));
  return next.length === 0 ? list : next;
}

export function MarketPicker({ countries, onChange, copy }: Props) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const selected = useMemo(() => normalizeCountries(countries), [countries]);
  const selectedSet = useMemo(() => new Set(selected), [selected]);
  const allOn = isAllCountries(selected);

  const summary = summarizeMarketSelection(selected, copy);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function setAll() {
    onChange([...ALL_COUNTRY_IDS]);
  }

  function toggleRegion(region: RegionId) {
    const ids = selectCountriesForRegion(region);
    const fully = ids.every((id) => selectedSet.has(id));
    onChange(toggleMany(selected, ids, !fully));
  }

  function toggleGroup(ids: CountryId[]) {
    const fully = ids.every((id) => selectedSet.has(id));
    onChange(toggleMany(selected, ids, !fully));
  }

  return (
    <div ref={rootRef} className={`relative ${open ? "z-[110]" : "z-30"}`}>
      <button
        type="button"
        aria-label={copy.ariaLabel}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((v) => !v)}
        className="flex max-w-[132px] items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-[11px] text-white/70 transition hover:bg-white/[0.06] hover:text-white sm:max-w-[240px]"
      >
        <span className="truncate">{summary}</span>
        <span className="shrink-0 text-white/35" aria-hidden>
          ▾
        </span>
      </button>

      {open ? (
        <div
          id={listId}
          role="listbox"
          aria-label={copy.ariaLabel}
          aria-multiselectable
          className="fixed left-1/2 top-[calc(var(--dragon-safe-top)+var(--dragon-header-h))] z-[120] mt-2 max-h-[min(70vh,420px)] w-[min(92vw,280px)] -translate-x-1/2 overflow-y-auto rounded-xl border border-white/10 bg-[#0E0E10] py-1 shadow-[0_12px_40px_rgba(0,0,0,0.55)] sm:absolute sm:left-auto sm:right-0 sm:top-auto sm:mt-2 sm:translate-x-0"
        >
          <button
            type="button"
            role="option"
            aria-selected={allOn}
            onClick={setAll}
            className={`flex w-full items-center px-3 py-2 text-left text-[12px] transition ${
              allOn
                ? "bg-white/[0.08] text-white"
                : "text-white/65 hover:bg-white/[0.04] hover:text-white"
            }`}
          >
            {copy.countriesAll}
          </button>

          <div className="mono px-3 pb-1 pt-2 text-[9px] tracking-[0.14em] text-white/25 uppercase">
            {copy.regionsSection}
          </div>
          <div
            role="group"
            aria-label={copy.regionsAria}
            className="flex flex-wrap gap-1 px-2 pb-2"
          >
            <button
              type="button"
              aria-pressed={allOn}
              onClick={setAll}
              className={`mono rounded-full border px-2 py-1 text-[9px] tracking-[0.08em] transition ${
                allOn
                  ? "border-[#8CFF4D]/40 bg-[#8CFF4D]/12 text-[#8CFF4D]"
                  : "border-white/10 text-white/45 hover:border-white/20 hover:text-white/70"
              }`}
            >
              {copy.regionsChipAll}
            </button>
            {REGION_IDS.map((id) => {
              const ids = selectCountriesForRegion(id);
              const active =
                ids.length > 0 && ids.every((c) => selectedSet.has(c));
              return (
                <button
                  key={id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => toggleRegion(id)}
                  className={`mono rounded-full border px-2 py-1 text-[9px] tracking-[0.06em] transition ${
                    active
                      ? "border-white/25 bg-white text-black"
                      : "border-white/10 text-white/45 hover:border-white/20 hover:text-white/70"
                  }`}
                >
                  {copy.regions[id]}
                </button>
              );
            })}
          </div>

          <div className="mono px-3 pb-1 pt-1 text-[9px] tracking-[0.14em] text-white/25 uppercase">
            {copy.countriesSection}
          </div>

          {MARKET_GROUPS.map((group) => {
            const groupOn =
              group.countries.length > 0 &&
              group.countries.every((c) => selectedSet.has(c));
            const title =
              copy.marketGroups[group.id] ?? group.id;
            return (
              <div key={group.id} className="border-t border-white/[0.05] py-1">
                <button
                  type="button"
                  onClick={() => toggleGroup(group.countries)}
                  className="flex w-full flex-col items-start gap-0.5 px-3 py-1.5 text-left transition hover:bg-white/[0.03]"
                  aria-pressed={groupOn}
                >
                  <span
                    className={`text-[11px] font-medium ${
                      groupOn ? "text-white" : "text-white/70"
                    }`}
                  >
                    {title}
                    <span className="mono ml-1.5 text-[9px] text-white/30">
                      {copy.groupSelectAll}
                    </span>
                  </span>
                  <span className="text-[9px] leading-snug text-white/30">
                    {group.platforms}
                  </span>
                </button>
                {group.countries.map((id) => {
                  const on = selectedSet.has(id);
                  return (
                    <button
                      key={id}
                      type="button"
                      role="option"
                      aria-selected={on}
                      onClick={() => onChange(toggleId(selected, id))}
                      className={`flex w-full items-center gap-2 px-3 py-1.5 pl-5 text-left text-[12px] transition ${
                        on
                          ? "bg-white/[0.06] text-white"
                          : "text-white/60 hover:bg-white/[0.04] hover:text-white"
                      }`}
                    >
                      <span
                        className={`flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-[3px] border text-[9px] ${
                          on
                            ? "border-[#8CFF4D]/50 bg-[#8CFF4D]/20 text-[#8CFF4D]"
                            : "border-white/15 text-transparent"
                        }`}
                        aria-hidden
                      >
                        ✓
                      </span>
                      {copy.countries[id]}
                    </button>
                  );
                })}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
