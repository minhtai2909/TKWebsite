import Image from "next/image";
import Link from "next/link";
import { company } from "@/data/company";

const highlights = [
  "Kệ Selective · Drive In · VNA",
  "Kho tự động AS/RS",
  "Sàn Mezzanine · Pallet thép",
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-steel-950">
      <Image
        src="/images/hero/hero-main.jpg"
        alt="Kho hàng công nghiệp với hệ thống kệ tải nặng của Thiên Khôi"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-55"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-steel-950 via-steel-950/85 to-steel-950/40"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-steel-950 to-transparent"
        aria-hidden="true"
      />

      <div className="container-tk relative py-20 sm:py-28 lg:py-36">
        <div className="max-w-2xl">
          <p className="animate-[fadeUp_0.7s_ease-out_both] text-[13px] font-bold uppercase tracking-[0.2em] text-safety-400">
            {company.tagline}
          </p>

          <h1 className="mt-5 animate-[fadeUp_0.7s_ease-out_0.1s_both] text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Giải pháp{" "}
            <span className="relative whitespace-nowrap text-safety-400">
              kệ kho hàng
            </span>{" "}
            & kho tự động
          </h1>

          <p className="mt-6 max-w-xl animate-[fadeUp_0.7s_ease-out_0.2s_both] text-lg leading-relaxed text-steel-200">
            Thiên Khôi tư vấn, thiết kế, sản xuất và lắp đặt hệ thống lưu trữ
            công nghiệp — từ kệ Selective tiêu chuẩn đến hệ thống AS/RS tích hợp
            phần mềm quản lý kho.
          </p>

          <div className="mt-9 flex animate-[fadeUp_0.7s_ease-out_0.3s_both] flex-col gap-3 sm:flex-row">
            <Link
              href="/san-pham"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-safety-500 px-8 py-4 text-[15px] font-semibold text-white shadow-lg shadow-safety-900/30 transition-all hover:bg-safety-600 hover:shadow-xl active:scale-[0.98]"
            >
              Khám phá sản phẩm
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 0 1 .02-1.06L11.168 10 7.23 6.29a.75.75 0 1 1 1.04-1.08l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 0 1-1.06-.02Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <a
              href={company.hotlineHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-8 py-4 text-[15px] font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/10 active:scale-[0.98]"
            >
              Tư vấn: {company.hotline}
            </a>
          </div>

          <ul className="mt-12 flex animate-[fadeUp_0.7s_ease-out_0.45s_both] flex-wrap gap-x-7 gap-y-3 text-sm text-steel-300">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 shrink-0 text-safety-400"
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
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
