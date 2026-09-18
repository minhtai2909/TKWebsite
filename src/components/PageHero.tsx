import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export function PageHero({
  title,
  description,
  image = "/images/hero/hero-aisle.jpg",
  breadcrumbs,
}: {
  title: string;
  description?: string;
  image?: string;
  breadcrumbs: { name: string; path: string }[];
}) {
  return (
    <section className="relative isolate overflow-hidden bg-steel-950">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-35"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-steel-950 via-steel-950/90 to-steel-950/50"
        aria-hidden="true"
      />
      <div className="container-tk relative py-14 sm:py-20">
        <Breadcrumbs items={breadcrumbs} tone="light" />
        <h1 className="mt-5 max-w-3xl animate-[fadeUp_0.6s_ease-out_both] text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl animate-[fadeUp_0.6s_ease-out_0.12s_both] text-[17px] leading-relaxed text-steel-300">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
