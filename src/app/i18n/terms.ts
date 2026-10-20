import type { Locale } from "./dictionaries";

export const TERMS_EFFECTIVE_DATE = "2026-10-20";

/** Public repo URL — no personal contact data invented. */
export const TERMS_CONTACT_URL = "https://github.com/ykslaksoy/dragon";

export type TermsSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type TermsDocument = {
  pageTitle: string;
  backHome: string;
  effectiveLabel: string;
  contactLabel: string;
  intro: string;
  sections: TermsSection[];
};

const TERMS_TR: TermsDocument = {
  pageTitle: "Kullanım Şartları",
  backHome: "Ana sayfa",
  effectiveLabel: "Yürürlük tarihi",
  contactLabel: "İletişim",
  intro:
    "Dragon hizmetini (“Hizmet”) kullanarak bu Kullanım Şartları’nı okuduğunuzu ve kabul ettiğinizi beyan edersiniz. Hizmet, Yüksel Aksoy (“İşletmeci”) tarafından sunulmaktadır.",
  sections: [
    {
      title: "1. Hizmetin kullanımı",
      paragraphs: [
        "Hizmet yalnızca yasal amaçlarla ve bu şartlara uygun şekilde kullanılabilir. Hizmete erişim ve kullanım, İşletmeci tarafından herhangi bir zamanda kısıtlanabilir veya sonlandırılabilir.",
      ],
    },
    {
      title: "2. Otomatik erişim yasağı",
      paragraphs: [
        "Yazılı izin olmadan botlar, betikler, tarayıcılar (crawler), scraper’lar, yapay zekâ ajanları veya diğer otomatik araçlarla Hizmete erişmek, Hizmeti sorgulamak veya Hizmetten veri çekmek yasaktır.",
      ],
    },
    {
      title: "3. Veri ve içerik toplama yasağı",
      paragraphs: [
        "Hizmetten veya Hizmet aracılığıyla sunulan içerikten veri veya içerik toplamak, derlemek, indekslemek veya “harvest” etmek yasaktır.",
      ],
    },
    {
      title: "4. Fikri mülkiyet ve tersine mühendislik",
      paragraphs: [
        "Hizmetin yazılımı, tasarımı, markaları ve içeriği İşletmeci veya lisans verenlerine aittir. Yazılımı, tasarımı veya içeriği tersine mühendislik yapmak, kaynak koda dönüştürmek, kopyalamak veya türev çalışma oluşturmak yasaktır.",
      ],
    },
    {
      title: "5. Rekabet eden ürün geliştirme yasağı",
      paragraphs: [
        "Hizmeti, doğrudan veya dolaylı olarak rakip bir ürün veya hizmet geliştirmek, eğitmek, kıyaslamak (benchmark) veya Hizmetin işlevlerini taklit etmek amacıyla kullanmak yasaktır.",
      ],
    },
    {
      title: "6. Hesaplar ve ihlaller",
      paragraphs: [
        "Bu şartların ihlali halinde İşletmeci, önceden bildirimde bulunmaksızın erişimi askıya alma, hesabı sonlandırma ve gerekli hukuki yollara başvurma hakkını saklı tutar.",
      ],
    },
    {
      title: "7. Uygulanacak hukuk ve yetki",
      paragraphs: [
        "Bu şartlar Türkiye Cumhuriyeti kanunlarına tabidir. Uyuşmazlıklarda Türkiye mahkemeleri ve icra daireleri yetkilidir.",
      ],
    },
  ],
};

const TERMS_EN: TermsDocument = {
  pageTitle: "Terms of Use",
  backHome: "Home",
  effectiveLabel: "Effective date",
  contactLabel: "Contact",
  intro:
    'By using the Dragon service (the "Service"), you acknowledge that you have read and agree to these Terms of Use. The Service is operated by Yüksel Aksoy (the "Operator").',
  sections: [
    {
      title: "1. Use of the Service",
      paragraphs: [
        "You may use the Service only for lawful purposes and in compliance with these terms. Access may be restricted or terminated by the Operator at any time.",
      ],
    },
    {
      title: "2. No automated access",
      paragraphs: [
        "Without prior written permission, you may not access or query the Service using bots, scripts, crawlers, scrapers, AI agents, or other automated means.",
      ],
    },
    {
      title: "3. No data or content harvesting",
      paragraphs: [
        "You may not collect, compile, index, or harvest data or content from the Service or content made available through it.",
      ],
    },
    {
      title: "4. Intellectual property and reverse engineering",
      paragraphs: [
        "The Service’s software, design, branding, and content belong to the Operator or its licensors. You may not reverse engineer, decompile, copy, or create derivative works from the software, design, or content.",
      ],
    },
    {
      title: "5. No competing products",
      paragraphs: [
        "You may not use the Service to build, train, benchmark, or imitate a competing product or service, directly or indirectly.",
      ],
    },
    {
      title: "6. Accounts and violations",
      paragraphs: [
        "If you violate these terms, the Operator may suspend access, terminate accounts, and pursue legal remedies without prior notice.",
      ],
    },
    {
      title: "7. Governing law and jurisdiction",
      paragraphs: [
        "These terms are governed by the laws of the Republic of Türkiye. The courts and enforcement offices of Türkiye have exclusive jurisdiction.",
      ],
    },
  ],
};

/** Terms are provided in Turkish and English; other UI locales fall back to English. */
export function getTermsDocument(locale: Locale): TermsDocument {
  if (locale === "tr") return TERMS_TR;
  return TERMS_EN;
}

export function termsPageLocale(locale: Locale): "tr" | "en" {
  return locale === "tr" ? "tr" : "en";
}
