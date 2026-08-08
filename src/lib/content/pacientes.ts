import type { ProsePageContent } from "@/types/common";
import type {
  FaqPageContent,
  GuiasPageContent,
  PacientesHubContent,
  TipsPageContent,
} from "@/types/pacientes";

export const pacientesHub: PacientesHubContent = {
  header: {
    title: "Información para pacientes y familias",
    subtitle: "Todo lo que necesitás saber para acompañar el tratamiento.",
  },
  intro:
    "Reunimos en esta sección la información que las familias suelen necesitar **antes, durante y después del tratamiento**. Si tenés dudas puntuales, también podés escribirnos.",
  sections: [
    {
      title: "Qué es la fisura",
      description: "Una explicación clara sobre la fisura labio alvéolo palatina.",
      href: "/pacientes/que-es-fisura",
    },
    {
      title: "Cuidados a tener en cuenta",
      description: "Estimulación temprana y cuidados de los primeros meses y años.",
      href: "/pacientes/cuidados",
    },
    {
      title: "Alimentación del bebé",
      description: "Pautas para la alimentación en las primeras etapas.",
      href: "/pacientes/alimentacion",
    },
    {
      title: "Acompañamiento emocional y social",
      description: "Cómo atravesar el proceso emocional en familia.",
      href: "/pacientes/acompanamiento",
    },
    {
      title: "Desarrollo y crecimiento",
      description: "El crecimiento, el lenguaje y la autonomía como parte del tratamiento.",
      href: "/pacientes/desarrollo",
    },
    {
      title: "Preguntas frecuentes",
      description: "Respuestas a las consultas más habituales de las familias.",
      href: "/pacientes/faq",
    },
    {
      title: "Guías y materiales",
      description: "Material para consultar durante las distintas etapas.",
      href: "/pacientes/guias",
    },
  ],
};

export const queEsFisuraContent: ProsePageContent = {
  header: {
    title: "Qué es la fisura labio alvéolo palatina",
    subtitle: "Labio leporino: qué es, sus causas y su tratamiento.",
  },
  intro:
    "El nacimiento de un bebé con una malformación congénita como el labio leporino **impacta profundamente al grupo familiar**. Muchos padres nunca antes habían visto a un niño con fisura labio-alvéolo-palatina. Cada niño requiere un cuidado acorde a sus necesidades particulares, aspectos que podrán consultar con cada integrante del **equipo profesional de Asociación PIEL**.",
  sections: [
    {
      title: "¿Qué es una fisura de labio y/o paladar?",
      body: "La fisura de labio, la de paladar o ambas son defectos congénitos, es decir, se presentan al momento de nacer. Las fisuras oro-faciales son relativamente frecuentes: ocurren en **1 de cada 800 nacimientos**, variando según la raza y el sexo.",
    },
    {
      title: "¿Cuál es la causa?",
      body: "**La causa exacta aún se desconoce** y muchos profesionales coinciden en que no puede atribuirse a un único factor. Es importante distinguir entre fisuras aisladas y fisuras asociadas a otros defectos congénitos o síndromes. La gran mayoría de las aisladas puede deberse a una **combinación de genes (predisposición genética)** que probablemente interactúa con factores ambientales.",
    },
    {
      title: "El rol de la genética",
      body: "Los genes son la sustancia básica de la cadena constitutiva del ADN. Cada persona posee alrededor de **100.000 genes** agrupados en cromosomas: **46 cromosomas**, la mitad (23 pares) de la madre y la otra mitad del padre. Por la gran cantidad de genes involucrados, ningún niño es idéntico a su padre o madre, lo que ayuda a explicar por qué puede aparecer una fisura en una familia sin antecedentes. Un desorden genético puede ocurrir al recibir un gen anormal o por una mutación al momento de la concepción.",
    },
    {
      title: "Factores ambientales y momento del embarazo",
      body: "Muy pocos agentes ambientales han sido definitivamente asociados. Existen escasas evidencias firmes de que medicamentos, traumatismos o enfermedades durante el embarazo jueguen un rol importante. Las malformaciones se producen en la etapa temprana del embarazo, generalmente antes de que la madre lo advierta: los tejidos del labio se fusionan **alrededor de la 5.ª a 6.ª semana** tras la concepción, y las estructuras del paladar **entre la 7.ª y la 9.ª**. Por lo tanto, las fisuras no pueden ser causadas por eventos de la etapa media o tardía del embarazo.",
    },
  ],
};

