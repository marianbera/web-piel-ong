import type { DraftPageContent } from "@/types/common";
import type { ComoAccederHubContent, ComoAccederPageContent } from "@/types/comoAcceder";
import type { FaqItem } from "@/types/pacientes";
import { mailtoUrl, whatsappUrl } from "@/lib/content/site";

export const comoAccederHub: ComoAccederHubContent = {
  header: {
    title: "Cómo acceder",
    subtitle: "El camino para empezar el tratamiento, según tu situación.",
  },
  intro:
    "El proceso para acceder al tratamiento **varía según si la familia reside en Argentina o en el exterior**, y según la cobertura de salud con la que cuente. Elegí la opción que corresponda a tu caso.",
  sections: [
    {
      title: "Obras sociales y cobertura",
      description: "Coberturas con las que trabajamos y orientación para tu caso.",
      href: "/como-acceder/obras-sociales",
    },
    {
      title: "Consultas y turnos",
      description: "Cómo solicitar una consulta y coordinar tu primer turno.",
      href: "/como-acceder/consultas",
    },
    {
      title: "Acceso al tratamiento (becas)",
      description: "Programas de becas y acompañamiento.",
      href: "/como-acceder/acceso",
    },
    {
      title: "Pacientes de Argentina",
      description: "Atención especializada para familias de todo el país.",
      href: "/como-acceder/argentina",
    },
    {
      title: "Pacientes internacionales",
      description: "Información para familias que residen fuera de Argentina.",
      href: "/como-acceder/internacional",
    },
    {
      title: "Info para médicos",
      description: "Derivaciones, materiales y protocolos para profesionales.",
      href: "/como-acceder/medicos",
    },
  ],

};

export const argentinaContent: ComoAccederPageContent = {
  header: {
    title: "Pacientes de Argentina",
    subtitle: "Atención especializada para familias de todo el país.",
  },
  intro:
    "Atendemos pacientes de distintas provincias que buscan **atención especializada** en fisuras labio alvéolo palatinas y cirugía plástica infantil.",
  paragraphs: [
    "Nuestro **modelo interdisciplinario** permite acompañar a cada paciente desde el diagnóstico hasta las distintas etapas de tratamiento y seguimiento.",
    "Entendemos que muchas familias deben trasladarse desde diferentes localidades. Por eso organizamos consultas y tratamientos **de manera coordinada** para optimizar cada instancia de atención. Cada caso es único y requiere una evaluación personalizada, realizada por profesionales integrados.",
    "Acompañamiento a las familias: además del tratamiento médico, brindamos orientación durante todo el proceso. La **participación activa de madres, padres y cuidadores** es parte fundamental del tratamiento y del desarrollo de cada niño.",
  ],
  cta: { label: "Contactar por WhatsApp", href: whatsappUrl },
};

export const internacionalContent: ComoAccederPageContent = {
  header: {
    title: "Pacientes internacionales",
    subtitle: "Centro de referencia regional para familias del exterior.",
  },
  intro:
    "PIEL recibe pacientes de **distintos países** que buscan atención especializada en fisuras labio alvéolo palatinas y cirugía plástica infantil.",
  paragraphs: [
    "Nuestra experiencia interdisciplinaria, desarrollada durante **más de 38 años**, nos ha permitido acompañar a miles de pacientes y consolidarnos como **centro de referencia regional**.",
    "**Un abordaje integral en un único lugar**: las distintas especialidades trabajan de manera coordinada dentro de una misma institución (cirugía plástica infantil, odontología, ortodoncia, fonoaudiología, psicología, pediatría y otras), abordando cada caso de forma integral.",
    // TODO(PIEL): el doc 5.2 corta acá ("Atención para familias del exterior..."). Completar cuando PIEL lo provea.
    "Atención para familias del exterior: viajar para recibir atención médica implica una **planificación especial** para las familias.",
  ],
  bulletsTitle: "¿Por qué elegir PIEL?",
  bullets: [
    "**Más de 38 años** de experiencia.",
    "**Más de 6.000 pacientes** tratados.",
    "Equipo interdisciplinario especializado.",
    "Centro referente en fisuras labio alvéolo palatinas.",
    "Atención integral centrada en el paciente y su familia.",
  ],
  cta: { label: "Contactar por WhatsApp", href: whatsappUrl },
};

export const obrasSocialesContent: ComoAccederPageContent = {
  header: {
    title: "Obras sociales y cobertura",
    subtitle: "Coberturas con las que trabajamos y orientación para tu caso.",
  },
  intro:
    "Actualmente atendemos pacientes con cobertura de las siguientes obras sociales y prepagas. Por consultas sobre cobertura, autorizaciones o modalidades de atención, **nuestro equipo podrá orientarlo según cada caso**.",
  coverages: ["OSDE", "OMINT", "Medifé", "Jerárquicos Salud", "Etica+", "Osmédica", "OSCHOCA"],
  note: "¿No encontrás tu cobertura? Contactanos para recibir orientación sobre tu caso.",
  cta: { label: "Consultar cobertura por WhatsApp", href: whatsappUrl },
};

// Contenido del doc "3.4 Acceso al tratamiento" → va acá (5.4 Acceso / becas).
export const accesoContent: ComoAccederPageContent = {
  header: {
    title: "Acceso al tratamiento",
    subtitle:
      "Programas de becas y acompañamiento para que la situación económica no sea una barrera.",
  },
  intro:
    "Trabajamos para que más niños puedan acceder al tratamiento que necesitan, **independientemente de su situación económica**. A través de programas de becas y acompañamiento, buscamos facilitar el acceso a consultas, cirugías y tratamientos interdisciplinarios.",
  listTitle: "Programas de acceso",
  list: [
    {
      title: "Becas de tratamiento",
      description: "Apoyo para consultas, cirugías y seguimiento interdisciplinario.",
    },
    {
      title: "Acompañamiento a familias",
      description: "Orientación durante las distintas etapas del tratamiento.",
    },
  ],
  note: "Creemos que el **acceso a un tratamiento de calidad** también forma parte del cuidado integral de cada paciente.",
  cta: { label: "Hacé tu consulta", href: whatsappUrl },
};

