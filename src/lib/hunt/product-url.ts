/**
 * Marketplace product deep-link checks.
 * "Ürüne git" must open a real product detail page — never home, search, or category dump.
 */

const SEARCH_HINT =
  /(\/sr\b|\/s\?|\/search\b|\/arama\b|\/ara\b|[?&]q=|[?&]k=|[?&]keyword=)/i;

/** Host → product-detail path patterns for TR (and related) marketplaces. */
const DEEP_LINK_RULES: Array<{ host: RegExp; path: RegExp }> = [
  { host: /(?:^|\.)trendyol\.com$/i, path: /-p-\d+/i },
  { host: /(?:^|\.)hepsiburada\.com$/i, path: /-pm-[A-Z0-9]+/i },
  { host: /(?:^|\.)amazon\.com\.tr$/i, path: /\/(?:dp|gp\/product)\/[A-Z0-9]{10}/i },
  { host: /(?:^|\.)amazon\.[a-z.]+$/i, path: /\/(?:dp|gp\/product)\/[A-Z0-9]{10}/i },
  { host: /(?:^|\.)pttavm\.com$/i, path: /-p-\d+/i },
];

export function isMarketplaceProductDeepLink(url: string): boolean {
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return false;
  }
  if (parsed.protocol !== "https:") return false;
  const host = parsed.hostname.replace(/^www\./i, "");
  const href = parsed.href;
  if (SEARCH_HINT.test(href)) return false;
  // Bare store roots / empty paths
  if (!parsed.pathname || parsed.pathname === "/") return false;

  for (const rule of DEEP_LINK_RULES) {
    if (rule.host.test(host) && rule.path.test(parsed.pathname + parsed.search)) {
      return true;
    }
  }
  return false;
}

/** Drop any row whose CTA is not a product detail URL. */
export function requireProductDeepLinks<T extends { productUrl: string }>(
  products: T[],
): T[] {
  return products.filter((p) => isMarketplaceProductDeepLink(p.productUrl));
}
