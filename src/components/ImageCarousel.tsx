"use client";

import { useState } from "react";
import clsx from "clsx";

export function ImageCarousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);
  if (!images.length) return null;

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="w-full">
      <div className="relative overflow-hidden rounded-[14px] border border-[var(--gray-300)] h-72 md:h-96">
        <img
          src={images[index]}
          alt="Galería"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="absolute bottom-3 right-3 flex items-center gap-2">
          <button
            onClick={prev}
            className="h-9 w-9 rounded-full bg-white/85 text-[var(--gray-900)]"
            aria-label="Anterior"
          >
            ←
          </button>
          <button
            onClick={next}
            className="h-9 w-9 rounded-full bg-white/85 text-[var(--gray-900)]"
            aria-label="Siguiente"
          >
            →
          </button>
        </div>
      </div>
      <div className="mt-3 flex gap-2 overflow-x-auto no-scrollbar">
        {images.map((img, i) => (
          <button
            key={img + i}
            onClick={() => setIndex(i)}
            className={clsx(
              "h-14 w-20 rounded-[8px] overflow-hidden border",
              i === index ? "border-[var(--brand-blue)]" : "border-[var(--gray-300)]"
            )}
          >
            <img src={img} alt="miniatura" className="w-full h-full object-cover" loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  );
}
