import Link from "next/link";
import { company } from "@/data/company";
import { categories, products } from "@/data/products";
import { solutions } from "@/data/solutions";
import { Logo } from "@/components/Logo";

const featured = [
  "ke-selective",
  "ke-drive-in",
  "ke-vna",
  "ke-mezzanine",
  "asrs-unit-load",
  "pallet-kim-loai",
];

export function Footer() {
  const year = new Date().getFullYear();
  const featuredProducts = featured
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <footer className="bg-steel-950 text-steel-300">
      <div className="container-tk grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4 lg:py-16">
        <div>
          <Logo className="h-11" variant="light" />
          <p className="mt-5 text-sm leading-relaxed text-steel-400">
            {company.shortDescription}
          </p>
          <p className="mt-4 text-sm font-semibold italic text-safety-400">
            “{company.slogan}”
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">
            Sản phẩm
          </h2>
          <ul className="mt-5 space-y-2.5 text-sm">
            {featuredProducts.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/san-pham/${p.slug}`}
                  className="text-steel-400 transition-colors hover:text-safety-400"
                >
                  {p.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/san-pham"
                className="font-semibold text-steel-200 transition-colors hover:text-safety-400"
              >
                Xem tất cả sản phẩm →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">
            Giải pháp
          </h2>
          <ul className="mt-5 space-y-2.5 text-sm">
            {solutions.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/giai-phap#${s.slug}`}
                  className="text-steel-400 transition-colors hover:text-safety-400"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
          <h2 className="mt-7 text-sm font-bold uppercase tracking-wider text-white">
            Danh mục
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {categories.slice(0, 3).map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/san-pham?danh-muc=${c.slug}`}
                  className="text-steel-400 transition-colors hover:text-safety-400"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">
            Liên hệ
          </h2>
          <address className="mt-5 space-y-4 text-sm not-italic">
            <p className="leading-relaxed text-steel-400">
              {company.address.full}
            </p>
            <p>
              <span className="block text-steel-500">Hotline</span>
              <a
                href={company.hotlineHref}
                className="text-lg font-bold text-safety-400 transition-colors hover:text-safety-300"
              >
                {company.hotline}
              </a>
            </p>
            <p>
              <span className="block text-steel-500">Email</span>
              <a
                href={`mailto:${company.email}`}
                className="text-steel-200 transition-colors hover:text-safety-400"
              >
                {company.email}
              </a>
            </p>
            <p>
              <span className="block text-steel-500">Mã số thuế</span>
              <span className="text-steel-200">{company.taxCode}</span>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-tk flex flex-col items-center justify-between gap-3 py-5 text-[13px] text-steel-500 sm:flex-row">
          <p>
            © {year} {company.legalName}. Bảo lưu mọi quyền.
          </p>
          <p className="font-medium tracking-wide text-steel-400">
            {company.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
