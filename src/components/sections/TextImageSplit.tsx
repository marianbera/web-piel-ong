import type { ComponentType, SVGProps } from "react";
import Image from "next/image";
import Link from "next/link";
import BrandPanel from "@/components/ui/BrandPanel";
import Reveal from "@/components/ui/Reveal";
import RichText from "@/components/ui/RichText";

interface TextImageSplitProps {
  eyebrow?: string;
  title?: string;
  body: string | string[];
  cta?: { label: string; href: string; external?: boolean };
  /** Foto real. Si se omite, se muestra un BrandPanel (placeholder de marca). */
  image?: { src: string; alt: string };
  /** Ícono del BrandPanel cuando no hay foto. */
  panelIcon?: ComponentType<SVGProps<SVGSVGElement>>;
  /** Coloca la imagen a la izquierda (por defecto va a la derecha). */
  reverse?: boolean;
  /** Alineación vertical de las columnas (start para textos largos). */
  align?: "center" | "start";
}

/**
 * Bloque texto + imagen 50/50 con link de flecha — patrón base del formato del sitio.
 */
export default function TextImageSplit({
  eyebrow,
  title,
  body,
  cta,
  image,
  panelIcon,
  reverse = false,
  align = "center",
}: TextImageSplitProps) {
  const paragraphs = Array.isArray(body) ? body : [body];
  const arrow = (
    <span aria-hidden className="transition-transform group-hover:translate-x-1">
      →
    </span>
  );

  return (
    <div
      className={`grid gap-10 lg:grid-cols-2 lg:gap-16 ${
        align === "center" ? "lg:items-center" : "lg:items-start"
      }`}
    >
      <Reveal className={reverse ? "lg:order-2" : undefined} direction="up">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-piel-burgundy">
            {eyebrow}
          </p>
        )}
        {title && (
          <h2 className="mt-3 text-3xl font-bold text-piel-navy sm:text-4xl">{title}</h2>
        )}
        <div className="mt-5 space-y-4 text-piel-text/75">
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>
              <RichText text={paragraph} />
            </p>
          ))}
        </div>
        {cta &&
          (cta.external ? (
            <a
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-piel-navy"
            >
              {cta.label}
              {arrow}
            </a>
          ) : (
            <Link
              href={cta.href}
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-piel-navy"
            >
              {cta.label}
              {arrow}
            </Link>
          ))}
      </Reveal>
      <Reveal className={reverse ? "lg:order-1" : undefined} delay={150} direction="up">
        {image ? (
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-lg">
            <Image src={image.src} alt={image.alt} fill className="object-cover" />
          </div>
        ) : (
          <BrandPanel icon={panelIcon} />
        )}
      </Reveal>
    </div>
  );
}
