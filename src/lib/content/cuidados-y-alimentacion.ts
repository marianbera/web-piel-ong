import type { TipsPageContent } from "@/types/pacientes";

/**
 * Página unificada: absorbe las viejas "Cuidados a tener en cuenta" y
 * "Alimentación del bebé" (observaciones PIEL 2026 — eran demasiadas
 * sub-secciones). Contenido reescrito por PIEL.
 */
export const cuidadosYAlimentacionContent: TipsPageContent = {
  header: {
    title: "Cuidados y alimentación",
    subtitle:
      "Alimentación, estimulación temprana y cuidados para acompañar los primeros meses y años.",
  },
  intro:
    "La mejor forma de alimentar a un bebé con labio leporino es **la succión**: le permite el placer de chupar, cubre sus necesidades nutricionales, mejora el vínculo con los padres y ejercita los músculos labiales y de la cavidad oral. **Mamá y papá son los mejores estimuladores** en este primer período — seguí siempre las indicaciones específicas del equipo que atiende al paciente.",
  tips: [
    {
      title: "Alimentación en los primeros 6 meses",
      description:
        "Conviene alimentar al bebé **semisentado, sin flexión de la cabeza**. Amamantar requiere adaptación mutua: el seno se adapta a la boca del bebé y la leche materna tiene mayor valor nutricional. Si resulta complicado, puede usarse mamadera con leche materna o de fórmula, con tetina de goteo lento — **no es necesaria una tetina especial**. Alimentación ordenada: alrededor de 30 minutos, cada 2 a 2½ horas.",
    },
    {
      title: "La placa obturatriz",
      description:
        "La colocan los odontólogos: **mejora la postura de la lengua** y favorece la alineación de los segmentos maxilares. No es imprescindible para alimentar, pero conviene tenerla el mayor tiempo posible en la boca.",
    },
    {
      title: "De 6 a 24 meses",
      description:
        "**Desde los 6 meses** se incorpora papilla con cuchara plana, y los líquidos pasan del biberón al vaso con pico, luego al sorbete y finalmente al vaso común. Conviene respetar los cambios que indica el médico, favorecer la masticación y evitar gaseosas azucaradas y golosinas.",
    },
    {
      title: "¿Cómo saber si es adecuada?",
      description:
        "**El aumento de peso** en los primeros meses es la prueba de que la alimentación es suficiente. Acompañá estimulando el desarrollo de todas sus capacidades.",
    },
    {
      title: "Estimulación temprana",
      description:
        "La alimentación también es estimulación. Ayudan el chupete, los masajes suaves en mejillas y labios, los balanceos, y el control con otorrinolaringología. Lo más importante: **abrazar al bebé todas las veces posibles, mirarlo a los ojos** y sostenerlo con firmeza.",
    },
    {
      title: "Lenguaje y habla",
      description:
        "El lenguaje avanza de las vocalizaciones a las primeras palabras y luego a frases simples. Conviene imitar y dialogar con el bebé, anticipar acciones y jugar con sonidos. **Desde los 8 a 10 meses**, colocarse de frente para que el niño vea, toque y escuche cada sonido.",
    },
    {
      title: "Motricidad",
      description:
        "Alrededor de los **4-5 meses el bebé rueda, a los 6 se sienta, a los 8 gatea y a los 12 camina**. Conviene dejarlo libre en el piso boca arriba y boca abajo, y fomentar el uso de las manos con masa, encastres y juegos; es preferible el corralito antes que el andador.",
    },
    {
      title: "Higiene",
      description:
        "Conviene dar agua después de la leche o las papillas para higienizar boca y nariz, mantener la nariz libre de mocos, limpiar la placa según indique el cirujano y realizar un **control de audición cada 6 meses**.",
    },
  ],
};
