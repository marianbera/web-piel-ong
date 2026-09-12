import Link from "next/link";
import ImageSlot from "@/components/ui/ImageSlot";
import Reveal from "@/components/ui/Reveal";
import RichText from "@/components/ui/RichText";
import { imageSrc } from "@/lib/content/imagenes";
import type { ArticleChapter as Chapter } from "@/types/articulo";

/**
 * Un capítulo del artículo: encabezado + sus secciones.
 *
 * **Ancho de lectura:** el cuerpo va en una columna medida (`max-w-3xl`, ~70
 * caracteres). El sistema de diseño pide texto "sangría a sangría", pero reserva
 * excepciones funcionales: un artículo leído a 1280 px de línea es inleíble.
 *
 * **Imágenes:** van sueltas, sin recuadro, con el mismo ancho que la columna de
 * texto y pegadas al párrafo que ilustran (pedido de PIEL: se notaba el corte).
 */
export default function ArticleChapter({ chapter }: { chapter: Chapter }) {
  return (
    <section id={chapter.id} className="scroll-mt-24">
      <Reveal className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-piel-burgundy">
          {chapter.eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-bold text-piel-navy sm:text-4xl">{chapter.title}</h2>
        <span aria-hidden className="accent-bar-h mt-5 block h-1 w-16 rounded-full" />
      </Reveal>

      <div className="mt-8 flex flex-col gap-10">
        {chapter.sections.map((section) => (
          <div key={section.id} id={section.id} className="max-w-3xl scroll-mt-24">
            <Reveal>
              <h3 className="text-2xl font-bold leading-snug text-piel-navy sm:text-3xl">
                {section.title}
              </h3>

              {section.paragraphs && (
                <div className="mt-4 flex flex-col gap-4 text-lg leading-relaxed text-piel-text/80">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>
                      <RichText text={paragraph} />
                    </p>
                  ))}
                </div>
              )}
            </Reveal>

            {section.images && (
              <div className="mt-6 flex flex-col gap-6">
                {section.images.map((image, index) => (
                  <ImageSlot
                    key={image.src}
                    src={imageSrc(image)}
                    alt={image.alt}
                    caption={image.caption}
                    aspect="16/9"
                    // Las ilustraciones médicas no se recortan: se muestran enteras.
                    fit="contain"
                    frameless
                    sizes="(min-width: 1024px) 48rem, 100vw"
                    delay={index * 80}
                  />
                ))}
              </div>
            )}

            {section.cta && (
              <Reveal>
                <Link
                  href={section.cta.href}
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-piel-navy"
                >
                  {section.cta.label}
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </Reveal>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
