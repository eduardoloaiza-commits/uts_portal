import { notFound } from "next/navigation";
import { properties } from "@/data/properties";
import { developers } from "@/data/developers";
import { Badge } from "@/components/ui/Badge";
import { ImageCarousel } from "@/components/ImageCarousel";
import { ContactTabs } from "@/components/ContactTabs";
import Link from "next/link";

type Props = { params: { id: string } };

export default function PropertyDetail({ params }: Props) {
  const property = properties.find((p) => p.id === params.id);
  if (!property) return notFound();
  const developer = developers.find((d) => d.id === property.developerId);

  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="space-y-6">
        <ImageCarousel images={property.images} />

        <section className="space-y-3">
          <h1 className="text-3xl font-bold text-[var(--gray-900)]">{property.title}</h1>
          <div className="flex flex-wrap gap-2 items-center text-[var(--gray-700)]">
            <span className="text-sm">{property.locationLabel}</span>
            {property.priceUF && (
              <Badge>Desde {property.priceUF} UF</Badge>
            )}
            {property.subsidies.map((s) => (
              <Badge key={s}>{s}</Badge>
            ))}
          </div>
          <p className="text-[var(--gray-700)] leading-relaxed">{property.description}</p>
        </section>

        <section className="bg-white border border-[var(--gray-300)] rounded-[14px] p-4 shadow-sm">
          <h2 className="text-xl font-bold text-[var(--gray-900)] mb-3">Información del proyecto</h2>
          <div className="grid md:grid-cols-2 gap-3 text-sm text-[var(--gray-700)]">
            <Info label="Dormitorios Hasta" value={`${property.bedroomsMax}`} />
            <Info label="Baños Hasta" value={`${property.bathroomsMax}`} />
            <Info label="Superficie útil" value={property.area} />
            <Info label="Tipo de propiedad" value={property.propertyType} />
            <Info label="Estado de propiedad" value={property.deliveryStatus} />
            <Info label="Inmobiliaria" value={property.developerName} />
            <Info label="Región" value={property.region} />
            <Info label="Comuna" value={property.commune} />
            <Info label="Tipo Beneficio" value={property.subsidies.join(", ")} />
            <Info label="Monto del subsidio" value="550 UF" />
            <Info label="Renta Mínima Solicitada" value={`$${property.minIncome.toLocaleString("es-CL")}`} />
          </div>
        </section>

        <section className="space-y-2">
          <h3 className="text-lg font-bold text-[var(--gray-900)]">Video</h3>
          {property.videoUrl ? (
            <div className="aspect-video w-full bg-[var(--gray-300)] rounded-[12px] overflow-hidden">
              <iframe
                src={property.videoUrl}
                title="Video"
                className="w-full h-full"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <p className="text-sm text-[var(--gray-700)]">No disponible</p>
          )}
        </section>

        <section className="space-y-2">
          <h3 className="text-lg font-bold text-[var(--gray-900)]">Tour Virtual</h3>
          {property.virtualTourUrl ? (
            <a
              href={property.virtualTourUrl}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--brand-blue)] font-semibold"
            >
              Ver tour virtual
            </a>
          ) : (
            <p className="text-sm text-[var(--gray-700)]">No disponible</p>
          )}
        </section>
      </div>

      <div className="space-y-4">
        <ContactTabs />

        {developer && (
          <Link
            href={`/developers/${developer.id}`}
            className="block bg-white border border-[var(--gray-300)] rounded-[14px] p-4 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <img src={developer.logoUrl} alt={developer.name} className="h-12 w-12 rounded-full object-cover" />
              <div>
                <p className="text-sm text-[var(--gray-700)]">Inmobiliaria</p>
                <p className="text-lg font-semibold text-[var(--gray-900)]">{developer.name}</p>
              </div>
            </div>
            <p className="text-sm text-[var(--gray-700)] mt-2 line-clamp-3">{developer.about}</p>
          </Link>
        )}
      </div>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-[var(--gray-100)] rounded-[10px] p-3 border border-[var(--gray-300)]">
      <p className="text-xs font-semibold text-[var(--gray-700)]">{label}</p>
      <p className="text-sm font-semibold text-[var(--gray-900)]">{value}</p>
    </div>
  );
}
