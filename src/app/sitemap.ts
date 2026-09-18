import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/company";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = (
    [
      { url: `${siteUrl}/`, changeFrequency: "weekly", priority: 1 },
      { url: `${siteUrl}/ve-chung-toi`, changeFrequency: "monthly", priority: 0.8 },
      { url: `${siteUrl}/san-pham`, changeFrequency: "weekly", priority: 0.9 },
      { url: `${siteUrl}/giai-phap`, changeFrequency: "monthly", priority: 0.8 },
      { url: `${siteUrl}/du-an`, changeFrequency: "monthly", priority: 0.7 },
      { url: `${siteUrl}/lien-he`, changeFrequency: "yearly", priority: 0.6 },
    ] satisfies MetadataRoute.Sitemap
  ).map((route) => ({ ...route, lastModified: now }));

  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${siteUrl}/san-pham/${product.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...productRoutes];
}
