import Hero from "@/components/sections/Hero";
import AboutSummary from "@/components/sections/AboutSummary";
import Differentiators from "@/components/sections/Differentiators";
import HumanBlock from "@/components/sections/HumanBlock";
import AccessHelp from "@/components/sections/AccessHelp";
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
    </>
  );
}
