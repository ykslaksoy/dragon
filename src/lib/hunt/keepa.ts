/** Keepa marketplace domain id (https://keepa.com/#!discuss/t/product-object/116). */
export type KeepaDomainId = 1 | 2 | 3 | 4 | 5 | 6 | 8 | 9 | 10 | 11 | 12;

const DOMAIN_BY_HOST: Record<string, KeepaDomainId> = {
  "amazon.com": 1,
  "amazon.co.uk": 2,
  "amazon.de": 3,
  "amazon.fr": 4,
  "amazon.co.jp": 5,
  "amazon.ca": 6,
  "amazon.it": 8,
  "amazon.es": 9,
  "amazon.in": 10,
  "amazon.com.mx": 11,
  "amazon.com.br": 12,
};

export function keepaDomainFromProductUrl(url: string): KeepaDomainId | null {
  try {
    const host = new URL(url).hostname.replace(/^www\./, "");
    return DOMAIN_BY_HOST[host] ?? null;
  } catch {
    return null;
  }
}

export function asinFromAmazonUrl(url: string): string | null {
  const m = url.match(/\/(?:dp|gp\/product)\/([A-Z0-9]{10})/i);
  return m ? m[1]!.toUpperCase() : null;
}

export type KeepaMonthlyResult = {
  asin: string;
  domain: KeepaDomainId;
  monthlySold: number;
};

type KeepaProductResponse = {
  products?: Array<{ asin?: string; monthlySold?: number }>;
};

/**
 * Fetch Keepa `monthlySold` for one ASIN. Returns null when key missing or no field.
 */
export async function fetchKeepaMonthlySold(opts: {
  asin: string;
  domain: KeepaDomainId;
  apiKey: string;
}): Promise<number | null> {
  const params = new URLSearchParams({
    key: opts.apiKey,
    domain: String(opts.domain),
    asin: opts.asin,
    stats: "0",
  });
  const res = await fetch(`https://api.keepa.com/product?${params}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) return null;
  const data = (await res.json()) as KeepaProductResponse;
  const row = data.products?.[0];
  if (!row?.monthlySold || row.monthlySold <= 0) return null;
  return row.monthlySold;
}

export async function fetchKeepaBatch(
  items: Array<{ asin: string; domain: KeepaDomainId }>,
  apiKey: string | undefined,
): Promise<Map<string, number>> {
  const out = new Map<string, number>();
  if (!apiKey || items.length === 0) return out;

  const unique = new Map<string, { asin: string; domain: KeepaDomainId }>();
  for (const it of items) {
    unique.set(`${it.domain}:${it.asin}`, it);
  }

  for (const { asin, domain } of unique.values()) {
    try {
      const sold = await fetchKeepaMonthlySold({ asin, domain, apiKey });
      if (sold != null) out.set(`${domain}:${asin}`, sold);
    } catch {
      // skip failed ASIN
    }
  }
  return out;
}

export function hasKeepaKey(): boolean {
  return Boolean(process.env.KEEPA_API_KEY?.trim());
}
