"use client";

import { useId, useMemo, useState } from "react";
import type { HuntProduct } from "@/lib/hunt";
import {
  buildProductChartSeries,
  type ChartHistoryMode,
  type ChartPoint,
} from "@/lib/hunt/charts";

export type ProductChartsCopy = {
  chartSalesTitle: string;
  chartProfitTitle: string;
  chartForecastTitle: string;
  chartForecastSales: string;
  chartForecastProfit: string;
  chartLaunch: string;
  chartPeak: string;
  chartNow: string;
  chartWeekly: string;
  chartMonthly: string;
  chartEstimatedBadge: string;
  chartLiveBadge: string;
  chartUnits: string;
  chartWeekLabel: string;
  chartMonthLabel: string;
  currency: string;
};

type Props = {
  product: HuntProduct;
  copy: ProductChartsCopy;
};

type ForecastMode = "weekly" | "monthly";

function historyLabel(key: string, copy: ProductChartsCopy): string {
  if (key === "launch") return copy.chartLaunch;
  if (key === "peak") return copy.chartPeak;
  if (key === "now") return copy.chartNow;
  return key;
}

function formatInt(n: number): string {
  return Math.round(n).toLocaleString("tr-TR");
}

function formatMoney(currency: string, n: number): string {
  return `${currency}${Math.round(n).toLocaleString("tr-TR")}`;
}

function SparkBars({
  points,
  valueOf,
  accent,
  highlightKeys,
  ariaLabel,
}: {
  points: ChartPoint[];
  valueOf: (p: ChartPoint) => number;
  accent: string;
  highlightKeys?: Set<string>;
  ariaLabel: string;
}) {
  const max = Math.max(1, ...points.map(valueOf));
  const gradId = useId();

  return (
    <svg
      viewBox={`0 0 ${Math.max(points.length * 36, 120)} 88`}
      className="h-[88px] w-full"
      role="img"
      aria-label={ariaLabel}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={accent} stopOpacity="0.95" />
          <stop offset="100%" stopColor={accent} stopOpacity="0.25" />
        </linearGradient>
      </defs>
      {points.map((p, i) => {
        const v = valueOf(p);
        const h = Math.max(4, (v / max) * 68);
        const x = i * 36 + 8;
        const y = 76 - h;
        const hi = highlightKeys?.has(p.key);
        return (
          <g key={p.key}>
            <rect
              x={x}
              y={y}
              width={20}
              height={h}
              rx={3}
              fill={`url(#${gradId})`}
              opacity={hi ? 1 : 0.72}
              className="origin-bottom transition-[height,opacity] duration-500 ease-out"
            >
              <animate
                attributeName="height"
                from="0"
                to={String(h)}
                dur="0.55s"
                fill="freeze"
                calcMode="spline"
                keySplines="0.22 1 0.36 1"
              />
              <animate
                attributeName="y"
                from="76"
                to={String(y)}
                dur="0.55s"
                fill="freeze"
                calcMode="spline"
                keySplines="0.22 1 0.36 1"
              />
            </rect>
            {hi ? (
              <circle
                cx={x + 10}
                cy={y - 4}
                r={2.2}
                fill={accent}
                className="animate-pulse"
              />
            ) : null}
          </g>
        );
      })}
      <line
        x1="4"
        y1="76"
        x2={points.length * 36 - 4}
        y2="76"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="1"
      />
    </svg>
  );
}

