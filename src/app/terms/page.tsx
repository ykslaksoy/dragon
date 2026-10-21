"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useMemo } from "react";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import {
  DEFAULT_LOCALE,
  getDictionary,
  type Locale,
} from "../i18n/dictionaries";
import {
  getTermsDocument,
  TERMS_CONTACT_URL,
  TERMS_EFFECTIVE_DATE,
  termsPageLocale,
} from "../i18n/terms";

const LOCALE_PARAM = new Set<Locale>(["tr", "en", "de", "fr", "zh", "ru"]);

function parseLocale(raw: string | null): Locale {
  if (raw && LOCALE_PARAM.has(raw as Locale)) return raw as Locale;
  return DEFAULT_LOCALE;
}

function TermsContent() {
  const searchParams = useSearchParams();
  const uiLocale = useMemo(
    () => parseLocale(searchParams.get("lang")),
    [searchParams],
  );
  const t = getDictionary(uiLocale);
  const docLocale = termsPageLocale(uiLocale);
  const doc = getTermsDocument(docLocale);

  return (
    <div className="m-0 min-h-dvh bg-[#070708] p-0 text-white">
      <header
        className="sticky top-0 z-[100] flex h-[56px] items-center justify-between gap-3 border-b border-white/[0.06] bg-[#070708] px-4 sm:px-8"
      >
        <Link
          href={`/?lang=${uiLocale}`}
          className="shrink-0 text-[13px] font-medium tracking-[0.28em] text-white sm:text-[16px] sm:tracking-[0.42em]"
        >
          DRAGON
        </Link>
        <LanguageSwitcher
          locale={uiLocale}
          onChange={(next) => {
            const url = new URL(window.location.href);
            url.searchParams.set("lang", next);
            window.location.href = url.toString();
          }}
          ariaLabel={t.langAria}
        />
      </header>

      <main className="mx-auto max-w-[720px] px-5 py-10 sm:px-8 sm:py-14">
        <p className="mono text-[10px] tracking-[0.2em] text-white/35">
          <Link
            href={`/?lang=${uiLocale}`}
            className="text-white/50 transition-colors hover:text-[#8CFF4D]"
          >
            ← {doc.backHome}
          </Link>
        </p>

        <h1 className="mt-6 text-[28px] font-bold tracking-[-0.02em] sm:text-[36px]">
          {doc.pageTitle}
        </h1>

        <p className="mono mt-4 text-[11px] tracking-[0.12em] text-white/40">
          {doc.effectiveLabel}: {TERMS_EFFECTIVE_DATE}
        </p>

        <p className="mt-8 text-[15px] leading-[1.7] text-white/60">{doc.intro}</p>

        <div className="mt-10 flex flex-col gap-8">
          {doc.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-[17px] font-semibold text-white/90">
                {section.title}
              </h2>
              {section.paragraphs.map((p) => (
                <p
                  key={p.slice(0, 48)}
                  className="mt-3 text-[14px] leading-[1.65] text-white/50"
                >
                  {p}
                </p>
              ))}
              {section.bullets?.map((b) => (
                <li
                  key={b}
                  className="mt-2 text-[14px] leading-[1.65] text-white/50"
                >
                  {b}
                </li>
              ))}
            </section>
          ))}
        </div>

        <p className="mt-12 border-t border-white/[0.06] pt-8 text-[14px] leading-[1.65] text-white/50">
          {doc.contactLabel}:{" "}
          <a
            href={TERMS_CONTACT_URL}
            className="text-[#8CFF4D] underline-offset-2 hover:underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            {TERMS_CONTACT_URL}
          </a>
        </p>

      </main>
    </div>
  );
}

export default function TermsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-dvh bg-[#070708] px-5 py-14 text-white/40">
          …
        </div>
      }
    >
      <TermsContent />
    </Suspense>
  );
}
