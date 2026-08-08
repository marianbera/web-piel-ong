import type { PageHeaderContent } from "@/types/common";

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface ContactoPageContent {
  header: PageHeaderContent;
  intro: string;
}
