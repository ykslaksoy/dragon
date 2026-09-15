/**
 * Amazon TR public search → hunt products (best-effort live identity).
 * Prefer AMAZON_PAAPI_* when configured; Keepa does not cover amazon.com.tr.
 */

import { withEconomics } from "./scoring";
import type { HuntProduct } from "./types";

const UA =
  "Mozilla/5.0 (compatible; DragonHunt/0.1; +https://superdragon.vercel.app)";

type Parsed = {
  asin: string;
  title: string;
  image: string;
  price: number | null;
};

function parseSearchHtml(raw: string): Parsed[] {
  const products: Parsed[] = [];
  const asinRe = /data-asin="([A-Z0-9]{10})"/g;
  let m: RegExpExecArray | null;
  while ((m = asinRe.exec(raw))) {
    const asin = m[1]!;
    const chunk = raw.slice(m.index, m.index + 5500);
    const titleMatch =
      chunk.match(/<h2[^>]*>[\s\S]*?<span[^>]*>([^<]{8,140})<\/span>/) ||
      chunk.match(/alt="([^"]{8,140})"/);
    const imgMatch = chunk.match(
      /(https:\/\/m\.media-amazon\.com\/images\/I\/[A-Za-z0-9+._%-]+\.jpg)/,
    );
    const whole = chunk.match(/a-price-whole">([^<]+)/);
    const frac = chunk.match(/a-price-fraction">([^<]+)/);
    let price: number | null = null;
    if (whole) {
      const w = whole[1]!.replace(/[^\d]/g, "");
      const f = (frac?.[1] ?? "00").replace(/[^\d]/g, "");
      const n = Number(`${w}.${f}`);
      if (!Number.isNaN(n)) price = n;
    }
    if (titleMatch && imgMatch) {
      let image = imgMatch[1]!;
      image = image.replace(/\._AC_[^.]+\./, "._SL500_.");
      if (!image.includes("._SL500_")) {
        image = image.replace(/\.jpg$/i, "._SL500_.jpg");
      }
      products.push({
        asin,
        title: titleMatch[1]!.trim(),
        image,
        price,
      });
    }
  }
  const seen = new Set<string>();
  return products.filter((p) => {
    if (seen.has(p.asin)) return false;
    seen.add(p.asin);
    return true;
  });
}

export async function fetchAmazonTrLive(
  query = "masa lambasi",
  limit = 4,
): Promise<HuntProduct[]> {
  const url = `https://www.amazon.com.tr/s?k=${encodeURIComponent(query)}`;
  const res = await fetch(url, {
    headers: {
      "User-Agent": UA,
      "Accept-Language": "tr-TR,tr;q=0.9",
      Accept: "text/html",
    },
    next: { revalidate: 3600 },
  });
  if (!res.ok) return [];
  const html = await res.text();
  const parsed = parseSearchHtml(html).slice(0, limit);
  return parsed.map((p, i) =>
    withEconomics({
      id: `amz-tr-live-${p.asin}`,
      title: p.title,
      platform: "Amazon TR",
      path: "amazon",
      region: "tr",
      country: "tr",
      risk: 26 + (i % 4) * 3,
      demand: 64 + (i % 5) * 4,
      saturation: 36 + (i % 4) * 5,
      imageSrc: p.image,
      productUrl: `https://www.amazon.com.tr/dp/${p.asin}`,
      dataMode: "live",
      scoresMode: "heuristic",
      supplier: "Amazon TR / FBA veya harici tedarikçi",
      sellPrice: p.price,
    }),
  );
}

export function hasAmazonPaapi(): boolean {
  return Boolean(
    process.env.AMAZON_PAAPI_ACCESS_KEY &&
      process.env.AMAZON_PAAPI_SECRET_KEY &&
      process.env.AMAZON_PAAPI_PARTNER_TAG,
  );
}
