import SectionLinkCard from "@/components/ui/SectionLinkCard";
import PageBody from "@/components/ui/PageBody";
import Reveal from "@/components/ui/Reveal";
import RichText from "@/components/ui/RichText";
import type { SectionLink } from "@/types/common";

interface HubSectionProps {
  intro: string;
  sections: SectionLink[];
}

/**
 * Cuerpo estándar de una página "hub" (Quiénes somos, Tratamiento, Pacientes,
 * Cómo acceder, Sé parte): párrafo intro + grilla de SectionLinkCard.
 * Grilla fija a 3 columnas en desktop para que todos los hubs se vean iguales
 * sin importar cuántos ítems tengan.
 *
 * El fondo lo pone `PageBody`: cada hub recibe la identidad visual de su bloque.
 */
export default function HubSection({ intro, sections }: HubSectionProps) {
  return (
    <PageBody>
      <Reveal>
        <p className="text-lg text-piel-text/80">
          <RichText text={intro} />
        </p>
      </Reveal>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((section, index) => (
          <Reveal key={section.href} delay={index * 80}>
            <SectionLinkCard {...section} />
          </Reveal>
        ))}
      </div>
    </PageBody>
  );
}
