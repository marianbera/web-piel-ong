import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import PageBody from "@/components/ui/PageBody";
import EmptyState from "@/components/ui/EmptyState";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import RichText from "@/components/ui/RichText";
import { prensaContent } from "@/lib/content/quienes-somos";
import { getPressItems } from "@/lib/admin/store";
import type { AdminPressItem } from "@/lib/admin/types";

export const metadata: Metadata = {
  title: "Prensa",
  description: prensaContent.header.subtitle,
};

// Las notas y videos se cargan desde /panel.
export const dynamic = "force-dynamic";

/** ID de un video de YouTube a partir de su link, para mostrar la miniatura. */
function youtubeId(href: string) {
  try {
    const url = new URL(href);
    if (url.hostname === "youtu.be") return url.pathname.slice(1) || null;
    if (url.hostname.endsWith("youtube.com")) {
      return url.searchParams.get("v") ?? url.pathname.match(/^\/(?:embed|shorts)\/([\w-]+)/)?.[1] ?? null;
    }
  } catch {
    // Link mal cargado desde el panel: la card se muestra igual, sin miniatura.
  }
  return null;
}

export default async function PrensaPage() {
  const { header, intro } = prensaContent;
  const items = await getPressItems();
  const videos = items.filter((item) => item.kind === "video");
  const notas = items.filter((item) => item.kind !== "video");

  return (
    <>
      <PageHeader {...header} />

      <PageBody>
        <Reveal>
          <p className="max-w-3xl text-lg text-piel-text/80">
            <RichText text={intro} />
          </p>
        </Reveal>

        {items.length === 0 ? (
          <>
            {/* TODO(PIEL): cargar las notas y videos desde /panel → Prensa. */}
            <EmptyState message="Próximamente vamos a compartir las notas y menciones de PIEL en los medios." />
            <Reveal>
              <p className="mt-8 max-w-3xl text-piel-text/75">
                ¿Sos periodista y querés hacer una nota sobre PIEL? Escribinos y te ponemos en
                contacto con el equipo.
              </p>
              <Link
                href="/contacto"
                className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-piel-navy"
              >
                Contacto de prensa
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </Reveal>
          </>
        ) : (
          // Videos y notas van en grupos separados: mezclados en una misma grilla,
          // las notas (sin imagen) quedaban estiradas al alto de los videos.
          <>
            {videos.length > 0 && (
              <section className="mt-12">
                <h2 className="text-2xl font-bold text-piel-navy sm:text-3xl">Videos</h2>
                <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {videos.map((item, index) => (
                    <PressCard key={item.id} item={item} delay={(index % 3) * 80} />
                  ))}
                </ul>
              </section>
            )}
            {notas.length > 0 && (
              <section className="mt-14">
                <h2 className="text-2xl font-bold text-piel-navy sm:text-3xl">Notas</h2>
                <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                  {notas.map((item, index) => (
                    <PressCard key={item.id} item={item} delay={(index % 2) * 80} />
                  ))}
                </ul>
              </section>
            )}
          </>
        )}
      </PageBody>
    </>
  );
}

function PressCard({ item, delay }: { item: AdminPressItem; delay: number }) {
  const videoId = item.kind === "video" ? youtubeId(item.href) : null;

  return (
    <li className="flex">
      <Reveal delay={delay} className="flex w-full">
        <Card
          as="a"
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          hoverable
          className="flex h-full w-full flex-col"
        >
          {videoId && (
            <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-2xl bg-piel-navy">
              <Image
                src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
                alt=""
                fill
                sizes="(min-width: 1024px) 24rem, (min-width: 640px) 45vw, 90vw"
                className="object-cover"
              />
              <span
                aria-hidden
                className="absolute inset-0 flex items-center justify-center bg-piel-navy/20"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-piel-navy shadow-lg">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-6 w-6">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </span>
            </div>
          )}
          <span className="flex flex-wrap items-center gap-2 text-sm text-piel-text/70">
            {item.kind === "video" && (
              <span className="rounded-full bg-piel-burgundy px-2.5 py-0.5 text-[0.68rem] font-semibold uppercase tracking-wide text-white">
                Video
              </span>
            )}
            {item.outlet}
            {item.date && ` · ${item.date}`}
          </span>
          <h3 className="mt-2 text-lg font-semibold text-piel-navy">{item.title}</h3>
        </Card>
      </Reveal>
    </li>
  );
}