export const cuidadosContent: TipsPageContent = {
  header: {
    title: "Cuidados a tener en cuenta",
    subtitle: "Estimulación temprana y cuidados para acompañar los primeros meses y años.",
  },
  intro:
    "En este primer período, **mamá y papá son los mejores estimuladores** y quienes más conocen a sus hijos. Reunimos algunas pautas de alimentación, estimulación y cuidado; seguí siempre las indicaciones específicas del equipo que atiende al paciente.",
  tips: [
    {
      title: "Alimentación de 0 a 6 meses",
      description:
        "Conviene alimentar al bebé semisentado, sin flexión de la cabeza. La succión es necesaria: ejercita los músculos de la boca y mejora el crecimiento orofacial. El pecho se adapta mejor a la forma de la boca y la leche materna tiene mayor valor nutricional; si resulta complicado, puede usarse mamadera con leche materna o de fórmula, con una tetina por la que el líquido salga gota a gota. La alimentación debe ser ordenada: **alrededor de 30 minutos, cada 2 a 2½ horas**, con pausas para el “provechito” y alternando el brazo derecho e izquierdo.",
    },
    {
      title: "La placa obturatriz",
      description:
        "La colocan los odontólogos: **mejora la postura de la lengua** y favorece la alineación de los segmentos maxilares. No es imprescindible para alimentar, pero conviene tenerla el mayor tiempo posible en la boca.",
    },
    {
      title: "Estimulación temprana",
      description:
        "La alimentación también es estimulación: los puntos de apoyo para succionar preparan los del habla. Ayudan el chupete como estimulador del crecimiento maxilofacial, enjuagar la boca con un fondo de agua mineral o hervida, los masajes suaves en mejillas, labios y dentro de la boca, los balanceos y colocar al bebé boca abajo como juego para ejercitar la cabeza, además del control con otorrinolaringología. Lo más importante: **abrazar al bebé todas las veces posibles, mirarlo a los ojos** y sostenerlo con firmeza.",
    },
    {
      title: "De 6 a 24 meses",
      description:
        "**Desde los 6 meses** el pediatra suele indicar papilla con cuchara plana, y los líquidos pasan del biberón al vaso con pico, luego al sorbete y finalmente al vaso o taza común. Conviene respetar los cambios que indica el médico, no prolongar la papilla, sentar al niño de frente y seguro, favorecer la masticación —que ayuda al crecimiento de los maxilares—, evitar gaseosas azucaradas y golosinas, cepillar los dientes y usar la mamadera solo para la leche.",
    },
    {
      title: "Lenguaje y habla",
      description:
        "El lenguaje avanza de las vocalizaciones a las primeras palabras y luego a frases simples. Conviene imitar y dialogar con el bebé, anticipar acciones y jugar con sonidos, soplos y gárgaras. Las letras más difíciles suelen ser **la P, la T, la K y luego la R**. Desde los 8 a 10 meses conviene colocarse de frente para que el niño vea, toque y escuche cada sonido; hermanos, primos y abuelos también son buenos estimuladores.",
    },
    {
      title: "Motricidad",
      description:
        "El desarrollo motor sigue etapas: **alrededor de los 4-5 meses el bebé rueda, a los 6 se sienta, a los 8 gatea y a los 12 camina**. Conviene dejarlo libre en el piso boca arriba y boca abajo, y fomentar la destreza y el uso de las manos con masa, encastres y juegos; es preferible el corralito antes que el andador.",
    },
    {
      title: "Higiene",
      description:
        "Conviene dar agua después de la leche o las papillas para higienizar boca y nariz, mantener la nariz libre de mocos (vapor, perita o solución fisiológica), limpiar la plaquita según indique el cirujano y realizar un **control de audición cada 6 meses**, además de cumplir con los controles de todos los especialistas.",
    },
  ],
};

export const alimentacionContent: TipsPageContent = {
  header: {
    title: "Alimentación del bebé",
    subtitle: "Cómo alimentar a un bebé con labio leporino en las primeras etapas.",
  },
  intro:
    "La mejor forma de alimentar a un bebé con labio leporino es **la succión**: le permite el placer de chupar, cubre sus necesidades nutricionales, mejora el vínculo con los padres y ejercita los músculos labiales y de la cavidad oral.",
  tips: [
    {
      title: "A pecho",
      description:
        "Amamantar —con o sin fisura— **requiere una adaptación mutua**. La fisura exige más paciencia, pero el seno tiene la elasticidad para adaptarse a la boca del bebé y permitir una buena succión. Al diagnosticar fisura de paladar se indica una placa palatina de acrílico para cerrar la comunicación boca-nariz, aunque no es imprescindible para alimentar.",
    },
    {
      title: "A biberón",
      description:
        "De no ser posible el amamantamiento, se puede alimentar al bebé con leche de fórmula o maternizada en un biberón graduado. **No es necesaria una tetina especial.**",
    },
    {
      title: "¿Cómo saber si es adecuada?",
      description:
        "**El aumento de peso en los primeros meses** es la prueba de que la alimentación es suficiente. Acompañá estimulando el desarrollo de todas sus capacidades.",
    },
    {
      title: "Alimentos sólidos",
      description:
        "Se incorporan **alrededor del 6.º mes** en papillas de poca consistencia, con cuchara. El bebé se adapta a un nuevo sabor, textura y forma de ingerir; luego se diversifica y aumenta la consistencia. Si pasan alimentos a la cavidad nasal, hay que interrumpir y dar solo líquidos.",
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
      title: "No están solos: el Club de padres",
      body: "La sensación inicial más común es sentirse solos; a veces las explicaciones médicas no alcanzan y se necesita hablar con otras familias que atraviesan lo mismo. El **“Club de padres” de Asociación PIEL** ofrece ese espacio de intercambio con contención profesional.",
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

// TODO(PIEL): los PDFs reales no fueron entregados. Los recursos quedan con href="#" hasta recibirlos.
export const guiasContent: GuiasPageContent = {
  header: {
    title: "Guías y materiales",
    subtitle: "Materiales y recursos para acompañar las distintas etapas del tratamiento.",
  },
  intro:
    "Ponemos a disposición materiales y recursos para acompañar a pacientes y familias durante las distintas etapas del tratamiento. La información, el acompañamiento y el acceso a recursos adecuados **también forman parte del tratamiento**.",
  resources: [
    {
      title: "Guía para familias",
      description:
        "Información general sobre fisuras labio-alvéolo-palatinas y el tratamiento integral.",
      href: "#",
    },
    {
      title: "Recomendaciones de alimentación",
      description: "Orientación para los primeros meses de vida y la alimentación del bebé.",
      href: "#",
    },
    {
      title: "Materiales educativos",
      description: "Recursos informativos y de acompañamiento.",
      href: "#",
    },
    {
      title: "Libros y publicaciones",
      description: "Material desarrollado por profesionales especializados.",
      href: "#",
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
