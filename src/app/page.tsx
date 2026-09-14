"use client";

import Image from "next/image";
import { useState } from "react";
import { DragonTopLogo } from "./components/DragonTopLogo";

const MODES = [
  { k: "all", label: "TÜM MODLAR" },
  { k: "A", label: "AMAZON • Product Research" },
  { k: "B", label: "SHOPIFY • Store Spy" },
  { k: "C", label: "TIKTOK • Viral Hunt" },
] as const;

const MODE_CARDS = [
  {
    id: "A",
    title: "Amazon",
    desc: "BSR, Yorum, Aylık Satış, Trend — Amazon'da kanıtlanmış ürünleri bul",
  },
  {
    id: "B",
    title: "Shopify",
    desc: "Shopify mağaza sayısı, ciro tahmini, tema analizi — satan store'ları kopyala",
  },
  {
    id: "C",
    title: "TikTok",
    desc: "Viral Score, izlenme, engagement — TikTok'ta patlayan ürünleri yakala",
  },
] as const;

export default function Home() {
  const [lang, setLang] = useState<"tr" | "en">("tr");
  const [mode, setMode] = useState<(typeof MODES)[number]["k"]>("all");

  return (
    <div className="min-h-screen bg-[#070708] text-white selection:bg-[#8CFF4D]/30">
      {/* Meta ghost — fixed 0.20 opacity, radial mask */}
      <div
        aria-hidden
        className="pointer-events-none fixed left-1/2 top-1/2 z-0 w-[620px] max-w-[92vw] -translate-x-1/2 -translate-y-[42%] opacity-[0.20]"
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

      {/* Header — Meta look, top of document flow (NOT sticky) */}
      <header className="relative z-50 flex h-[76px] items-center justify-between border-b border-white/[0.06] bg-[#070708] px-6 md:px-10">
        <div className="flex items-center gap-8">
          <span className="text-[16px] font-medium tracking-[0.38em] text-white">
            DRAGON
          </span>
          <div className="mono hidden items-center gap-3 text-[10px] tracking-[0.2em] text-white/30 md:flex">
            <span className="h-px w-8 bg-white/10" />
            <span>AMAZON • DS FUSION • v2.1</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="mono hidden items-center gap-2 text-[10px] text-white/40 md:flex">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#8CFF4D] shadow-[0_0_8px_#8CFF4D]" />
            KEEPA • LIVE
          </div>
          <DragonTopLogo />
        </div>
      </header>

      {/* Hero — Meta copy & layout */}
      <section className="relative z-10 flex flex-col items-center px-6 pb-10 pt-20 md:px-10 md:pt-28">
        <p
          className="italic tracking-[0.02em]"
          style={{
            fontSize: 30,
            fontWeight: 400,
            color: "rgba(255,255,255,0.35)",
            fontFamily: 'var(--font-cormorant), "Cormorant Garamond", serif',
          }}
        >
          Dragon Awakens
        </p>
        <div className="mono mt-3 flex items-center gap-4 text-[10px] tracking-[0.28em] text-white/25">
          <span className="h-px w-12 bg-white/10" />
          <span>SABIT • 0.20 OPACITY • DEGRADE</span>
          <span className="h-px w-12 bg-white/10" />
        </div>

        <h1 className="mt-10 max-w-[820px] text-center text-[42px] font-bold leading-[0.95] tracking-[-0.03em] md:text-[72px]">
          <span className="text-white">Validated by Amazon.</span>
          <br />
          <span className="bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
            Sold by Shopify.
          </span>
        </h1>

        <p className="mt-6 max-w-[560px] text-center text-[14px] leading-[1.6] text-white/50 md:text-[15px]">
          {lang === "tr"
            ? "Amazon'da kanıtlanmış ürünü bul, en ucuz tedarikçiyi gör, Shopify'a tek tıkla aktar"
            : "Find proven winners on Amazon with Amazon Product Research, see the cheapest supplier instantly, push to Shopify in one click."}
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#mods"
            className="group relative rounded-full bg-[#8CFF4D] px-8 py-[14px] text-[13px] font-semibold tracking-[0.08em] text-black shadow-[0_0_0_1px_#8CFF4D,0_0_30px_rgba(140,255,77,0.45),0_0_60px_rgba(140,255,77,0.2)] transition-all hover:translate-y-[-1px] hover:shadow-[0_0_0_1px_#8CFF4D,0_0_45px_rgba(140,255,77,0.65),0_0_90px_rgba(140,255,77,0.3)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              ÜRÜN AVINI BAŞLAT <span className="text-[16px]">↗</span>
            </span>
          </a>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setLang(lang === "tr" ? "en" : "tr")}
              className="mono rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] tracking-widest text-white/60 hover:bg-white/[0.06] hover:text-white"
            >
              {lang === "tr" ? "EN" : "TR"} • ÇEVİR
            </button>
            <span className="mono text-[11px] text-white/30">⌘K • HIZLI ARA</span>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 border-y border-white/[0.06] bg-white/[0.01] px-6 py-4 backdrop-blur md:gap-12">
          <span className="mono text-[10px] tracking-[0.2em] text-white/20">
            ENTEGRASYONLAR
          </span>
          <span className="text-[13px] text-white/40">
            Amazon API • Keepa • Shopify API • TikTok Ads • AliExpress •
            CJdropshipping • Temu
          </span>
        </div>
      </section>

      <section
        id="mods"
        className="relative z-10 mx-auto max-w-[1280px] px-6 pb-20 md:px-10"
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 rounded-full border border-white/[0.06] bg-[#0E0E10] p-1">
            {MODES.map((m) => (
              <button
                key={m.k}
                type="button"
                onClick={() => setMode(m.k)}
                className={`mono rounded-full px-4 py-2 text-[11px] tracking-[0.08em] transition-all ${
                  mode === m.k
                    ? "bg-white text-black"
                    : "text-white/40 hover:bg-white/[0.04] hover:text-white/70"
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
          <div className="mono flex items-center gap-2 text-[11px] text-white/30">
            <span className="h-2 w-2 rounded-full bg-[#8CFF4D]" />
            {mode === "all"
              ? "3 MOD"
              : mode === "A"
                ? "AMAZON MODU"
                : mode === "B"
                  ? "SHOPIFY MODU"
                  : "TIKTOK MODU"}{" "}
            • CANLI
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-px rounded-[14px] border border-white/[0.06] bg-white/[0.06] p-px md:grid-cols-3">
          {MODE_CARDS.map((card) => {
            const active = mode === "all" || mode === card.id;
            return (
              <div
                key={card.id}
                className={`flex items-center gap-3 px-4 py-3 transition-all ${
                  active ? "bg-[#0E0E10]" : "bg-[#0A0A0C] opacity-40"
                }`}
              >
                <div
                  className={`h-2 w-2 rounded-full ${
                    active ? "bg-[#8CFF4D]" : "bg-white/20"
                  }`}
                />
                <div>
                  <div className="mono text-[11px] tracking-[0.16em] text-white/60">
                    {card.title}
                  </div>
                  <div className="mt-0.5 text-[11px] leading-[1.3] text-white/30">
                    {card.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mono mt-8 flex flex-wrap items-center justify-between gap-4 text-[10px] tracking-[0.18em] text-white/20">
          <span>© DRAGON • AMAZON PRODUCT RESEARCH • DROPSHIPPING HIZI</span>
          <span className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-[#8CFF4D]" />
            BUILT FOR HUNTERS
          </span>
        </div>
      </section>
    </div>
  );
}
