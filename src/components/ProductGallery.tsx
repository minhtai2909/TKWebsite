"use client";

import Image from "next/image";
import { useState } from "react";

export function ProductGallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [active, setActive] = useState(0);

  return (
    <div className="lg:sticky lg:top-28">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-steel-100">
        {images.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={i === 0 ? name : `${name} – hình ${i + 1}`}
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            priority={i === 0}
            className={`object-cover transition-opacity duration-500 ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {images.length > 1 && (
        <div className="mt-4 flex gap-3">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Xem hình ${i + 1} của ${name}`}
              aria-current={i === active}
              className={`relative aspect-[4/3] w-24 overflow-hidden rounded-lg border-2 transition-all ${
                i === active
                  ? "border-safety-500"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="96px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
