import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { projects, partners } from "@/data/projects";

const crumbs = [
  { name: "Trang chủ", path: "/" },
  { name: "Dự án", path: "/du-an" },
];

export const metadata = buildMetadata({
  title: "Công trình tiêu biểu",
  description:
    "Một số công trình kệ kho hàng, sàn Mezzanine và hệ thống kho tự động AS/RS do Thiên Khôi cung cấp và lắp đặt cho nhà máy, kho logistics tại Việt Nam.",
  path: "/du-an",
  image: "/images/og/default.jpg",
});

export default function ProjectsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        title="Công trình tiêu biểu"
        description="Những hệ thống lưu trữ Thiên Khôi đã thiết kế, cung cấp và lắp đặt cho các nhà máy, kho logistics và trung tâm phân phối."
        image="/images/projects/du-an-01.jpg"
        breadcrumbs={crumbs}
      />

      <section className="py-16 lg:py-24">
        <div className="container-tk grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 100}>
              <article className="group h-full overflow-hidden rounded-2xl border border-steel-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-steel-900/10">
                <div className="relative aspect-[16/10] overflow-hidden bg-steel-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    priority={i < 2}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="rounded-full bg-accent-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent-700">
                      {project.productType}
                    </span>
                    <span className="text-[13px] text-steel-500">
                      {project.scope}
                    </span>
                  </div>
                  <h2 className="mt-4 text-xl font-bold leading-snug text-steel-900">
                    {project.title}
                  </h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-steel-600">
                    {project.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-steel-200 py-16 lg:py-20">
        <div className="container-tk">
          <Reveal>
            <h2 className="text-center text-[13px] font-bold uppercase tracking-[0.18em] text-steel-500">
              Khách hàng & đối tác
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10 grid grid-cols-2 items-center gap-8 sm:grid-cols-4 lg:grid-cols-7">
              {partners.map((partner) => (
                <Image
                  key={partner.name}
                  src={partner.logo}
                  alt={partner.name}
                  width={140}
                  height={56}
                  className="mx-auto h-11 w-auto object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
