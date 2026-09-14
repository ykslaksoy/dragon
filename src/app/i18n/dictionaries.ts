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

export const dictionaries: Record<Locale, Dictionary> = {
  tr: {
    headerTag: "ÇOK PLATFORM • DS FUSION • v2.1",
    keepaLive: "KEEPA • CANLI",
    awaken: "Dragon Uyanıyor",
    heroLine1: "Tüm platformları tara.",
    heroLine2: "Optimal ürünü bul.",
    subtitle:
      "Amazon, Shopify, TikTok ve daha fazlasında ürünleri tara; platforma özel listeler ve hangi platformda olduğunu gösteren genel liste. Tedarikçileri bul, sadece en ucuz değil optimal öneriyi gör — satış hacmi, fiyat, maliyet ve net kâr katsayınla.",
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
        desc: "BSR, yorum, aylık satış, trend — platforma özel kanıtlanmış ürün listesi",
      },
      {
        id: "B",
        title: "Shopify",
        desc: "Mağaza sayısı, ciro tahmini, tema — satan store’ları platform listesinde yakala",
      },
      {
        id: "C",
        title: "TikTok",
        desc: "Viral skor, izlenme, etkileşim — TikTok’ta yükselen ürünleri anında listele",
      },
    ],
    features: [
      {
        title: "Çok platform tarama",
        desc: "Tek avda tüm kanalları tara; her platform için ayrı ürün listesi + genel birleşik liste.",
      },
      {
        title: "Optimal tedarikçi",
        desc: "AliExpress, Temu, CJ ve daha fazlasında tedarikçi bul — sadece en ucuz değil, optimal öneri.",
      },
      {
        title: "Kâr katsayısı",
        desc: "Platforma göre satış hacmi, fiyat, maliyet ve net kârı tercihine göre gör.",
      },
    ],
    footerLeft: "© DRAGON • ÇOK PLATFORM ÜRÜN ARAŞTIRMASI • DROPSHIPPING HIZI",
    footerRight: "AVCILAR İÇİN YAPILDI",
    langAria: "Dil seçimi",
    live: "CANLI",
    heroMeta: "SABİT • 0.20 OPAK • DEGRADE",
  },
  en: {
    headerTag: "MULTI-PLATFORM • DS FUSION • v2.1",
    keepaLive: "KEEPA • LIVE",
    awaken: "Dragon Awakens",
    heroLine1: "Scan every platform.",
    heroLine2: "Find the optimal product.",
    subtitle:
      "Scan Amazon, Shopify, TikTok and more; get per-platform lists plus a general list showing which platform each product is on. Find suppliers and get optimal—not just cheapest—recommendations. See sellable volume, price, costs, and net profit by your preference.",
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
        desc: "BSR, reviews, monthly sales, trends — proven products in a platform-specific list",
      },
      {
        id: "B",
        title: "Shopify",
        desc: "Store count, revenue estimates, themes — catch winning stores on the platform list",
      },
      {
        id: "C",
        title: "TikTok",
        desc: "Viral score, views, engagement — list rising products on TikTok instantly",
      },
    ],
    features: [
      {
        title: "Multi-platform scan",
        desc: "Scan every channel in one hunt; per-platform product lists plus a unified general list.",
      },
      {
        title: "Optimal suppliers",
        desc: "Find suppliers on AliExpress, Temu, CJ and more — optimal picks, not only the cheapest.",
      },
      {
        title: "Profit coefficient",
        desc: "See sellable volume, price, costs, and net profit per platform by your preference.",
      },
    ],
    footerLeft: "© DRAGON • MULTI-PLATFORM PRODUCT RESEARCH • DROPSHIPPING SPEED",
    footerRight: "BUILT FOR HUNTERS",
    langAria: "Language selection",
    live: "LIVE",
    heroMeta: "FIXED • 0.20 OPACITY • GRADIENT",
  },
  de: {
    headerTag: "MULTI-PLATFORM • DS FUSION • v2.1",
    keepaLive: "KEEPA • LIVE",
    awaken: "Dragon erwacht",
    heroLine1: "Alle Plattformen scannen.",
    heroLine2: "Das optimale Produkt finden.",
    subtitle:
      "Scanne Amazon, Shopify, TikTok und mehr; erhalte plattformspezifische Listen plus eine Gesamtliste mit Herkunftsplattform. Finde Lieferanten und erhalte optimale—nicht nur günstigste—Empfehlungen. Sieh Verkaufsvolumen, Preis, Kosten und Nettogewinn nach deiner Präferenz.",
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
        desc: "BSR, Bewertungen, Monatsverkäufe, Trends — bewährte Produkte in der Plattformliste",
      },
      {
        id: "B",
        title: "Shopify",
        desc: "Shop-Anzahl, Umsatzschätzung, Themes — erfolgreiche Stores in der Plattformliste",
      },
      {
        id: "C",
        title: "TikTok",
        desc: "Viral-Score, Views, Engagement — steigende Produkte auf TikTok sofort listen",
      },
    ],
    features: [
      {
        title: "Multi-Plattform-Scan",
        desc: "Alle Kanäle in einer Jagd scannen; Listen pro Plattform plus eine einheitliche Gesamtliste.",
      },
      {
        title: "Optimale Lieferanten",
        desc: "Lieferanten auf AliExpress, Temu, CJ und mehr — optimal, nicht nur am günstigsten.",
      },
      {
        title: "Gewinnkoeffizient",
        desc: "Verkaufsvolumen, Preis, Kosten und Nettogewinn pro Plattform nach Präferenz sehen.",
      },
    ],
    footerLeft: "© DRAGON • MULTI-PLATFORM PRODUKTRECHERCHE • DROPSHIPPING-TEMPO",
    footerRight: "FÜR JÄGER GEBAUT",
    langAria: "Sprachauswahl",
    live: "LIVE",
    heroMeta: "FIX • 0.20 OPACITY • VERLAUF",
  },
  fr: {
    headerTag: "MULTI-PLATEFORME • DS FUSION • v2.1",
    keepaLive: "KEEPA • EN DIRECT",
    awaken: "Dragon s’éveille",
    heroLine1: "Scannez toutes les plateformes.",
    heroLine2: "Trouvez le produit optimal.",
    subtitle:
      "Scannez Amazon, Shopify, TikTok et plus ; listes par plateforme et liste générale indiquant où chaque produit apparaît. Trouvez des fournisseurs et des recommandations optimales—pas seulement les moins chères. Voyez volume vendable, prix, coûts et bénéfice net selon votre préférence.",
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
        desc: "BSR, avis, ventes mensuelles, tendances — produits prouvés en liste plateforme",
      },
      {
        id: "B",
        title: "Shopify",
        desc: "Nombre de boutiques, CA estimé, thèmes — repérez les stores gagnants",
      },
      {
        id: "C",
        title: "TikTok",
        desc: "Score viral, vues, engagement — listez les produits en hausse sur TikTok",
      },
    ],
    features: [
      {
        title: "Scan multi-plateforme",
        desc: "Scannez tous les canaux en une chasse ; listes par plateforme + liste générale unifiée.",
      },
      {
        title: "Fournisseurs optimaux",
        desc: "Trouvez des fournisseurs sur AliExpress, Temu, CJ et plus — optimal, pas seulement le moins cher.",
      },
      {
        title: "Coefficient de profit",
        desc: "Volume vendable, prix, coûts et bénéfice net par plateforme selon votre préférence.",
      },
    ],
    footerLeft: "© DRAGON • RECHERCHE MULTI-PLATEFORME • VITESSE DROPSHIPPING",
    footerRight: "FAIT POUR LES CHASSEURS",
    langAria: "Choix de la langue",
    live: "EN DIRECT",
    heroMeta: "FIXE • 0.20 OPACITÉ • DÉGRADÉ",
  },
  zh: {
    headerTag: "多平台 • DS FUSION • v2.1",
    keepaLive: "KEEPA • 实时",
    awaken: "龙已苏醒",
    heroLine1: "扫描所有平台。",
    heroLine2: "找到最优产品。",
    subtitle:
      "扫描 Amazon、Shopify、TikTok 等；获取各平台专属列表，以及显示产品所在平台的总列表。寻找供应商，获得最优（不仅是最便宜）推荐。按你的偏好查看可售量、价格、成本与净利润。",
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
        desc: "BSR、评论、月销、趋势 — 平台专属已验证产品列表",
      },
      {
        id: "B",
        title: "Shopify",
        desc: "店铺数量、营收估算、主题 — 在平台列表中捕捉爆款店",
      },
      {
        id: "C",
        title: "TikTok",
        desc: "病毒分、播放、互动 — 即时列出 TikTok 上升产品",
      },
    ],
    features: [
      {
        title: "多平台扫描",
        desc: "一次狩猎扫描所有渠道；各平台产品列表 + 统一总列表。",
      },
      {
        title: "最优供应商",
        desc: "在 AliExpress、Temu、CJ 等寻找供应商 — 最优，而不只是最便宜。",
      },
      {
        title: "利润系数",
        desc: "按偏好查看各平台可售量、价格、成本与净利润。",
      },
    ],
    footerLeft: "© DRAGON • 多平台选品研究 • 一件代发速度",
    footerRight: "为猎手而生",
    langAria: "语言选择",
    live: "实时",
    heroMeta: "固定 • 0.20 透明度 • 渐变",
  },
  ru: {
    headerTag: "МУЛЬТИПЛАТФОРМА • DS FUSION • v2.1",
    keepaLive: "KEEPA • В ЭФИРЕ",
    awaken: "Дракон пробуждается",
    heroLine1: "Сканируйте все платформы.",
    heroLine2: "Найдите оптимальный товар.",
    subtitle:
      "Сканируйте Amazon, Shopify, TikTok и другие; получайте списки по платформам и общий список с указанием платформы. Находите поставщиков и получайте оптимальные—не только самые дешёвые—рекомендации. Смотрите объём продаж, цену, затраты и чистую прибыль по вашим предпочтениям.",
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
        desc: "BSR, отзывы, месячные продажи, тренды — проверенные товары в списке платформы",
      },
      {
        id: "B",
        title: "Shopify",
        desc: "Число магазинов, оценка выручки, темы — ловите успешные store в списке",
      },
      {
        id: "C",
        title: "TikTok",
        desc: "Вирусный балл, просмотры, вовлечённость — мгновенно список растущих товаров",
      },
    ],
    features: [
      {
        title: "Мультиплатформенный скан",
        desc: "Сканируйте все каналы за одну охоту; списки по платформам + общий объединённый список.",
      },
      {
        title: "Оптимальные поставщики",
        desc: "Поставщики на AliExpress, Temu, CJ и др. — оптимальный выбор, не только самый дешёвый.",
      },
      {
        title: "Коэффициент прибыли",
        desc: "Объём продаж, цена, затраты и чистая прибыль по платформе под ваши предпочтения.",
      },
    ],
    footerLeft: "© DRAGON • МУЛЬТИПЛАТФОРМЕННЫЙ ПОИСК • СКОРОСТЬ DROPSHIPPING",
    footerRight: "СОЗДАНО ДЛЯ ОХОТНИКОВ",
    langAria: "Выбор языка",
    live: "В ЭФИРЕ",
    heroMeta: "ФИКС • 0.20 ПРОЗРАЧНОСТЬ • ГРАДИЕНТ",
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.tr;
}
