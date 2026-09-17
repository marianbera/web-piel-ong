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
        // Miniaturas de los videos de YouTube en Prensa.
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/vi/**",
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
      // Cuidados y alimentación pasó a la raíz, igual que /labio-leporino.
      { source: "/pacientes/cuidados", destination: "/cuidados-y-alimentacion", permanent: true },
      { source: "/pacientes/alimentacion", destination: "/cuidados-y-alimentacion", permanent: true },
      {
        source: "/pacientes/cuidados-y-alimentacion",
        destination: "/cuidados-y-alimentacion",
        permanent: true,
      },
      // Con tilde, como figura en el documento de observaciones.
      {
        source: "/cuidados-y-alimentaci%C3%B3n",
        destination: "/cuidados-y-alimentacion",
        permanent: true,
      },
      // "Guías y materiales" se eliminó: lo más cercano son las preguntas frecuentes.
      { source: "/pacientes/guias", destination: "/pacientes/faq", permanent: true },
    ];
  },
};

export default nextConfig;
