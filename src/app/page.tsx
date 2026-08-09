import Hero from "@/components/sections/Hero";
import AboutSummary from "@/components/sections/AboutSummary";
import Differentiators from "@/components/sections/Differentiators";
import HumanBlock from "@/components/sections/HumanBlock";
import AccessHelp from "@/components/sections/AccessHelp";
import DonateBand from "@/components/sections/DonateBand";
import BrandDivider from "@/components/brand/BrandDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSummary />
      <Differentiators />
      {/* Franja separadora de marca: da respiro entre dos bloques de fondo tintado. */}
      <BrandDivider block="centro" size="lg" className="bg-white" />
      <HumanBlock />
      <AccessHelp />
      {/* Bloque "Donar" del doc de contenido (1.4), que hasta ahora no se renderizaba
          en ningún lado. Es también el lugar reservado para el pago online. */}
      <DonateBand />
    </>
  );
}
