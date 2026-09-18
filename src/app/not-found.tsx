import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center bg-steel-950">
      <div className="container-tk py-20 text-center">
        <p className="text-7xl font-extrabold text-accent-500 sm:text-8xl">404</p>
        <h1 className="mt-5 text-3xl font-extrabold text-white sm:text-4xl">
          Không tìm thấy trang
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[17px] leading-relaxed text-steel-300">
          Trang bạn tìm kiếm có thể đã được di chuyển hoặc không còn tồn tại.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-accent-500 px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-accent-600"
          >
            Về trang chủ
          </Link>
          <Link
            href="/san-pham"
            className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
          >
            Xem sản phẩm
          </Link>
        </div>
      </div>
    </section>
  );
}
