import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { ProductCard } from "@/components/ProductCard";
import { ProductGallery } from "@/components/ProductGallery";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbSchema, productSchema } from "@/lib/seo";
import {
  products,
  getProduct,
  getCategory,
  getGallery,
} from "@/data/products";
import { company } from "@/data/company";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};

  return buildMetadata({
    title: `${product.name} – ${product.tagline}`,
    description: product.summary,
    path: `/san-pham/${product.slug}`,
    image: `/images/og/${product.slug}.jpg`,
  });
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.category);
  const gallery = getGallery(product.slug);
  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4);

  const crumbs = [
    { name: "Trang chủ", path: "/" },
    { name: "Sản phẩm", path: "/san-pham" },
    { name: product.name, path: `/san-pham/${product.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          productSchema({
            name: product.name,
            summary: product.summary,
            slug: product.slug,
            image: product.image,
          }),
        ]}
      />

      <PageHero
        title={product.name}
        description={product.summary}
        image={product.image}
        breadcrumbs={crumbs}
      />

      <section className="py-16 lg:py-24">
        <div className="container-tk grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <ProductGallery images={gallery} name={product.name} />
          </Reveal>

          <div>
            <Reveal delay={100}>
              {category && (
                <Link
                  href={`/san-pham?danh-muc=${category.slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-accent-50 px-4 py-1.5 text-[13px] font-bold uppercase tracking-wider text-accent-700 transition-colors hover:bg-accent-100"
                >
                  {category.name}
                </Link>
              )}
              <h2 className="mt-5 text-2xl font-extrabold text-steel-900 sm:text-3xl">
                {product.tagline}
              </h2>
              <div className="mt-5 space-y-4">
                {product.body.map((paragraph, i) => (
                  <p key={i} className="text-[17px] leading-relaxed text-steel-600">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={180}>
              <h3 className="mt-10 text-lg font-bold text-steel-900">
                Ưu điểm nổi bật
              </h3>
              <ul className="mt-5 space-y-3.5">
                {product.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-accent-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-[15px] leading-relaxed text-steel-700">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={240}>
              <h3 className="mt-10 text-lg font-bold text-steel-900">
                Thông số kỹ thuật
              </h3>
              <dl className="mt-5 overflow-hidden rounded-xl border border-steel-200">
                {product.specs.map((spec, i) => (
                  <div
                    key={spec.label}
                    className={`flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 ${
                      i % 2 === 0 ? "bg-steel-50" : "bg-white"
                    }`}
                  >
                    <dt className="text-sm font-medium text-steel-500">
                      {spec.label}
                    </dt>
                    <dd className="font-semibold text-steel-900 sm:text-right">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-10 rounded-xl bg-steel-900 p-7">
                <p className="text-lg font-bold text-white">
                  Cần báo giá cho {product.name}?
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-steel-300">
                  Gửi thông tin mặt bằng và loại hàng hóa, chúng tôi sẽ đề xuất
                  cấu hình và báo giá chi tiết.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={company.hotlineHref}
                    className="inline-flex items-center justify-center rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-600"
                  >
                    Gọi {company.hotline}
                  </a>
                  <Link
                    href={`/lien-he?san-pham=${product.slug}`}
                    className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Yêu cầu báo giá
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-steel-50 py-16 lg:py-24">
          <div className="container-tk">
            <Reveal>
              <h2 className="text-2xl font-extrabold text-steel-900 sm:text-3xl">
                Sản phẩm cùng danh mục
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((item, i) => (
                <Reveal key={item.slug} delay={i * 80}>
                  <ProductCard product={item} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
