import type { PageHeaderContent } from "@/types/common";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ParallaxHeroImage from "@/components/ui/ParallaxHeroImage";
import Reveal from "@/components/ui/Reveal";

// Foto institucional (fachada de Asociación PIEL) usada como fondo por defecto
// en el hero de todas las páginas internas. Una página puede pisarla pasando
// su propio `header.image`.
const DEFAULT_IMAGE = {
  src: "/brand/hero-pages.jpeg",
  alt: "Fachada de la sede de Asociación PIEL",
  position: "object-[center_56%]",
};

export default function PageHeader({ title, subtitle, image }: PageHeaderContent) {
  const heroImage = image ?? DEFAULT_IMAGE;

  return (
    <section className="relative overflow-hidden bg-piel-navy">
      <div className="absolute inset-0">
        <ParallaxHeroImage
          src={heroImage.src}
          alt={heroImage.alt}
          position={heroImage.position}
        />
        {/* Filtro oscuro para que el texto blanco siempre contraste con la foto. */}
        <div className="absolute inset-0 bg-piel-navy/70" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal>
          <Breadcrumbs />
          <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] text-white sm:text-5xl">
            {title}
          </h1>
          {subtitle && <p className="mt-5 max-w-xl text-lg text-gray-300">{subtitle}</p>}
        </Reveal>
      </div>
    </section>
  );
}
