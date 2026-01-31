import { developers } from "@/data/developers";
import { DeveloperCard } from "./DeveloperCard";

export function DevelopersCarousel() {
  return (
    <div className="overflow-x-auto no-scrollbar">
      <div className="flex gap-3 min-w-full py-2">
        {developers.map((dev) => (
          <div key={dev.id} className="min-w-[260px]">
            <DeveloperCard developer={dev} />
          </div>
        ))}
      </div>
    </div>
  );
}
