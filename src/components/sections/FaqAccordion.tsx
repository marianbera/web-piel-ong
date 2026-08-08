import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import RichText from "@/components/ui/RichText";
import type { FaqItem } from "@/types/pacientes";

/**
 * Acordeón de preguntas frecuentes: cada pregunta es un Card (as="details")
 * con el badge de ícono estándar del sistema como toggle (+).
 */
export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  return (
    <div className="mt-10 flex flex-col gap-3">
      {faqs.map((faq, index) => (
        <Reveal key={faq.question} delay={index * 60}>
          <Card as="details" className="group">
            <summary className="cursor-pointer list-none text-base font-semibold text-piel-navy marker:content-none">
              <span className="flex items-center justify-between gap-4">
                {faq.question}
                <span
                  aria-hidden
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-piel-blue-soft/30 text-piel-navy transition group-open:rotate-45"
                >
                  +
                </span>
              </span>
            </summary>
            <p className="mt-3 text-sm text-piel-text/80">
              <RichText text={faq.answer} />
            </p>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}