export const consultasContent: ComoAccederPageContent = {
  header: {
    title: "Consultas y turnos",
    subtitle: "El primer paso para iniciar el tratamiento.",
  },
  intro:
    "**Dar el primer paso** suele venir acompañado de muchas preguntas. Si desea realizar una consulta, solicitar un turno o recibir orientación sobre un tratamiento, puede comunicarse directamente con nuestro equipo.",
  paragraphs: [
    "Cada paciente y familia atraviesa una situación diferente. Brindamos una atención personalizada orientada a comprender las necesidades de cada caso y acompañar desde el primer contacto. Nuestro compromiso es ofrecer **información clara, orientación profesional y acompañamiento cercano** durante todo el proceso.",
  ],
  cta: { label: "Solicitar turno por WhatsApp", href: whatsappUrl },
  secondaryCta: { label: "Enviar consulta por correo", href: mailtoUrl },
};

// TODO(PIEL): sección SIN DOC entregado. Los tres bloques son los que pide el diagrama
// del cliente (derivar un paciente · materiales · protocolos); el texto de cada uno está
// pendiente de PIEL. Se publica la estructura, no contenido inventado.
export const medicosContent: DraftPageContent = {
  header: {
    title: "Info para médicos",
    subtitle: "Derivaciones, materiales y protocolos para profesionales de la salud.",
  },
  intro:
    "Trabajamos junto a pediatras, neonatólogos y equipos de salud de todo el país en el seguimiento de pacientes con fisuras labio alvéolo palatinas. Estamos preparando esta sección con el material para profesionales.",
  sections: [],
  pending: [
    {
      title: "Derivar un paciente",
      hint: "El circuito para derivar un paciente a PIEL y qué información conviene enviar junto con la derivación.",
    },
    {
      title: "Materiales",
      hint: "Material clínico y de referencia para profesionales que acompañan a un paciente con fisura.",
    },
    {
      title: "Protocolos",
      hint: "Los protocolos de tratamiento y de seguimiento interdisciplinario que aplica el equipo.",
    },
  ],
  note: "Mientras tanto, si necesitás derivar un paciente o consultar un caso, **escribinos y te ponemos en contacto con el equipo**.",
};

/**
 * "Antes de tu primera consulta" — página de Pacientes de Argentina.
 * TODO(PIEL): las respuestas definitivas están pendientes de envío. Las de acá
 * son provisorias y remiten al equipo en vez de afirmar un requisito concreto.
 */
export const primeraConsultaFaqs: FaqItem[] = [
  {
    question: "¿Necesito derivación médica?",
    answer:
      "Escribinos y te confirmamos según tu cobertura: **algunas obras sociales y prepagas la piden y otras no**. Si ya tenés una orden de derivación, traela a la consulta.",
  },
  {
    question: "¿Qué estudios tengo que llevar?",
    answer:
      "Lo que tengas del paciente: **ecografías (si el diagnóstico fue prenatal), estudios previos, resúmenes de historia clínica e informes de otros profesionales**. Si no tenés nada todavía, no es un impedimento para la primera consulta.",
  },
  {
    question: "¿Atienden obras sociales o prepagas?",
    answer:
      "Sí. Podés ver el listado actualizado en **Obras sociales y cobertura**. Si la tuya no figura, escribinos igual y te orientamos según tu caso.",
  },
  {
    question: "¿Cuánto dura la primera visita?",
    answer:
      "Depende de cuántas especialidades participen de la evaluación inicial. **Al coordinar el turno te decimos cuánto tiempo reservar**, para que puedas organizar el viaje.",
  },
];

/**
 * Proceso de admisión para pacientes del exterior.
 *
 * ⚠️ TODO(PIEL): el documento de observaciones lo marca como "a confirmar antes de
 * publicar". Por eso NO se renderiza todavía: poner `PROCESO_INTERNACIONAL_CONFIRMADO`
 * en `true` (abajo) cuando PIEL lo apruebe y el bloque aparece solo.
 */
export const PROCESO_INTERNACIONAL_CONFIRMADO = false;

export const procesoInternacional = {
  title: "Cómo es el proceso si venís del exterior",
  steps: [
    {
      title: "Contacto inicial",
      description: "Nos escribís por WhatsApp o mail contándonos el caso.",
    },
    {
      title: "Evaluación a distancia",
      description:
        "Nos compartís estudios y diagnóstico (prenatal o posnatal) para que el equipo pueda dar una primera orientación antes del viaje.",
    },
    {
      title: "Planificación de la visita",
      description:
        "Coordinamos con vos los tiempos de estadía según el tratamiento que corresponda.",
    },
    {
      title: "Atención en PIEL",
      description:
        "Durante tu estadía, las consultas con las distintas especialidades se organizan de manera coordinada para optimizar cada visita.",
    },
  ],
};

/**
 * ⚠️ TODO(PIEL): "Protocolo de tratamiento desarrollado junto a la Universidad de
 * Oulu (Finlandia)" — a confirmar con el Dr. Bennun antes de publicar. Queda acá
 * para no perderlo, pero fuera del array `bullets` que sí se renderiza.
 */
export const BULLET_OULU_PENDIENTE =
  "Protocolo de tratamiento desarrollado junto a la **Universidad de Oulu** (Finlandia).";
