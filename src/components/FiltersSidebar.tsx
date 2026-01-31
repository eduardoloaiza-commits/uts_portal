"use client";

import { regions } from "@/data/regions";
import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const subsidies = [
  "DS1 / TRAMO 1",
  "DS1 / TRAMO 2",
  "DS1 / TRAMO 3",
  "DS19 (Automático)",
  "DS49",
  "FOGAES",
  "Subsidio a la Tasa",
];

const propertyTypes = ["Casa", "Departamento"] as const;
const bedroomOptions = [1, 2, 3, 4];
const bathroomOptions = [1, 2, 3];

export type Filters = {
  region?: string;
  commune?: string;
  type?: string;
  bedrooms?: string;
  bathrooms?: string;
  subsidies?: string[];
  minIncome?: string;
  sort?: string;
};

export function FiltersSidebar({ onChange }: { onChange: (f: Filters) => void }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [region, setRegion] = useState(searchParams.get("region") || "");
  const [commune, setCommune] = useState(searchParams.get("commune") || "");
  const [type, setType] = useState(searchParams.get("type") || "");
  const [bedrooms, setBedrooms] = useState(searchParams.get("bedrooms") || "");
  const [bathrooms, setBathrooms] = useState(searchParams.get("bathrooms") || "");
  const [minIncome, setMinIncome] = useState(searchParams.get("minIncome") || "");
  const [sort, setSort] = useState(searchParams.get("sort") || "destacados");
  const [selectedSubs, setSelectedSubs] = useState<string[]>(searchParams.getAll("subsidy") || []);

  const communes = useMemo(() => regions.find((r) => r.name === region)?.communes ?? [], [region]);

  useEffect(() => {
    onChange({ region, commune, type, bedrooms, bathrooms, minIncome, subsidies: selectedSubs, sort });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [region, commune, type, bedrooms, bathrooms, minIncome, selectedSubs, sort]);

  const syncQuery = () => {
    const params = new URLSearchParams();
    if (region) params.set("region", region);
    if (commune) params.set("commune", commune);
    if (type) params.set("type", type);
    if (bedrooms) params.set("bedrooms", bedrooms);
    if (bathrooms) params.set("bathrooms", bathrooms);
    if (minIncome) params.set("minIncome", minIncome);
    if (sort) params.set("sort", sort);
    selectedSubs.forEach((s) => params.append("subsidy", s));
    router.replace(`/properties?${params.toString()}`);
  };

  const toggleSubsidy = (s: string) => {
    setSelectedSubs((prev) => (prev.includes(s) ? prev.filter((v) => v !== s) : [...prev, s]));
  };

  useEffect(() => {
    syncQuery();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [region, commune, type, bedrooms, bathrooms, minIncome, selectedSubs, sort]);

  return (
    <div className="bg-white border border-[var(--gray-300)] rounded-[14px] p-4 shadow-sm space-y-4">
      <div className="flex flex-col gap-1">
        <label className="text-sm font-semibold text-[var(--gray-700)]">Ordenar por</label>
        <select className="input" value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="destacados">Destacados</option>
          <option value="minIncomeAsc">Renta mínima (menor a mayor)</option>
          <option value="minIncomeDesc">Renta mínima (mayor a menor)</option>
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-semibold text-[var(--gray-700)]">Región</label>
        <select
          className="input"
          value={region}
          onChange={(e) => {
            setRegion(e.target.value);
            setCommune("");
          }}
        >
          <option value="">Todas</option>
          {regions.map((r) => (
            <option key={r.name} value={r.name}>
              {r.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-semibold text-[var(--gray-700)]">Comuna</label>
        <select className="input" value={commune} onChange={(e) => setCommune(e.target.value)} disabled={!region}>
          <option value="">Todas</option>
          {communes.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-semibold text-[var(--gray-700)]">Tipo de Propiedad</label>
        <select className="input" value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">Todas</option>
          {propertyTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold text-[var(--gray-700)]">Dormitorios</label>
          <select className="input" value={bedrooms} onChange={(e) => setBedrooms(e.target.value)}>
            <option value="">Todos</option>
            {bedroomOptions.map((n) => (
              <option key={n} value={n}>
                {n}+
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold text-[var(--gray-700)]">Baños</label>
          <select className="input" value={bathrooms} onChange={(e) => setBathrooms(e.target.value)}>
            <option value="">Todos</option>
            {bathroomOptions.map((n) => (
              <option key={n} value={n}>
                {n}+
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-semibold text-[var(--gray-700)]">Renta mínima</label>
        <input
          type="number"
          className="input"
          placeholder="$"
          value={minIncome}
          onChange={(e) => setMinIncome(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-[var(--gray-700)]">Subsidios</label>
        <div className="flex flex-wrap gap-2">
          {subsidies.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => toggleSubsidy(s)}
              className={`px-2.5 py-1 rounded-full border text-xs font-semibold transition-colors ${
                selectedSubs.includes(s)
                  ? "bg-[var(--brand-blue)] text-white border-[var(--brand-blue)]"
                  : "bg-white text-[var(--gray-700)] border-[var(--gray-300)]"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
