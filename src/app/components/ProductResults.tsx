"use client";

import type { DemoProduct } from "../i18n/demo-products";
import { isLowRiskPath } from "../i18n/demo-products";

export type ProductResultsCopy = {
  title: string;
  empty: string;
  profitLabel: string;
  riskLabel: string;
  demandLabel: string;
  saturationLabel: string;
  softSteer: string;
  currency: string;
};

type Props = {
  products: DemoProduct[];
  nameOf: (key: string) => string;
  copy: ProductResultsCopy;
};

function riskTone(risk: number): string {
  if (risk <= 35) return "text-[#8CFF4D]";
  if (risk <= 60) return "text-amber-300/90";
  return "text-rose-300/90";
}

function Metric({
  label,
  value,
  valueClass,
}: {
  label: string;
  value: string | number;
  valueClass?: string;
}) {
  return (
    <div className="min-w-[3.25rem] text-right">
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
          {products.map((p) => {
            const soft = isLowRiskPath(p.path);
            return (
              <li
                key={p.id}
                className="flex flex-col gap-3 bg-[#0E0E10] px-4 py-4 sm:flex-row sm:items-start sm:justify-between sm:gap-4 sm:px-5"
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[14px] font-medium text-white/90">
                      {nameOf(p.nameKey)}
                    </span>
                    {soft ? (
                      <span className="mono rounded border border-[#8CFF4D]/25 bg-[#8CFF4D]/10 px-1.5 py-0.5 text-[9px] tracking-[0.08em] text-[#8CFF4D]/90">
                        DS / SHOPIFY
                      </span>
                    ) : null}
                  </div>
                  <div className="mono mt-1 text-[10px] tracking-[0.12em] text-white/30">
                    {p.platform}
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 sm:shrink-0 sm:justify-end sm:gap-4">
                  <Metric label={copy.demandLabel} value={p.demand} />
                  <Metric label={copy.saturationLabel} value={p.saturation} />
                  <Metric
                    label={copy.riskLabel}
                    value={p.risk}
                    valueClass={riskTone(p.risk)}
                  />
                  <Metric
                    label={copy.profitLabel}
                    value={`${copy.currency}${p.profit}`}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
