import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "fastly.picsum.photos",
      },
      {
        // Imágenes subidas desde el panel a Vercel Blob.
        protocol: "https",
        hostname: "**.public.blob.vercel-storage.com",
      },
    ],
  },

  /**
   * Redirecciones permanentes de las páginas que se unificaron (observaciones
   * PIEL 2026). Sin esto, cualquier link viejo —de Google, de un mail, de una
   * publicación en redes— caería en un 404.
   */
  async redirects() {
    return [
      { source: "/pacientes/que-es-fisura", destination: "/labio-leporino", permanent: true },
      {
        source: "/pacientes/cuidados",
        destination: "/pacientes/cuidados-y-alimentacion",
        permanent: true,
      },
      {
        source: "/pacientes/alimentacion",
        destination: "/pacientes/cuidados-y-alimentacion",
        permanent: true,
      },
      // "Guías y materiales" se eliminó: lo más cercano son las preguntas frecuentes.
      { source: "/pacientes/guias", destination: "/pacientes/faq", permanent: true },
    ];
  },
};

export default nextConfig;
