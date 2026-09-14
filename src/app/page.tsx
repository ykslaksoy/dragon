"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { DragonTopLogo } from "./components/DragonTopLogo";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import {
  PlatformIntegrations,
  PlatformName,
} from "./components/PlatformMark";
import {
  DEFAULT_LOCALE,
  getDictionary,
  type Locale,
} from "./i18n/dictionaries";

function scrollToMods(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  const el = document.getElementById("mods");
  if (!el) return;
  // Keep URL clean (no #mods) so reloads never jump past the header.
  history.replaceState(null, "", window.location.pathname + window.location.search);
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [lang, setLang] = useState<Locale>(DEFAULT_LOCALE);
  const [mode, setMode] = useState<"all" | "A" | "B" | "C">("all");
  const t = getDictionary(lang);

  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : lang;
  }, [lang]);

  return (
    <div className="m-0 min-h-dvh bg-[#070708] p-0 text-white selection:bg-[#8CFF4D]/30">
      {/* Meta ghost — behind content, does not affect layout */}
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

      {/*
        Document-flow header at y=0. sticky+top-0 is an insurance so iOS cannot
        leave the brand scrolled just out of the first viewport; at scrollY=0 it
        looks identical to a static header.
      */}
      <header
        id="top"
        className="sticky top-0 z-50 m-0 flex h-[56px] items-center justify-between border-b border-white/[0.06] bg-[#070708] px-4 pt-0 sm:h-[64px] sm:px-8"
      >
        <div className="flex min-w-0 items-center gap-4 sm:gap-8">
          <span className="shrink-0 text-[15px] font-medium tracking-[0.42em] text-white sm:text-[16px]">
            DRAGON
          </span>
          <div className="mono hidden items-center gap-3 text-[10px] tracking-[0.2em] text-white/30 lg:flex">
            <span className="h-px w-8 bg-white/10" />
            <span>{t.headerTag}</span>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-3 sm:gap-5">
          <div className="mono hidden items-center gap-2 text-[10px] text-white/40 md:flex">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#8CFF4D] shadow-[0_0_8px_#8CFF4D]" />
            {t.keepaLive}
          </div>
          <LanguageSwitcher
            locale={lang}
            onChange={setLang}
            ariaLabel={t.langAria}
          />
          <DragonTopLogo />
        </div>
      </header>

      {/* Hero — matches desired first viewport under flush header */}
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
          {t.subtitle}
        </p>

        <div className="mt-7 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:gap-4">
          <a
            href="#mods"
            onClick={scrollToMods}
            className="group relative rounded-full bg-[#8CFF4D] px-7 py-[12px] text-[12px] font-semibold tracking-[0.08em] text-black shadow-[0_0_0_1px_#8CFF4D,0_0_30px_rgba(140,255,77,0.45),0_0_60px_rgba(140,255,77,0.2)] transition-all hover:translate-y-[-1px] hover:shadow-[0_0_0_1px_#8CFF4D,0_0_45px_rgba(140,255,77,0.65),0_0_90px_rgba(140,255,77,0.3)] sm:px-8 sm:py-[14px] sm:text-[13px]"
          >
            <span className="relative z-10 flex items-center gap-2">
              {t.cta} <span className="text-[16px]">↗</span>
            </span>
          </a>
          <span className="mono text-[11px] text-white/30">{t.quickSearch}</span>
        </div>

        <PlatformIntegrations label={t.integrationsLabel} />
      </section>

      <section
        id="mods"
        className="relative z-10 mx-auto max-w-[1280px] px-4 pb-10 sm:px-10 sm:pb-12"
      >
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[14px] border border-white/[0.06] bg-white/[0.06] p-px md:grid-cols-3">
          {t.features.map((f) => (
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
            {t.modes.map((m) => (
              <button
                key={m.k}
                type="button"
                onClick={() => setMode(m.k)}
                className={`mono rounded-full px-3 py-2 text-[10px] tracking-[0.08em] transition-all sm:px-4 sm:text-[11px] ${
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
            {t.modeStatus[mode]} • {t.live}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-px rounded-[14px] border border-white/[0.06] bg-white/[0.06] p-px md:grid-cols-3">
          {t.cards.map((card) => {
            const active = mode === "all" || mode === card.id;
            return (
              <div
                key={card.id}
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
                  <PlatformName title={card.title} />
                  <div className="mt-1.5 text-[12px] leading-[1.4] text-white/35">
                    {card.desc}
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
