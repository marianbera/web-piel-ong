"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const PARALLAX_FACTOR = 0.35;
const MAX_OFFSET = 80; // px

interface ParallaxHeroImageProps {
  src: string;
  alt: string;
  position?: string;
}

/**
 * Fondo del hero que se desplaza más lento que el scroll (parallax sutil).
 * El contenedor se pasa de tamaño (120% de alto) para que el desplazamiento
 * nunca deje ver un borde vacío.
 */
export default function ParallaxHeroImage({ src, alt, position }: ParallaxHeroImageProps) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;
    const update = () => {
      setOffset(Math.min(window.scrollY * PARALLAX_FACTOR, MAX_OFFSET));
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="absolute inset-x-0 -top-[10%] h-[120%]"
      style={{ transform: `translateY(${offset}px)` }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className={`object-cover ${position ?? "object-center"}`}
      />
    </div>
  );
}
