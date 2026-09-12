import type { Metadata } from "next";
import LoginForm from "@/components/panel/LoginForm";

export const metadata: Metadata = {
  title: "Ingresar al panel",
  robots: { index: false, follow: false },
};

export default function PanelLoginPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="w-full max-w-sm rounded-3xl border border-piel-navy/10 bg-white p-8 shadow-lg">
        <h1 className="font-heading text-2xl font-bold text-piel-navy">Panel de contenido</h1>
        <p className="mt-2 text-sm text-piel-text/70">Asociación PIEL</p>
        <LoginForm />
      </div>
    </div>
  );
}
