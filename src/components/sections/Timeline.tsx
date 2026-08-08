"use client";

import { useEffect, useRef, useState } from "react";
import RichText from "@/components/ui/RichText";
import type { TimelineEvent } from "@/types/quienesSomos";

/**
 * Línea de tiempo horizontal: los hitos alternan arriba/abajo de una línea
 * central. Se animan al entrar en pantalla (o de inmediato si el usuario
 * prefiere menos movimiento).
 */
export default function Timeline({ events }: { events: TimelineEvent[] }) {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    reduceMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion.current) {
      setVisible(true);
      return;
    }

    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const transitionClass = reduceMotion.current ? "" : "transition-all duration-700 ease-out";

  return (
    <div
      ref={containerRef}
      className="grid gap-x-4 sm:gap-x-8"
      style={{ gridTemplateColumns: `repeat(${events.length}, minmax(0, 1fr))` }}
    >
      {/* Línea horizontal central, en la fila del medio (compartida por todos los hitos). */}
      <div className="relative col-span-full row-start-2 h-px">
        <div className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-piel-navy/15" />
      </div>

      {events.map((event, i) => {
        const isAbove = i % 2 === 0;
        const delay = reduceMotion.current ? "0ms" : `${i * 200}ms`;

        return (
          <div className="contents" key={event.year}>
            <div
              className={`flex flex-col text-center ${
                isAbove ? "row-start-1 self-end pb-6" : "row-start-3 self-start pt-6"
              } ${transitionClass} ${
                visible
                  ? "translate-y-0 opacity-100"
                  : `opacity-0 ${isAbove ? "translate-y-3" : "-translate-y-3"}`
              }`}
              style={{ gridColumnStart: i + 1, transitionDelay: delay }}
            >
              <span className="text-sm font-bold uppercase tracking-wide text-piel-text/70">
                {event.year}
              </span>
              <h3 className="mt-1 text-xl font-bold text-piel-navy">{event.title}</h3>
              <p className="mt-1 text-sm text-piel-text/75">
                <RichText text={event.description} />
              </p>
            </div>

            <div
              className={`row-start-2 flex items-center justify-center ${transitionClass}`}
              style={{ gridColumnStart: i + 1, transitionDelay: delay }}
            >
              <span
                className={`h-4 w-4 rounded-full bg-piel-burgundy ring-4 ring-white transition-transform duration-500 ${
                  visible ? "scale-100" : "scale-0"
                }`}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
