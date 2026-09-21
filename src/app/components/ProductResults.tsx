"use client";

import Image from "next/image";
import { useId, useState, type ReactNode } from "react";
import type { DemoProduct } from "../i18n/demo-products";
import {
  hasProductLink,
  isLowRiskPath,
  salesScenarios,
  scenarioProfit,
  totalProfit,
  totalRevenue,
} from "../i18n/demo-products";

export type ProductResultsCopy = {
  title: string;
  empty: string;
  softSteer: string;
  currency: string;
  openProduct: string;
  noProductLink: string;
  detailOpen: string;
  detailClose: string;
  detailTitle: string;
  demandLeadBadge: string;
  /** Row 1 */
  monthlySalesLabel: string;
  netProfitLabel: string;
  totalProfitLabel: string;
  totalRevenueLabel: string;
  /** Row 2 */
  targetSalesLabel: string;
  scoreMonthlySalesHelp: string;
  scoreNetProfitHelp: string;
  scoreTotalProfitHelp: string;
  scoreTotalRevenueHelp: string;
  scoreTargetSalesHelp: string;
  platformBreakdownTitle: string;
  platformCol: string;
  unitsCol: string;
  linkCol: string;
  openPlatform: string;
  scenarioTitle: string;
  scenarioCol: string;
  scenarioHint: string;
  scenarioMin: string;
  scenarioMid: string;
  scenarioHigh: string;
  platformsCol: string;
  platformsCell: string;
  scenarioUnits: string;
  scenarioProfitCol: string;
};

type Props = {
  products: DemoProduct[];
  nameOf: (key: string) => string;
  copy: ProductResultsCopy;
};

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

function formatUnits(n: number): string {
  return n.toLocaleString("tr-TR");
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
    <div className="min-w-0 text-left" title={help}>
      <div className="mono truncate text-[8px] tracking-[0.1em] text-white/30 sm:text-[9px] sm:tracking-[0.12em]">
        {label}
      </div>
      <div
        className={`mt-0.5 truncate text-[13px] font-semibold tabular-nums sm:text-[14px] ${valueClass ?? "text-white/90"}`}
      >
        {value}
      </div>
    </div>
  );
}

