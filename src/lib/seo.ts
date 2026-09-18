import type { Metadata } from "next";
import { company, siteUrl } from "@/data/company";

type PageSeo = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
};

export function buildMetadata({
  title,
  description,
  path,
  image = "/images/og/default.jpg",
  type = "website",
}: PageSeo): Metadata {
  const url = `${siteUrl}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: company.name,
      locale: "vi_VN",
      type,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: company.name,
    legalName: company.legalName,
    url: siteUrl,
    logo: `${siteUrl}/images/logo/logo.png`,
    image: `${siteUrl}/images/hero/hero-main.jpg`,
    description: company.shortDescription,
    slogan: company.slogan,
    taxID: company.taxCode,
    email: company.email,
    telephone: "+84939450488",
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      addressCountry: "VN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+84939450488",
      contactType: "sales",
      areaServed: "VN",
      availableLanguage: ["Vietnamese"],
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: company.name,
    inLanguage: "vi-VN",
    publisher: { "@id": `${siteUrl}/#organization` },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}

export function productSchema(product: {
  name: string;
  summary: string;
  slug: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.summary,
    image: `${siteUrl}${product.image}`,
    url: `${siteUrl}/san-pham/${product.slug}`,
    brand: { "@type": "Brand", name: company.name },
    manufacturer: { "@id": `${siteUrl}/#organization` },
  };
}
