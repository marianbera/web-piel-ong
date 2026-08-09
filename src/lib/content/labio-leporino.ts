import type { ArticlePageContent } from "@/types/articulo";
import { whatsappUrl } from "@/lib/content/site";

/**
 * Página de recorrido largo sobre el labio leporino: qué es, por qué ocurre,
 * cómo se trata y qué esperar en cada etapa.
 *
 * Contenido provisto por PIEL, transcripto sin agregados. Lo único que se sumó
 * son los marcadores `**` de énfasis y la agrupación en capítulos, que es una
 * decisión de lectura, no de contenido.
 */
export const labioLeporinoContent: ArticlePageContent = {
  header: {
    title: "Labio leporino",
    subtitle:
      "Qué es la fisura labio-alvéolo-palatina, por qué ocurre, cómo se trata y qué esperar en cada etapa.",
  },
  intro: [
    "El nacimiento de un bebé con una malformación congénita como labio leporino **impacta profundamente al grupo familiar**. Muchos padres nunca antes habían visto a un niño con fisura labio-alvéolo-palatina.",
    "Cada niño requiere un cuidado de acuerdo a sus necesidades particulares, aspectos que podrán consultar con cada integrante del **grupo profesional de Asociación PIEL**.",
  ],

  chapters: [
    {
      id: "que-es",
      eyebrow: "Para empezar",
      title: "Qué es y por qué ocurre",
      sections: [
        {
          id: "definicion",
          title: "¿Qué es una fisura de labio y/o paladar?",
          paragraphs: [
            "La fisura de labio y la fisura de paladar o ambas son **defectos congénitos**, lo cual significa que se presentan al momento de nacer. Las fisuras oro-faciales son relativamente frecuentes, ya que ocurren en **1 de cada 800 nacimientos**, variando su porcentaje de acuerdo a la raza y el sexo.",
          ],
          images: [
            {
              src: "/labio-leporino/tipos-de-fisura.jpg",
              alt: "Ilustración médica que compara los distintos tipos de fisura del paladar y del labio, desde la fisura incompleta hasta la fisura bilateral completa",
              caption:
                "Los distintos tipos de fisura de labio y paladar. La extensión y la ubicación de la fisura varían en cada paciente, y de eso depende el plan de tratamiento.",
            },
          ],
        },
        {
          id: "causa",
          title: "¿Cuál es la causa del labio leporino y otras malformaciones?",
          paragraphs: [
            "**La causa exacta aún se desconoce** y muchos profesionales coinciden en que no se puede atribuir a un único factor. Es importante distinguir entre fisuras aisladas y fisuras asociadas a otros defectos congénitos o síndromes.",
            "La gran mayoría puede deberse a una **combinación de genes (predisposición genética)** que probablemente interactúa con factores ambientales.",
          ],
        },
        {
          id: "genetica",
          title: "Causas: genética",
          paragraphs: [
            "Los genes son la sustancia básica del ADN de cada ser humano; determinan características como la altura, el color de ojos, etc. Cada persona posee aproximadamente **100.000 genes** agrupados en cromosomas (**46 en total**, 23 pares de cada progenitor). Por la gran cantidad de genes involucrados, ningún niño es exactamente igual a sus padres, lo que ayuda a explicar por qué puede aparecer una fisura en una familia sin antecedentes. Un desorden genético puede darse cuando el niño recibe un gen anormal o cuando hay una mutación al momento de la concepción.",
            "Respecto a los factores ambientales, muy pocos han sido definitivamente asociados. Las malformaciones se producen en la **etapa temprana del embarazo** (los tejidos del labio se fusionan en la 5.ª-6.ª semana; el paladar entre la 7.ª y 9.ª), generalmente antes de que la madre se entere del embarazo, y sobre esto la mujer no tiene control. **Las fisuras no pueden ser causadas por eventos de la etapa media o tardía del embarazo.**",
          ],
        },
      ],
    },

    {
      id: "antes-de-nacer",
      eyebrow: "Durante el embarazo",
      title: "Antes de nacer",
      sections: [
        {
          id: "diagnostico-prenatal",
          title: "Diagnóstico prenatal",
          paragraphs: [
            "¿Se puede conocer durante el embarazo? Sí, **a partir de la semana 22** mediante una ecografía morfológica por vía transvaginal. Las fisuras bilaterales de labio son más fáciles de diagnosticar; las del paladar blando, las más difíciles de observar. Ante la confirmación, se aconseja la consulta con el **equipo interdisciplinario**.",
          ],
        },
        {
          id: "consulta-prenatal",
          title: "Consulta prenatal",
          paragraphs: [
            "El asesoramiento del equipo interdisciplinario tras el diagnóstico **facilita el tratamiento**. Los objetivos de este primer acercamiento son: que el resto del embarazo resulte placentero; que al nacer el bebé no sea separado de sus padres; evitar la sonda nasogástrica; fomentar la lactancia materna; conseguir el alta temprana junto a la madre.",
            "La decisión de almacenar células del cordón queda **a criterio de los padres**.",
          ],
        },
      ],
    },

    {
      id: "primeros-meses",
      eyebrow: "Los primeros meses",
      title: "Alimentación y acompañamiento",
      sections: [
        {
          id: "alimentacion",
          title: "¿Cómo alimentar a un bebé con labio leporino?",
          paragraphs: [
            "La mejor forma es **la succión**: permite al bebé experimentar el placer de chupar, completa sus necesidades nutricionales, mejora el vínculo con los padres y ejercita los músculos labiales y de la cavidad oral.",
          ],
          images: [
            {
              src: "/labio-leporino/alimentacion.jpg",
              alt: "Bebé alimentándose en brazos de su madre",
              caption: "La succión ejercita los músculos labiales y de la cavidad oral.",
              pending: true,
            },
          ],
          items: [
            {
              title: "Alimentación a pecho",
              text: "Requiere **mutua adaptación**. El seno tiene la elasticidad para adaptarse a la fisura. Con fisura de paladar puede indicarse una placa palatina de acrílico, **no imprescindible** para alimentar.",
            },
            {
              title: "Alimentación a biberón",
              text: "Leche de fórmula con biberón graduado. **No hace falta tetina especial.**",
            },
            {
              title: "¿Cómo saber si alcanza?",
              text: "**El aumento de peso** en los primeros meses lo confirma.",
            },
            {
              title: "Alimentos sólidos",
              text: "**Desde el 6.º mes** en papillas, con cuchara. Si pasan alimentos a la cavidad nasal, interrumpir y dar solo líquidos.",
            },
          ],
        },
        {
          id: "impacto-psicologico",
          title: "Impacto psicológico en los padres",
          paragraphs: [
            "El nacimiento de un niño con labio leporino desborda a los padres (**culpa, enojo, confusión**). La consulta psicológica ayuda a elaborar la angustia y aceptar mejor al nuevo integrante.",
            "El **“Club de Padres” de Asociación PIEL** ofrece un espacio de contención con otros padres que pasan por lo mismo.",
          ],
        },
        {
          id: "apoyo-ninos",
          title: "Apoyo psicológico para los niños",
          paragraphs: [
            "Los niños también pueden recibir ayuda psicológica para **ganar confianza en sí mismos** y responder con seguridad a las preguntas de sus pares.",
          ],
        },
      ],
    },

    {
      id: "cirugia",
      eyebrow: "El tratamiento quirúrgico",
      title: "La cirugía",
      sections: [
        {
          id: "cirugia-labio",
          title: "Operación del labio",
          paragraphs: [
            "La reconstrucción completa de labio y nariz se realiza **alrededor de los 3 meses**, según cada paciente. El niño debe estar sano y creciendo normalmente.",
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
          ],
        },
        {
          id: "cirugia-paladar",
          title: "Operación del paladar",
          paragraphs: [
            "Se aconseja el **cierre completo del paladar duro y blando a partir del 8.º mes y no más tarde de los 16 meses**.",
          ],
          images: [
            {
              src: "/labio-leporino/operacion-paladar.jpg",
              alt: "Ilustración médica del cierre quirúrgico del paladar duro y blando",
              caption: "El cierre quirúrgico del paladar duro y blando.",
            },
          ],
        },
        {
          id: "cuantas-intervenciones",
          title: "¿Cuántas intervenciones son necesarias?",
          paragraphs: [
            "Generalmente **dos cirugías reconstructivas**: una para labio y nariz, otra para cerrar el paladar. Puede haber una revisión final a partir de los 4 años.",
          ],
          items: [
            {
              title: "Colgajo faríngeo / faringoplastia",
              text: "Es una **operación complementaria**, indicada si tras el tratamiento foniátrico persiste el escape de aire por nariz.",
            },
          ],
        },
      ],
    },

    {
      id: "post-operatorio",
      eyebrow: "Después de la cirugía",
      title: "Recuperación",
      sections: [
        {
          id: "postoperatorio",
          title: "Post-operatorio y recuperación",
          items: [
            {
              title: "¿Cómo lucirá después?",
              text: "El labio estará algo inflamado y la herida puede sangrar; la cicatriz adquiere naturalidad **en 3 a 6 meses**. Puede indicarse terapia láser para mejorar la cicatriz.",
            },
            {
              title: "Cuidados",
              text: "El bebé vuelve a casa **el mismo día** tras autorización médica. Mantener la cicatriz limpia y seca, evitar traumatismos. En fisura palatina, garantizar la ingesta de líquidos por boca.",
            },
            {
              title: "Puntos",
              text: "Los del labio **caen solos desde el 7.º día**; los del paladar no necesitan extraerse.",
            },
            {
              title: "Posición para dormir",
              text: "**Boca abajo**, sin apoyar la zona operada.",
            },
          ],
        },
        {
          id: "alimentacion-post",
          title: "Alimentación post-cirugía",
          items: [
            {
              title: "Queiloplastía",
              text: "Tras probar tolerancia a líquidos, los bebés suelen alimentarse normalmente **a las 2-3 horas** de la cirugía. Herida siempre limpia y seca.",
            },
            {
              title: "Palatoplastía",
              text: "Pueden **suspenderse los lácteos por 48 horas**; en ese período se ofrece agua, té azucarado, leche de soja, jugo de manzana, caldos, gelatina y helados de agua, en vaso o cuchara. **No usar chupete ni biberón.**",
            },
          ],
        },
      ],
    },

    {
      id: "desarrollo",
      eyebrow: "A mediano plazo",
      title: "El desarrollo",
      sections: [
        {
          id: "habla",
          title: "Desarrollo del habla",
          paragraphs: [
            "Aproximadamente el **80% de los niños habla apropiadamente** tras la reparación del paladar. El 20% restante requiere colaboración de la familia con los especialistas.",
            "Antes de la operación, con el paladar abierto, se produce la **nasalización del habla**. El tratamiento fonoaudiológico comienza **a partir de los 2 años** si hay alteraciones en la emisión de fonemas.",
          ],
        },
        {
          id: "audicion",
          title: "Problemas de audición",
          paragraphs: [
            "Los niños con fisuras de paladar son **propensos a infecciones de oído medio**, que pueden causar pérdida auditiva temporal o prolongada, relacionada con líquido en el oído medio y la Trompa de Eustaquio.",
            "Se recomienda **control auditivo periódico desde los 15 días de vida**. Ante infecciones persistentes, primero tratamiento médico; si no resulta, punción con drenaje bajo anestesia.",
          ],
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
