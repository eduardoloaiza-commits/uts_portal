import Link from "next/link";
import { Property } from "@/types";
import { Badge } from "./ui/Badge";

export function PropertyCard({ property }: { property: Property }) {
  const {
    id,
    title,
    locationLabel,
    bedroomsMax,
    bathroomsMax,
    minIncome,
    images,
    subsidies,
    area,
    propertyType,
    deliveryStatus,
  } = property;

  return (
    <article className="bg-white rounded-[16px] border border-[var(--gray-300)] shadow-sm overflow-hidden flex flex-col">
      <div className="relative h-52 w-full overflow-hidden">
        <img src={images[0]} alt={title} className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge>{propertyType}</Badge>
          <Badge muted>{deliveryStatus}</Badge>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="text-lg font-semibold text-[var(--gray-900)] leading-tight">{title}</h3>
          <p className="text-sm text-[var(--gray-700)]">{locationLabel}</p>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm text-[var(--gray-700)]">
          <span>Comuna: {property.commune}</span>
          <span>Dormitorios hasta: {bedroomsMax}</span>
          <span>Baños hasta: {bathroomsMax}</span>
          <span>Superficie útil: {area}</span>
          <span className="col-span-2">Renta Mínima: ${minIncome.toLocaleString("es-CL")}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {subsidies.slice(0, 3).map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
        </div>
        <Link
          href={`/properties/${id}`}
          className="mt-auto inline-flex items-center justify-center px-3.5 py-2.5 rounded-full bg-[var(--brand-blue)] text-white text-sm font-semibold"
        >
          Ver detalles
        </Link>
      </div>
    </article>
  );
}
