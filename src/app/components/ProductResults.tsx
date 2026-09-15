"use client";

import Image from "next/image";
import { useId, useState } from "react";
import type { HuntProduct, ProductPath } from "@/lib/hunt";
import { isLowRiskPath, riskBandLabel } from "@/lib/hunt";
import {
  ProductCharts,
  type ProductChartsCopy,
} from "./ProductCharts";

export type ProductResultsCopy = {
  title: string;
  empty: string;
  profitLabel: string;
  riskLabel: string;
  demandLabel: string;
  saturationLabel: string;
  softSteer: string;
  currency: string;
  openProduct: string;
  detailOpen: string;
  detailClose: string;
  detailTitle: string;
  scoreDemandHelp: string;
  scoreSaturationHelp: string;
  scoreRiskHelp: string;
  scoreProfitHelp: string;
  detailDemand: string;
  detailSaturation: string;
  detailRisk: string;
  detailProfit: string;
  riskBandLow: string;
  riskBandMid: string;
  riskBandHigh: string;
  detailPathSoft: string;
  detailPathMarket: string;
  detailPathAmazon: string;
  scoresHeuristicBadge: string;
  scoresLiveBadge: string;
  detailSource: string;
  detailBuyPrice: string;
  detailBuyPriceUnknown: string;
  detailCosts: string;
  detailCostProduct: string;
  detailCostShipping: string;
  detailCostCommission: string;
  detailCostAds: string;
  detailCostUnknown: string;
  detailUnitProfit: string;
  detailMonthlyDemand: string;
  detailMonthlyDemandUnit: string;
  detailMonthlyProfit: string;
  dataLive: string;
  dataCatalog: string;
  dataDemo: string;
} & ProductChartsCopy;

type Props = {
  products: HuntProduct[];
  nameOf: (key: string) => string;
  copy: ProductResultsCopy;
};

function riskTone(risk: number): string {
  if (risk <= 35) return "text-[#8CFF4D]";
  if (risk <= 60) return "text-amber-300/90";
  return "text-rose-300/90";
}

function pathWhy(path: ProductPath, risk: number, copy: ProductResultsCopy): string {
  if (path === "dropship" || path === "shopify") return copy.detailPathSoft;
  if (path === "amazon" && risk > 60) return copy.detailPathAmazon;
  return copy.detailPathMarket;
}

function bandText(risk: number, copy: ProductResultsCopy): string {
  const band = riskBandLabel(risk);
  if (band === "low") return copy.riskBandLow;
  if (band === "mid") return copy.riskBandMid;
  return copy.riskBandHigh;
}

function fill(
  template: string,
  vars: Record<string, string | number>,
): string {
  let out = template;
  for (const [k, v] of Object.entries(vars)) {
    out = out.replaceAll(`{${k}}`, String(v));
  }
  return out;
}

function money(currency: string, n: number | null | undefined): string {
  if (n == null || Number.isNaN(n)) return "—";
  const rounded = Math.round(n * 100) / 100;
  return `${currency}${rounded.toLocaleString("tr-TR")}`;
}

function Metric({
  label,
  value,
  valueClass,
  help,
}: {
  label: string;
  value: string | number;
  valueClass?: string;
  help: string;
}) {
  return (
    <div className="min-w-[3.1rem] text-right" title={help}>
      <div className="mono text-[9px] tracking-[0.14em] text-white/25">
        {label}
      </div>
      <div
        className={`mt-0.5 text-[14px] font-semibold tabular-nums sm:text-[15px] ${valueClass ?? "text-white/90"}`}
      >
        {value}
      </div>
    </div>
  );
}

function DetailRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <li className="flex flex-col gap-0.5 sm:flex-row sm:gap-3">
      <span className="mono shrink-0 text-[10px] tracking-[0.12em] text-white/35 sm:w-[11rem]">
        {label}
      </span>
      <span className="text-[12px] leading-relaxed text-white/70">{children}</span>
    </li>
  );
}

