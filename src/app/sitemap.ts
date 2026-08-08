import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const routes = [
  "/",
  "/quienes-somos",
  "/quienes-somos/nosotros",
  "/quienes-somos/historia",
  "/quienes-somos/premios",
  "/quienes-somos/equipo",
  "/quienes-somos/prensa",
  "/tratamiento",
  "/tratamiento/enfoque",
  "/tratamiento/especialidades",
  "/tratamiento/otras-areas",
  "/tratamiento/investigacion",
  "/pacientes",
  "/pacientes/que-es-fisura",
  "/pacientes/cuidados",
  "/pacientes/alimentacion",
  "/pacientes/acompanamiento",
  "/pacientes/desarrollo",
  "/pacientes/guias",
  "/pacientes/faq",
  "/como-acceder",
  "/como-acceder/argentina",
  "/como-acceder/internacional",
  "/como-acceder/obras-sociales",
  "/como-acceder/consultas",
  "/se-parte",
  "/se-parte/donar",
  "/se-parte/apadrinar",
  "/se-parte/empresas",
  "/contacto",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
