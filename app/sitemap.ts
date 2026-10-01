import type { MetadataRoute } from "next";
import { listedVentures } from "./data/ventures";
import { publishedInsights } from "./lib/insights";
import { BASE_URL } from "./lib/links";
import { sitemapEntries } from "./lib/sitemap-entries";

// Pages that exist in both languages.
const SITE_PAGES = ["/", "/about", "/for-shareholders", "/privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapEntries({
    base: BASE_URL,
    pages: SITE_PAGES,
    ventureSlugs: listedVentures.map((v) => v.slug),
    insights: [...publishedInsights("en"), ...publishedInsights("id")],
  });
}
