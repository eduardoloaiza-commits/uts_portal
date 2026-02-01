import Link from "next/link";

type RegionCard = {
  name: string;
  image: string;
};

export function RegionGrid({ regions }: { regions: RegionCard[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {regions.map((r) => (
        <Link
          key={r.name}
          href={`/properties?region=${encodeURIComponent(r.name)}`}
          className="relative h-36 w-full overflow-hidden rounded-[14px] border border-[var(--gray-300)] bg-[var(--gray-900)] text-white"
        >
          <img
            src={r.image}
            alt={r.name}
            className="absolute inset-0 w-full h-full object-cover opacity-80"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-black/10" />
          <div className="relative z-10 h-full w-full flex items-end p-4 text-lg font-semibold">{r.name}</div>
        </Link>
      ))}
    </div>
  );
}
