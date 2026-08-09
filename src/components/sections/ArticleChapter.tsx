import ImageSlot from "@/components/ui/ImageSlot";
import Reveal from "@/components/ui/Reveal";
import RichText from "@/components/ui/RichText";
import { imageSrc } from "@/lib/content/imagenes";
import type { ArticleChapter as Chapter } from "@/types/articulo";

/**
 * Un capítulo del artículo: encabezado + sus secciones.
 *
 * **Ancho de lectura:** el cuerpo va en una columna medida (`max-w-3xl`, ~70
 * caracteres) en vez de ocupar todo el contenedor. El sistema de diseño pide
 * texto "sangría a sangría", pero reserva excepciones para casos con una razón
 * funcional: un artículo de esta extensión leído a 1280 px de línea es
 * inleíble. Las imágenes sí se van más anchas, y ese contraste de anchos es lo
 * que le da ritmo al scroll.
 */
export default function ArticleChapter({ chapter }: { chapter: Chapter }) {
  return (
    <section id={chapter.id} className="scroll-mt-24">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-piel-burgundy">
          {chapter.eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-bold text-piel-navy sm:text-4xl">{chapter.title}</h2>
        <span aria-hidden className="accent-bar-h mt-5 block h-1 w-16 rounded-full" />
      </Reveal>

      <div className="mt-10 flex flex-col gap-12">
        {chapter.sections.map((section) => (
          <div key={section.id} id={section.id} className="scroll-mt-24">
            <Reveal className="max-w-3xl">
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
              <div
                className={`mt-8 grid gap-6 ${
                  section.images.length > 1 ? "lg:grid-cols-2" : "mx-auto max-w-5xl"
                }`}
              >
                {section.images.map((image, index) => (
                  <ImageSlot
                    key={image.src}
                    src={imageSrc(image)}
                    alt={image.alt}
                    caption={image.caption}
                    aspect="16/9"
                    // Las ilustraciones médicas no se recortan nunca: se muestran
                    // enteras sobre un panel claro.
                    fit="contain"
                    sizes={
                      section.images!.length > 1
                        ? "(min-width: 1024px) 45vw, 100vw"
                        : "(min-width: 1024px) 64rem, 100vw"
                    }
                    delay={index * 100}
                  />
                ))}
              </div>
            )}

            {section.items && (
              <ul className="mt-8 grid max-w-5xl gap-4 sm:grid-cols-2">
                {section.items.map((item, index) => (
                  <li key={item.title}>
                    <Reveal delay={index * 60}>
                      <div className="h-full rounded-3xl bg-white p-6 shadow-sm ring-1 ring-piel-navy/5">
                        <h4 className="text-lg font-semibold text-piel-navy">{item.title}</h4>
                        <p className="mt-2 text-piel-text/75">
                          <RichText text={item.text} />
                        </p>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
