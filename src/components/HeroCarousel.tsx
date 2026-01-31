"use client";

import { useState } from "react";
import clsx from "clsx";
import { Button } from "./ui/Button";

type Slide = {
  title: string;
  description: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  image: string;
};

export function HeroCarousel({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);

  const current = slides[index];

  const prev = () => setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));

  return (
    <div className="relative overflow-hidden rounded-[18px] bg-[var(--gray-900)] text-white shadow-xl min-h-[420px]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.55) 100%), url(${current.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "opacity 300ms ease",
        }}
      />

      <div className="relative z-10 h-full w-full flex flex-col justify-between p-6 md:p-10 gap-6">
        <div className="max-w-2xl space-y-4 mt-6">
          <p className="uppercase tracking-[0.2em] text-sm font-semibold text-white/80">Proyectos destacados</p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">{current.title}</h1>
          <p className="text-lg text-white/85 max-w-2xl">{current.description}</p>
          <div className="flex flex-wrap gap-3 pt-1">
            {current.ctaPrimary && (
              <Button as="a" href={current.ctaPrimary.href} variant="primary" className="px-4 py-2.5">
                {current.ctaPrimary.label}
              </Button>
            )}
            {current.ctaSecondary && (
              <Button as="a" href={current.ctaSecondary.href} variant="secondary" className="px-4 py-2.5">
                {current.ctaSecondary.label}
              </Button>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                className={clsx(
                  "h-2.5 rounded-full transition-all",
                  i === index ? "w-8 bg-white" : "w-2 bg-white/50"
                )}
                onClick={() => setIndex(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              className="h-10 w-10 rounded-full bg-white/80 text-[var(--gray-900)] font-semibold"
              onClick={prev}
              aria-label="Anterior"
            >
              ←
            </button>
            <button
              className="h-10 w-10 rounded-full bg-white/80 text-[var(--gray-900)] font-semibold"
              onClick={next}
              aria-label="Siguiente"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
