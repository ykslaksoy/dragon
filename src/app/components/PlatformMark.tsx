"use client";

import Image from "next/image";

const PLATFORMS = [
  { name: "Amazon", src: "/platforms/amazon.svg" },
  { name: "Shopify", src: "/platforms/shopify.svg" },
  { name: "TikTok", src: "/platforms/tiktok.svg" },
  { name: "AliExpress", src: "/platforms/aliexpress.svg" },
  { name: "Keepa", src: "/platforms/keepa.svg" },
  { name: "Temu", src: "/platforms/temu.svg" },
  { name: "CJ", src: "/platforms/cj.svg" },
] as const;

const CARD_LOGOS: Record<string, string> = {
  Amazon: "/platforms/amazon.svg",
  Shopify: "/platforms/shopify.svg",
  TikTok: "/platforms/tiktok.svg",
};

type Props = {
  label: string;
};

export function PlatformIntegrations({ label }: Props) {
  return (
    <div className="mt-12 w-full border-y border-white/[0.06] bg-white/[0.01] px-4 py-4 backdrop-blur sm:mt-16 sm:px-6 sm:py-5">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-4">
        <span className="mono text-[10px] tracking-[0.2em] text-white/25">
          {label}
        </span>
        <ul className="flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:gap-x-8 sm:gap-y-4">
          {PLATFORMS.map((p) => (
            <li
              key={p.name}
              className="flex items-center gap-2.5 text-white/80"
            >
              <Image
                src={p.src}
                alt=""
                width={28}
                height={28}
                className="h-7 w-7 shrink-0"
                unoptimized
              />
              <span className="text-[15px] font-semibold tracking-[-0.01em] sm:text-[17px]">
                {p.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function PlatformName({
  title,
  className = "",
}: {
  title: string;
  className?: string;
}) {
  const src = CARD_LOGOS[title];
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {src ? (
        <Image
          src={src}
          alt=""
          width={26}
          height={26}
          className="h-[26px] w-[26px] shrink-0"
          unoptimized
        />
      ) : null}
      <span className="text-[15px] font-semibold tracking-[-0.01em] text-white/85 sm:text-[16px]">
        {title}
      </span>
    </div>
  );
}