function LineSeries({
  points,
  valueOf,
  accent,
  ariaLabel,
}: {
  points: ChartPoint[];
  valueOf: (p: ChartPoint) => number;
  accent: string;
  ariaLabel: string;
}) {
  const max = Math.max(1, ...points.map(valueOf));
  const w = Math.max(points.length * 28, 160);
  const h = 88;
  const padX = 10;
  const padY = 10;
  const innerW = w - padX * 2;
  const innerH = h - padY * 2 - 8;

  const coords = points.map((p, i) => {
    const x =
      padX + (points.length === 1 ? innerW / 2 : (i / (points.length - 1)) * innerW);
    const y = padY + innerH - (valueOf(p) / max) * innerH;
    return { x, y, p };
  });

  const d = coords
    .map((c, i) => `${i === 0 ? "M" : "L"}${c.x.toFixed(1)} ${c.y.toFixed(1)}`)
    .join(" ");

  const area =
    `${d} L${coords[coords.length - 1].x.toFixed(1)} ${(padY + innerH).toFixed(1)} ` +
    `L${coords[0].x.toFixed(1)} ${(padY + innerH).toFixed(1)} Z`;

  const gradId = useId();
  let peakIdx = 0;
  coords.forEach((c, i) => {
    if (valueOf(c.p) > valueOf(coords[peakIdx].p)) peakIdx = i;
  });

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="h-[88px] w-full"
      role="img"
      aria-label={ariaLabel}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={accent} stopOpacity="0.28" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill={`url(#${gradId})`}>
        <animate
          attributeName="opacity"
          from="0"
          to="1"
          dur="0.6s"
          fill="freeze"
        />
      </path>
      <path
        d={d}
        fill="none"
        stroke={accent}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
        strokeDasharray="1"
        strokeDashoffset="1"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="1"
          to="0"
          dur="0.7s"
          fill="freeze"
          calcMode="spline"
          keySplines="0.22 1 0.36 1"
        />
      </path>
      {coords.map((c, i) => (
        <circle
          key={c.p.key}
          cx={c.x}
          cy={c.y}
          r={i === peakIdx ? 3.4 : 2.2}
          fill={i === peakIdx ? accent : "#0A0A0C"}
          stroke={accent}
          strokeWidth="1.5"
        >
          <animate
            attributeName="opacity"
            from="0"
            to="1"
            begin="0.35s"
            dur="0.35s"
            fill="freeze"
          />
        </circle>
      ))}
    </svg>
  );
}

