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

const TERMS_DE: TermsDocument = {
  pageTitle: "Nutzungsbedingungen",
  backHome: "Startseite",
  effectiveLabel: "Gültig ab",
  contactLabel: "Kontakt",
  intro:
    'Mit der Nutzung des Dragon-Dienstes (der „Dienst“) bestätigen Sie, dass Sie diese Nutzungsbedingungen gelesen haben und ihnen zustimmen. Der Dienst wird von Yüksel Aksoy (dem „Betreiber“) betrieben.',
  sections: [
    {
      title: "1. Nutzung des Dienstes",
      paragraphs: [
        "Sie dürfen den Dienst nur zu rechtmäßigen Zwecken und im Einklang mit diesen Bedingungen nutzen. Der Betreiber kann den Zugang jederzeit einschränken oder beenden.",
      ],
    },
    {
      title: "2. Kein automatisierter Zugriff",
      paragraphs: [
        "Ohne vorherige schriftliche Genehmigung dürfen Sie den Dienst nicht mit Bots, Skripten, Crawlern, Scrapern, KI-Agenten oder anderen automatisierten Mitteln aufrufen oder abfragen.",
      ],
    },
    {
      title: "3. Kein Sammeln von Daten oder Inhalten",
      paragraphs: [
        "Es ist untersagt, Daten oder Inhalte aus dem Dienst oder über den Dienst bereitgestellte Inhalte zu sammeln, zusammenzustellen, zu indexieren oder zu extrahieren.",
      ],
    },
    {
      title: "4. Geistiges Eigentum und Reverse Engineering",
      paragraphs: [
        "Software, Design, Marken und Inhalte des Dienstes gehören dem Betreiber oder seinen Lizenzgebern. Reverse Engineering, Dekompilierung, Kopieren oder abgeleitete Werke sind untersagt.",
      ],
    },
    {
      title: "5. Keine konkurrierenden Produkte",
      paragraphs: [
        "Sie dürfen den Dienst nicht nutzen, um direkt oder indirekt ein konkurrierendes Produkt oder einen konkurrierenden Dienst zu entwickeln, zu trainieren, zu benchmarken oder die Funktionen des Dienstes nachzuahmen.",
      ],
    },
    {
      title: "6. Konten und Verstöße",
      paragraphs: [
        "Bei Verstößen gegen diese Bedingungen kann der Betreiber den Zugang sperren, Konten kündigen und rechtliche Schritte einleiten — ohne vorherige Ankündigung.",
      ],
    },
    {
      title: "7. Anwendbares Recht und Gerichtsstand",
      paragraphs: [
        "Diese Bedingungen unterliegen dem Recht der Republik Türkei. Für Streitigkeiten sind ausschließlich die Gerichte und Vollstreckungsbehörden der Türkei zuständig.",
      ],
    },
  ],
};

const TERMS_FR: TermsDocument = {
  pageTitle: "Conditions d’utilisation",
  backHome: "Accueil",
  effectiveLabel: "Date d’effet",
  contactLabel: "Contact",
  intro:
    "En utilisant le service Dragon (le « Service »), vous reconnaissez avoir lu et accepté les présentes Conditions d’utilisation. Le Service est exploité par Yüksel Aksoy (l’« Exploitant »).",
  sections: [
    {
      title: "1. Utilisation du Service",
      paragraphs: [
        "Vous ne pouvez utiliser le Service qu’à des fins licites et conformément aux présentes conditions. L’Exploitant peut restreindre ou résilier l’accès à tout moment.",
      ],
    },
    {
      title: "2. Interdiction d’accès automatisé",
      paragraphs: [
        "Sans autorisation écrite préalable, vous ne pouvez pas accéder au Service ni l’interroger au moyen de robots, scripts, crawlers, scrapers, agents d’IA ou tout autre moyen automatisé.",
      ],
    },
    {
      title: "3. Interdiction de collecte de données",
      paragraphs: [
        "Il est interdit de collecter, compiler, indexer ou extraire des données ou du contenu provenant du Service ou mis à disposition par son intermédiaire.",
      ],
    },
    {
      title: "4. Propriété intellectuelle et ingénierie inverse",
      paragraphs: [
        "Les logiciels, le design, les marques et le contenu du Service appartiennent à l’Exploitant ou à ses concédants. Toute ingénierie inverse, décompilation, copie ou œuvre dérivée est interdite.",
      ],
    },
    {
      title: "5. Interdiction de produits concurrents",
      paragraphs: [
        "Vous ne pouvez pas utiliser le Service pour développer, entraîner, comparer ou imiter un produit ou service concurrent, directement ou indirectement.",
      ],
    },
    {
      title: "6. Comptes et violations",
      paragraphs: [
        "En cas de violation, l’Exploitant peut suspendre l’accès, résilier les comptes et engager des recours juridiques sans préavis.",
      ],
    },
    {
      title: "7. Droit applicable et juridiction",
      paragraphs: [
        "Les présentes conditions sont régies par le droit de la République de Türkiye. Les tribunaux et offices d’exécution de Türkiye ont compétence exclusive.",
      ],
    },
  ],
};