function ProductRow({
  product: p,
  name,
  copy,
}: {
  product: HuntProduct;
  name: string;
  copy: ProductResultsCopy;
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const soft = isLowRiskPath(p.path);
  const band = bandText(p.risk, copy);
  const scoresBadge =
    p.scoresMode === "live" ? copy.scoresLiveBadge : copy.scoresHeuristicBadge;
  const dataBadge =
    p.dataMode === "live"
      ? copy.dataLive
      : p.dataMode === "catalog"
        ? copy.dataCatalog
        : copy.dataDemo;

  const costLines: { label: string; value: number | null; key: string }[] = [
    { key: "product", label: copy.detailCostProduct, value: p.costs.product },
    { key: "shipping", label: copy.detailCostShipping, value: p.costs.shipping },
    {
      key: "commission",
      label: copy.detailCostCommission,
      value: p.costs.commission,
    },
    { key: "ads", label: copy.detailCostAds, value: p.costs.ads },
  ];

  return (
    <li className="bg-[#0E0E10]">
      <div className="flex gap-3 px-3 py-3.5 sm:gap-4 sm:px-5 sm:py-4">
        <a
          href={p.productUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-md border border-white/[0.08] bg-[#121214] sm:h-[84px] sm:w-[84px]"
          aria-label={`${copy.openProduct}: ${name}`}
        >
          <Image
            src={p.imageSrc}
            alt={name}
            fill
            sizes="84px"
            className="object-cover transition-opacity hover:opacity-90"
            unoptimized={p.imageSrc.startsWith("http")}
          />
        </a>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[14px] font-medium leading-snug text-white/90">
              {name}
            </span>
            {soft ? (
              <span className="mono rounded border border-[#8CFF4D]/25 bg-[#8CFF4D]/10 px-1.5 py-0.5 text-[9px] tracking-[0.08em] text-[#8CFF4D]/90">
                DS / SHOPIFY
              </span>
            ) : null}
            <span className="mono rounded border border-white/10 bg-white/[0.03] px-1.5 py-0.5 text-[9px] tracking-[0.08em] text-white/40">
              {scoresBadge}
            </span>
          </div>
          <div className="mono mt-1 flex flex-wrap gap-x-2 gap-y-0.5 text-[10px] tracking-[0.12em] text-white/30">
            <span>{p.platform}</span>
            <span className="text-white/15">·</span>
            <span>{dataBadge}</span>
          </div>

          <div className="mt-2.5 flex flex-wrap items-end justify-between gap-2">
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Metric
                label={copy.demandLabel}
                value={p.demand}
                help={copy.scoreDemandHelp}
              />
              <Metric
                label={copy.saturationLabel}
                value={p.saturation}
                help={copy.scoreSaturationHelp}
              />
              <Metric
                label={copy.riskLabel}
                value={p.risk}
                valueClass={riskTone(p.risk)}
                help={copy.scoreRiskHelp}
              />
              <Metric
                label={copy.profitLabel}
                value={money(copy.currency, p.unitProfit)}
                help={copy.scoreProfitHelp}
              />
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            <a
              href={p.productUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-md border border-white/[0.12] bg-white/[0.03] px-2.5 py-1.5 text-[11px] font-medium text-white/75 transition-colors hover:border-[#8CFF4D]/35 hover:text-[#8CFF4D]"
            >
              {copy.openProduct}
              <span aria-hidden className="text-[12px] opacity-70">
                ↗
              </span>
            </a>
            <button
              type="button"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpen((v) => !v)}
              className={`inline-flex items-center rounded-md border px-2.5 py-1.5 text-[11px] font-medium transition-colors ${
                open
                  ? "border-[#8CFF4D]/40 bg-[#8CFF4D]/10 text-[#8CFF4D]"
                  : "border-white/[0.12] bg-white/[0.03] text-white/75 hover:border-white/25 hover:text-white"
              }`}
            >
              {open ? copy.detailClose : copy.detailOpen}
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div
          id={panelId}
          className="border-t border-white/[0.06] bg-[#0A0A0C] px-3 py-3 sm:px-5 sm:py-3.5"
        >
          <p className="mono text-[10px] tracking-[0.14em] text-[#8CFF4D]/80">
            {copy.detailTitle}
          </p>
          <p className="mt-2 text-[12px] leading-relaxed text-white/70">
            {pathWhy(p.path, p.risk, copy)}
          </p>
          <ul className="mt-3 space-y-2.5">
            <DetailRow label={copy.detailSource}>{p.supplier}</DetailRow>
            <DetailRow label={copy.detailBuyPrice}>
              {p.buyPrice != null
                ? money(copy.currency, p.buyPrice)
                : copy.detailBuyPriceUnknown}
            </DetailRow>
            <DetailRow label={copy.detailCosts}>
              <span className="flex flex-col gap-1">
                {costLines.map((line) => (
                  <span key={line.key} className="tabular-nums">
                    {line.label}:{" "}
                    {line.value != null
                      ? money(copy.currency, line.value)
                      : copy.detailCostUnknown}
                  </span>
                ))}
              </span>
            </DetailRow>
            <DetailRow label={copy.detailUnitProfit}>
              {money(copy.currency, p.unitProfit)}
            </DetailRow>
            <DetailRow label={copy.detailMonthlyDemand}>
              {p.monthlyDemandUnits.toLocaleString("tr-TR")}{" "}
              {copy.detailMonthlyDemandUnit}
              <span className="text-white/35">
                {" "}
                ({fill(copy.detailDemand, { n: p.demand })})
              </span>
            </DetailRow>
            <DetailRow label={copy.detailMonthlyProfit}>
              {money(copy.currency, p.monthlyProfit)}
            </DetailRow>
            <DetailRow label={copy.saturationLabel}>
              {fill(copy.detailSaturation, { n: p.saturation })}
            </DetailRow>
            <DetailRow label={copy.riskLabel}>
              {fill(copy.detailRisk, { n: p.risk, band })}
            </DetailRow>
          </ul>
          <ProductCharts
            product={p}
            copy={{
              chartSalesTitle: copy.chartSalesTitle,
              chartProfitTitle: copy.chartProfitTitle,
              chartForecastTitle: copy.chartForecastTitle,
              chartForecastSales: copy.chartForecastSales,
              chartForecastProfit: copy.chartForecastProfit,
              chartLaunch: copy.chartLaunch,
              chartPeak: copy.chartPeak,
              chartNow: copy.chartNow,
              chartHorizon1: copy.chartHorizon1,
              chartHorizon3: copy.chartHorizon3,
              chartHorizon6: copy.chartHorizon6,
              chartEstimatedBadge: copy.chartEstimatedBadge,
              chartLiveBadge: copy.chartLiveBadge,
              chartUnits: copy.chartUnits,
              chartMonthLabel: copy.chartMonthLabel,
              currency: copy.currency,
            }}
          />
        </div>
      ) : null}
    </li>
  );
}

export function ProductResults({ products, nameOf, copy }: Props) {
  return (
    <section
      id="hunt"
      className="relative z-10 mx-auto max-w-[1280px] px-4 pb-10 sm:px-10 sm:pb-12"
    >
      <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
        <h2 className="text-[15px] font-semibold tracking-[-0.01em] text-white/85 sm:text-[16px]">
          {copy.title}
        </h2>
        <p className="mono max-w-[440px] text-right text-[10px] leading-snug tracking-[0.06em] text-white/30">
          {copy.softSteer}
        </p>
      </div>

      {products.length === 0 ? (
        <p className="rounded-[14px] border border-white/[0.06] bg-[#0E0E10] px-5 py-8 text-center text-[13px] text-white/40">
          {copy.empty}
        </p>
      ) : (
        <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-[14px] border border-white/[0.06] bg-white/[0.06] p-px lg:grid-cols-2">
          {products.map((p) => (
            <ProductRow
              key={p.id}
              product={p}
              name={p.title || (p.nameKey ? nameOf(p.nameKey) : p.id)}
              copy={copy}
            />
          ))}
        </ul>
      )}
    </section>
  );
}
