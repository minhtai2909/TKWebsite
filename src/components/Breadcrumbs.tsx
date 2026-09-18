import Link from "next/link";

export function Breadcrumbs({
  items,
  tone = "dark",
}: {
  items: { name: string; path: string }[];
  tone?: "dark" | "light";
}) {
  const isLight = tone === "light";
  return (
    <nav aria-label="Đường dẫn" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {last ? (
                <span
                  aria-current="page"
                  className={isLight ? "text-white" : "text-steel-900"}
                >
                  {item.name}
                </span>
              ) : (
                <>
                  <Link
                    href={item.path}
                    className={`transition-colors ${
                      isLight
                        ? "text-steel-300 hover:text-white"
                        : "text-steel-500 hover:text-accent-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                  <span
                    aria-hidden="true"
                    className={isLight ? "text-steel-500" : "text-steel-300"}
                  >
                    /
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
