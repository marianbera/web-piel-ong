import type { DonarPageContent } from "@/types/donation";

// TODO(PIEL): montos sugeridos en borrador — ajustar con el equipo de PIEL.
export const donarContent: DonarPageContent = {
  header: {
    title: "Donar",
    subtitle: "Podés ayudar a devolver una sonrisa.",
  },
  intro:
    "Cada colaboración ayuda a que **más niños accedan al tratamiento que necesitan**. Elegí el monto y la modalidad que mejor te queden.",
  // El texto largo de la fuente 1.4 se movió al pie de la página: PIEL pidió que
  // los montos se vean de entrada, sin scrollear.
  paragraphs: [
    "Detrás de cada consulta, tratamiento, cirugía y sonrisa recuperada existe una red de personas comprometidas con una misma convicción: que **todos los niños merecen la oportunidad de acceder al tratamiento que necesitan**.",
    "Gracias a ese compromiso colectivo, **miles de niños pudieron acceder a tratamientos especializados** y miles de familias encontraron contención, orientación y esperanza. Hoy podés formar parte de esa historia.",
  ],
  amountOptions: [
    { value: 3000, label: "$3.000" },
    { value: 6000, label: "$6.000" },
    { value: 12000, label: "$12.000" },
    { value: 25000, label: "$25.000" },
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