const TERMS_ZH: TermsDocument = {
  pageTitle: "使用条款",
  backHome: "首页",
  effectiveLabel: "生效日期",
  contactLabel: "联系",
  intro:
    "使用 Dragon 服务（「服务」）即表示您已阅读并同意本使用条款。服务由 Yüksel Aksoy（「运营方」）运营。",
  sections: [
    {
      title: "1. 服务使用",
      paragraphs: [
        "您仅可将服务用于合法目的并遵守本条款。运营方可随时限制或终止访问。",
      ],
    },
    {
      title: "2. 禁止自动化访问",
      paragraphs: [
        "未经事先书面许可，您不得使用机器人、脚本、爬虫、抓取工具、AI 代理或其他自动化方式访问或查询服务。",
      ],
    },
    {
      title: "3. 禁止数据采集",
      paragraphs: [
        "禁止从服务或通过服务提供的内容中收集、汇编、索引或抓取数据或内容。",
      ],
    },
    {
      title: "4. 知识产权与逆向工程",
      paragraphs: [
        "服务的软件、设计、品牌与内容归运营方或其许可方所有。禁止逆向工程、反编译、复制或创建衍生作品。",
      ],
    },
    {
      title: "5. 禁止开发竞争产品",
      paragraphs: [
        "您不得直接或间接使用服务来开发、训练、对标或模仿竞争产品或服务。",
      ],
    },
    {
      title: "6. 账户与违规",
      paragraphs: [
        "若违反本条款，运营方可暂停访问、终止账户并寻求法律救济，且无需事先通知。",
      ],
    },
    {
      title: "7. 适用法律与管辖",
      paragraphs: [
        "本条款受土耳其共和国法律管辖。土耳其法院与执行机关享有专属管辖权。",
      ],
    },
  ],
};

const TERMS_RU: TermsDocument = {
  pageTitle: "Условия использования",
  backHome: "Главная",
  effectiveLabel: "Дата вступления в силу",
  contactLabel: "Контакт",
  intro:
    "Используя сервис Dragon («Сервис»), вы подтверждаете, что прочитали и принимаете настоящие Условия использования. Сервис управляется Yüksel Aksoy («Оператор»).",
  sections: [
    {
      title: "1. Использование Сервиса",
      paragraphs: [
        "Вы можете использовать Сервис только в законных целях и в соответствии с настоящими условиями. Оператор вправе ограничить или прекратить доступ в любое время.",
      ],
    },
    {
      title: "2. Запрет автоматизированного доступа",
      paragraphs: [
        "Без предварительного письменного разрешения запрещается обращаться к Сервису или запрашивать его с помощью ботов, скриптов, краулеров, скрейперов, ИИ-агентов или иных автоматизированных средств.",
      ],
    },
    {
      title: "3. Запрет сбора данных и контента",
      paragraphs: [
        "Запрещается собирать, компилировать, индексировать или извлекать данные или контент из Сервиса либо контент, предоставляемый через него.",
      ],
    },
    {
      title: "4. Интеллектуальная собственность и обратная разработка",
      paragraphs: [
        "Программное обеспечение, дизайн, брендинг и контент Сервиса принадлежат Оператору или его лицензиарам. Запрещены обратная разработка, декомпиляция, копирование и создание производных работ.",
      ],
    },
    {
      title: "5. Запрет конкурирующих продуктов",
      paragraphs: [
        "Запрещается использовать Сервис для создания, обучения, бенчмаркинга или имитации конкурирующего продукта или сервиса — прямо или косвенно.",
      ],
    },
    {
      title: "6. Учётные записи и нарушения",
      paragraphs: [
        "При нарушении условий Оператор вправе приостановить доступ, закрыть учётные записи и обратиться к правовым средствам защиты без предварительного уведомления.",
      ],
    },
    {
      title: "7. Применимое право и подсудность",
      paragraphs: [
        "Настоящие условия регулируются законодательством Республики Türkiye. Исключительную подсудность имеют суды и исполнительные органы Türkiye.",
      ],
    },
  ],
};

const TERMS_BY_LOCALE: Record<Locale, TermsDocument> = {
  tr: TERMS_TR,
  en: TERMS_EN,
  de: TERMS_DE,
  fr: TERMS_FR,
  zh: TERMS_ZH,
  ru: TERMS_RU,
};

export function getTermsDocument(locale: Locale): TermsDocument {
  return TERMS_BY_LOCALE[locale] ?? TERMS_EN;
}

export function termsPageLocale(locale: Locale): Locale {
  return locale in TERMS_BY_LOCALE ? locale : "en";
}
