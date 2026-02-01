import { Suspense } from "react";
import { HeroCarousel } from "@/components/HeroCarousel";
import { SearchBar } from "@/components/SearchBar";
import { properties } from "@/data/properties";
import { PropertyCard } from "@/components/PropertyCard";
import { DevelopersCarousel } from "@/components/DevelopersCarousel";
import { BannerCards } from "@/components/BannerCards";
import { RegionGrid } from "@/components/RegionGrid";
import { articles } from "@/data/articles";
import { ArticleCard } from "@/components/ArticleCard";

const slides = [
  {
    title: "Proyectos con subsidio en todo Chile",
    description: "Explora propiedades DS1, DS19 y DS49 en regiones clave con asesoría experta.",
    ctaPrimary: { label: "Ver Proyecto", href: "/properties/aires-del-limari" },
    ctaSecondary: { label: "Explorar Propiedades", href: "/properties" },
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Financiamiento y subsidio a tu alcance",
    description: "Encuentra proyectos con subsidio automático y mejora tu renta mínima con asesoría.",
    ctaPrimary: { label: "Buscar propiedades", href: "/properties" },
    ctaSecondary: { label: "Aprende del subsidio", href: "/learn" },
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Inmobiliarias confiables",
    description: "Trabajamos con desarrolladores validados. Revisa perfiles y proyectos vigentes.",
    ctaPrimary: { label: "Ver inmobiliarias", href: "/developers" },
    ctaSecondary: { label: "Explorar propiedades", href: "/properties" },
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1400&q=80",
  },
];

const regionsGrid = [
  { name: "Antofagasta", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80" },
  { name: "Valparaíso", image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=80" },
  { name: "Metropolitana", image: "https://images.unsplash.com/photo-1526402462921-9b51b5f1f1f4?auto=format&fit=crop&w=800&q=80" },
  { name: "Biobío", image: "https://images.unsplash.com/photo-1465805139202-a644e217f00c?auto=format&fit=crop&w=800&q=80" },
  { name: "Araucanía", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80" },
  { name: "Coquimbo", image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80" },
];

export default function Home() {
  const featured = properties.filter((p) => p.highlighted).slice(0, 9);
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <HeroCarousel slides={slides} />
        <Suspense fallback={<div className="bg-white border border-[var(--gray-300)] rounded-[16px] p-4 shadow-sm">Cargando buscador...</div>}>
          <SearchBar floating />
        </Suspense>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[var(--gray-900)]">Propiedades destacadas</h2>
          <a href="/properties" className="text-[var(--brand-blue)] font-semibold text-sm">
            Ver todas
          </a>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[var(--gray-900)]">Inmobiliarias destacadas</h2>
        </div>
        <DevelopersCarousel />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-[var(--gray-900)]">Aprende del subsidio</h2>
        <BannerCards
          banners={[
            {
              title: "Aprende del Subsidio",
              description: "Guías rápidas para DS1, DS19 y DS49 con requisitos y pasos clave.",
              href: "/learn",
            },
            {
              title: "Planes para inmobiliarias",
              description: "Publica tus proyectos subsidiables y llega a más familias.",
              href: "/developers",
            },
            {
              title: "Condiciones especiales",
              description: "Beneficios, renta mínima y tasas preferentes para tus proyectos.",
              href: "/properties",
            },
          ]}
        />
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[var(--gray-900)]">Propiedades en Chile</h2>
        </div>
        <RegionGrid regions={regionsGrid} />
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[var(--gray-900)]">Artículos</h2>
          <a href="/learn" className="text-[var(--brand-blue)] font-semibold text-sm">
            Ver todos
          </a>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {articles.map((a) => (
            <ArticleCard key={a.id} article={a} />
          ))}
        </div>
      </section>
    </div>
  );
}
