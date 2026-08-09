import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { buildSearchIndex } from "@/lib/search/searchIndex";
import { siteName, siteTagline } from "@/lib/content/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteTagline,
  openGraph: {
    title: siteName,
    description: siteTagline,
    url: siteUrl,
    siteName,
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteTagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // El índice se arma en el servidor a partir de los archivos de contenido y
  // viaja ya reducido: el bundle del cliente no carga los módulos de contenido.
  const searchIndex = buildSearchIndex();

  return (
    <html
      lang="es"
      className={`${inter.variable} ${playfair.variable} antialiased`}
    >
      <body className="flex min-h-screen flex-col">
        <Navbar searchIndex={searchIndex} />
        <main className="flex-1 pb-16 sm:pb-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
