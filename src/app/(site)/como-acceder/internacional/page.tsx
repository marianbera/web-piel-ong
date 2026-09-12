import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import PageBody from "@/components/ui/PageBody";
import ComoAccederSection from "@/components/sections/ComoAccederSection";
import StepsList from "@/components/sections/StepsList";
import WhereWeAre from "@/components/sections/WhereWeAre";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import {
  PROCESO_INTERNACIONAL_CONFIRMADO,
  internacionalContent,
  procesoInternacional,
} from "@/lib/content/como-acceder";
import { mailtoUrl, siteContact, whatsappUrl } from "@/lib/content/site";

export const metadata: Metadata = {
  title: internacionalContent.header.title,
  description: internacionalContent.header.subtitle,
};

export default function InternacionalPage() {
  return (
    <>
      <PageHeader {...internacionalContent.header} />
      <ComoAccederSection content={internacionalContent} />

      <PageBody tone="offwhite" intensity="subtle" padding="lg">
        {/* El proceso de admisión está pendiente de aprobación de PIEL — ver
            PROCESO_INTERNACIONAL_CONFIRMADO en lib/content/como-acceder.ts. */}
        {PROCESO_INTERNACIONAL_CONFIRMADO && (
          <>
            <SectionHeading eyebrow="Paso a paso" title={procesoInternacional.title} />
            <StepsList steps={procesoInternacional.steps} />
          </>
        )}

        <Reveal>
          <div className="flex flex-wrap gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-piel-navy px-7 py-3 text-sm font-semibold text-white transition hover:bg-piel-navy/90"
            >
              Contactar por WhatsApp
            </a>
            <a
              href={mailtoUrl}
              className="rounded-full border-2 border-piel-navy px-7 py-3 text-sm font-semibold text-piel-navy transition hover:bg-piel-navy hover:text-white"
            >
              Escribinos por mail ({siteContact.email})
            </a>
          </div>
        </Reveal>

        <WhereWeAre
          address="Avellaneda, Provincia de Buenos Aires, Argentina"
          note="A 30 minutos del Aeroparque Jorge Newbery y a 45 del Aeropuerto de Ezeiza."
        />
      </PageBody>
    </>
  );
}
