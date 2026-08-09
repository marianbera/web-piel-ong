"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import RichText from "@/components/ui/RichText";
import type { TeamGroup } from "@/types/quienesSomos";

/** Cada cuánto avanza el carousel solo. */
const STEP_MS = 2800;
/** Cuánto espera antes de retomar el auto-scroll tras una interacción manual. */
const RESUME_MS = 6000;

/** Iniciales del profesional, para el placeholder cuando todavía no hay foto. */
function initials(name: string) {
  return name
    .replace(/^(Dr\.?|Dra\.?|Lic\.?)\s*/i, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
}

function MemberCard({ name, role, photo }: TeamGroup["members"][number]) {
  return (
    <Card
      radius="brand"
      padding="sm"
      className="flex h-full w-[15rem] shrink-0 snap-start flex-col sm:w-[16rem]"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem]">
        {photo ? (
          <Image
            src={photo}
            alt={`${name}, ${role} en Asociación PIEL`}
            fill
            sizes="(min-width: 640px) 16rem, 15rem"
            className="object-cover"
          />
        ) : (
          // TODO(PIEL): reemplazar por la foto real del profesional.
          <div
            aria-hidden
            className="bg-piel-gradient-navy flex h-full w-full items-center justify-center"
          >
            <span className="text-4xl font-semibold text-white/85">{initials(name)}</span>
          </div>
        )}
      </div>
      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-piel-burgundy">
        {role}
      </p>
      <p className="mt-1 font-semibold leading-snug text-piel-navy">{name}</p>
    </Card>
  );
}

/**
 * Carousel de profesionales de un área. Avanza solo cada ~3 s, se frena al pasar
 * el mouse o al enfocar con el teclado, y se puede desplazar a mano (arrastre,
 * gesto táctil, rueda horizontal, flechas o Tab).
 *
 * Detalles que hacen que no moleste: no arranca hasta que el carousel está a la
 * vista, se apaga entero con `prefers-reduced-motion`, y tiene un botón de
 * pausa explícito (WCAG 2.2.2 — contenido en movimiento).
 */
export default function TeamCarousel({ group, delay = 0 }: { group: TeamGroup; delay?: number }) {
  const trackRef = useRef<HTMLUListElement>(null);
  const reduceMotion = useReducedMotion();

  const [playing, setPlaying] = useState(true);
  const hoveredRef = useRef(false);
  const inViewRef = useRef(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scrollByCard = useCallback((direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;

    // Si el grupo entra entero en pantalla no hay nada que desplazar.
    if (track.scrollWidth <= track.clientWidth + 4) return;

    const card = track.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 16 : track.clientWidth * 0.8;
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
    const atStart = track.scrollLeft <= 2;

    // Al llegar a un extremo, vuelve al otro: el recorrido no se corta.
    if (direction === 1 && atEnd) track.scrollTo({ left: 0, behavior: "smooth" });
    else if (direction === -1 && atStart)
      track.scrollTo({ left: track.scrollWidth, behavior: "smooth" });
    else track.scrollBy({ left: step * direction, behavior: "smooth" });
  }, []);

  /** Una interacción manual pausa el avance automático por unos segundos. */
  const holdAutoplay = useCallback(() => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    hoveredRef.current = true;
    resumeTimer.current = setTimeout(() => {
      hoveredRef.current = false;
    }, RESUME_MS);
  }, []);

  // Solo anima mientras el carousel está efectivamente a la vista.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting;
      },
      { threshold: 0.25 }
    );
    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!playing || reduceMotion) return;
    const id = setInterval(() => {
      if (hoveredRef.current || !inViewRef.current || document.hidden) return;
      scrollByCard(1);
    }, STEP_MS);
    return () => clearInterval(id);
  }, [playing, reduceMotion, scrollByCard]);

  useEffect(
    () => () => {
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    },
    []
  );

  const controlClass =
    "flex h-9 w-9 items-center justify-center rounded-full border border-piel-navy/20 text-piel-navy transition hover:bg-piel-navy hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-piel-navy";

  return (
    <Reveal delay={delay} className="mt-12 first:mt-0">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-piel-navy sm:text-3xl">{group.title}</h3>
          <p className="mt-2 max-w-2xl text-piel-text/75">{group.description}</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className={controlClass}
            aria-label={`Anterior — ${group.title}`}
            onClick={() => {
              holdAutoplay();
              scrollByCard(-1);
            }}
          >
            <span aria-hidden>←</span>
          </button>
          <button
            type="button"
            className={controlClass}
            aria-label={
              playing ? `Pausar el desplazamiento de ${group.title}` : `Reanudar ${group.title}`
            }
            aria-pressed={!playing}
            onClick={() => setPlaying((value) => !value)}
          >
            <span aria-hidden>{playing ? "❚❚" : "▶"}</span>
          </button>
          <button
            type="button"
            className={controlClass}
            aria-label={`Siguiente — ${group.title}`}
            onClick={() => {
              holdAutoplay();
              scrollByCard(1);
            }}
          >
            <span aria-hidden>→</span>
          </button>
        </div>
      </div>

      <ul
        ref={trackRef}
        // tabIndex hace que el track sea alcanzable por teclado: sin esto una
        // región con scroll propio no se puede recorrer sin mouse.
        tabIndex={0}
        role="list"
        aria-label={`Profesionales de ${group.title}`}
        className="scrollbar-none mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-piel-navy"
        onMouseEnter={() => {
          hoveredRef.current = true;
        }}
        onMouseLeave={() => {
          hoveredRef.current = false;
        }}
        onFocus={() => {
          hoveredRef.current = true;
        }}
        onBlur={() => {
          hoveredRef.current = false;
        }}
        onPointerDown={holdAutoplay}
        onWheel={holdAutoplay}
      >
        {group.members.map((member) => (
          <li key={`${member.role}-${member.name}`} className="flex">
            <MemberCard {...member} />
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

/** Lista completa de grupos, cada uno con su carousel. */
export function TeamGroups({ groups, note }: { groups: TeamGroup[]; note?: string }) {
  return (
    <div className="mt-8">
      {note && (
        <Reveal>
          <p className="text-piel-text/75">
            <RichText text={note} />
          </p>
        </Reveal>
      )}
      {groups.map((group, index) => (
        <TeamCarousel key={group.title} group={group} delay={index * 60} />
      ))}
    </div>
  );
}
