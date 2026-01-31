import Link from "next/link";
import { Developer } from "@/types";

export function DeveloperCard({ developer }: { developer: Developer }) {
  return (
    <Link
      href={`/developers/${developer.id}`}
      className="bg-white border border-[var(--gray-300)] rounded-[14px] shadow-sm p-4 flex items-center gap-3 hover:-translate-y-[1px] transition-transform"
    >
      <img
        src={developer.logoUrl}
        alt={developer.name}
        className="h-12 w-12 rounded-full object-cover"
        loading="lazy"
      />
      <div>
        <p className="font-semibold text-[var(--gray-900)]">{developer.name}</p>
        <p className="text-sm text-[var(--gray-700)] line-clamp-2">{developer.about}</p>
      </div>
    </Link>
  );
}
