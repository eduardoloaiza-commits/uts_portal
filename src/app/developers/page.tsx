import { developers } from "@/data/developers";
import { DeveloperCard } from "@/components/DeveloperCard";

export default function DevelopersPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-[var(--gray-900)]">Inmobiliarias</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {developers.map((dev) => (
          <DeveloperCard key={dev.id} developer={dev} />
        ))}
      </div>
    </div>
  );
}
