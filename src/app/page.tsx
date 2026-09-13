import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-1 flex-col overflow-hidden bg-[#070708] text-white">
      {/* Full-bleed atmosphere from Meta share ghost mark */}
      <div
        aria-hidden
        className="dragon-ghost pointer-events-none absolute left-1/2 top-1/2 z-0 w-[min(620px,92vw)] ghost-mask"
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

      {/* Soft vignette so brand stays readable */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(7,7,8,0.35)_55%,rgba(7,7,8,0.92)_100%)]"
      />

      {/* Top-right blinking eyes (Meta top logo treatment) */}
      <div className="absolute right-4 top-4 z-20 sm:right-8 sm:top-6">
        <div className="dragon-blink overflow-hidden">
          <Image
            src="/dragon-eyes.png"
            alt="Dragon"
            width={912}
            height={440}
            priority
            className="h-auto w-[88px] select-none sm:w-[120px]"
            draggable={false}
          />
        </div>
      </div>

      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
        <p className="brand-rise mb-5 font-mono text-[10px] uppercase tracking-[0.38em] text-white/35">
          Yayında
        </p>
        <h1 className="brand-rise text-6xl font-semibold tracking-[-0.04em] text-white sm:text-8xl">
          Dragon
        </h1>
        <p
          className="brand-rise-delay mt-5 font-[family-name:var(--font-cormorant)] text-2xl italic tracking-[0.02em] text-white/35 sm:text-[30px]"
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
