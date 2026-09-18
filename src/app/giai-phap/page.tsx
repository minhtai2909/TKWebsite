import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { solutions } from "@/data/solutions";
import { getProduct } from "@/data/products";

const crumbs = [
  { name: "Trang chủ", path: "/" },
  { name: "Giải pháp", path: "/giai-phap" },
];

export const metadata = buildMetadata({
  title: "Giải pháp lưu trữ theo từng loại kho",
  description:
    "Giải pháp kho mật độ cao, kho tự động hóa, kho lạnh và dược phẩm, kho linh kiện sản xuất, kho logistics phân phối và hệ thống trưng bày bán lẻ từ Thiên Khôi.",
  path: "/giai-phap",
  image: "/images/og/asrs-unit-load.jpg",
});

export default function SolutionsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        title="Giải pháp lưu trữ theo từng loại kho"
        description="Không có một cấu hình kệ nào phù hợp cho mọi nhà kho. Thiên Khôi lựa chọn hệ thống dựa trên đặc thù hàng hóa, tốc độ xuất nhập và điều kiện mặt bằng thực tế."
        image="/images/hero/hero-asrs.jpg"
        breadcrumbs={crumbs}
      />

      <div className="divide-y divide-steel-200">
        {solutions.map((solution, index) => {
          const related = solution.relatedProducts
            .map((slug) => getProduct(slug))
            .filter((p): p is NonNullable<typeof p> => Boolean(p));
          const flip = index % 2 === 1;

          return (
            <section
              key={solution.slug}
              id={solution.slug}
              className="scroll-mt-28 py-16 lg:py-24"
            >
              <div className="container-tk grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                <Reveal className={flip ? "lg:order-2" : undefined}>
                  <div className="relative aspect-[16/11] overflow-hidden rounded-2xl">
                    <Image
                      src={related[0]?.image ?? "/images/hero/hero-aisle.jpg"}
                      alt={solution.name}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>

                <div className={flip ? "lg:order-1" : undefined}>
                  <Reveal>
                    <p className="flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[0.18em] text-accent-600">
                      <span className="h-px w-8 bg-current" aria-hidden="true" />
                      Giải pháp {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-steel-900 sm:text-4xl">
                      {solution.name}
                    </h2>
                    <p className="mt-5 text-[17px] leading-relaxed text-steel-600">
                      {solution.summary}
                    </p>
                  </Reveal>

                  <Reveal delay={140}>
                    <ul className="mt-7 space-y-3">
                      {solution.points.map((point) => (
                        <li key={point} className="flex gap-3">
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
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </Reveal>

                  <Reveal delay={200}>
                    <div className="mt-8 border-t border-steel-200 pt-6">
                      <p className="text-[13px] font-bold uppercase tracking-wider text-steel-500">
                        Sản phẩm sử dụng
                      </p>
                      <div className="mt-3.5 flex flex-wrap gap-2.5">
                        {related.map((product) => (
                          <Link
                            key={product.slug}
                            href={`/san-pham/${product.slug}`}
                            className="rounded-full border border-steel-300 px-4 py-2 text-sm font-medium text-steel-700 transition-all hover:border-accent-400 hover:bg-accent-50 hover:text-accent-700"
                          >
                            {product.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <CtaBand />
    </>
  );
}
