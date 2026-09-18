"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { company } from "@/data/company";
import { categories } from "@/data/products";
import { solutions } from "@/data/solutions";
import { Logo } from "@/components/Logo";

const navItems = [
  { href: "/", label: "Trang chủ" },
  { href: "/ve-chung-toi", label: "Về chúng tôi" },
  { href: "/san-pham", label: "Sản phẩm", menu: "products" as const },
  { href: "/giai-phap", label: "Giải pháp", menu: "solutions" as const },
  { href: "/du-an", label: "Dự án" },
  { href: "/lien-he", label: "Liên hệ" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-steel-950 text-steel-200 lg:block">
        <div className="container-tk flex h-10 items-center justify-between text-[13px]">
          <p>{company.address.full}</p>
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${company.email}`}
              className="transition-colors hover:text-white"
            >
              {company.email}
            </a>
            <a
              href={company.hotlineHref}
              className="font-semibold text-safety-400 transition-colors hover:text-safety-300"
            >
              Hotline: {company.hotline}
            </a>
          </div>
        </div>
      </div>

      <div
        className={`border-b transition-all duration-300 ${
          scrolled
            ? "border-steel-200/70 bg-white/95 shadow-sm backdrop-blur-md"
            : "border-transparent bg-white"
        }`}
      >
        <div className="container-tk flex h-18 items-center justify-between gap-4 py-3">
          <Link href="/" className="flex shrink-0 items-center" aria-label={company.name}>
            <Logo className="h-11" />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Điều hướng chính">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.menu ?? null)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`relative flex items-center gap-1 rounded-md px-3.5 py-2 text-[15px] font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-safety-600"
                      : "text-steel-700 hover:text-safety-600"
                  }`}
                >
                  {item.label}
                  {item.menu && (
                    <svg
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        openMenu === item.menu ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                  <span
                    className={`absolute inset-x-3.5 -bottom-0.5 h-0.5 origin-left rounded-full bg-safety-500 transition-transform duration-300 ${
                      isActive(item.href) ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>

                {item.menu === "products" && openMenu === "products" && (
                  <MegaMenu>
                    {categories.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/san-pham?danh-muc=${c.slug}`}
                        onClick={() => setOpenMenu(null)}
                        className="group rounded-lg p-3 transition-colors hover:bg-steel-50"
                      >
                        <p className="font-semibold text-steel-900 group-hover:text-safety-600">
                          {c.name}
                        </p>
                        <p className="mt-1 text-[13px] leading-relaxed text-steel-500">
                          {c.description}
                        </p>
                      </Link>
                    ))}
                  </MegaMenu>
                )}

                {item.menu === "solutions" && openMenu === "solutions" && (
                  <MegaMenu>
                    {solutions.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/giai-phap#${s.slug}`}
                        onClick={() => setOpenMenu(null)}
                        className="group rounded-lg p-3 transition-colors hover:bg-steel-50"
                      >
                        <p className="font-semibold text-steel-900 group-hover:text-safety-600">
                          {s.name}
                        </p>
                        <p className="mt-1 text-[13px] leading-relaxed text-steel-500">
                          {s.summary}
                        </p>
                      </Link>
                    ))}
                  </MegaMenu>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={company.hotlineHref}
              className="hidden items-center gap-2 rounded-full bg-safety-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-safety-600 hover:shadow-md active:scale-[0.98] sm:flex"
            >
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.5 11.5 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-7.18 0-13-5.82-13-13V3.5Z" />
              </svg>
              {company.hotline}
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? "Đóng menu" : "Mở menu"}
              className="flex h-11 w-11 items-center justify-center rounded-md border border-steel-200 text-steel-700 transition-colors hover:bg-steel-50 lg:hidden"
            >
              <span className="relative block h-4 w-5">
                <span
                  className={`absolute left-0 block h-0.5 w-5 rounded bg-current transition-all duration-300 ${
                    mobileOpen ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 block h-0.5 w-5 rounded bg-current transition-all duration-200 ${
                    mobileOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-0.5 w-5 rounded bg-current transition-all duration-300 ${
                    mobileOpen ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`overflow-hidden border-b border-steel-200 bg-white transition-[max-height] duration-300 ease-out lg:hidden ${
          mobileOpen ? "max-h-[32rem]" : "max-h-0"
        }`}
      >
        <nav className="container-tk flex flex-col py-3" aria-label="Điều hướng di động">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`border-b border-steel-100 py-3.5 text-[15px] font-medium last:border-0 ${
                isActive(item.href) ? "text-safety-600" : "text-steel-800"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={company.hotlineHref}
            className="mt-4 mb-2 rounded-full bg-safety-500 px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Gọi ngay {company.hotline}
          </a>
        </nav>
      </div>
    </header>
  );
}

function MegaMenu({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute left-1/2 top-full z-40 w-[min(46rem,calc(100vw-4rem))] -translate-x-1/2 pt-3">
      <div className="grid grid-cols-2 gap-1 rounded-xl border border-steel-200 bg-white p-3 shadow-xl shadow-steel-900/10">
        {children}
      </div>
    </div>
  );
}
