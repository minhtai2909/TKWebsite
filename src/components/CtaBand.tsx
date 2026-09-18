import Link from "next/link";
import { company } from "@/data/company";
import { Reveal } from "@/components/ui/Reveal";

export function CtaBand({
  title = "Cần tư vấn giải pháp lưu trữ cho kho của bạn?",
  description = "Đội ngũ kỹ thuật Thiên Khôi khảo sát hiện trạng, phân tích quy trình và đề xuất phương án kệ phù hợp với mặt bằng, tải trọng và tốc độ xuất nhập thực tế.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-steel-900">
      <div
        className="absolute inset-0 opacity-[0.07]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, #fff 0 2px, transparent 2px 64px), repeating-linear-gradient(0deg, #fff 0 2px, transparent 2px 64px)",
        }}
      />
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-safety-500/20 blur-3xl" aria-hidden="true" />

      <div className="container-tk relative flex flex-col items-start gap-8 py-14 lg:flex-row lg:items-center lg:justify-between lg:py-16">
        <Reveal className="max-w-2xl">
          <h2 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl">
            {title}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-steel-300">
            {description}
          </p>
        </Reveal>

        <Reveal delay={120} className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <a
            href={company.hotlineHref}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-safety-500 px-7 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-safety-600 active:scale-[0.98]"
          >
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.5 11.5 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-7.18 0-13-5.82-13-13V3.5Z" />
            </svg>
            {company.hotline}
          </a>
          <Link
            href="/lien-he"
            className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3.5 text-[15px] font-semibold text-white transition-all hover:border-white/50 hover:bg-white/10 active:scale-[0.98]"
          >
            Gửi yêu cầu báo giá
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
