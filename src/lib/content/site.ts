import type { SiteContact } from "@/types/site";

export const siteContact: SiteContact = {
  phone: "011 4201-1001",
  // TODO(PIEL): número de WhatsApp institucional placeholder — confirmar antes de publicar.
  // Todos los CTA "por WhatsApp" del sitio se construyen a partir de este valor.
  whatsapp: "+54 9 11 0000-0000",
  email: "info@asociacion-piel.org.ar",
  address: "Av. Palaá 536, Avellaneda, Provincia de Buenos Aires",
  instagram: "https://instagram.com/asociacionpiel",
  facebook: "https://facebook.com/asociacionpiel",
};

// CTAs de contacto centralizados (rule #4): se derivan de siteContact.
export const whatsappUrl = `https://wa.me/${siteContact.whatsapp.replace(/\D/g, "")}`;
export const mailtoUrl = `mailto:${siteContact.email}`;

export const siteLegal = {
  legalEntity: "Asociación Civil sin Fines de Lucro",
  legalPersonality: "Personería jurídica n.º 1.506.950",
  publicBenefitEntity: "Entidad de bien público n.º 6856",
  foundedOn: "25 de octubre de 1988",
  alternatePhone: "011 4201-1001 / 4913",
  smileTrainPartnership:
    "Colabora con Smile Train para que familias de bajos recursos puedan acceder a cirugías y tratamientos.",
};


export const siteName = "Asociación PIEL";
export const siteTagline =
  "Cirugía plástica infantil especializada en fisuras labio-álveolo-palatinas";
