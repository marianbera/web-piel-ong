"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import type { AdminLogo } from "@/lib/admin/types";

/**
 * Carrusel de logos en marquesina continua.
 *
 * La lista se duplica y la pista se desplaza el 50% de su ancho: al terminar la
 * primera copia, la segunda está exactamente donde estaba la primera, así que el
 * salto al reiniciar no se ve. Se frena al pasar el mouse y se apaga entero con
 * `prefers-reduced-motion` (ahí queda una grilla estática, perfectamente legible).
 */
export default function LogoCarousel({ logos }: { logos: AdminLogo[] }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <ul className="mt-10 grid grid-cols-2 justify-items-center gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {logos.map((logo) => (
          <li key={logo.id}>
            <LogoItem logo={logo} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div
      className="group relative mt-10 overflow-hidden"
      // Máscara lateral: los logos entran y salen con un fundido en vez de cortarse.
      style={{
        maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <ul className="animate-piel-marquee flex w-max items-center gap-6 py-2 group-hover:[animation-play-state:paused]">
        {[...logos, ...logos].map((logo, index) => (
          <li key={`${logo.id}-${index}`} className="shrink-0">
            {/* La segunda copia es decorativa: se oculta a los lectores de pantalla. */}
            <LogoItem logo={logo} hidden={index >= logos.length} />
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Cada logo va en una tarjeta blanca del mismo tamaño, con el logo contenido y a
 * opacidad completa: los archivos vienen con proporciones y fondos muy distintos,
 * y sueltos se veían desparejos (unos cortados, otros lavados). Si todavía no hay
 * archivo, la tarjeta muestra el nombre.
 */
function LogoItem({ logo, hidden = false }: { logo: AdminLogo; hidden?: boolean }) {
  const image = (
    <div className="flex h-24 w-48 items-center justify-center rounded-2xl bg-white px-5 py-4 shadow-sm ring-1 ring-piel-navy/5 transition hover:shadow-md">
      {logo.image ? (
        <div className="relative h-full w-full">
          <Image
            src={logo.image}
            alt={hidden ? "" : logo.name}
            fill
            sizes="10rem"
            className="object-contain"
          />
        </div>
      ) : (
        <span className="text-center text-sm font-semibold leading-snug text-piel-navy">
          {logo.name}
        </span>
      )}
    </div>
  );

  return (
    <div aria-hidden={hidden || undefined}>
      {logo.href && !hidden ? (
        <a href={logo.href} target="_blank" rel="noopener noreferrer" title={logo.name}>
          {image}
        </a>
      ) : (
        image
      )}
    </div>
  );
}
