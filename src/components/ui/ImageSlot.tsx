import type { ComponentType, SVGProps } from "react";
import Image from "next/image";
import BlobShape from "@/components/brand/BlobShape";
import WarpGrid from "@/components/brand/WarpGrid";
import Reveal from "@/components/ui/Reveal";
import { ExperienceIcon } from "@/components/ui/icons";

const ASPECT = {
  "4/3": "aspect-[4/3]",
  "3/2": "aspect-[3/2]",
  "16/9": "aspect-[16/9]",
  "21/9": "aspect-[16/9] sm:aspect-[21/9]",
  "3/4": "aspect-[3/4]",
  square: "aspect-square",
} as const;

interface ImageSlotProps {
  /**
   * Ruta de la imagen dentro de `public/`. Si falta, se muestra un placeholder
   * de marca — nunca un cuadro roto.
   */
  src?: string;
  /** Texto alternativo. Obligatorio: describe la imagen, no la decora. */
  alt: string;
  /** Epígrafe visible debajo. También es lo que se lee en el placeholder. */
  caption?: string;
  aspect?: keyof typeof ASPECT;
  /**
   * `cover` recorta para llenar el marco (fotos).
   * `contain` muestra la imagen entera sobre una superficie clara — obligatorio
   * para ilustraciones médicas: recortarlas les cambiaría el significado.
   */
  fit?: "cover" | "contain";
  /** Valor de `sizes` para `next/image`. Ajustar al ancho real del hueco. */
  sizes?: string;
  priority?: boolean;
  /** Ícono del placeholder. */
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  className?: string;
  delay?: number;
}

/**
 * Hueco para una imagen de contenido.
 *
 * Con `src` renderiza un `next/image` optimizado; sin `src` deja un placeholder
 * de marca (degradé suave + grilla + ícono) que anuncia qué imagen va a ir ahí,
 * para que la página no se vea rota mientras PIEL prepara el material.
 */
export default function ImageSlot({
  src,
  alt,
  caption,
  aspect = "4/3",
  fit = "cover",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  icon: Icon = ExperienceIcon,
  className = "",
  delay = 0,
}: ImageSlotProps) {
  // Con `contain` la imagen no llena el marco, así que el marco tiene que leerse
  // como un panel (superficie clara + ring) y no como una foto recortada.
  // El aire lo pone el padding del <Image>: con `fill`, el padding del contenedor
  // no desplaza a un hijo absoluto, pero sí reduce su caja de contenido.
  const frame = src
    ? fit === "contain"
      ? "bg-piel-offwhite ring-1 ring-piel-navy/5"
      : "shadow-lg"
    : "border border-dashed border-piel-navy/15 bg-piel-offwhite";

  return (
    <Reveal delay={delay} className={className}>
      <figure className="m-0">
        <div
          className={`relative w-full overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] ${ASPECT[aspect]} ${frame}`}
        >
          {src ? (
            <Image
              src={src}
              alt={alt}
              fill
              sizes={sizes}
              priority={priority}
              className={fit === "contain" ? "object-contain p-4 sm:p-8" : "object-cover"}
            />
          ) : (
            <>
              <WarpGrid color="periwinkle" opacity={0.3} amplitude={6} fade="center" />
              <BlobShape
                variant="blob"
                color="blueSoft"
                opacity={0.18}
                float="slower"
                className="absolute -right-10 -top-10 h-40 w-40"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-piel-blue-soft/40 text-piel-navy">
                  <Icon className="h-7 w-7" />
                </span>
                <span className="max-w-xs text-sm font-medium text-piel-navy/70">
                  {caption ?? alt}
                </span>
                <span className="rounded-full bg-white/70 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wider text-piel-text/55">
                  Imagen en preparación
                </span>
              </div>
            </>
          )}
        </div>
        {caption && (
          <figcaption className="mt-3 text-sm leading-snug text-piel-text/65">{caption}</figcaption>
        )}
      </figure>
    </Reveal>
  );
}
