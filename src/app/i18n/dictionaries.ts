import type { CountryId } from "./countries";
import type { MarketGroupId } from "./market-groups";
import type { RegionId } from "./regions";

export type Locale = "tr" | "en" | "de" | "fr" | "zh" | "ru";

export type Dictionary = {
  headerTag: string;
  keepaLive: string;
  awaken: string;
  heroLine1: string;
  heroLine2: string;
  subtitle: string;
  cta: string;
  quickSearch: string;
  integrationsLabel: string;
  regionsAria: string;
  regionsAll: string;
  regionsEmpty: string;
  regions: Record<RegionId, string>;
  countryAria: string;
  countryPrefix: string;
  countryAll: string;
  countries: Record<CountryId, string>;
  /** Compact market picker (header). */
  marketAria: string;
  marketCountriesAll: string;
  marketRegionsAll: string;
  marketCountryCount: string;
  marketRegionCount: string;
  marketPlusMore: string;
  marketRegionPlus: string;
  marketCountriesSection: string;
  marketRegionsSection: string;
  marketGroupSelectAll: string;
  marketGroups: Record<MarketGroupId, string>;
  sortAria: string;
  sortPrefix: string;
  sortSales: string;
  sortProfit: string;
  sortRisk: string;
  riskAria: string;
  riskPrefix: string;
  riskLow: string;
  riskLowHint: string;
  riskBalanced: string;
  riskBalancedHint: string;
  riskHigh: string;
  riskHighHint: string;
  huntTitle: string;
  huntEmpty: string;
  huntSoftSteer: string;
  profitLabel: string;
  riskLabel: string;
  demandLabel: string;
  saturationLabel: string;
  /** Marketplace listing monthly unit volume (demo). */
  monthlySalesLabel: string;
  /** Conservative attainable share if you sell — not 100% of demand. */
  estSalesLabel: string;
  currency: string;
  /** Row actions + recommendation detail. */
  openProduct: string;
  /** Demand exists but no live product URL. */
  noProductLink: string;
  detailOpen: string;
  detailClose: string;
  detailTitle: string;
  /** Short tooltips (title) — beginner plain language. */
  scoreDemandHelp: string;
  scoreSaturationHelp: string;
  scoreRiskHelp: string;
  scoreProfitHelp: string;
  scoreMonthlySalesHelp: string;
  scoreEstSalesHelp: string;
  /** Detail panel lines; `{n}` = score/units, `{currency}` `{profit}` for net. */
  detailDemand: string;
  detailSaturation: string;
  detailRisk: string;
  detailProfit: string;
  detailMonthlySales: string;
  detailEstSales: string;
  riskBandLow: string;
  riskBandMid: string;
  riskBandHigh: string;
  detailPathSoft: string;
  detailPathMarket: string;
  detailPathAmazon: string;
  productNames: Record<string, string>;
  modeAll: string;
  modeStatusAll: string;
  /** `{platform}` + `{role}` */
  modeLabel: string;
  /** `{platform}` */
  modeStatus: string;
  cardRoles: { label: string; desc: string }[];
  features: { title: string; desc: string }[];
  footerLeft: string;
  footerRight: string;
  langAria: string;
  live: string;
  heroMeta: string;
};

export const LOCALE_META: {
  code: Locale;
  name: string;
  flagSrc: string;
}[] = [
  { code: "tr", name: "Türkçe", flagSrc: "/flags/tr.svg" },
  { code: "en", name: "English", flagSrc: "/flags/en.svg" },
  { code: "de", name: "Deutsch", flagSrc: "/flags/de.svg" },
  { code: "fr", name: "Français", flagSrc: "/flags/fr.svg" },
  { code: "zh", name: "中文", flagSrc: "/flags/zh.svg" },
  { code: "ru", name: "Русский", flagSrc: "/flags/ru.svg" },
];

export const DEFAULT_LOCALE: Locale = "tr";

const COUNTRY_LABELS_LATIN: Record<CountryId, string> = {
  tr: "Türkiye",
  de: "Almanya",
  fr: "Fransa",
  nl: "Hollanda",
  uk: "Birleşik Krallık",
  us: "ABD",
  ca: "Kanada",
  ae: "BAE",
  sa: "Suudi Arabistan",
  cn: "Çin",
  jp: "Japonya",
  sg: "Singapur",
};

const PRODUCT_NAMES_TR: Record<string, string> = {
  deskLamp: "Dokunmatik masa lambası",
  cableOrganizer: "Kablo düzenleyici set",
  travelMug: "Sızdırmaz seyahat termosu",
  homeOrganizer: "Mutfak düzenleyici",
  kitchenKit: "Pişirme gereç seti",
  wirelessBuds: "Kablosuz kulaklık",
  proteinShaker: "Protein shaker",
  phoneMount: "Araç telefon tutucu",
  ledStrip: "LED şerit ışık",
  prayerMat: "Seyahat seccadesi",
  miniFan: "Mini USB vantilatör",
  gamingChair: "Oyuncu koltuğu",
};

