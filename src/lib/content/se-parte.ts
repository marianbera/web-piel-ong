import type { ComoAccederPageContent } from "@/types/comoAcceder";
import type { SePartHubContent } from "@/types/seParte";
import { whatsappUrl } from "@/lib/content/site";

export const sePartHub: SePartHubContent = {
  header: {
    title: "Sé parte",
    subtitle: "Hay muchas formas de acompañar a PIEL.",
  },
  intro:
    "**Tu ayuda hace posible que más niños accedan a su tratamiento.** Elegí la forma de colaborar que mejor se adapte a vos o a tu empresa.",
  sections: [
    {
      title: "Donar",
      description: "Realizá una donación individual, del monto que quieras.",
      href: "/se-parte/donar",
    },
    {
      title: "Apadrinar",
      description: "Acompañá el tratamiento de un niño en sus distintas etapas.",
      href: "/se-parte/apadrinar",
    },
    {
      title: "Empresas (RSE)",
      description: "Sumá a tu empresa a la causa a través de un programa de RSE.",
      href: "/se-parte/empresas",
    },
  ],
};

export const empresasContent: ComoAccederPageContent = {
  header: {
    title: "Donar como empresa",
    subtitle: "Empresas que transforman oportunidades.",
  },
  intro:
    "Las empresas pueden convertirse en **aliadas estratégicas** para ampliar el alcance de nuestra misión y ayudar a que más niños y familias accedan a tratamientos especializados.",
  listTitle: "Formas de participar",
  list: [
    {
      title: "Apadrinamiento de tratamientos",
      description:
        "Acompañando a pacientes y familias que necesitan apoyo para acceder al tratamiento.",
    },
    {
      title: "Programas de Responsabilidad Social Empresaria",
      description:
        "Acciones conjuntas orientadas a promover el acceso a la salud y el bienestar infantil.",
    },
    {
      title: "Donaciones y aportes institucionales",
      description: "Colaborando con programas, iniciativas y proyectos desarrollados por PIEL.",
    },
  ],
  note: "**Un compromiso con impacto real**: cada empresa que se involucra contribuye a generar nuevas oportunidades para niños y familias que necesitan acompañamiento.",
  cta: { label: "Quiero que mi empresa colabore", href: whatsappUrl },
};
