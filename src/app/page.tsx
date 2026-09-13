import Image from "next/image";
import { DragonTopLogo } from "./components/DragonTopLogo";

export default function Home() {
  return (
    <div className="relative flex min-h-dvh flex-col overflow-x-hidden bg-[#070708] text-white">
      {/* Full-bleed atmosphere — kept behind content, does not affect layout */}
      <div
        aria-hidden
        className="dragon-ghost pointer-events-none absolute left-1/2 top-[42%] z-0 w-[min(620px,92vw)] ghost-mask"
      >
        <Image
          src="/dragon-mark.png"
          alt=""
          width={1200}
          height={1100}
          priority
          className="h-auto w-full select-none"
          draggable={false}
        />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(7,7,8,0.25)_50%,rgba(7,7,8,0.88)_100%)]"
      />

      {/* Sticky top bar — always in the first viewport (esp. mobile) */}
      <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center justify-between border-b border-white/[0.06] bg-[#070708]/95 px-4 backdrop-blur-md sm:h-[76px] sm:px-10">
        <span className="text-[15px] font-medium tracking-[0.38em] text-white sm:text-[16px]">
          DRAGON
        </span>
        <DragonTopLogo />
      </header>

      {/* Hero sits below the header; justify-center only within remaining space */}
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-16 pt-8 text-center sm:pb-24 sm:pt-10">
        <p className="brand-rise mb-5 font-mono text-[10px] uppercase tracking-[0.38em] text-white/35">
          Yayında
        </p>
        <h1 className="brand-rise text-5xl font-semibold tracking-[-0.04em] text-white sm:text-8xl">
          Dragon
        </h1>
        <p
          className="brand-rise-delay mt-5 text-2xl italic tracking-[0.02em] text-white/35 sm:text-[30px]"
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          Dragon Awakens
        </p>
        <p className="brand-rise-delay mt-6 max-w-md text-base leading-7 text-white/50 sm:text-lg">
          Site yayında. Sayfa yapım aşamasında.
        </p>
        <span
          aria-hidden
          className="brand-rise-delay mt-10 inline-flex h-2 w-2 animate-pulse rounded-full bg-[#8cff4d] shadow-[0_0_12px_#8cff4d]"
        />
      </main>
    </div>
  );
}
