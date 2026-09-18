import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { company, mission, vision, processSteps } from "@/data/company";

const crumbs = [
  { name: "Trang chủ", path: "/" },
  { name: "Về chúng tôi", path: "/ve-chung-toi" },
];

export const metadata = buildMetadata({
  title: "Về Thiên Khôi – Cơ khí & giải pháp lưu trữ công nghiệp",
  description:
    "Thiên Khôi hoạt động trong lĩnh vực cơ khí và dịch vụ thương mại, cung cấp kệ kho hàng, hệ thống kho tự động AS/RS và thiết bị công nghiệp với phương châm Tâm tạo Chất – Tầm dựng Nghiệp.",
  path: "/ve-chung-toi",
  image: "/images/og/default.jpg",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        title="Kiến tạo giá trị công bền"
        description={company.shortDescription}
        image="/images/about/about-team.jpg"
        breadcrumbs={crumbs}
      />

      <section className="py-20 lg:py-28">
        <div className="container-tk grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Giới thiệu"
              title="Thiên Khôi là ai"
              description={company.longDescription}
            />
            <Reveal delay={220}>
              <blockquote className="mt-9 border-l-4 border-accent-500 bg-steel-50 py-5 pl-6 pr-5">
                <p className="text-xl font-bold italic text-steel-900">
                  “{company.slogan}”
                </p>
                <footer className="mt-2 text-sm text-steel-500">
                  Phương châm hoạt động của Thiên Khôi
                </footer>
              </blockquote>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/about/about-main.jpg"
                alt="Không gian làm việc và thiết kế hệ thống kệ tại Thiên Khôi"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-steel-900 py-20 lg:py-28">
        <div className="container-tk">
          <SectionHeading
            eyebrow="Tầm nhìn"
            title="Điều Thiên Khôi hướng tới"
            tone="light"
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {vision.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <div className="h-full rounded-xl border border-white/10 bg-white/5 p-7 transition-colors hover:border-aqua-400/50">
                  <h3 className="text-xl font-bold text-aqua-300">{v.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-steel-300">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-tk">
          <SectionHeading
            eyebrow="Sứ mệnh"
            title="Cam kết của chúng tôi với khách hàng"
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {mission.map((m, i) => (
              <Reveal key={m.title} delay={i * 100}>
                <div className="h-full rounded-xl border border-steel-200 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent-300 hover:shadow-lg">
                  <span
                    className="block h-1 w-10 rounded-full bg-accent-500"
                    aria-hidden="true"
                  />
                  <h3 className="mt-5 text-xl font-bold text-steel-900">{m.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-steel-600">
                    {m.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-steel-50 py-20 lg:py-28">
        <div className="container-tk">
          <SectionHeading
            eyebrow="Cách chúng tôi làm việc"
            title="Quy trình bốn bước"
            description="Thiên Khôi không bán kệ theo catalogue. Mỗi phương án đều xuất phát từ khảo sát hiện trạng kho và quy trình vận hành thực tế của khách hàng."
          />
          <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <Reveal key={step.step} delay={i * 110}>
                <li className="h-full rounded-xl border border-steel-200 bg-white p-7">
                  <span className="text-5xl font-extrabold leading-none text-steel-200">
                    {step.step}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-steel-900">{step.title}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {step.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2.5 text-sm leading-relaxed text-steel-600"
                      >
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500"
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
          <Reveal>
            <dl className="grid gap-px overflow-hidden rounded-xl border border-steel-200 bg-steel-200 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Tên doanh nghiệp", value: company.legalName },
                { label: "Mã số thuế", value: company.taxCode },
                { label: "Hotline", value: company.hotline },
                { label: "Email", value: company.email },
              ].map((item) => (
                <div key={item.label} className="bg-white p-7">
                  <dt className="text-[13px] font-bold uppercase tracking-wider text-steel-500">
                    {item.label}
                  </dt>
                  <dd className="mt-2 font-semibold break-words text-steel-900">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