function ProductThumb({
  product: p,
  name,
  openLabel,
}: {
  product: DemoProduct;
  name: string;
  openLabel: string;
}) {
  const img = (
    <Image
      src={p.imageSrc}
      alt=""
      fill
      sizes="84px"
      className="object-cover transition-opacity hover:opacity-90"
    />
  );
  const shell =
    "relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-md border border-white/[0.08] bg-[#121214] sm:h-[84px] sm:w-[84px]";
  if (hasProductLink(p) && p.productUrl) {
    return (
      <a
        href={p.productUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={shell}
        aria-label={`${openLabel}: ${name}`}
      >
        {img}
      </a>
    );
  }
  return <div className={shell}>{img}</div>;
}

function DataTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: ReactNode[][];
}) {
  return (
    <div className="overflow-x-auto rounded-md border border-white/[0.08]">
      <table className="w-full min-w-[280px] border-collapse text-left text-[12px]">
        <thead>
          <tr className="border-b border-white/[0.08] bg-white/[0.03]">
            {headers.map((h) => (
              <th
                key={h}
                className="mono px-2.5 py-2 text-[9px] font-medium tracking-[0.12em] text-white/40"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((cells, i) => (
            <tr
              key={i}
              className="border-b border-white/[0.05] last:border-0"
            >
              {cells.map((cell, j) => (
                <td key={j} className="px-2.5 py-2 align-middle text-white/75">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ProductRow({
  product: p,
  name,
  copy,
}: {
  product: DemoProduct;
  name: string;
  copy: ProductResultsCopy;
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const soft = isLowRiskPath(p.path);
  const linked = hasProductLink(p);
  const showDemandBadge = Boolean(p.demandLead) || !linked;
  const tracked = Math.max(1, p.platformSales?.length ?? 1);
  const scenarios = salesScenarios(p.estMonthlySales, p.monthlySales, tracked);
  const scenarioLabel = {
    min: copy.scenarioMin,
    mid: copy.scenarioMid,
    high: copy.scenarioHigh,
  } as const;

  return (
    <li className="bg-[#0E0E10]">
      <div className="px-3 py-3.5 sm:px-5 sm:py-4">
        <div className="flex gap-3 sm:gap-4">
          <ProductThumb product={p} name={name} openLabel={copy.openProduct} />
          <div className="min-w-0 flex-1">
            <div className="flex flex-col gap-1.5">
              {showDemandBadge ? (
                <span className="mono w-fit rounded border border-amber-300/35 bg-amber-300/10 px-1.5 py-0.5 text-[9px] tracking-[0.08em] text-amber-100/95">
                  {copy.demandLeadBadge}
                </span>
              ) : null}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[14px] font-medium leading-snug text-white/90">
                  {name}
                </span>
                {soft ? (
                  <span className="mono rounded border border-[#8CFF4D]/25 bg-[#8CFF4D]/10 px-1.5 py-0.5 text-[9px] tracking-[0.08em] text-[#8CFF4D]/90">
                    DS / SHOPIFY
                  </span>
                ) : null}
              </div>
            </div>
            <div className="mono mt-1 text-[10px] tracking-[0.12em] text-white/30">
              {p.platform}
              {tracked > 1 ? ` · ${tracked} platform` : ""}
            </div>
          </div>
        </div>

        <div className="mt-3 space-y-2">
          <div className="grid grid-cols-4 gap-2 sm:gap-3">
            <Metric
              label={copy.monthlySalesLabel}
              value={formatUnits(p.monthlySales)}
              valueClass="text-[#8CFF4D]/95"
              help={copy.scoreMonthlySalesHelp}
            />
            <Metric
              label={copy.netProfitLabel}
              value={`${copy.currency}${formatUnits(p.profit)}`}
              help={copy.scoreNetProfitHelp}
            />
            <Metric
              label={copy.totalProfitLabel}
              value={`${copy.currency}${formatUnits(totalProfit(p.profit, p.monthlySales))}`}
              help={copy.scoreTotalProfitHelp}
            />
            <Metric
              label={copy.totalRevenueLabel}
              value={`${copy.currency}${formatUnits(totalRevenue(p.price, p.monthlySales))}`}
              help={copy.scoreTotalRevenueHelp}
            />
          </div>
          <div className="grid grid-cols-4 gap-2 sm:gap-3">
            <Metric
              label={copy.targetSalesLabel}
              value={formatUnits(p.estMonthlySales)}
              valueClass="text-white/90"
              help={copy.scoreTargetSalesHelp}
            />
            <Metric
              label={copy.netProfitLabel}
              value={`${copy.currency}${formatUnits(p.profit)}`}
              help={copy.scoreNetProfitHelp}
            />
            <Metric
              label={copy.totalProfitLabel}
              value={`${copy.currency}${formatUnits(totalProfit(p.profit, p.estMonthlySales))}`}
              help={copy.scoreTotalProfitHelp}
            />
            <Metric
              label={copy.totalRevenueLabel}
              value={`${copy.currency}${formatUnits(totalRevenue(p.price, p.estMonthlySales))}`}
              help={copy.scoreTotalRevenueHelp}
            />
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
            {linked && p.productUrl ? (
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
            ) : (
              <span className="inline-flex items-center rounded-md border border-amber-300/20 bg-amber-300/[0.06] px-2.5 py-1.5 text-[11px] font-medium text-amber-200/80">
                {copy.noProductLink}
              </span>
            )}
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
          className="space-y-4 border-t border-white/[0.06] bg-[#0A0A0C] px-3 py-3.5 sm:px-5 sm:py-4"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <p className="mono text-[10px] tracking-[0.14em] text-[#8CFF4D]/80">
              {copy.detailTitle}
            </p>
            <p className="mono text-[11px] tabular-nums text-white/70">
              {copy.monthlySalesLabel}:{" "}
              <span className="font-semibold text-[#8CFF4D]">
                {formatUnits(p.monthlySales)}
              </span>
            </p>
          </div>

          <div>
            <p className="mono mb-2 text-[9px] tracking-[0.12em] text-white/35">
              {copy.platformBreakdownTitle}
            </p>
            <DataTable
              headers={[copy.platformCol, copy.unitsCol, copy.linkCol]}
              rows={(p.platformSales ?? []).map((s) => [
                <span key="p" className="font-medium text-white/85">
                  {s.platform}
                </span>,
                <span key="u" className="tabular-nums text-white/80">
                  {formatUnits(s.units)}
                </span>,
                s.url ? (
                  <a
                    key="l"
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8CFF4D]/85 hover:underline"
                  >
                    {copy.openPlatform} ↗
                  </a>
                ) : (
                  <span key="l" className="text-white/25">
                    —
                  </span>
                ),
              ])}
            />
          </div>

          <div>
            <p className="mono mb-1 text-[9px] tracking-[0.12em] text-white/35">
              {copy.scenarioTitle}
            </p>
            <p className="mb-2 text-[11px] leading-snug text-white/40">
              {copy.scenarioHint}
            </p>
            <DataTable
              headers={[
                copy.scenarioCol,
                copy.platformsCol,
                copy.scenarioUnits,
                copy.scenarioProfitCol,
              ]}
              rows={scenarios.map((s) => [
                <span key="n" className="font-medium text-white/85">
                  {scenarioLabel[s.id]}
                </span>,
                <span key="p" className="tabular-nums text-white/70">
                  {fill(copy.platformsCell, { n: s.platforms })}
                </span>,
                <span key="u" className="tabular-nums text-[#8CFF4D]/90">
                  {formatUnits(s.units)}
                </span>,
                <span key="$" className="tabular-nums text-white/80">
                  {copy.currency}
                  {formatUnits(scenarioProfit(p.profit, s.units))}
                </span>,
              ])}
            />
          </div>
        </div>
      ) : null}
    </li>
  );
}

export function ProductResults({ products, nameOf, copy }: Props) {
  return (
    <section
      id="hunt"
      className="relative z-10 mx-auto max-w-[1400px] px-4 pb-10 sm:px-10 sm:pb-12"
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
        <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-[14px] border border-white/[0.06] bg-white/[0.06] p-px xl:grid-cols-2">
          {products.map((p) => (
            <ProductRow
              key={p.id}
              product={p}
              name={nameOf(p.nameKey)}
              copy={copy}
            />
          ))}
        </ul>
      )}
    </section>
  );
}
