"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { DragonTopLogo } from "./components/DragonTopLogo";
import { HuntFilters } from "./components/HuntFilters";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { MarketPicker } from "./components/MarketPicker";
import {
  PlatformIntegrations,
  PlatformName,
} from "./components/PlatformMark";
import { ProductResults } from "./components/ProductResults";
import type { CountryId } from "./i18n/countries";
import {
  DEFAULT_LOCALE,
  getDictionary,
  type Locale,
} from "./i18n/dictionaries";
import {
  DEMO_PRODUCTS,
  filterAndSortProducts,
  type RiskMode,
  type SortMode,
} from "./i18n/demo-products";
import {
  DEFAULT_COUNTRIES,
  regionsFromCountries,
} from "./i18n/market-groups";
import {
  cardPlatformsForRegions,
  copyPlatformsForRegions,
  fillPlatforms,
  formatPlatformNames,
  platformsForRegions,
} from "./i18n/regions";

function scrollToHunt(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  const el = document.getElementById("hunt");
  if (!el) return;
  history.replaceState(null, "", window.location.pathname + window.location.search);
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [lang, setLang] = useState<Locale>(DEFAULT_LOCALE);
  const [mode, setMode] = useState<string>("all");
  const [countries, setCountries] = useState<CountryId[]>(DEFAULT_COUNTRIES);
  const [sort, setSort] = useState<SortMode>("sales");
  const [riskMode, setRiskMode] = useState<RiskMode>("low");
  const t = getDictionary(lang);
  const regions = useMemo(() => regionsFromCountries(countries), [countries]);
  const platforms = platformsForRegions(regions);
  const cardPlatforms = cardPlatformsForRegions(regions);
  const copyNames = formatPlatformNames(copyPlatformsForRegions(regions));
  const subtitle = fillPlatforms(t.subtitle, copyNames || "—");
  const features = t.features.map((f) => ({
    title: f.title,
    desc: fillPlatforms(f.desc, copyNames || "—"),
  }));
  const activeMode =
    mode === "all" || cardPlatforms.some((p) => p.id === mode)
      ? mode
      : "all";

  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : lang;
  }, [lang]);

  const products = useMemo(
    () =>
      filterAndSortProducts(DEMO_PRODUCTS, {
        regions,
        countries,
        riskMode,
        sort,
      }),
    [regions, countries, riskMode, sort],
  );

  const modeStatus =
    activeMode === "all"
      ? t.modeStatusAll
      : t.modeStatus.replaceAll(
          "{platform}",
          (
            cardPlatforms.find((p) => p.id === activeMode)?.name ?? activeMode
          ).toUpperCase(),
        );

  return (
    <div className="m-0 min-h-dvh bg-[#070708] p-0 text-white selection:bg-[#8CFF4D]/30">
      <div
        aria-hidden
        className="pointer-events-none fixed left-1/2 top-[45%] z-0 w-[min(620px,92vw)] -translate-x-1/2 -translate-y-1/2 opacity-[0.20]"
      >
        <Image
          src="/dragon-mark.png"
          alt=""
          width={1200}
          height={1100}
          priority
          className="ghost-mask h-auto w-full select-none"
          draggable={false}
        />
      </div>

      <header
        id="top"
        className="sticky top-0 z-[100] m-0 flex h-[56px] items-center justify-between gap-2 border-b border-white/[0.06] bg-[#070708] px-3 pt-0 sm:h-[64px] sm:gap-0 sm:px-8"
      >
        <div className="flex min-w-0 shrink-0 items-center gap-4 sm:gap-8">
          <span className="shrink-0 text-[13px] font-medium tracking-[0.28em] text-white sm:text-[16px] sm:tracking-[0.42em]">
            DRAGON
          </span>
          <div className="mono hidden items-center gap-3 text-[10px] tracking-[0.2em] text-white/30 lg:flex">
            <span className="h-px w-8 bg-white/10" />
            <span>{t.headerTag}</span>
          </div>
        </div>
        <div className="flex min-w-0 items-center gap-1.5 sm:gap-3">
          <div className="mono hidden items-center gap-2 text-[10px] text-white/40 md:flex">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#8CFF4D] shadow-[0_0_8px_#8CFF4D]" />
            {t.keepaLive}
          </div>
          <MarketPicker
            countries={countries}
            onChange={setCountries}
            copy={{
              ariaLabel: t.marketAria,
              regionsAria: t.regionsAria,
              regionsChipAll: t.regionsAll,
              countriesAll: t.marketCountriesAll,
              regionsAll: t.marketRegionsAll,
              countriesSection: t.marketCountriesSection,
              regionsSection: t.marketRegionsSection,
              groupSelectAll: t.marketGroupSelectAll,
              marketGroups: t.marketGroups,
              countries: t.countries,
              regions: t.regions,
              countryCount: t.marketCountryCount,
              regionCount: t.marketRegionCount,
              plusMore: t.marketPlusMore,
              regionPlus: t.marketRegionPlus,
            }}
          />
          <LanguageSwitcher
            locale={lang}
            onChange={setLang}
            ariaLabel={t.langAria}
          />
          <DragonTopLogo />
        </div>
      </header>

      {/* Compact hunt filters: sort · risk (region/country in header picker).
          Stacking: keep this chrome above hero (z-10) so open menus stay clickable. */}
      <div className="relative z-[90] isolate overflow-visible border-b border-white/[0.06] bg-[#070708] px-4 py-3 sm:px-8">
        <div className="flex flex-col items-center gap-2.5 overflow-visible">
          <HuntFilters
            sort={sort}
            onSortChange={setSort}
            riskMode={riskMode}
            onRiskModeChange={setRiskMode}
            copy={{
              sortAria: t.sortAria,
              sortPrefix: t.sortPrefix,
              sortSales: t.sortSales,
              sortProfit: t.sortProfit,
              sortRisk: t.sortRisk,
              riskAria: t.riskAria,
              riskPrefix: t.riskPrefix,
              riskLow: t.riskLow,
              riskLowHint: t.riskLowHint,
              riskBalanced: t.riskBalanced,
              riskBalancedHint: t.riskBalancedHint,
              riskHigh: t.riskHigh,
              riskHighHint: t.riskHighHint,
            }}
          />
        </div>
      </div>

      <section className="relative z-10 flex flex-col items-center px-5 pb-10 pt-10 sm:px-10 sm:pt-14">
        <p
          className="italic tracking-[0.02em]"
          style={{
            fontSize: "clamp(22px, 5vw, 30px)",
            fontWeight: 400,
            color: "rgba(255,255,255,0.35)",
            fontFamily: 'var(--font-cormorant), "Cormorant Garamond", serif',
          }}
        >
          {t.awaken}
        </p>
        <div className="mono mt-2 flex items-center gap-3 text-[9px] tracking-[0.28em] text-white/25 sm:gap-4 sm:text-[10px]">
          <span className="h-px w-8 bg-white/10 sm:w-12" />
          <span>{t.heroMeta}</span>
          <span className="h-px w-8 bg-white/10 sm:w-12" />
        </div>

        <h1 className="mt-6 max-w-[900px] text-center text-[30px] font-bold leading-[0.98] tracking-[-0.03em] sm:mt-10 sm:text-[42px] md:text-[64px]">
          <span className="text-white">{t.heroLine1}</span>
          <br />
          <span className="bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
            {t.heroLine2}
          </span>
        </h1>

        <p className="mt-5 max-w-[640px] text-center text-[13px] leading-[1.65] text-white/50 sm:mt-6 sm:text-[15px]">
          {subtitle}
        </p>

        <div className="mt-7 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:gap-4">
          <a
            href="#hunt"
            onClick={scrollToHunt}
            className="group relative rounded-full bg-[#8CFF4D] px-7 py-[12px] text-[12px] font-semibold tracking-[0.08em] text-black shadow-[0_0_0_1px_#8CFF4D,0_0_30px_rgba(140,255,77,0.45),0_0_60px_rgba(140,255,77,0.2)] transition-all hover:translate-y-[-1px] hover:shadow-[0_0_0_1px_#8CFF4D,0_0_45px_rgba(140,255,77,0.65),0_0_90px_rgba(140,255,77,0.3)] sm:px-8 sm:py-[14px] sm:text-[13px]"
          >
            <span className="relative z-10 flex items-center gap-2">
              {t.cta} <span className="text-[16px]">↗</span>
            </span>
          </a>
          <span className="mono text-[11px] text-white/30">{t.quickSearch}</span>
        </div>

        <PlatformIntegrations
          label={t.integrationsLabel}
          platforms={platforms}
          emptyLabel={t.regionsEmpty}
        />
      </section>

      <ProductResults
        products={products}
        nameOf={(key) => t.productNames[key] ?? key}
        copy={{
          title: t.huntTitle,
          empty: t.huntEmpty,
          softSteer: t.huntSoftSteer,
          profitLabel: t.profitLabel,
          demandLabel: t.demandLabel,
          saturationLabel: t.saturationLabel,
          monthlySalesLabel: t.monthlySalesLabel,
          estSalesLabel: t.estSalesLabel,
          currency: t.currency,
          openProduct: t.openProduct,
          noProductLink: t.noProductLink,
          demandLeadBadge: t.demandLeadBadge,
          detailOpen: t.detailOpen,
          detailClose: t.detailClose,
          detailTitle: t.detailTitle,
          scoreDemandHelp: t.scoreDemandHelp,
          scoreSaturationHelp: t.scoreSaturationHelp,
          scoreProfitHelp: t.scoreProfitHelp,
          scoreMonthlySalesHelp: t.scoreMonthlySalesHelp,
          scoreEstSalesHelp: t.scoreEstSalesHelp,
          platformBreakdownTitle: t.platformBreakdownTitle,
          platformCol: t.platformCol,
          unitsCol: t.unitsCol,
          linkCol: t.linkCol,
          openPlatform: t.openPlatform,
          scenarioTitle: t.scenarioTitle,
          scenarioCol: t.scenarioCol,
          scenarioHint: t.scenarioHint,
          scenarioMin: t.scenarioMin,
          scenarioMid: t.scenarioMid,
          scenarioHigh: t.scenarioHigh,
          platformsCol: t.platformsCol,
          platformsCell: t.platformsCell,
          scenarioUnits: t.scenarioUnits,
          scenarioProfitCol: t.scenarioProfitCol,
        }}
      />

      <section
        id="mods"
        className="relative z-10 mx-auto max-w-[1280px] px-4 pb-10 sm:px-10 sm:pb-12"
      >
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[14px] border border-white/[0.06] bg-white/[0.06] p-px md:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="bg-[#0E0E10] px-5 py-5 sm:px-6 sm:py-6">
              <h2 className="text-[16px] font-semibold tracking-[-0.01em] text-white/90 sm:text-[17px]">
                {f.title}
              </h2>
              <p className="mt-2 text-[13px] leading-[1.55] text-white/40">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-[1280px] px-4 pb-16 sm:px-10 sm:pb-20">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 rounded-full border border-white/[0.06] bg-[#0E0E10] p-1">
            <button
              type="button"
              onClick={() => setMode("all")}
              className={`mono rounded-full px-3 py-2 text-[10px] tracking-[0.08em] transition-all sm:px-4 sm:text-[11px] ${
                activeMode === "all"
                  ? "bg-white text-black"
                  : "text-white/40 hover:bg-white/[0.04] hover:text-white/70"
              }`}
            >
              {t.modeAll}
            </button>
            {cardPlatforms.map((p, i) => {
              const role = t.cardRoles[i % t.cardRoles.length]?.label ?? "";
              const label = t.modeLabel
                .replaceAll("{platform}", p.name.toUpperCase())
                .replaceAll("{role}", role);
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setMode(p.id)}
                  className={`mono rounded-full px-3 py-2 text-[10px] tracking-[0.08em] transition-all sm:px-4 sm:text-[11px] ${
                    activeMode === p.id
                      ? "bg-white text-black"
                      : "text-white/40 hover:bg-white/[0.04] hover:text-white/70"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
          <div className="mono flex items-center gap-2 text-[11px] text-white/30">
            <span className="h-2 w-2 rounded-full bg-[#8CFF4D]" />
            {modeStatus} • {t.live}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-px rounded-[14px] border border-white/[0.06] bg-white/[0.06] p-px md:grid-cols-3">
          {cardPlatforms.map((p, i) => {
            const active = activeMode === "all" || activeMode === p.id;
            const role = t.cardRoles[i % t.cardRoles.length];
            return (
              <div
                key={p.id}
                className={`flex items-start gap-3 px-4 py-4 transition-all ${
                  active ? "bg-[#0E0E10]" : "bg-[#0A0A0C] opacity-40"
                }`}
              >
                <div
                  className={`mt-2 h-2 w-2 shrink-0 rounded-full ${
                    active ? "bg-[#8CFF4D]" : "bg-white/20"
                  }`}
                />
                <div>
                  <PlatformName title={p.name} src={p.src} />
                  <div className="mt-1.5 text-[12px] leading-[1.4] text-white/35">
                    {role?.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mono mt-8 flex flex-wrap items-center justify-between gap-4 text-[10px] tracking-[0.18em] text-white/20">
          <span>{t.footerLeft}</span>
          <span className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-[#8CFF4D]" />
            {t.footerRight}
          </span>
        </div>
      </section>
    </div>
  );
}
