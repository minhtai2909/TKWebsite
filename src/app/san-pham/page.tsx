import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { categories, products, getCategory } from "@/data/products";
import { siteUrl } from "@/data/company";

const crumbs = [
  { name: "Trang chủ", path: "/" },
  { name: "Sản phẩm", path: "/san-pham" },
];

export const metadata = buildMetadata({
  title: "Sản phẩm – Kệ kho hàng, pallet & thiết bị công nghiệp",
  description:
    "Danh mục kệ kho hàng Thiên Khôi: kệ Selective, Drive In, Double Deep, VNA, Shuttle Rack, sàn Mezzanine, kệ tay đỡ, pallet kim loại và hệ thống kho tự động AS/RS.",
  path: "/san-pham",
  image: "/images/og/ke-selective.jpg",
});

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ "danh-muc"?: string }>;
}) {
  const params = await searchParams;
  const activeSlug = params["danh-muc"];
  const active = activeSlug ? getCategory(activeSlug) : undefined;

  const visible = active
    ? products.filter((p) => p.category === active.slug)
    : products;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Sản phẩm Thiên Khôi",
            numberOfItems: visible.length,
            itemListElement: visible.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: p.name,
              url: `${siteUrl}/san-pham/${p.slug}`,
            })),
          },
        ]}
      />

      <PageHero
        title={active ? active.name : "Sản phẩm & giải pháp lưu trữ"}
        description={
          active
            ? active.description
            : "Hệ thống kệ công nghiệp, pallet và thiết bị kho được thiết kế theo tải trọng, mặt bằng và tốc độ xuất nhập thực tế của từng doanh nghiệp."
        }
        image="/images/products/ke-selective.jpg"
        breadcrumbs={
          active ? [...crumbs, { name: active.name, path: `/san-pham?danh-muc=${active.slug}` }] : crumbs
        }
      />

      <section className="py-14 lg:py-20">
        <div className="container-tk">
          <Reveal>
            <div
              className="flex flex-wrap gap-2.5"
              role="group"
              aria-label="Lọc theo danh mục"
            >
              <FilterChip href="/san-pham" active={!active}>
                Tất cả ({products.length})
              </FilterChip>
              {categories.map((c) => {
                const count = products.filter((p) => p.category === c.slug).length;
                return (
                  <FilterChip
                    key={c.slug}
                    href={`/san-pham?danh-muc=${c.slug}`}
                    active={active?.slug === c.slug}
                  >
                    {c.name} ({count})
                  </FilterChip>
                );
              })}
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visible.map((product, i) => (
              <Reveal key={product.slug} delay={(i % 4) * 80}>
                <ProductCard product={product} priority={i < 4} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

function FilterChip({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "true" : undefined}
      className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all ${
        active
          ? "border-accent-500 bg-accent-500 text-white"
          : "border-steel-300 text-steel-700 hover:border-accent-400 hover:text-accent-600"
      }`}
    >
      {children}
    </Link>
  );
}
