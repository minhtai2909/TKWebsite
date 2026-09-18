import Image from "next/image";

export function Logo({
  className,
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  const isLight = variant === "light";

  return (
    <span className={`flex items-center gap-2.5 ${className ?? ""}`}>
      <Image
        src="/images/logo/logo-mark.png"
        alt=""
        width={406}
        height={256}
        priority
        className="h-full w-auto"
      />
      <span className="flex flex-col justify-center leading-none">
        <span
          className={`text-[19px] font-extrabold tracking-[0.05em] ${
            isLight ? "text-white" : "text-steel-900"
          }`}
        >
          THIÊN KHÔI
        </span>
        <span
          className={`mt-1.5 text-[8.5px] font-semibold tracking-[0.13em] ${
            isLight ? "text-steel-300" : "text-steel-500"
          }`}
        >
          KỆ KHO HÀNG &amp; KHO TỰ ĐỘNG
        </span>
      </span>
    </span>
  );
}
