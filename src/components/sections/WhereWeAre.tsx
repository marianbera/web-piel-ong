import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { MapPinIcon } from "@/components/ui/icons";
import { siteContact } from "@/lib/content/site";

/**
 * Bloque "Dónde estamos": dirección + mapa embebido.
 *
 * El mapa es un iframe de Google Maps en modo embed público (no necesita API key).
 * Va con `loading="lazy"` para no penalizar la carga de la página.
 */
export default function WhereWeAre({
  address = siteContact.address,
  note,
}: {
  address?: string;
  note?: string;
}) {
  const query = encodeURIComponent(`${siteContact.address}, Argentina`);

  return (
    <div className="mt-16">
      <SectionHeading title="Dónde estamos" />

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:items-stretch">
        <Reveal className="flex">
          <Card radius="brand" padding="lg" tone="offwhite" className="flex w-full flex-col">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-piel-blue-soft/40 text-piel-navy">
              <MapPinIcon className="h-6 w-6" />
            </span>
            <p className="mt-5 text-lg font-semibold text-piel-navy">{address}</p>
            {note && <p className="mt-2 text-sm text-piel-text/70">{note}</p>}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${query}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-piel-navy"
            >
              Cómo llegar
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </Card>
        </Reveal>

        <Reveal delay={100} className="flex">
          <div className="w-full overflow-hidden rounded-[2rem] shadow-lg sm:rounded-[2.5rem]">
            <iframe
              title={`Mapa de la sede de Asociación PIEL en ${address}`}
              src={`https://www.google.com/maps?q=${query}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[22rem] w-full border-0 lg:h-full lg:min-h-[22rem]"
            />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
