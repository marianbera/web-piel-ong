import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import PanelNav from "@/components/panel/PanelNav";
import "../globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Panel · Asociación PIEL",
  // El panel no se indexa ni se enlaza desde el sitio.
  robots: { index: false, follow: false },
};

/**
 * Layout raíz del panel de administración.
 *
 * Es un layout raíz aparte (grupo de rutas `(panel)`) y no un layout anidado:
 * si colgara del layout del sitio, el backoffice mostraría el navbar público, el
 * footer y el botón flotante de WhatsApp.
 */
export default function PanelRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} antialiased`}>
      <body className="min-h-screen bg-piel-offwhite">
        <PanelNav />
        <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">{children}</main>
      </body>
    </html>
  );
}
