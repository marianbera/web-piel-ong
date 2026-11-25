import type { PageHeaderContent } from "@/types/common";

export type DonationType = "individual" | "apadrinamiento" | "empresa";

/** Modalidad del aporte: por única vez o mensual (pedido de PIEL). */
export type DonationFrequency = "unica" | "mensual";

export interface DonationFormData {
  name: string;
  email: string;
  amount: number;
  frequency: DonationFrequency;
  /** Duración del aporte mensual en meses. `null` = sin fecha de fin. */
  months: number | null;
  type: DonationType;
  origin: string;
}

export interface AmountOption {
  value: number;
  label: string;
}

/** Duración del aporte mensual. `months: null` = hasta que la persona lo dé de baja. */
export interface DurationOption {
  months: number | null;
  label: string;
}

export interface DonarPageContent {
  header: PageHeaderContent;
  intro: string;
  paragraphs?: string[];
  image?: { src: string; alt: string; position?: string };
  /** Montos fijos: la persona elige uno, no escribe el suyo. */
  amountOptions: AmountOption[];
  durationOptions: DurationOption[];
}
