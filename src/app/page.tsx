import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";
import { ProductCard } from "@/components/ProductCard";
import { CtaBand } from "@/components/CtaBand";
import { categories, products } from "@/data/products";
import { solutions } from "@/data/solutions";
import { projects, partners } from "@/data/projects";
import { company, processSteps, vision } from "@/data/company";

const stats = [
  { value: 24, suffix: "+", label: "Dòng sản phẩm", sub: "Kệ, pallet, thiết bị" },
  { value: 40, suffix: "m", label: "Chiều cao AS/RS", sub: "Hệ thống cao tầng" },
  { value: 80, suffix: "%", label: "Tăng mật độ lưu trữ", sub: "So với kệ truyền thống" },
  { value: 3000, suffix: "kg", label: "Tải trọng pallet", sub: "Trên mỗi vị trí" },
];

const featuredSlugs = [
  "ke-selective",
  "asrs-unit-load",
  "ke-drive-in",
  "ke-vna",
  "ke-mezzanine",
  "ke-shuttle-rack",
  "ke-tay-do",
  "pallet-kim-loai",
];

export default function HomePage() {
  const featured = featuredSlugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <Hero />

      <section className="border-b border-steel-200 bg-white">
        <div className="container-tk grid grid-cols-2 gap-x-6 gap-y-10 py-12 lg:grid-cols-4 lg:py-14">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90}>
              <p className="text-4xl font-extrabold tracking-tight text-steel-900 lg:text-5xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 font-semibold text-steel-800">{stat.label}</p>
              <p className="mt-0.5 text-sm text-steel-500">{stat.sub}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-tk grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/hero/hero-asrs.jpg"
                alt="Hệ thống kho tự động AS/RS với cần trục xếp"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-7 -right-4 hidden rounded-xl bg-safety-500 px-7 py-5 text-white shadow-xl sm:block lg:-right-7">
              <p className="text-3xl font-extrabold leading-none">AS/RS</p>
              <p className="mt-1.5 text-sm font-medium text-safety-50">
                Tích hợp WMS / WCS / PLC
              </p>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Giới thiệu"
              title="Đối tác cơ khí & lưu trữ công nghiệp cho nhà máy Việt Nam"
              description={company.longDescription}
            />
            <Reveal delay={220}>
              <div className="mt-9 grid gap-5 sm:grid-cols-2">
                {vision.map((v) => (
                  <div
                    key={v.title}
                    className="rounded-lg border-l-2 border-safety-500 bg-steel-50 py-3 pl-4 pr-3"
                  >
                    <p className="font-bold text-steel-900">{v.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-steel-600">
                      {v.body}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={300}>
              <Link
                href="/ve-chung-toi"
                className="group mt-8 inline-flex items-center gap-2 font-semibold text-safety-600"
              >
                Tìm hiểu về Thiên Khôi
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 0 1 .02-1.06L11.168 10 7.23 6.29a.75.75 0 1 1 1.04-1.08l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 0 1-1.06-.02Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-steel-50 py-20 lg:py-28">
        <div className="container-tk">
          <SectionHeading
            eyebrow="Lĩnh vực hoạt động"
            title="Năm nhóm giải pháp cho toàn bộ vòng đời kho hàng"
            description="Từ hệ thống kệ tiêu chuẩn đến kho tự động hóa hoàn toàn, Thiên Khôi cung cấp trọn gói sản phẩm, vật tư và dịch vụ lắp đặt."
            align="center"
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((c, i) => (
              <Reveal key={c.slug} delay={i * 80}>
                <Link
                  href={`/san-pham?danh-muc=${c.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-steel-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-safety-300 hover:shadow-xl hover:shadow-steel-900/10"
                >
                  <span className="text-[13px] font-bold uppercase tracking-wider text-safety-600">
                    {c.short}
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-steel-900 transition-colors group-hover:text-safety-600">
                    {c.name}
                  </h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-steel-600">
                    {c.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-steel-500 transition-colors group-hover:text-safety-600">
                    Xem sản phẩm
                    <svg
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 0 1 .02-1.06L11.168 10 7.23 6.29a.75.75 0 1 1 1.04-1.08l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 0 1-1.06-.02Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </Link>
              </Reveal>
            ))}

            <Reveal delay={400}>
              <div className="flex h-full flex-col justify-between rounded-xl bg-steel-900 p-7 text-white">
                <div>
                  <h3 className="text-xl font-bold">Không tìm thấy giải pháp phù hợp?</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-steel-300">
                    Thiên Khôi nhận thiết kế và gia công kệ theo yêu cầu riêng về
                    tải trọng, kích thước và điều kiện vận hành.
                  </p>
                </div>
                <Link
                  href="/lien-he"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-safety-500 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-safety-600"
                >
                  Yêu cầu thiết kế riêng
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-tk">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Sản phẩm nổi bật"
              title="Hệ thống kệ & thiết bị kho được tin dùng"
            />
            <Reveal delay={160}>
              <Link
                href="/san-pham"
                className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-steel-300 px-6 py-3 text-sm font-semibold text-steel-800 transition-all hover:border-safety-400 hover:text-safety-600"
              >
                Tất cả sản phẩm
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 0 1 .02-1.06L11.168 10 7.23 6.29a.75.75 0 1 1 1.04-1.08l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 0 1-1.06-.02Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product, i) => (
              <Reveal key={product.slug} delay={(i % 4) * 90}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-steel-900 py-20 lg:py-28">
        <Image
          src="/images/hero/hero-aisle.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-15"
        />
        <div className="container-tk relative">
          <SectionHeading
            eyebrow="Quy trình triển khai"
            title="Bốn bước từ khảo sát tới bàn giao vận hành"
            description="Mỗi dự án đều bắt đầu bằng việc hiểu đúng hiện trạng kho và quy trình làm việc thực tế, trước khi đề xuất bất kỳ phương án kệ nào."
            tone="light"
          />

          <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <Reveal key={step.step} delay={i * 110}>
                <li className="group h-full rounded-xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-colors hover:border-safety-400/50 hover:bg-white/[0.08]">
                  <span className="text-5xl font-extrabold leading-none text-white/15 transition-colors group-hover:text-safety-400/40">
                    {step.step}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-white">{step.title}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {step.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2.5 text-sm leading-relaxed text-steel-300"
                      >
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-safety-500"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-tk">
          <SectionHeading
            eyebrow="Giải pháp theo ngành"
            title="Mỗi loại kho cần một cấu hình lưu trữ khác nhau"
            align="center"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 90}>
                <Link
                  href={`/giai-phap#${s.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-steel-200 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-safety-300 hover:shadow-lg"
                >
                  <h3 className="text-lg font-bold text-steel-900 transition-colors group-hover:text-safety-600">
                    {s.name}
                  </h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-steel-600">
                    {s.summary}
                  </p>
                  <ul className="mt-5 space-y-2 border-t border-steel-100 pt-5">
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-2.5 text-sm text-steel-600">
                        <svg
                          className="mt-0.5 h-4 w-4 shrink-0 text-safety-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 0 1 1.4-1.4l3.8 3.79 6.8-6.79a1 1 0 0 1 1.4 0Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {p}
                      </li>
                    ))}
                  </ul>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-steel-50 py-20 lg:py-28">
        <div className="container-tk">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Công trình tiêu biểu"
              title="Dự án Thiên Khôi đã triển khai"
            />
            <Reveal delay={160}>
              <Link
                href="/du-an"
                className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-steel-300 px-6 py-3 text-sm font-semibold text-steel-800 transition-all hover:border-safety-400 hover:text-safety-600"
              >
                Xem tất cả dự án
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 0 1 .02-1.06L11.168 10 7.23 6.29a.75.75 0 1 1 1.04-1.08l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 0 1-1.06-.02Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 6).map((project, i) => (
              <Reveal key={project.slug} delay={(i % 3) * 90}>
                <article className="group relative h-full overflow-hidden rounded-xl bg-steel-900">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-60"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-steel-950 via-steel-950/40 to-transparent"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <span className="inline-block rounded-full bg-safety-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                      {project.productType}
                    </span>
                    <h3 className="mt-3 text-lg font-bold leading-snug text-white">
                      {project.title}
                    </h3>
                    <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-steel-300 opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100">
                      {project.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-steel-200 py-14">
        <div className="container-tk">
          <Reveal>
            <p className="text-center text-[13px] font-bold uppercase tracking-[0.18em] text-steel-500">
              Khách hàng & đối tác
            </p>
          </Reveal>
          <div
            className="group relative mt-9 overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
              WebkitMaskImage:
                "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
            }}
          >
            <div className="flex w-max animate-marquee items-center gap-16 group-hover:[animation-play-state:paused]">
              {[...partners, ...partners].map((partner, i) => (
                <Image
                  key={`${partner.name}-${i}`}
                  src={partner.logo}
                  alt={partner.name}
                  width={140}
                  height={56}
                  className="h-11 w-auto object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
