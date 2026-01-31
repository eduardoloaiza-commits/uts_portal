import { notFound } from "next/navigation";
import { developers } from "@/data/developers";
import { properties } from "@/data/properties";
import { PropertyCard } from "@/components/PropertyCard";

type Props = { params: { id: string } };

export default function DeveloperDetail({ params }: Props) {
  const developer = developers.find((d) => d.id === params.id);
  if (!developer) return notFound();

  const devProperties = properties.filter((p) => p.developerId === developer.id);

  return (
    <div className="space-y-6">
      <section className="bg-white border border-[var(--gray-300)] rounded-[16px] p-5 shadow-sm flex flex-col gap-3">
        <div className="flex items-center gap-4">
          <img src={developer.logoUrl} alt={developer.name} className="h-16 w-16 rounded-full object-cover" />
          <div>
            <p className="text-sm text-[var(--gray-700)]">Inmobiliaria</p>
            <h1 className="text-3xl font-bold text-[var(--gray-900)]">{developer.name}</h1>
          </div>
        </div>
        <p className="text-[var(--gray-700)] leading-relaxed">{developer.about}</p>
        <div className="grid gap-2 text-sm text-[var(--gray-700)] md:grid-cols-2">
          <span>Dirección: {developer.address}</span>
          <span>Correo: {developer.email}</span>
          <span>Web: <a className="text-[var(--brand-blue)]" href={developer.website} target="_blank" rel="noreferrer">{developer.website}</a></span>
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[var(--gray-900)]">Proyectos</h2>
          <p className="text-sm text-[var(--gray-700)]">{devProperties.length} proyectos</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {devProperties.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
