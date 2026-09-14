import type { CountryId } from "./countries";
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
  modes: { k: "all" | "A" | "B" | "C"; label: string }[];
  modeStatus: Record<"all" | "A" | "B" | "C", string>;
  cards: {
    id: "A" | "B" | "C";
    title: string;
    desc: string;
  }[];
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
      "Amazon, Shopify, TikTok ve daha fazlasında tara. Her üründe talep analizi, doygunluk, Dragon risk skoru ve net kâr birlikte. Dropship / Shopify yolu tipik olarak daha düşük risk — yüksek kâr / yüksek riski de bilinçli seçebilirsin.",
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
    modes: [
      { k: "all", label: "TÜM PLATFORMLAR" },
      { k: "A", label: "AMAZON • Ürün Araştırması" },
      { k: "B", label: "SHOPIFY • Mağaza İstihbaratı" },
      { k: "C", label: "TIKTOK • Viral Av" },
    ],
    modeStatus: {
      all: "TÜM PLATFORMLAR",
      A: "AMAZON MODU",
      B: "SHOPIFY MODU",
      C: "TIKTOK MODU",
    },
    cards: [
      {
        id: "A",
        title: "Amazon",
        desc: "Talep, doygunluk, risk skoru ve net kâr — platform listesinde birlikte",
      },
      {
        id: "B",
        title: "Shopify",
        desc: "Dropship yolu: tipik düşük risk + talep/doygunluk + net kâr sinyali",
      },
      {
        id: "C",
        title: "TikTok",
        desc: "Viral talep yükselişi, doygunluk ve Dragon risk skoruyla listele",
      },
    ],
    features: [
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
        desc: "Bölge ve ülkeye göre tara; en çok kazandıran veya risk bandına göre sırala/filtrele.",
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
      "Scan Amazon, Shopify, TikTok and more. Every product shows demand analysis, saturation, Dragon’s risk score, and net profit together. Dropship / Shopify paths tend toward lower risk — you can still choose high profit / high risk on purpose.",
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
    modes: [
      { k: "all", label: "ALL PLATFORMS" },
      { k: "A", label: "AMAZON • Product Research" },
      { k: "B", label: "SHOPIFY • Store Spy" },
      { k: "C", label: "TIKTOK • Viral Hunt" },
    ],
    modeStatus: {
      all: "ALL PLATFORMS",
      A: "AMAZON MODE",
      B: "SHOPIFY MODE",
      C: "TIKTOK MODE",
    },
    cards: [
      {
        id: "A",
        title: "Amazon",
        desc: "Demand, saturation, risk score, and net profit — together on the platform list",
      },
      {
        id: "B",
        title: "Shopify",
        desc: "Dropship path: typically lower risk + demand/saturation + net profit signal",
      },
      {
        id: "C",
        title: "TikTok",
        desc: "Rising viral demand, saturation, and Dragon risk score in one list",
      },
    ],
    features: [
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
        desc: "Scan by region and country; sort/filter by most profitable or risk band.",
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
      "Scanne Amazon, Shopify, TikTok und mehr. Jedes Produkt zeigt Nachfrageanalyse, Sättigung, Dragon-Risikoscore und Nettogewinn. Dropship / Shopify tendiert zu niedrigerem Risiko — hoher Gewinn / hohes Risiko bleibt wählbar.",
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
    modes: [
      { k: "all", label: "ALLE PLATTFORMEN" },
      { k: "A", label: "AMAZON • Produktforschung" },
      { k: "B", label: "SHOPIFY • Store Spy" },
      { k: "C", label: "TIKTOK • Viral Hunt" },
    ],
    modeStatus: {
      all: "ALLE PLATTFORMEN",
      A: "AMAZON-MODUS",
      B: "SHOPIFY-MODUS",
      C: "TIKTOK-MODUS",
    },
    cards: [
      {
        id: "A",
        title: "Amazon",
        desc: "Nachfrage, Sättigung, Risikoscore und Nettogewinn — zusammen in der Plattformliste",
      },
      {
        id: "B",
        title: "Shopify",
        desc: "Dropship-Pfad: typisch niedrigeres Risiko + Nachfrage/Sättigung + Nettogewinn",
      },
      {
        id: "C",
        title: "TikTok",
        desc: "Steigende virale Nachfrage, Sättigung und Dragon-Risikoscore in einer Liste",
      },
    ],
    features: [
      {
        title: "Nachfrage & Sättigung",
        desc: "Nachfrageanalyse und Marktsättigung bei jedem Produkt — überfüllte Nischen früh erkennen.",
      },
      {
        title: "Dragon-Risikoscore",
        desc: "Risikoscore neben Nettogewinn. Sanft niedrig für Dropship/Shopify; hoher Gewinn+Risiko wählbar.",
      },
      {
        title: "Region · Land · Gewinn",
        desc: "Nach Region und Land scannen; nach Gewinn oder Risikoband sortieren/filtern.",
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
      "Scannez Amazon, Shopify, TikTok et plus. Chaque produit affiche analyse de demande, saturation, score de risque Dragon et bénéfice net. Dropship / Shopify tend vers un risque plus bas — profit élevé / risque élevé reste un choix conscient.",
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
    modes: [
      { k: "all", label: "TOUTES LES PLATEFORMES" },
      { k: "A", label: "AMAZON • Recherche produit" },
      { k: "B", label: "SHOPIFY • Store Spy" },
      { k: "C", label: "TIKTOK • Chasse virale" },
    ],
    modeStatus: {
      all: "TOUTES LES PLATEFORMES",
      A: "MODE AMAZON",
      B: "MODE SHOPIFY",
      C: "MODE TIKTOK",
    },
    cards: [
      {
        id: "A",
        title: "Amazon",
        desc: "Demande, saturation, score de risque et bénéfice net — ensemble sur la liste",
      },
      {
        id: "B",
        title: "Shopify",
        desc: "Voie dropship : risque typiquement plus bas + demande/saturation + bénéfice net",
      },
      {
        id: "C",
        title: "TikTok",
        desc: "Demande virale en hausse, saturation et score de risque Dragon en une liste",
      },
    ],
    features: [
      {
        title: "Demande & saturation",
        desc: "Analyse de demande et saturation marché sur chaque produit — repérez les niches saturées tôt.",
      },
      {
        title: "Score de risque Dragon",
        desc: "Score de risque à côté du bénéfice net. Soft bas pour dropship/Shopify ; haut profit+risque sélectionnable.",
      },
      {
        title: "Région · pays · profit",
        desc: "Scannez par région et pays ; triez/filtrez par rentabilité ou bande de risque.",
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
      "扫描 Amazon、Shopify、TikTok 等。每个产品同时展示需求分析、市场饱和度、Dragon 风险评分与净利润。Dropship / Shopify 路径通常风险更低——你仍可主动选择高利润 / 高风险。",
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
    modes: [
      { k: "all", label: "全部平台" },
      { k: "A", label: "AMAZON • 选品研究" },
      { k: "B", label: "SHOPIFY • 店铺情报" },
      { k: "C", label: "TIKTOK • 爆款追踪" },
    ],
    modeStatus: {
      all: "全部平台",
      A: "AMAZON 模式",
      B: "SHOPIFY 模式",
      C: "TIKTOK 模式",
    },
    cards: [
      {
        id: "A",
        title: "Amazon",
        desc: "需求、饱和度、风险评分与净利润 — 同列展示",
      },
      {
        id: "B",
        title: "Shopify",
        desc: "一件代发路径：典型更低风险 + 需求/饱和度 + 净利润信号",
      },
      {
        id: "C",
        title: "TikTok",
        desc: "上升病毒需求、饱和度与 Dragon 风险评分一表呈现",
      },
    ],
    features: [
      {
        title: "需求与饱和度",
        desc: "每个产品的需求分析与市场饱和度 — 尽早发现拥挤赛道。",
      },
      {
        title: "Dragon 风险评分",
        desc: "风险评分与净利润并排。Dropship/Shopify 轻引导低风险；高利润+高风险可选。",
      },
      {
        title: "地区 · 国家 · 利润",
        desc: "按地区与国家扫描；按最赚钱或风险区间排序/筛选。",
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
      "Сканируйте Amazon, Shopify, TikTok и другие. У каждого товара — анализ спроса, насыщенность, риск-скор Dragon и чистая прибыль. Dropship / Shopify обычно с более низким риском — высокий профит / высокий риск остаётся осознанным выбором.",
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
    modes: [
      { k: "all", label: "ВСЕ ПЛАТФОРМЫ" },
      { k: "A", label: "AMAZON • Исследование товаров" },
      { k: "B", label: "SHOPIFY • Store Spy" },
      { k: "C", label: "TIKTOK • Вирусный поиск" },
    ],
    modeStatus: {
      all: "ВСЕ ПЛАТФОРМЫ",
      A: "РЕЖИМ AMAZON",
      B: "РЕЖИМ SHOPIFY",
      C: "РЕЖИМ TIKTOK",
    },
    cards: [
      {
        id: "A",
        title: "Amazon",
        desc: "Спрос, насыщенность, риск-скор и чистая прибыль — вместе в списке платформы",
      },
      {
        id: "B",
        title: "Shopify",
        desc: "Путь dropship: типично ниже риск + спрос/насыщенность + чистая прибыль",
      },
      {
        id: "C",
        title: "TikTok",
        desc: "Растущий вирусный спрос, насыщенность и риск-скор Dragon в одном списке",
      },
    ],
    features: [
      {
        title: "Спрос и насыщенность",
        desc: "Анализ спроса и насыщенности рынка на каждом товаре — рано видьте переполненные ниши.",
      },
      {
        title: "Риск-скор Dragon",
        desc: "Риск рядом с чистой прибылью. Мягкий низкий риск для dropship/Shopify; высокий профит+риск выбираем.",
      },
      {
        title: "Регион · страна · прибыль",
        desc: "Сканируйте по региону и стране; сортируйте/фильтруйте по прибыли или полосе риска.",
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
