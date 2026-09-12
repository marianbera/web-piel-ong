import type { ArticlePageContent } from "@/types/articulo";
import { whatsappUrl } from "@/lib/content/site";

/**
 * Página unificada de labio leporino: absorbe la vieja "Qué es la fisura".
 *
 * Contenido reescrito por PIEL (observaciones 2026): versión corta y de lectura
 * rápida. El detalle clínico (cirugías, postoperatorio, habla, audición) vive
 * ahora en Preguntas frecuentes, y desde acá se enlaza.
 */
export const labioLeporinoContent: ArticlePageContent = {
  header: {
    title: "Labio leporino",
    subtitle:
      "Qué es la fisura labio-alvéolo-palatina, por qué ocurre, cómo se trata y qué esperar en cada etapa.",
  },
  intro: [
    "El labio leporino —hoy conocido médicamente como **fisura labio-alvéolo-palatina**— es una malformación congénita que impacta profundamente al grupo familiar. Muchos padres nunca antes habían visto a un niño con esta condición. En Asociación PIEL acompañamos a cada familia **desde el diagnóstico**, con un equipo interdisciplinario que atiende las necesidades particulares de cada niño en cada etapa.",
  ],

  chapters: [
    {
      id: "que-es",
      eyebrow: "01",
      title: "Qué es y por qué ocurre",
      sections: [
        {
          id: "definicion",
          title: "¿Qué es una fisura de labio y/o paladar?",
          paragraphs: [
            "Son **defectos congénitos**, es decir, se presentan al momento de nacer. Son relativamente frecuentes, y su incidencia varía según la población.",
          ],
          images: [
            {
              src: "/labio-leporino/tipos-de-fisura.jpg",
              alt: "Ilustración médica que compara los distintos tipos de fisura del paladar y del labio, desde la fisura incompleta hasta la fisura bilateral completa",
              caption: "Los distintos tipos de fisura de labio y paladar.",
            },
          ],
        },
        {
          id: "causa",
          title: "¿Cuál es la causa?",
          paragraphs: [
            "Aún se desconoce la causa exacta. La mayoría de los casos aislados se debe a una **combinación de predisposición genética y factores ambientales**, sin que pueda atribuirse a un único factor.",
          ],
        },
        {
          id: "prevencion",
          title: "¿Puede prevenirse?",
          paragraphs: [
            "Las fisuras se originan en las **primeras semanas del embarazo**, antes de que la madre lo advierta, por lo que no pueden ser causadas por eventos posteriores. El diagnóstico prenatal permite anticiparse y planificar el tratamiento desde el nacimiento.",
          ],
        },
      ],
    },

    {
      id: "antes-de-nacer",
      eyebrow: "02",
      title: "Antes de nacer",
      sections: [
        {
          id: "consulta-prenatal",
          title: "El diagnóstico prenatal",
          paragraphs: [
            "La consulta prenatal permite **contener a los padres y planificar el tratamiento desde el momento del parto**, evitando separaciones innecesarias, sondas y suspensión de la lactancia.",
            "Si el diagnóstico llega después del nacimiento, lo importante es **empezar cuanto antes**: mientras antes comienza el acompañamiento, mejor es el pronóstico.",
          ],
        },
      ],
    },

    {
      id: "alimentacion",
      eyebrow: "03",
      title: "Alimentación y acompañamiento",
      sections: [
        {
          id: "primeros-dias",
          title: "Los primeros días",
          paragraphs: [
            "Los primeros días generan muchas dudas, sobre todo respecto a la alimentación del bebé. El equipo de PIEL acompaña a cada familia con **pautas específicas según cada caso**.",
          ],
          // TODO(PIEL): pendiente el contenido real de Nutrición y Fonoaudiología para ampliar este bloque.
          cta: { label: "Ver cuidados y alimentación", href: "/pacientes/cuidados-y-alimentacion" },
        },
      ],
    },

    {
      id: "cirugia",
      eyebrow: "04",
      title: "La cirugía",
      sections: [
        {
          id: "tratamiento-quirurgico",
          title: "El tratamiento quirúrgico",
          paragraphs: [
            "Se planifica **de forma personalizada**, como parte de un proceso con seguimiento interdisciplinario antes y después de cada intervención.",
          ],
          images: [
            {
              src: "/labio-leporino/reparacion-unilateral.jpg",
              alt: "Secuencia médica de la reparación quirúrgica de una fisura labial unilateral, del preoperatorio al resultado reconstruido",
              caption: "Reparación quirúrgica de una fisura unilateral de labio.",
            },
            {
              src: "/labio-leporino/reparacion-bilateral.jpg",
              alt: "Secuencia médica de la reparación quirúrgica de una fisura labial bilateral, del preoperatorio al resultado reconstruido",
              caption: "Reparación quirúrgica de una fisura bilateral de labio.",
            },
            {
              src: "/labio-leporino/operacion-paladar.jpg",
              alt: "Ilustración médica del cierre quirúrgico del paladar duro y blando",
              caption: "El cierre quirúrgico del paladar duro y blando.",
            },
          ],
          cta: { label: "Ver más detalles en Preguntas frecuentes", href: "/pacientes/faq" },
        },
      ],
    },

    {
      id: "recuperacion",
      eyebrow: "05",
      title: "Recuperación",
      sections: [
        {
          id: "cuidados-post",
          title: "Después de cada cirugía",
          paragraphs: [
            "Cada cirugía requiere **cuidados específicos** que el equipo indica a cada familia de forma personalizada.",
          ],
          cta: { label: "Ver más detalles en Preguntas frecuentes", href: "/pacientes/faq" },
        },
      ],
    },

    {
      id: "desarrollo",
      eyebrow: "06",
      title: "El desarrollo",
      sections: [
        {
          id: "seguimiento",
          title: "El acompañamiento continúa",
          paragraphs: [
            "Después de la cirugía sigue el **seguimiento fonoaudiológico, odontológico y psicológico** durante toda la infancia, hasta la reinserción escolar y social plena.",
          ],
          cta: { label: "Ver desarrollo y crecimiento", href: "/pacientes/desarrollo" },
        },
      ],
    },
  ],

  closing: {
    title: "No hay dos tratamientos iguales",
    text: "Cada niño necesita un plan propio. Si estás atravesando un diagnóstico o tenés dudas sobre alguna etapa, escribinos: el **equipo interdisciplinario de PIEL** te va a orientar según tu caso.",
    ctas: [
      { label: "Solicitar una consulta", href: "/como-acceder/consultas" },
      { label: "Escribirnos por WhatsApp", href: whatsappUrl, external: true },
    ],
  },
};
