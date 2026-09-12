import type { ProsePageContent } from "@/types/common";
import type { FaqPageContent, PacientesHubContent } from "@/types/pacientes";

export const pacientesHub: PacientesHubContent = {
  header: {
    title: "Información para pacientes y familias",
    subtitle: "Todo lo que necesitás saber para acompañar el tratamiento.",
  },
  intro:
    "Reunimos en esta sección la información que las familias suelen necesitar **antes, durante y después del tratamiento**. Si tenés dudas puntuales, también podés escribirnos.",
  sections: [
    {
      title: "Preguntas frecuentes",
      description: "Las consultas más habituales de las familias, respondidas por el equipo.",
      href: "/pacientes/faq",
    },
    {
      title: "Labio leporino",
      description: "Qué es la fisura, por qué ocurre y cómo se trata, de punta a punta.",
      href: "/labio-leporino",
    },
    {
      title: "Cuidados y alimentación",
      description: "Alimentación, estimulación temprana y cuidados de los primeros meses.",
      href: "/pacientes/cuidados-y-alimentacion",
    },
    {
      title: "Acompañamiento emocional y social",
      description: "Cómo atravesar el proceso en familia, con contención profesional.",
      href: "/pacientes/acompanamiento",
    },
    {
      title: "Desarrollo y crecimiento",
      description: "El crecimiento, el lenguaje y la autonomía como parte del tratamiento.",
      href: "/pacientes/desarrollo",
    },
  ],

};




export const acompanamientoContent: ProsePageContent = {
  header: {
    title: "Acompañamiento emocional y social",
    subtitle: "Atravesar el proceso en familia, con contención profesional.",
  },
  intro:
    "Ante el impacto por el nacimiento de un niño con labio leporino, los padres viven una mezcla de sentimientos —**culpa, enojo y, sobre todo, confusión**—, lo que puede dificultar el vínculo cercano con el bebé.",
  sections: [
    {
      title: "La consulta con psicología",
      body: "La consulta al psicólogo permite **aclarar dudas y elaborar la angustia**, ayudando al grupo familiar a comprender y aceptar mejor al nuevo integrante.",
    },
    {
      title: "No están solos: el Club de Familias",
      body: "La sensación inicial más común es sentirse solos; a veces las explicaciones médicas no alcanzan y se necesita hablar con otras familias que atraviesan lo mismo. El **“Club de Familias” de Asociación PIEL** ofrece ese espacio de intercambio con contención profesional.",
    },
    {
      title: "Apoyo psicológico para los niños",
      body: "Los niños también pueden recibir ayuda para **ganar confianza** y responder con seguridad a las preguntas de amigos y compañeros sobre su condición.",
    },
  ],
};

export const desarrolloContent: ProsePageContent = {
  header: {
    title: "Desarrollo y crecimiento",
    subtitle: "El crecimiento, el lenguaje y la autonomía también son parte del tratamiento.",
  },
  intro:
    "El tratamiento **no se limita a las intervenciones médicas**. En los primeros años, el crecimiento, el lenguaje, la motricidad y la interacción con el entorno forman parte de un proceso integral que requiere acompañamiento. Cada niño evoluciona de manera diferente.",
  sections: [
    {
      title: "Estimulación temprana",
      body: "**Los primeros años son clave**: la alimentación, el juego, el movimiento y el vínculo afectivo fortalecen las capacidades físicas, cognitivas, emocionales y sociales.",
    },
    {
      title: "Lenguaje y comunicación",
      body: "La comunicación **empieza antes de las primeras palabras**. Hablar, cantar y jugar con sonidos favorecen el desarrollo del lenguaje.",
    },
    {
      title: "Desarrollo motor y autonomía",
      body: "El movimiento y la exploración son parte del crecimiento saludable; el juego y las actividades cotidianas acompañan el proceso.",
    },
    {
      title: "Escolaridad e integración social",
      body: "La **incorporación temprana** a espacios educativos y recreativos favorece la socialización, la autonomía y el desarrollo emocional.",
    },
    {
      title: "Crecer acompañado",
      body: "En PIEL acompañamos cada etapa, dando herramientas y orientación a las familias para el **desarrollo integral, la autonomía y el bienestar** del paciente.",
    },
  ],
};