function ChartCard({
  title,
  badge,
  historyMode,
  children,
}: {
  title: string;
  badge: string;
  historyMode: ChartHistoryMode;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-white/[0.07] bg-[#0C0C0E] px-3 py-3 sm:px-3.5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-[12px] font-medium tracking-[-0.01em] text-white/80">
          {title}
        </h3>
        <span
          className={`mono rounded border px-1.5 py-0.5 text-[9px] tracking-[0.08em] ${
            historyMode === "live"
              ? "border-[#8CFF4D]/30 bg-[#8CFF4D]/10 text-[#8CFF4D]/90"
              : "border-amber-300/25 bg-amber-300/10 text-amber-200/80"
          }`}
        >
          {badge}
        </span>
      </div>
      <div className="mt-2 space-y-1.5">{children}</div>
    </div>
  );
}

function PointLegend({
  points,
  labelOf,
  valueOf,
  format,
}: {
  points: ChartPoint[];
  labelOf: (p: ChartPoint) => string;
  valueOf: (p: ChartPoint) => number;
  format: (n: number) => string;
}) {
  return (
    <ul className="flex flex-wrap gap-x-3 gap-y-1">
      {points.map((p) => (
        <li key={p.key} className="mono text-[10px] tracking-[0.04em] text-white/45">
          <span className="text-white/30">{labelOf(p)}</span>{" "}
          <span className="tabular-nums text-white/70">{format(valueOf(p))}</span>
        </li>
      ))}
    </ul>
  );
}

export function ProductCharts({ product, copy }: Props) {
  const [forecastMode, setForecastMode] = useState<ForecastMode>("weekly");
  const series = useMemo(() => buildProductChartSeries(product), [product]);
  const badge =
    series.historyMode === "live"
      ? copy.chartLiveBadge
      : copy.chartEstimatedBadge;

  const forecast =
    forecastMode === "weekly" ? series.weeklyForecast : series.monthlyForecast;

  const forecastLabel = (p: ChartPoint) => {
    if (forecastMode === "weekly") {
      const n = p.key.replace(/^w/i, "");
      return copy.chartWeekLabel.replace("{n}", n);
    }
    const n = p.key.replace(/^m/i, "");
    return copy.chartMonthLabel.replace("{n}", n);
  };

  return (
    <div className="mt-4 space-y-3 border-t border-white/[0.06] pt-3.5">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <ChartCard
          title={copy.chartSalesTitle}
          badge={badge}
          historyMode={series.historyMode}
        >
          <SparkBars
            points={series.history}
            valueOf={(p) => p.sales}
            accent="#8CFF4D"
            highlightKeys={new Set(["peak", "now"])}
            ariaLabel={copy.chartSalesTitle}
          />
          <PointLegend
            points={series.history}
            labelOf={(p) => historyLabel(p.key, copy)}
            valueOf={(p) => p.sales}
            format={(n) => `${formatInt(n)} ${copy.chartUnits}`}
          />
        </ChartCard>

        <ChartCard
          title={copy.chartProfitTitle}
          badge={badge}
          historyMode={series.historyMode}
        >
          <SparkBars
            points={series.history}
            valueOf={(p) => p.profit}
            accent="#E8FF9A"
            highlightKeys={new Set(["peak", "now"])}
            ariaLabel={copy.chartProfitTitle}
          />
          <PointLegend
            points={series.history}
            labelOf={(p) => historyLabel(p.key, copy)}
            valueOf={(p) => p.profit}
            format={(n) => formatMoney(copy.currency, n)}
          />
        </ChartCard>
      </div>

      <div className="rounded-lg border border-white/[0.07] bg-[#0C0C0E] px-3 py-3 sm:px-3.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-[12px] font-medium tracking-[-0.01em] text-white/80">
            {copy.chartForecastTitle}
          </h3>
          <div className="flex items-center gap-2">
            <span
              className={`mono rounded border px-1.5 py-0.5 text-[9px] tracking-[0.08em] ${
                series.historyMode === "live"
                  ? "border-[#8CFF4D]/30 bg-[#8CFF4D]/10 text-[#8CFF4D]/90"
                  : "border-amber-300/25 bg-amber-300/10 text-amber-200/80"
              }`}
            >
              {badge}
            </span>
            <div
              role="group"
              aria-label={copy.chartForecastTitle}
              className="inline-flex rounded-md border border-white/[0.1] bg-black/30 p-0.5"
            >
              <button
                type="button"
                onClick={() => setForecastMode("weekly")}
                className={`mono rounded px-2 py-1 text-[9px] tracking-[0.1em] transition-colors ${
                  forecastMode === "weekly"
                    ? "bg-[#8CFF4D]/15 text-[#8CFF4D]"
                    : "text-white/40 hover:text-white/70"
                }`}
              >
                {copy.chartWeekly}
              </button>
              <button
                type="button"
                onClick={() => setForecastMode("monthly")}
                className={`mono rounded px-2 py-1 text-[9px] tracking-[0.1em] transition-colors ${
                  forecastMode === "monthly"
                    ? "bg-[#8CFF4D]/15 text-[#8CFF4D]"
                    : "text-white/40 hover:text-white/70"
                }`}
              >
                {copy.chartMonthly}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <p className="mono text-[9px] tracking-[0.14em] text-white/30">
              {copy.chartForecastSales}
            </p>
            <LineSeries
              key={`sales-${forecastMode}`}
              points={forecast}
              valueOf={(p) => p.sales}
              accent="#8CFF4D"
              ariaLabel={copy.chartForecastSales}
            />
            <PointLegend
              points={forecast}
              labelOf={forecastLabel}
              valueOf={(p) => p.sales}
              format={(n) => `${formatInt(n)} ${copy.chartUnits}`}
            />
          </div>
          <div>
            <p className="mono text-[9px] tracking-[0.14em] text-white/30">
              {copy.chartForecastProfit}
            </p>
            <LineSeries
              key={`profit-${forecastMode}`}
              points={forecast}
              valueOf={(p) => p.profit}
              accent="#E8FF9A"
              ariaLabel={copy.chartForecastProfit}
            />
            <PointLegend
              points={forecast}
              labelOf={forecastLabel}
              valueOf={(p) => p.profit}
              format={(n) => formatMoney(copy.currency, n)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
