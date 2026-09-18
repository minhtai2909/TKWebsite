import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { company, siteUrl } from "@/data/company";
import { organizationSchema, websiteSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RevealProvider } from "@/components/RevealProvider";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["vietnamese", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-be-vietnam",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} | Kệ kho hàng & giải pháp kho tự động AS/RS`,
    template: `%s | ${company.name}`,
  },
  description: company.shortDescription,
  applicationName: company.name,
  keywords: [
    "kệ kho hàng",
    "kệ Selective",
    "kệ Drive In",
    "kệ VNA",
    "kệ Double Deep",
    "kệ sàn Mezzanine",
    "kho tự động AS/RS",
    "Radio Shuttle",
    "pallet kim loại",
    "giá kệ công nghiệp",
    "Thiên Khôi",
  ],
  authors: [{ name: company.name, url: siteUrl }],
  creator: company.name,
  publisher: company.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: siteUrl,
    siteName: company.name,
    title: `${company.name} | Kệ kho hàng & giải pháp kho tự động AS/RS`,
    description: company.shortDescription,
    images: [
      {
        url: "/images/og/default.jpg",
        width: 1200,
        height: 630,
        alt: `${company.name} – hệ thống kệ kho hàng công nghiệp`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | Kệ kho hàng & giải pháp kho tự động`,
    description: company.shortDescription,
    images: ["/images/og/default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Industrial Storage",
};

export const viewport: Viewport = {
  themeColor: "#0f2338",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className={beVietnam.variable}>
      <body className="font-sans">
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <RevealProvider />
        <a
          href="#noi-dung"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-steel-900 focus:px-4 focus:py-2 focus:text-white"
        >
          Bỏ qua và tới nội dung chính
        </a>
        <Header />
        <main id="noi-dung">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