export const dictionaries: Record<Locale, Dictionary> = {
  tr: {
    headerTag: "ÇOK PLATFORM • KÂR + RİSK • v2.2",
    keepaLive: "KEEPA • CANLI",
    awaken: "Dragon Uyanıyor",
    heroLine1: "Talep, doygunluk, risk.",
    heroLine2: "Net kârı gör.",
    subtitle:
      "{platforms} ve daha fazlasında tara; sonuçları bölge, ülke ve en çok kazandırana göre filtrele. Her üründe talep, doygunluk, Dragon risk skoru ve net kâr. Dropship / Shopify yolu tipik düşük risk — yüksek kâr+risk bilinçli seçilebilir.",
    cta: "ÜRÜN AVINI BAŞLAT",
    quickSearch: "⌘K • HIZLI ARA",
    integrationsLabel: "ENTEGRASYONLAR",
    regionsAria: "Bölge seçimi",
    regionsAll: "Hepsi",
    regionsEmpty: "En az bir bölge seçin",
    regions: {
      tr: "Türkiye",
      eu: "Avrupa",
      us: "Amerika",
      me: "Orta Doğu",
      asia: "Asya",
    },
    countryAria: "Ülke seçimi",
    countryPrefix: "ÜLKE",
    countryAll: "Tümü",
    countries: COUNTRY_LABELS_LATIN,
    marketAria: "Bölge ve ülke seçimi",
    marketCountriesAll: "Ülke tümü",
    marketRegionsAll: "Bölge tümü",
    marketCountryCount: "{n} ülke",
    marketRegionCount: "{n} bölge",
    marketPlusMore: "{name} +{n}",
    marketRegionPlus: "{region} + {extra}",
    marketCountriesSection: "Ülke · pazaryeri",
    marketRegionsSection: "Bölge",
    marketGroupSelectAll: "tümü",
    marketGroups: {
      turkiye: "Türkiye",
      amazon: "Amazon",
      noon: "Orta Doğu",
      europe: "Avrupa diğer",
      americas: "Amerika diğer",
      asia: "Asya",
    },
    sortAria: "Sıralama",
    sortPrefix: "SIRA",
    sortSales: "Aylık satış",
    sortProfit: "En çok kazandıran",
    sortRisk: "Risk skoru",
    riskAria: "Risk tercihi",
    riskPrefix: "RİSK",
    riskLow: "Düşük risk",
    riskLowHint: "Dropship / Shopify soft yönlendirme",
    riskBalanced: "Dengeli",
    riskBalancedHint: "Kâr ve risk ortası",
    riskHigh: "Yüksek kâr + risk",
    riskHighHint: "Bilinçli yüksek getiri tercihi",
    huntTitle: "Av sonuçları · aylık satış · senin payın · talep · risk · net kâr",
    huntEmpty: "Bu filtrelerle ürün yok — bölge, ülke veya risk bandını değiştir.",
    huntSoftSteer:
      "Demo av sonuçları (canlı tarama yok). Varsayılan sıra: aylık satış. Tahmini pay = konservatif niş payı, pazarın tamamı değil. Talep varken SKU yoksa kart kalır.",
    profitLabel: "NET KÂR",
    riskLabel: "RİSK",
    demandLabel: "TALEP",
    saturationLabel: "DOYGUNLUK",
    monthlySalesLabel: "AYLIK SATIŞ",
    estSalesLabel: "SENİN PAYIN",
    currency: "₺",
    openProduct: "Ürüne git",
    noProductLink: "Talep var · ürün linki yok",
    detailOpen: "Öneri detayı",
    detailClose: "Detayı kapat",
    detailTitle: "Dragon önerisi",
    scoreDemandHelp:
      "Talep 0–100: seçilen pazarda göreli talep gücü (skor, ham sipariş değil).",
    scoreSaturationHelp:
      "Doygunluk 0–100: niş ne kadar dolu. Yüksek = daha kalabalık.",
    scoreRiskHelp:
      "Risk 0–100: Dragon satış/iş riski. Düşük sayı = daha güvenli (örn. 22 = düşük).",
    scoreProfitHelp: "Net kâr: tahmini net kâr (para birimi).",
    scoreMonthlySalesHelp:
      "Aylık satış: bu ürünün pazaryerindeki tahmini aylık adet (listeleme hacmi).",
    scoreEstSalesHelp:
      "Senin payın: konservatif tahmin — pazarın %100’ü değil; doygunluk/talep ile ~%1,5–8 pay.",
    detailDemand:
      "Talep {n}/100 — seçilen pazarda göreli talep gücü. Sinyal son ~30 gün / aylık arama-satış hızına dayanır (ham sipariş sayısı değil, skor).",
    detailSaturation:
      "Doygunluk {n}/100 — nişin ne kadar dolu olduğu (rekabet / satıcı yoğunluğu). Yüksek = daha kalabalık, girmek zorlaşır.",
    detailRisk:
      "Risk {n}/100 — Dragon’un satış/iş risk skoru. Düşük sayı = daha güvenli. Bu ürün: {band}.",
    detailProfit: "Net kâr {currency}{profit} — tahmini net kâr (para birimi).",
    detailMonthlySales:
      "Aylık satış {n} adet — bu listenin pazaryerindeki aylık satış hacmi (demo).",
    detailEstSales:
      "Senin payın (tahmini) {n} adet/ay — gerçekçi niş payı; tüm talebi alacağın anlamına gelmez.",
    riskBandLow: "düşük risk",
    riskBandMid: "orta risk",
    riskBandHigh: "yüksek risk",
    detailPathSoft:
      "Neden öneriyoruz: dropship / Shopify yolu tipik düşük risk — soft yönlendirme.",
    detailPathMarket:
      "Neden öneriyoruz: pazaryeri fırsatı; talep ve net kâr güçlü, doygunluk / riski birlikte oku.",
    detailPathAmazon:
      "Neden öneriyoruz: yüksek kâr potansiyeli; risk de yüksek — bilinçli seçim.",
    productNames: PRODUCT_NAMES_TR,
    modeAll: "TÜM PLATFORMLAR",
    modeStatusAll: "TÜM PLATFORMLAR",
    modeLabel: "{platform} • {role}",
    modeStatus: "{platform} MODU",
    cardRoles: [
      {
        label: "Ürün Araştırması",
        desc: "Talep, doygunluk, risk skoru ve net kâr — platform listesinde birlikte",
      },
      {
        label: "Mağaza İstihbaratı",
        desc: "Dropship yolu: tipik düşük risk + talep/doygunluk + net kâr sinyali",
      },
      {
        label: "Trend Av",
        desc: "Viral talep yükselişi, doygunluk ve Dragon risk skoruyla listele",
      },
    ],
    features: [
      {
        title: "Optimal tedarikçi",
        desc: "{platforms} ve daha fazlasında tedarikçi bul — sadece en ucuz değil, optimal öneri.",
      },
      {
        title: "Talep & doygunluk",
        desc: "Her üründe talep analizi ve pazar doygunluğu — kalabalık nişleri erken gör.",
      },
      {
        title: "Dragon risk skoru",
        desc: "Risk skoru net kârın yanında. Dropship/Shopify soft düşük risk; yüksek kâr+risk seçilebilir.",
      },
      {
        title: "Bölge · ülke · kâr",
        desc: "Araştırma sonuçlarını bölge, ülke ve en yüksek net kâra göre seç ve sırala.",
      },
    ],
    footerLeft: "© DRAGON • TALEP · DOYGUNLUK · RİSK · NET KÂR",
    footerRight: "AVCILAR İÇİN YAPILDI",
    langAria: "Dil seçimi",
    live: "CANLI",
    heroMeta: "SABİT • 0.20 OPAK • DEGRADE",
  },
  en: {
    headerTag: "MULTI-PLATFORM • PROFIT + RISK • v2.2",
    keepaLive: "KEEPA • LIVE",
    awaken: "Dragon Awakens",
    heroLine1: "Demand, saturation, risk.",
    heroLine2: "See net profit.",
    subtitle:
      "Scan {platforms} and more; filter by region, country, and highest profit. Every product shows demand, saturation, Dragon’s risk score, and net profit. Dropship / Shopify paths tend lower risk — high profit+risk stays a conscious choice.",
    cta: "START THE HUNT",
    quickSearch: "⌘K • QUICK SEARCH",
    integrationsLabel: "INTEGRATIONS",
    regionsAria: "Region selection",
    regionsAll: "All",
    regionsEmpty: "Select at least one region",
    regions: {
      tr: "Türkiye",
      eu: "Europe",
      us: "Americas",
      me: "Middle East",
      asia: "Asia",
    },
    countryAria: "Country selection",
    countryPrefix: "COUNTRY",
    countryAll: "All",
    countries: {
      tr: "Türkiye",
      de: "Germany",
      fr: "France",
      nl: "Netherlands",
      uk: "United Kingdom",
      us: "United States",
      ca: "Canada",
      ae: "UAE",
      sa: "Saudi Arabia",
      cn: "China",
      jp: "Japan",
      sg: "Singapore",
    },
    marketAria: "Region and country selection",
    marketCountriesAll: "All countries",
    marketRegionsAll: "All regions",
    marketCountryCount: "{n} countries",
    marketRegionCount: "{n} regions",
    marketPlusMore: "{name} +{n}",
    marketRegionPlus: "{region} + {extra}",
    marketCountriesSection: "Country · marketplace",
    marketRegionsSection: "Region",
    marketGroupSelectAll: "all",
    marketGroups: {
      turkiye: "Türkiye",
      amazon: "Amazon",
      noon: "Middle East",
      europe: "Europe other",
      americas: "Americas other",
      asia: "Asia",
    },
    sortAria: "Sort",
    sortPrefix: "SORT",
    sortSales: "Monthly sales",
    sortProfit: "Most profitable",
    sortRisk: "Risk score",
    riskAria: "Risk preference",
    riskPrefix: "RISK",
    riskLow: "Low risk",
    riskLowHint: "Soft steer to dropship / Shopify",
    riskBalanced: "Balanced",
    riskBalancedHint: "Mid profit and risk",
    riskHigh: "High profit + risk",
    riskHighHint: "Intentional high-reward choice",
    huntTitle: "Hunt results · monthly sales · your share · demand · risk · net profit",
    huntEmpty: "No products for these filters — change region, country, or risk band.",
    huntSoftSteer:
      "Curated demo picks (no live marketplace scan yet). Default sort: monthly sales. Your share is a conservative niche cut — not 100% of demand. Demand-only rows stay when SKU is missing.",
    profitLabel: "NET PROFIT",
    riskLabel: "RISK",
    demandLabel: "DEMAND",
    saturationLabel: "SATURATION",
    monthlySalesLabel: "MO. SALES",
    estSalesLabel: "YOUR SHARE",
    currency: "$",
    openProduct: "Open product",
    noProductLink: "Demand · no product link",
    detailOpen: "Why we recommend",
    detailClose: "Close detail",
    detailTitle: "Dragon recommendation",
    scoreDemandHelp:
      "Demand 0–100: relative demand strength in the selected market (score, not raw orders).",
    scoreSaturationHelp:
      "Saturation 0–100: how crowded the niche is. Higher = more competition.",
    scoreRiskHelp:
      "Risk 0–100: Dragon sales/ops risk. Lower = safer (e.g. 22 = low).",
    scoreProfitHelp: "Net profit: estimated net profit (currency).",
    scoreMonthlySalesHelp:
      "Monthly sales: estimated units/month for this marketplace listing.",
    scoreEstSalesHelp:
      "Your share: conservative attainable units (~1.5–8% of listing volume) — not full demand.",
    detailDemand:
      "Demand {n}/100 — relative demand in the selected market. Based on ~30-day / monthly search–sales pace (a score, not raw order count).",
    detailSaturation:
      "Saturation {n}/100 — how full the niche is (competition / seller density). Higher = more crowded, harder entry.",
    detailRisk:
      "Risk {n}/100 — Dragon sales/ops risk score. Lower = safer. This product: {band}.",
    detailProfit: "Net profit {currency}{profit} — estimated net profit (currency).",
    detailMonthlySales:
      "Monthly sales {n} units — marketplace listing volume (demo).",
    detailEstSales:
      "Your estimated share {n} units/month — realistic niche cut; not capturing all demand.",
    riskBandLow: "low risk",
    riskBandMid: "mid risk",
    riskBandHigh: "high risk",
    detailPathSoft:
      "Why we recommend: dropship / Shopify path is typically lower risk — soft steer.",
    detailPathMarket:
      "Why we recommend: marketplace opportunity; read demand and net profit with saturation / risk.",
    detailPathAmazon:
      "Why we recommend: high profit potential; risk is also high — intentional choice.",
    productNames: {
      deskLamp: "Touch desk lamp",
      cableOrganizer: "Cable organizer set",
      travelMug: "Leak-proof travel mug",
      homeOrganizer: "Kitchen organizer",
      kitchenKit: "Cookware kit",
      wirelessBuds: "Wireless earbuds",
      proteinShaker: "Protein shaker",
      phoneMount: "Car phone mount",
      ledStrip: "LED strip lights",
      prayerMat: "Travel prayer mat",
      miniFan: "Mini USB fan",
      gamingChair: "Gaming chair",
    },
    modeAll: "ALL PLATFORMS",
    modeStatusAll: "ALL PLATFORMS",
    modeLabel: "{platform} • {role}",
    modeStatus: "{platform} MODE",
    cardRoles: [
      {
        label: "Product Research",
        desc: "Demand, saturation, risk score, and net profit — together on the platform list",
      },
      {
        label: "Store Spy",
        desc: "Dropship path: typically lower risk + demand/saturation + net profit signal",
      },
      {
        label: "Trend Hunt",
        desc: "Rising viral demand, saturation, and Dragon risk score in one list",
      },
    ],
    features: [
      {
        title: "Optimal suppliers",
        desc: "Find suppliers on {platforms} and more — optimal picks, not only the cheapest.",
      },
      {
        title: "Demand & saturation",
        desc: "Demand analysis and market saturation on every product — spot crowded niches early.",
      },
      {
        title: "Dragon risk score",
        desc: "Risk score beside net profit. Soft low-risk for dropship/Shopify; high profit+risk selectable.",
      },
      {
        title: "Region · country · profit",
        desc: "Filter and sort research by region, country, and highest net profit.",
      },
    ],
    footerLeft: "© DRAGON • DEMAND · SATURATION · RISK · NET PROFIT",
    footerRight: "BUILT FOR HUNTERS",
    langAria: "Language selection",
    live: "LIVE",
    heroMeta: "FIXED • 0.20 OPACITY • GRADIENT",
  },
  de: {
    headerTag: "MULTI-PLATFORM • GEWINN + RISIKO • v2.2",
    keepaLive: "KEEPA • LIVE",
    awaken: "Dragon erwacht",
    heroLine1: "Nachfrage, Sättigung, Risiko.",
    heroLine2: "Nettogewinn sehen.",
    subtitle:
      "Scanne {platforms} und mehr; filtere nach Region, Land und höchstem Gewinn. Jedes Produkt zeigt Nachfrage, Sättigung, Dragon-Risikoscore und Nettogewinn. Dropship / Shopify tendiert niedrigeres Risiko — hoher Gewinn+Risiko bleibt wählbar.",
    cta: "JAGD STARTEN",
    quickSearch: "⌘K • SCHNELLSUCHE",
    integrationsLabel: "INTEGRATIONEN",
    regionsAria: "Regionsauswahl",
    regionsAll: "Alle",
    regionsEmpty: "Mindestens eine Region wählen",
    regions: {
      tr: "Türkiye",
      eu: "Europa",
      us: "Amerika",
      me: "Naher Osten",
      asia: "Asien",
    },
    countryAria: "Länderauswahl",
    countryPrefix: "LAND",
    countryAll: "Alle",
    countries: {
      tr: "Türkiye",
      de: "Deutschland",
      fr: "Frankreich",
      nl: "Niederlande",
      uk: "Vereinigtes Königreich",
      us: "USA",
      ca: "Kanada",
      ae: "VAE",
      sa: "Saudi-Arabien",
      cn: "China",
      jp: "Japan",
      sg: "Singapur",
    },
    marketAria: "Region- und Länderauswahl",
    marketCountriesAll: "Alle Länder",
    marketRegionsAll: "Alle Regionen",
    marketCountryCount: "{n} Länder",
    marketRegionCount: "{n} Regionen",
    marketPlusMore: "{name} +{n}",
    marketRegionPlus: "{region} + {extra}",
    marketCountriesSection: "Land · Marktplatz",
    marketRegionsSection: "Region",
    marketGroupSelectAll: "alle",
    marketGroups: {
      turkiye: "Türkiye",
      amazon: "Amazon",
      noon: "Naher Osten",
      europe: "Europa andere",
      americas: "Amerika andere",
      asia: "Asien",
    },
    sortAria: "Sortierung",
    sortPrefix: "SORT",
    sortSales: "Monatsverkäufe",
    sortProfit: "Höchster Gewinn",
    sortRisk: "Risikoscore",
    riskAria: "Risikopräferenz",
    riskPrefix: "RISIKO",
    riskLow: "Niedriges Risiko",
    riskLowHint: "Sanfte Führung zu Dropship / Shopify",
    riskBalanced: "Ausgewogen",
    riskBalancedHint: "Mittlerer Gewinn und Risiko",
    riskHigh: "Hoher Gewinn + Risiko",
    riskHighHint: "Bewusste High-Reward-Wahl",
    huntTitle: "Jagdergebnisse · Monatsverkäufe · dein Anteil · Nachfrage · Risiko · Nettogewinn",
    huntEmpty: "Keine Produkte für diese Filter — Region, Land oder Risikoband ändern.",
    huntSoftSteer:
      "Demo-Ergebnisse (noch kein Live-Scan). Standard: Monatsverkäufe. Dein Anteil ist konservativ — nicht 100 % der Nachfrage. Nachfrage ohne SKU bleibt sichtbar.",
    profitLabel: "NETTO",
    riskLabel: "RISIKO",
    demandLabel: "NACHFRAGE",
    saturationLabel: "SÄTTIGUNG",
    monthlySalesLabel: "MTL. VERKAUF",
    estSalesLabel: "DEIN ANTEIL",
    currency: "€",
    openProduct: "Produkt öffnen",
    noProductLink: "Nachfrage · kein Produktlink",
    detailOpen: "Empfehlungsdetail",
    detailClose: "Detail schließen",
    detailTitle: "Dragon-Empfehlung",
    scoreDemandHelp:
      "Nachfrage 0–100: relative Nachfragestärke im gewählten Markt (Score, keine Rohbestellungen).",
    scoreSaturationHelp:
      "Sättigung 0–100: wie voll die Nische ist. Höher = mehr Wettbewerb.",
    scoreRiskHelp:
      "Risiko 0–100: Dragon Verkaufs-/Betriebsrisiko. Niedriger = sicherer (z. B. 22 = niedrig).",
    scoreProfitHelp: "Nettogewinn: geschätzter Nettogewinn (Währung).",
    scoreMonthlySalesHelp:
      "Monatsverkäufe: geschätzte Stück/Monat für dieses Listing.",
    scoreEstSalesHelp:
      "Dein Anteil: konservativ erreichbar (~1,5–8 % des Listing-Volumens) — nicht die volle Nachfrage.",
    detailDemand:
      "Nachfrage {n}/100 — relative Nachfrage im gewählten Markt. Signal aus ~30 Tagen / monatlichem Such-Verkaufstempo (Score, keine Rohbestellzahl).",
    detailSaturation:
      "Sättigung {n}/100 — wie voll die Nische ist (Wettbewerb / Verkäuferdichte). Höher = voller, Einstieg schwerer.",
    detailRisk:
      "Risiko {n}/100 — Dragon Verkaufs-/Betriebsrisiko. Niedriger = sicherer. Dieses Produkt: {band}.",
    detailProfit: "Nettogewinn {currency}{profit} — geschätzter Nettogewinn (Währung).",
    detailMonthlySales:
      "Monatsverkäufe {n} Stück — Listing-Volumen (Demo).",
    detailEstSales:
      "Dein geschätzter Anteil {n} Stück/Monat — realistischer Nischenanteil, nicht die gesamte Nachfrage.",
    riskBandLow: "niedriges Risiko",
    riskBandMid: "mittleres Risiko",
    riskBandHigh: "hohes Risiko",
    detailPathSoft:
      "Warum wir empfehlen: Dropship / Shopify-Pfad typisch niedrigeres Risiko — sanfte Führung.",
    detailPathMarket:
      "Warum wir empfehlen: Marktplatz-Chance; Nachfrage und Nettogewinn mit Sättigung / Risiko lesen.",
    detailPathAmazon:
      "Warum wir empfehlen: hohes Gewinnpotenzial; Risiko ebenfalls hoch — bewusste Wahl.",
    productNames: {
      deskLamp: "Touch-Schreibtischlampe",
      cableOrganizer: "Kabelorganiser-Set",
      travelMug: "Auslaufsicherer Reisebecher",
      homeOrganizer: "Küchenorganiser",
      kitchenKit: "Kochgeschirr-Set",
      wirelessBuds: "Kabellose Ohrhörer",
      proteinShaker: "Protein-Shaker",
      phoneMount: "Auto-Handyhalter",
      ledStrip: "LED-Streifen",
      prayerMat: "Reise-Gebetsteppich",
      miniFan: "Mini-USB-Ventilator",
      gamingChair: "Gaming-Stuhl",
    },
    modeAll: "ALLE PLATTFORMEN",
    modeStatusAll: "ALLE PLATTFORMEN",
    modeLabel: "{platform} • {role}",
    modeStatus: "{platform}-MODUS",
    cardRoles: [
      {
        label: "Produktforschung",
        desc: "Nachfrage, Sättigung, Risikowert und Nettogewinn — gemeinsam in der Plattformliste",
      },
      {
        label: "Store Spy",
        desc: "Dropship-Pfad: typisch niedrigeres Risiko + Nachfrage/Sättigung + Nettogewinn",
      },
      {
        label: "Trend-Jagd",
        desc: "Steigende virale Nachfrage, Sättigung und Dragon-Risikowert in einer Liste",
      },
    ],
    features: [
      {
        title: "Optimale Lieferanten",
        desc: "Lieferanten auf {platforms} und mehr — optimal, nicht nur am günstigsten.",
      },
      {
        title: "Nachfrage & Sättigung",
        desc: "Nachfrageanalyse und Marktsättigung auf jedem Produkt — volle Nischen früh sehen.",
      },
      {
        title: "Dragon-Risikowert",
        desc: "Risikowert neben Nettogewinn. Soft niedriges Risiko für Dropship/Shopify; hoher Gewinn+Risiko wählbar.",
      },
      {
        title: "Region · Land · Gewinn",
        desc: "Forschung nach Region, Land und höchstem Nettogewinn filtern und sortieren.",
      },
    ],
    footerLeft: "© DRAGON • NACHFRAGE · SÄTTIGUNG · RISIKO · NETTOGEWINN",
    footerRight: "FÜR JÄGER GEBAUT",
    langAria: "Sprachauswahl",
    live: "LIVE",
    heroMeta: "FIX • 0.20 OPACITY • VERLAUF",
  },
  fr: {
    headerTag: "MULTI-PLATEFORME • PROFIT + RISQUE • v2.2",
    keepaLive: "KEEPA • EN DIRECT",
    awaken: "Dragon s’éveille",
    heroLine1: "Demande, saturation, risque.",
    heroLine2: "Voir le bénéfice net.",
    subtitle:
      "Scannez {platforms} et plus ; filtrez par région, pays et profit le plus élevé. Chaque produit affiche demande, saturation, score de risque Dragon et bénéfice net. Dropship / Shopify tend vers un risque plus bas — haut profit+risque reste un choix conscient.",
    cta: "LANCER LA CHASSE",
    quickSearch: "⌘K • RECHERCHE RAPIDE",
    integrationsLabel: "INTÉGRATIONS",
    regionsAria: "Sélection de région",
    regionsAll: "Toutes",
    regionsEmpty: "Sélectionnez au moins une région",
    regions: {
      tr: "Türkiye",
      eu: "Europe",
      us: "Amériques",
      me: "Moyen-Orient",
      asia: "Asie",
    },
    countryAria: "Sélection de pays",
    countryPrefix: "PAYS",
    countryAll: "Tous",
    countries: {
      tr: "Türkiye",
      de: "Allemagne",
      fr: "France",
      nl: "Pays-Bas",
      uk: "Royaume-Uni",
      us: "États-Unis",
      ca: "Canada",
      ae: "Émirats",
      sa: "Arabie saoudite",
      cn: "Chine",
      jp: "Japon",
      sg: "Singapour",
    },
    marketAria: "Sélection région et pays",
    marketCountriesAll: "Tous les pays",
    marketRegionsAll: "Toutes les régions",
    marketCountryCount: "{n} pays",
    marketRegionCount: "{n} régions",
    marketPlusMore: "{name} +{n}",
    marketRegionPlus: "{region} + {extra}",
    marketCountriesSection: "Pays · marketplace",
    marketRegionsSection: "Région",
    marketGroupSelectAll: "tous",
    marketGroups: {
      turkiye: "Türkiye",
      amazon: "Amazon",
      noon: "Moyen-Orient",
      europe: "Europe autres",
      americas: "Amériques autres",
      asia: "Asie",
    },
    sortAria: "Tri",
    sortPrefix: "TRI",
    sortSales: "Ventes mensuelles",
    sortProfit: "Plus rentable",
    sortRisk: "Score de risque",
    riskAria: "Préférence de risque",
    riskPrefix: "RISQUE",
    riskLow: "Faible risque",
    riskLowHint: "Orientation douce dropship / Shopify",
    riskBalanced: "Équilibré",
    riskBalancedHint: "Profit et risque moyens",
    riskHigh: "Haut profit + risque",
    riskHighHint: "Choix conscient haut rendement",
    huntTitle: "Résultats · ventes mensuelles · votre part · demande · risque · bénéfice net",
    huntEmpty: "Aucun produit pour ces filtres — changez région, pays ou bande de risque.",
    huntSoftSteer:
      "Sélection démo (pas encore de scan live). Tri par défaut : ventes mensuelles. Votre part est conservative — pas 100 % de la demande. Demande sans SKU reste listée.",
    profitLabel: "BÉNÉFICE",
    riskLabel: "RISQUE",
    demandLabel: "DEMANDE",
    saturationLabel: "SATURATION",
    monthlySalesLabel: "VENTES / MOIS",
    estSalesLabel: "VOTRE PART",
    currency: "€",
    openProduct: "Voir le produit",
    noProductLink: "Demande · pas de lien produit",
    detailOpen: "Détail de l’offre",
    detailClose: "Fermer le détail",
    detailTitle: "Recommandation Dragon",
    scoreDemandHelp:
      "Demande 0–100 : force relative de la demande sur le marché choisi (score, pas commandes brutes).",
    scoreSaturationHelp:
      "Saturation 0–100 : à quel point la niche est pleine. Plus haut = plus de concurrence.",
    scoreRiskHelp:
      "Risque 0–100 : risque vente/ops Dragon. Plus bas = plus sûr (ex. 22 = faible).",
    scoreProfitHelp: "Bénéfice net : bénéfice net estimé (devise).",
    scoreMonthlySalesHelp:
      "Ventes mensuelles : unités/mois estimées pour cette fiche marketplace.",
    scoreEstSalesHelp:
      "Votre part : volume atteignable (~1,5–8 %) — pas toute la demande.",
    detailDemand:
      "Demande {n}/100 — demande relative sur le marché choisi. Signal ~30 jours / rythme recherche-ventes mensuel (score, pas nombre de commandes).",
    detailSaturation:
      "Saturation {n}/100 — densité de la niche (concurrence / vendeurs). Plus haut = plus rempli, entrée plus dure.",
    detailRisk:
      "Risque {n}/100 — score de risque vente/ops Dragon. Plus bas = plus sûr. Ce produit : {band}.",
    detailProfit: "Bénéfice net {currency}{profit} — bénéfice net estimé (devise).",
    detailMonthlySales:
      "Ventes mensuelles {n} unités — volume de la fiche (démo).",
    detailEstSales:
      "Votre part estimée {n} unités/mois — part de niche réaliste, pas toute la demande.",
    riskBandLow: "faible risque",
    riskBandMid: "risque moyen",
    riskBandHigh: "risque élevé",
    detailPathSoft:
      "Pourquoi on recommande : voie dropship / Shopify typiquement plus bas risque — orientation douce.",
    detailPathMarket:
      "Pourquoi on recommande : opportunité marketplace ; lire demande et bénéfice net avec saturation / risque.",
    detailPathAmazon:
      "Pourquoi on recommande : fort potentiel de profit ; risque aussi élevé — choix conscient.",
    productNames: {
      deskLamp: "Lampe de bureau tactile",
      cableOrganizer: "Set range-câbles",
      travelMug: "Mug de voyage étanche",
      homeOrganizer: "Organiseur cuisine",
      kitchenKit: "Kit ustensiles",
      wirelessBuds: "Écouteurs sans fil",
      proteinShaker: "Shaker protéiné",
      phoneMount: "Support téléphone auto",
      ledStrip: "Bande LED",
      prayerMat: "Tapis de prière voyage",
      miniFan: "Mini ventilateur USB",
      gamingChair: "Fauteuil gaming",
    },
    modeAll: "TOUTES LES PLATEFORMES",
    modeStatusAll: "TOUTES LES PLATEFORMES",
    modeLabel: "{platform} • {role}",
    modeStatus: "MODE {platform}",
    cardRoles: [
      {
        label: "Recherche produit",
        desc: "Demande, saturation, score de risque et bénéfice net — ensemble sur la liste",
      },
      {
        label: "Store Spy",
        desc: "Voie dropship : risque typiquement plus bas + demande/saturation + bénéfice net",
      },
      {
        label: "Chasse tendance",
        desc: "Demande virale en hausse, saturation et score de risque Dragon en une liste",
      },
    ],
    features: [
      {
        title: "Fournisseurs optimaux",
        desc: "Trouvez des fournisseurs sur {platforms} et plus — optimal, pas seulement le moins cher.",
      },
      {
        title: "Demande & saturation",
        desc: "Analyse de demande et saturation marché sur chaque produit — repérez les niches saturées tôt.",
      },
      {
        title: "Score de risque Dragon",
        desc: "Score de risque à côté du bénéfice net. Soft faible risque dropship/Shopify ; haut profit+risque sélectionnable.",
      },
      {
        title: "Région · pays · profit",
        desc: "Filtrez et triez la recherche par région, pays et bénéfice net le plus élevé.",
      },
    ],
    footerLeft: "© DRAGON • DEMANDE · SATURATION · RISQUE · BÉNÉFICE NET",
    footerRight: "FAIT POUR LES CHASSEURS",
    langAria: "Choix de la langue",
    live: "EN DIRECT",
    heroMeta: "FIXE • 0.20 OPACITÉ • DÉGRADÉ",
  },
  zh: {
    headerTag: "多平台 • 利润 + 风险 • v2.2",
    keepaLive: "KEEPA • 实时",
    awaken: "龙已苏醒",
    heroLine1: "需求、饱和度、风险。",
    heroLine2: "看见净利润。",
    subtitle:
      "扫描 {platforms} 等；按地区、国家和最高利润筛选。每个产品展示需求、饱和度、Dragon 风险评分与净利润。Dropship / Shopify 通常风险更低——高利润+高风险仍可主动选择。",
    cta: "开始寻猎",
    quickSearch: "⌘K • 快速搜索",
    integrationsLabel: "集成",
    regionsAria: "地区选择",
    regionsAll: "全部",
    regionsEmpty: "请至少选择一个地区",
    regions: {
      tr: "土耳其",
      eu: "欧洲",
      us: "美洲",
      me: "中东",
      asia: "亚洲",
    },
    countryAria: "国家选择",
    countryPrefix: "国家",
    countryAll: "全部",
    countries: {
      tr: "土耳其",
      de: "德国",
      fr: "法国",
      nl: "荷兰",
      uk: "英国",
      us: "美国",
      ca: "加拿大",
      ae: "阿联酋",
      sa: "沙特阿拉伯",
      cn: "中国",
      jp: "日本",
      sg: "新加坡",
    },
    marketAria: "地区与国家选择",
    marketCountriesAll: "全部国家",
    marketRegionsAll: "全部地区",
    marketCountryCount: "{n} 个国家",
    marketRegionCount: "{n} 个地区",
    marketPlusMore: "{name} +{n}",
    marketRegionPlus: "{region} + {extra}",
    marketCountriesSection: "国家 · 市场",
    marketRegionsSection: "地区",
    marketGroupSelectAll: "全选",
    marketGroups: {
      turkiye: "土耳其",
      amazon: "Amazon",
      noon: "中东",
      europe: "欧洲其他",
      americas: "美洲其他",
      asia: "亚洲",
    },
    sortAria: "排序",
    sortPrefix: "排序",
    sortSales: "月销量",
    sortProfit: "最赚钱",
    sortRisk: "风险评分",
    riskAria: "风险偏好",
    riskPrefix: "风险",
    riskLow: "低风险",
    riskLowHint: "轻引导至 dropship / Shopify",
    riskBalanced: "均衡",
    riskBalancedHint: "利润与风险居中",
    riskHigh: "高利润 + 高风险",
    riskHighHint: "主动选择高回报",
    huntTitle: "寻猎结果 · 月销量 · 预估份额 · 需求 · 风险 · 净利润",
    huntEmpty: "当前筛选无产品 — 请更改地区、国家或风险区间。",
    huntSoftSteer:
      "演示结果（尚无实时扫描）。默认按月销量排序。预估份额为保守可达量，不是全部需求。有需求无 SKU 时卡片保留。",
    profitLabel: "净利润",
    riskLabel: "风险",
    demandLabel: "需求",
    saturationLabel: "饱和度",
    monthlySalesLabel: "月销量",
    estSalesLabel: "预估份额",
    currency: "¥",
    openProduct: "打开商品",
    noProductLink: "有需求 · 无商品链接",
    detailOpen: "推荐详情",
    detailClose: "关闭详情",
    detailTitle: "Dragon 推荐",
    scoreDemandHelp: "需求 0–100：所选市场的相对需求强度（评分，非原始订单数）。",
    scoreSaturationHelp: "饱和度 0–100：赛道拥挤程度。越高越挤。",
    scoreRiskHelp: "风险 0–100：Dragon 销售/运营风险。越低越安全（如 22 = 低）。",
    scoreProfitHelp: "净利润：预估净利润（货币）。",
    scoreMonthlySalesHelp: "月销量：该商品在平台上的预估月销量。",
    scoreEstSalesHelp: "预估份额：保守可达份额（约 1.5–8%），不是全部需求。",
    detailDemand:
      "需求 {n}/100 — 所选市场的相对需求。信号基于近约 30 天 / 月度搜索-销售节奏（评分，非原始订单数）。",
    detailSaturation:
      "饱和度 {n}/100 — 赛道有多满（竞争 / 卖家密度）。越高越挤，越难进入。",
    detailRisk:
      "风险 {n}/100 — Dragon 销售/运营风险分。越低越安全。本产品：{band}。",
    detailProfit: "净利润 {currency}{profit} — 预估净利润（货币）。",
    detailMonthlySales: "月销量 {n} 件 — 该商品 listing 月销量（演示）。",
    detailEstSales: "预估份额 {n} 件/月 — 现实可达份额，不是全部需求。",
    riskBandLow: "低风险",
    riskBandMid: "中风险",
    riskBandHigh: "高风险",
    detailPathSoft: "推荐原因：一件代发 / Shopify 路径通常风险更低 — 轻引导。",
    detailPathMarket: "推荐原因：市场机会；结合饱和度 / 风险阅读需求与净利润。",
    detailPathAmazon: "推荐原因：高利润潜力；风险也高 — 主动选择。",
    productNames: {
      deskLamp: "触控台灯",
      cableOrganizer: "理线套装",
      travelMug: "防漏旅行杯",
      homeOrganizer: "厨房收纳",
      kitchenKit: "厨具套装",
      wirelessBuds: "无线耳机",
      proteinShaker: "蛋白摇杯",
      phoneMount: "车载手机支架",
      ledStrip: "LED 灯带",
      prayerMat: "旅行礼拜毯",
      miniFan: "迷你 USB 风扇",
      gamingChair: "电竞椅",
    },
    modeAll: "全部平台",
    modeStatusAll: "全部平台",
    modeLabel: "{platform} • {role}",
    modeStatus: "{platform} 模式",
    cardRoles: [
      {
        label: "选品研究",
        desc: "需求、饱和度、风险分与净利润 — 同列于平台列表",
      },
      {
        label: "店铺情报",
        desc: "一件代发路径：通常更低风险 + 需求/饱和度 + 净利润信号",
      },
      {
        label: "趋势追踪",
        desc: "上升病毒需求、饱和度与 Dragon 风险分一表呈现",
      },
    ],
    features: [
      {
        title: "最优供应商",
        desc: "在 {platforms} 等寻找供应商 — 最优，而不只是最便宜。",
      },
      {
        title: "需求与饱和度",
        desc: "每件产品都有需求分析与市场饱和度 — 尽早发现拥挤赛道。",
      },
      {
        title: "Dragon 风险分",
        desc: "风险分与净利润并列。一件代发/Shopify 轻引导低风险；高利润+高风险可选。",
      },
      {
        title: "地区 · 国家 · 利润",
        desc: "按地区、国家和最高净利润筛选并排序研究结果。",
      },
    ],
    footerLeft: "© DRAGON • 需求 · 饱和度 · 风险 · 净利润",
    footerRight: "为猎手而生",
    langAria: "语言选择",
    live: "实时",
    heroMeta: "固定 • 0.20 透明度 • 渐变",
  },
  ru: {
    headerTag: "МУЛЬТИПЛАТФОРМА • ПРИБЫЛЬ + РИСК • v2.2",
    keepaLive: "KEEPA • В ЭФИРЕ",
    awaken: "Дракон пробуждается",
    heroLine1: "Спрос, насыщенность, риск.",
    heroLine2: "Видьте чистую прибыль.",
    subtitle:
      "Сканируйте {platforms} и другие; фильтруйте по региону, стране и максимальной прибыли. У каждого товара — спрос, насыщенность, риск-скор Dragon и чистая прибыль. Dropship / Shopify обычно с более низким риском — высокий профит+риск остаётся осознанным выбором.",
    cta: "НАЧАТЬ ОХОТУ",
    quickSearch: "⌘K • БЫСТРЫЙ ПОИСК",
    integrationsLabel: "ИНТЕГРАЦИИ",
    regionsAria: "Выбор региона",
    regionsAll: "Все",
    regionsEmpty: "Выберите хотя бы один регион",
    regions: {
      tr: "Турция",
      eu: "Европа",
      us: "Америка",
      me: "Ближний Восток",
      asia: "Азия",
    },
    countryAria: "Выбор страны",
    countryPrefix: "СТРАНА",
    countryAll: "Все",
    countries: {
      tr: "Турция",
      de: "Германия",
      fr: "Франция",
      nl: "Нидерланды",
      uk: "Великобритания",
      us: "США",
      ca: "Канада",
      ae: "ОАЭ",
      sa: "Саудовская Аравия",
      cn: "Китай",
      jp: "Япония",
      sg: "Сингапур",
    },
    marketAria: "Выбор региона и страны",
    marketCountriesAll: "Все страны",
    marketRegionsAll: "Все регионы",
    marketCountryCount: "{n} стран",
    marketRegionCount: "{n} регионов",
    marketPlusMore: "{name} +{n}",
    marketRegionPlus: "{region} + {extra}",
    marketCountriesSection: "Страна · маркетплейс",
    marketRegionsSection: "Регион",
    marketGroupSelectAll: "все",
    marketGroups: {
      turkiye: "Турция",
      amazon: "Amazon",
      noon: "Ближний Восток",
      europe: "Европа прочее",
      americas: "Америка прочее",
      asia: "Азия",
    },
    sortAria: "Сортировка",
    sortPrefix: "СОРТ",
    sortSales: "Месячные продажи",
    sortProfit: "Самый прибыльный",
    sortRisk: "Риск-скор",
    riskAria: "Предпочтение риска",
    riskPrefix: "РИСК",
    riskLow: "Низкий риск",
    riskLowHint: "Мягкий уклон к dropship / Shopify",
    riskBalanced: "Сбалансированный",
    riskBalancedHint: "Средняя прибыль и риск",
    riskHigh: "Высокая прибыль + риск",
    riskHighHint: "Осознанный high-reward выбор",
    huntTitle: "Результаты · продажи/мес · ваша доля · спрос · риск · чистая прибыль",
    huntEmpty: "Нет товаров по фильтрам — смените регион, страну или полосу риска.",
    huntSoftSteer:
      "Демо-выборка (живого скана пока нет). Сортировка по умолчанию: продажи/мес. Ваша доля консервативна — не 100% спроса. Спрос без SKU остаётся в списке.",
    profitLabel: "ПРИБЫЛЬ",
    riskLabel: "РИСК",
    demandLabel: "СПРОС",
    saturationLabel: "НАСЫЩ.",
    monthlySalesLabel: "ПРОДАЖИ/МЕС",
    estSalesLabel: "ВАША ДОЛЯ",
    currency: "$",
    openProduct: "Открыть товар",
    noProductLink: "Спрос · нет ссылки на товар",
    detailOpen: "Детали рекомендации",
    detailClose: "Закрыть детали",
    detailTitle: "Рекомендация Dragon",
    scoreDemandHelp:
      "Спрос 0–100: относительная сила спроса на выбранном рынке (скор, не сырые заказы).",
    scoreSaturationHelp:
      "Насыщенность 0–100: насколько ниша заполнена. Выше = больше конкуренции.",
    scoreRiskHelp:
      "Риск 0–100: риск продаж/операций Dragon. Ниже = безопаснее (напр. 22 = низкий).",
    scoreProfitHelp: "Чистая прибыль: оценка чистой прибыли (валюта).",
    scoreMonthlySalesHelp:
      "Продажи/мес: оценка единиц в месяц по этому листингу.",
    scoreEstSalesHelp:
      "Ваша доля: консервативно достижимый объём (~1,5–8%) — не весь спрос.",
    detailDemand:
      "Спрос {n}/100 — относительный спрос на выбранном рынке. Сигнал ~30 дней / месячный темп поиска-продаж (скор, не число заказов).",
    detailSaturation:
      "Насыщенность {n}/100 — насколько ниша заполнена (конкуренция / плотность продавцов). Выше = теснее, вход сложнее.",
    detailRisk:
      "Риск {n}/100 — оценка риска продаж/операций Dragon. Ниже = безопаснее. Этот товар: {band}.",
    detailProfit: "Чистая прибыль {currency}{profit} — оценка чистой прибыли (валюта).",
    detailMonthlySales:
      "Продажи {n} шт/мес — объём листинга (демо).",
    detailEstSales:
      "Ваша оценка доли {n} шт/мес — реалистичная доля ниши, не весь спрос.",
    riskBandLow: "низкий риск",
    riskBandMid: "средний риск",
    riskBandHigh: "высокий риск",
    detailPathSoft:
      "Почему рекомендуем: путь dropship / Shopify обычно с более низким риском — мягкий уклон.",
    detailPathMarket:
      "Почему рекомендуем: возможность маркетплейса; читайте спрос и прибыль вместе с насыщенностью / риском.",
    detailPathAmazon:
      "Почему рекомендуем: высокий потенциал прибыли; риск тоже высокий — осознанный выбор.",
    productNames: {
      deskLamp: "Сенсорная настольная лампа",
      cableOrganizer: "Набор органайзеров кабелей",
      travelMug: "Герметичная дорожная кружка",
      homeOrganizer: "Кухонный органайзер",
      kitchenKit: "Набор кухонной утвари",
      wirelessBuds: "Беспроводные наушники",
      proteinShaker: "Протеиновый шейкер",
      phoneMount: "Автодержатель для телефона",
      ledStrip: "LED-лента",
      prayerMat: "Дорожный молитвенный коврик",
      miniFan: "Мини USB-вентилятор",
      gamingChair: "Игровое кресло",
    },
    modeAll: "ВСЕ ПЛАТФОРМЫ",
    modeStatusAll: "ВСЕ ПЛАТФОРМЫ",
    modeLabel: "{platform} • {role}",
    modeStatus: "РЕЖИМ {platform}",
    cardRoles: [
      {
        label: "Исследование товаров",
        desc: "Спрос, насыщенность, оценка риска и чистая прибыль — вместе в списке платформы",
      },
      {
        label: "Store Spy",
        desc: "Путь dropship: обычно ниже риск + спрос/насыщенность + сигнал чистой прибыли",
      },
      {
        label: "Охота за трендом",
        desc: "Растущий вирусный спрос, насыщенность и оценка риска Dragon в одном списке",
      },
    ],
    features: [
      {
        title: "Оптимальные поставщики",
        desc: "Поставщики на {platforms} и др. — оптимальный выбор, не только самый дешёвый.",
      },
      {
        title: "Спрос и насыщенность",
        desc: "Анализ спроса и насыщенности рынка на каждом товаре — рано замечайте тесные ниши.",
      },
      {
        title: "Оценка риска Dragon",
        desc: "Оценка риска рядом с чистой прибылью. Мягкий низкий риск для dropship/Shopify; высокий профит+риск доступен.",
      },
      {
        title: "Регион · страна · прибыль",
        desc: "Фильтруйте и сортируйте исследование по региону, стране и максимальной чистой прибыли.",
      },
    ],
    footerLeft: "© DRAGON • СПРОС · НАСЫЩЕННОСТЬ · РИСК · ЧИСТАЯ ПРИБЫЛЬ",
    footerRight: "СОЗДАНО ДЛЯ ОХОТНИКОВ",
    langAria: "Выбор языка",
    live: "В ЭФИРЕ",
    heroMeta: "ФИКС • 0.20 ПРОЗРАЧНОСТЬ • ГРАДИЕНТ",
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.tr;
}
