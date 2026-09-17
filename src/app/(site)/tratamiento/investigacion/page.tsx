import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import PageBody from "@/components/ui/PageBody";
import Card from "@/components/ui/Card";
import PendingSections from "@/components/sections/PendingSections";
import Reveal from "@/components/ui/Reveal";
import RichText from "@/components/ui/RichText";
import { investigacionContent } from "@/lib/content/tratamiento";

export const metadata: Metadata = {
  title: investigacionContent.header.title,
  description: investigacionContent.header.subtitle,
};

export default function InvestigacionPage() {
  const { header, intro, sections, pending, note } = investigacionContent;

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
