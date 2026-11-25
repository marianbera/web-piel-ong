import type { DonarPageContent } from "@/types/donation";

/**
 * Modelo de donación que pidió PIEL (nov. 2026): todo MENSUAL, con montos FIJOS
 * —la persona elige uno, no escribe el suyo— y una duración (por ejemplo, $3.000
 * por mes durante 6 meses). Mercado Pago cobra solo cada mes hasta la fecha de fin.
 *
 * El servidor (`api/donations/checkout`) solo acepta los montos y las duraciones
 * de esta lista: no alcanza con tocar el formulario para cobrar otro monto.
 *
 * TODO: confirmar con PIEL si quieren también la donación por única vez o si es
 * todo mensual. El código está completo (Checkout Pro): para mostrarla, poner esto
 * en `true` y vuelve el selector "Por única vez / Todos los meses".
 */
export const DONACION_UNICA_HABILITADA = false;

export const donarContent: DonarPageContent = {
  header: {
    title: "Donar",
    subtitle: "Podés ayudar a devolver una sonrisa.",
  },
  intro:
    "Cada colaboración ayuda a que **más niños accedan al tratamiento que necesitan**. Elegí cuánto querés aportar por mes y durante cuánto tiempo.",
  // El texto largo de la fuente 1.4 se movió al pie de la página: PIEL pidió que
  // los montos se vean de entrada, sin scrollear.
  paragraphs: [
    "Detrás de cada consulta, tratamiento, cirugía y sonrisa recuperada existe una red de personas comprometidas con una misma convicción: que **todos los niños merecen la oportunidad de acceder al tratamiento que necesitan**.",
    "Gracias a ese compromiso colectivo, **miles de niños pudieron acceder a tratamientos especializados** y miles de familias encontraron contención, orientación y esperanza. Hoy podés formar parte de esa historia.",
  ],
  // Foto elegida por PIEL para Donar. Va junto al texto del pie, no arriba: así los
  // montos se siguen viendo sin scrollear.
  image: {
    src: "/se-parte/donar.jpg",
    alt: "Un nene sonriendo con un globo en la sala de espera de Asociación PIEL",
    position: "object-[center_30%]",
  },
  // Montos fijos mensuales que definió PIEL. Sin campo de "otro monto".
  amountOptions: [
    { value: 3000, label: "$3.000" },
    { value: 6000, label: "$6.000" },
    { value: 12000, label: "$12.000" },
  ],
  // PIEL dio el ejemplo de 6 meses. TODO: confirmar con PIEL qué duraciones ofrecer.
  durationOptions: [
    { months: 6, label: "6 meses" },
    { months: 12, label: "12 meses" },
    { months: null, label: "Sin fecha de fin" },
  ],
};

/**
 * Datos para donar por transferencia bancaria.
 * TODO(PIEL): faltan el CBU, el alias y el CUIT reales. Mientras los campos estén
 * vacíos, el bloque no se muestra en la página.
 */
export const datosBancarios = {
  titular: "Asociación PIEL",
  cbu: "",
  alias: "",
  cuit: "",
  banco: "",
};

/**
 * TODO(PIEL): falta definir a qué correo se escribe para dar de baja el aporte
 * mensual. Cuando esté, reemplazar acá y el aviso aparece bajo los montos.
 */
export const bajaAporteMensualEmail = "";
