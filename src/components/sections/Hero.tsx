"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { heroSlides } from "@/lib/content/home";
import { SupportIcon } from "@/components/ui/icons";

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={dir === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"}
      />
    </svg>
  );
}

export default function Hero() {
  const count = heroSlides.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((i: number) => setIndex((i + count) % count), [count]);

  useEffect(() => {
    if (paused || count <= 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % count), 7000);
    return () => clearInterval(timer);
  }, [paused, count]);

  return (
    <section aria-roledescription="carrusel" aria-label="Presentación de Asociación PIEL">
      <div
        className="bg-piel-halo relative h-[34rem] overflow-hidden bg-piel-navy lg:h-[42rem]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        {/* Composición decorativa (lado izquierdo, donde irá la foto real). */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -left-28 top-1/2 hidden h-[34rem] w-[34rem] -translate-y-1/2 rounded-full border border-white/10 lg:block" />
          <div className="absolute -left-10 top-1/2 hidden h-[25rem] w-[25rem] -translate-y-1/2 rounded-full border border-white/10 lg:block" />
          <div className="absolute left-14 top-1/2 hidden h-64 w-64 -translate-y-1/2 rounded-full bg-piel-blue-soft/10 blur-2xl lg:block" />
        </div>

        {heroSlides.map((slide, i) => {
          const isDonate = slide.cta.icon === "heart";
          return (
            <div
              key={slide.title}
              role="group"
              aria-roledescription="diapositiva"
              aria-label={`${i + 1} de ${count}`}
              aria-hidden={i !== index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                i === index ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              {slide.image && (
                <>
                  <Image
                    src={slide.image.src}
                    alt={slide.image.alt}
                    fill
                    priority={i === 0}
                    sizes="100vw"
                    className={`object-cover ${slide.image.position ?? "object-center"}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-piel-navy/75 via-piel-navy/45 to-piel-navy/70" />
                </>
              )}

              <div className="relative mx-auto flex h-full max-w-7xl items-center px-6 sm:px-10 lg:px-8">
                <div
                  className={`max-w-lg text-white lg:w-[46%] ${
                    slide.align === "left" ? "lg:mr-auto" : "lg:ml-auto"
                  }`}
                >
                  <h1 className="text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
                    {slide.title}
                  </h1>
                  <p className="mt-5 text-lg leading-relaxed text-gray-300">{slide.subtitle}</p>
                  <Link
                    href={slide.cta.href}
                    tabIndex={i === index ? undefined : -1}
                    className={`mt-9 inline-flex items-center gap-2.5 rounded-full px-8 py-3.5 text-sm font-semibold transition ${
                      isDonate
                        ? "bg-piel-burgundy text-white hover:bg-piel-burgundy/90"
                        : "bg-white text-piel-navy hover:bg-white/90"
                    }`}
                  >
                    {isDonate && <SupportIcon className="h-5 w-5" />}
                    {slide.cta.label}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}

        {count > 1 && (
          <>
            <button
              type="button"
              aria-label="Diapositiva anterior"
              onClick={() => go(index - 1)}
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white backdrop-blur-sm transition hover:bg-white hover:text-piel-navy sm:left-6"
            >
              <Chevron dir="left" />
            </button>
            <button
              type="button"
              aria-label="Diapositiva siguiente"
              onClick={() => go(index + 1)}
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white backdrop-blur-sm transition hover:bg-white hover:text-piel-navy sm:right-6"
            >
              <Chevron dir="right" />
            </button>

            <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 items-center gap-2.5">
              {heroSlides.map((slide, i) => (
                <button
                  key={slide.title}
                  type="button"
                  aria-label={`Ir a la diapositiva ${i + 1}`}
                  aria-current={i === index}
                  onClick={() => go(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-8 bg-white" : "w-2.5 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </>
        )}

        {/* Franja de marca al pie del hero. */}
        <div aria-hidden className="accent-bar-h absolute inset-x-0 bottom-0 h-1" />
      </div>
    </section>
  );
}