export const faqContent: FaqPageContent = {
  header: {
    title: "Preguntas frecuentes",
    subtitle: "Respuestas sobre la cirugía del labio leporino y la fisura de paladar.",
  },
  intro:
    "Reunimos acá las preguntas que más recibimos de las familias. Si la tuya no está, escribinos.",
  faqs: [
    {
      question: "¿Cuándo conviene empezar el tratamiento?",
      answer: [
        "Lo ideal es comenzar **desde el diagnóstico prenatal**. Cuando los padres saben con anticipación que su bebé nacerá con una fisura labio-alvéolo-palatina, el equipo de PIEL puede planificar cada paso del tratamiento desde el momento del parto. Esto permite evitar separaciones innecesarias entre el bebé y sus padres, sondas, suspensión de la lactancia e internaciones prolongadas — y que el recién nacido pueda ser dado de alta junto a su madre para comenzar la atención integral cuanto antes.",
        "Si el diagnóstico llegó después del nacimiento, lo más importante es **iniciar el tratamiento lo antes posible**. Cuanto antes empieza el acompañamiento interdisciplinario, mejor es el pronóstico general. **Nunca es tarde para empezar**, y en PIEL acompañamos a cada familia desde el momento en que llega, sea cual sea la etapa.",
      ].join("\n\n"),
    },
    {
      question: "¿Cuándo se opera el labio?",
      answer:
        "La reconstrucción completa de labio y nariz se realiza **alrededor de los 3 meses**, aunque hay un momento adecuado para cada paciente. El niño debe estar sano, creciendo con normalidad y con los estudios prequirúrgicos adecuados.",
    },
    {
      question: "¿Cuándo se opera el paladar?",
      answer:
        "El cierre completo del paladar duro y blando se realiza **a partir del 8.º mes y no más tarde de los 16 meses**.",
    },
    {
      question: "¿Cuántas intervenciones son necesarias?",
      answer:
        "En general, **dos cirugías reconstructivas**: una de labio y nariz, y otra para cerrar todo el paladar. A partir de los 4 años puede haber una revisión final.",
    },
    {
      question: "¿Cuándo se hace la faringoplastia (colgajo faríngeo)?",
      answer:
        "Es una operación complementaria, indicada cuando —tras el tratamiento foniátrico— **persiste el escape de aire por la nariz** o la nasalización del habla.",
    },
    {
      question: "¿Cómo lucirá después de la operación del labio?",
      answer:
        "En el postoperatorio inmediato el labio estará algo inflamado y la herida puede sangrar. **Toma entre 3 y 6 meses** que la cicatriz luzca más natural; puede indicarse terapia láser.",
    },
    {
      question: "¿Cómo lo cuido después de la operación de labio?",
      answer:
        "El cariño y la dedicación son fundamentales. El bebé puede volver a casa el mismo día, tras ser revisado y alimentado. Hay que **mantener la cicatriz limpia y seca**; en fisura palatina, garantizar una buena ingesta de líquidos por boca.",
    },
    {
      question: "¿Cuándo se retiran los puntos?",
      answer:
        "Los puntos del labio se desprenden solos **a partir del 7.º día**. Los del paladar no necesitan extraerse.",
    },
    {
      question: "¿En qué posición debe dormir tras la cirugía?",
      answer:
        "**Boca abajo, sin apoyar la zona operada.** Esto reduce el riesgo de aspiración de vómitos o sangre.",
    },
    {
      question: "¿Cómo es la alimentación después de la cirugía?",
      answer:
        "Tras la queiloplastia (labio), una vez que tolera líquidos suele alimentarse normalmente a las 2-3 horas, con la herida limpia y seca. Tras la palatoplastia (paladar) se **suspenden los lácteos 48 horas** y se ofrece agua, té azucarado, leche de soja, jugo de manzana, caldos, gelatina o helados de agua, en vaso o cuchara, sin chupete ni biberón.",
    },
    {
      question: "¿Podrá hablar normalmente?",
      answer:
        "Alrededor del **80% de los niños** desarrolla el habla adecuadamente tras la cirugía de paladar. El 20% restante requiere una gran colaboración de la familia y los especialistas, a veces durante períodos prolongados.",
    },
    {
      question: "¿Por qué hablan por la nariz?",
      answer:
        "Con el paladar abierto **no se impide el escape de aire**, lo que produce nasalización. Los órganos para succionar, morder, tragar y respirar son los mismos que luego se usan para hablar.",
    },
    {
      question: "¿Cuándo empieza el tratamiento fonoaudiológico?",
      answer:
        "**A partir de los 2 años** y cuando existan alteraciones en la emisión de los fonemas. Los sonidos nasales no se eliminan de inmediato: el niño debe aprender a usar los músculos del paladar blando reacomodados.",
    },
    {
      question: "¿Y los problemas de audición?",
      answer:
        "Los niños con fisura de paladar (incluida la submucosa) son **propensos a las infecciones del oído medio**, que pueden causar pérdidas auditivas temporarias o prolongadas. Conviene el **control de rutina desde los 15 días de vida** y una alimentación adecuada que disminuya el reflujo. Ante infecciones persistentes, el especialista indica el tratamiento; si no alcanza, pueden colocarse tubos de drenaje.",
    },
  ],
};
