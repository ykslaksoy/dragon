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
  currency: string;
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
    huntTitle: "Av sonuçları · talep · doygunluk · risk · net kâr",
    huntEmpty: "Bu filtrelerle ürün yok — bölge, ülke veya risk bandını değiştir.",
    huntSoftSteer:
      "Varsayılan: düşük risk (dropship/Shopify). Yüksek kâr+risk serbest.",
    profitLabel: "NET KÂR",
    riskLabel: "RİSK",
    demandLabel: "TALEP",
    saturationLabel: "DOYGUNLUK",
    currency: "₺",
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
    huntTitle: "Hunt results · demand · saturation · risk · net profit",
    huntEmpty: "No products for these filters — change region, country, or risk band.",
    huntSoftSteer:
      "Default: low risk (dropship/Shopify). High profit+risk stays available.",
    profitLabel: "NET PROFIT",
    riskLabel: "RISK",
    demandLabel: "DEMAND",
    saturationLabel: "SATURATION",
    currency: "$",
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
    huntTitle: "Jagdergebnisse · Nachfrage · Sättigung · Risiko · Nettogewinn",
    huntEmpty: "Keine Produkte für diese Filter — Region, Land oder Risikoband ändern.",
    huntSoftSteer:
      "Standard: niedriges Risiko (Dropship/Shopify). Hoher Gewinn+Risiko bleibt frei.",
    profitLabel: "NETTO",
    riskLabel: "RISIKO",
    demandLabel: "NACHFRAGE",
    saturationLabel: "SÄTTIGUNG",
    currency: "€",
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
    huntTitle: "Résultats · demande · saturation · risque · bénéfice net",
    huntEmpty: "Aucun produit pour ces filtres — changez région, pays ou bande de risque.",
    huntSoftSteer:
      "Défaut : faible risque (dropship/Shopify). Haut profit+risque reste libre.",
    profitLabel: "BÉNÉFICE",
    riskLabel: "RISQUE",
    demandLabel: "DEMANDE",
    saturationLabel: "SATURATION",
    currency: "€",
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
    huntTitle: "寻猎结果 · 需求 · 饱和度 · 风险 · 净利润",
    huntEmpty: "当前筛选无产品 — 请更改地区、国家或风险区间。",
    huntSoftSteer:
      "默认：低风险（dropship/Shopify）。高利润+高风险仍可选。",
    profitLabel: "净利润",
    riskLabel: "风险",
    demandLabel: "需求",
    saturationLabel: "饱和度",
    currency: "¥",
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
    huntTitle: "Результаты · спрос · насыщенность · риск · чистая прибыль",
    huntEmpty: "Нет товаров по фильтрам — смените регион, страну или полосу риска.",
    huntSoftSteer:
      "По умолчанию: низкий риск (dropship/Shopify). Высокая прибыль+риск доступны.",
    profitLabel: "ПРИБЫЛЬ",
    riskLabel: "РИСК",
    demandLabel: "СПРОС",
    saturationLabel: "НАСЫЩ.",
    currency: "$",
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
