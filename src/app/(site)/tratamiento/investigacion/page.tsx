import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import PageBody from "@/components/ui/PageBody";
import Card from "@/components/ui/Card";
import PendingSections from "@/components/sections/PendingSections";
import Reveal from "@/components/ui/Reveal";
import RichText from "@/components/ui/RichText";
import SectionHeading from "@/components/ui/SectionHeading";
import { investigacionContent } from "@/lib/content/tratamiento";

export const metadata: Metadata = {
  title: investigacionContent.header.title,
  description: investigacionContent.header.subtitle,
};

export default function InvestigacionPage() {
  const { header, intro, sections, pending, note, books } = investigacionContent;

  return (
    <>
      <PageHeader {...header} />

      <PageBody>
        <Reveal>
          <p className="text-lg text-piel-text/80">
            <RichText text={intro} />
          </p>
        </Reveal>

        {sections.length > 0 ? (
          <>
            {/* Las mismas tres cards que anunciaba la estructura, ahora con contenido. */}
            <ul className="mt-10 grid gap-6 lg:grid-cols-3">
              {sections.map((section, index) => (
                <li key={section.title} className="flex">
                  <Reveal delay={index * 80} className="flex w-full">
                    <Card className="flex h-full w-full flex-col">
                      <h2 className="text-xl font-bold text-piel-navy sm:text-2xl">
                        {section.title}
                      </h2>
                      <span aria-hidden className="accent-bar-h mt-3 block h-1 w-12 rounded-full" />
                      <p className="mt-4 text-piel-text/80">
                        <RichText text={section.body} />
                      </p>
                    </Card>
                  </Reveal>
                </li>
              ))}
            </ul>

            {/* Libros: tapa a la izquierda (con su proporción real, sin recorte) y los
                datos al costado. */}
            {books && books.items.length > 0 && (
              <section className="mt-16">
                <SectionHeading title={books.title} accent />
                <ul className="mt-10 grid gap-6 lg:grid-cols-2">
                  {books.items.map((book, index) => (
                    <li key={book.title} className="flex">
                      <Reveal delay={index * 80} className="flex w-full">
                        <Card className="flex h-full w-full flex-col gap-6 sm:flex-row sm:items-start">
                          <Image
                            src={book.cover.src}
                            alt={book.cover.alt}
                            width={book.cover.width}
                            height={book.cover.height}
                            sizes="(min-width: 640px) 9rem, 10rem"
                            className="h-auto w-40 shrink-0 self-center rounded-md shadow-lg sm:w-36 sm:self-start"
                          />
                          <div>
                            {book.status && (
                              <span className="mb-3 inline-block rounded-full bg-piel-offwhite px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wider text-piel-text/60">
                                {book.status}
                              </span>
                            )}
                            <h3 className="text-xl font-bold text-piel-navy">{book.title}</h3>
                            {book.subtitle && (
                              <p className="mt-1 text-piel-text/75">{book.subtitle}</p>
                            )}
                            <p className="mt-4 text-sm text-piel-text/80">
                              <span className="font-semibold">
                                {book.editors.length > 1 ? "Editores" : "Editor"}:
                              </span>{" "}
                              {book.editors.join(", ")}
                            </p>
                            <p className="mt-1 text-sm text-piel-text/70">
                              {[book.publisher, book.year].filter(Boolean).join(", ")}
                            </p>
                          </div>
                        </Card>
                      </Reveal>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {note && (
              <Reveal>
                <p className="mt-10 text-piel-text/75">
                  <RichText text={note} />
                </p>
                <Link
                  href="/contacto"
                  className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-piel-navy"
                >
                  Escribir al equipo
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </Reveal>
            )}
          </>
        ) : (
          // Sin contenido se publica la estructura que pide el diagrama, no texto inventado.
          <PendingSections
            blocks={pending}
            note={note}
            cta={{ label: "Escribir al equipo", href: "/contacto" }}
          />
        )}
      </PageBody>
    </>
  );
}
