import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  as = "h2",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  as?: "h1" | "h2";
}) {
  const Tag = as;
  const isLight = tone === "light";

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <Reveal>
          <p
            className={`flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[0.18em] ${
              align === "center" ? "justify-center" : ""
            } ${isLight ? "text-safety-400" : "text-safety-600"}`}
          >
            <span className="h-px w-8 bg-current" aria-hidden="true" />
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={80}>
        <Tag
          className={`mt-4 text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem] ${
            isLight ? "text-white" : "text-steel-900"
          }`}
        >
          {title}
        </Tag>
      </Reveal>
      {description && (
        <Reveal delay={160}>
          <p
            className={`mt-5 text-[17px] leading-relaxed ${
              isLight ? "text-steel-300" : "text-steel-600"
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
