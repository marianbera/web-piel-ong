import type { ComoAccederPageContent } from "@/types/comoAcceder";
import { whatsappUrl } from "@/lib/content/site";

export const apadrinarContent: ComoAccederPageContent = {
  header: {
    title: "Apadrinar un tratamiento",
    subtitle: "Tu ayuda puede cambiar una historia.",
  },
  intro:
    "Al apadrinar un tratamiento, **ayudás a que un niño pueda acceder** a la atención especializada que necesita.",
  // Foto elegida por PIEL para Apadrinar (observaciones, última ronda).
  image: {
    src: "/se-parte/apadrinar.jpg",
    alt: "Una nena sonriendo entre flores",
    position: "object-[center_40%]",
  },
  paragraphs: [
    "Tu aporte contribuye a acompañar distintas etapas del proceso, brindando **oportunidades reales** para su desarrollo y bienestar.",
  ],
  cta: { label: "Contactate con nosotros", href: whatsappUrl },
};
