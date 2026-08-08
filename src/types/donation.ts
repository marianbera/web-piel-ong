import type { PageHeaderContent } from "@/types/common";

export type DonationType = "individual" | "apadrinamiento" | "empresa";

export interface DonationFormData {
  name: string;
  email: string;
  amount: number;
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
