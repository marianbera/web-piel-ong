import type { PageHeaderContent } from "@/types/common";

export type DonationType = "individual" | "apadrinamiento" | "empresa";

/** Modalidad del aporte: por única vez o mensual (pedido de PIEL). */
export type DonationFrequency = "unica" | "mensual";

export interface DonationFormData {
  name: string;
  email: string;
  amount: number;
  frequency: DonationFrequency;
  type: DonationType;
  origin: string;
}

export interface AmountOption {
  value: number;
  label: string;
}

export interface DonarPageContent {
  header: PageHeaderContent;
  intro: string;
  paragraphs?: string[];
  amountOptions: AmountOption[];
}
