"use client";

import { useMemo, useState } from "react";
import { regions } from "@/data/regions";
import { useRouter, useSearchParams } from "next/navigation";

const propertyTypes = ["Casa", "Departamento"] as const;
const bedroomOptions = [1, 2, 3, 4];
const bathroomOptions = [1, 2, 3];
const subsidies = [
  "DS1 / TRAMO 1",
  "DS1 / TRAMO 2",
  "DS1 / TRAMO 3",
  "DS19 (Automático)",
  "DS49",
  "FOGAES",
  "Subsidio a la Tasa",
];

export function SearchBar({ floating = false }: { floating?: boolean }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [region, setRegion] = useState(searchParams.get("region") || "");
  const [commune, setCommune] = useState(searchParams.get("commune") || "");
  const [propertyType, setPropertyType] = useState(searchParams.get("type") || "");
  const [bedrooms, setBedrooms] = useState(searchParams.get("bedrooms") || "");
  const [bathrooms, setBathrooms] = useState(searchParams.get("bathrooms") || "");
  const [minIncome, setMinIncome] = useState(searchParams.get("minIncome") || "");
  const [selectedSubs, setSelectedSubs] = useState<string[]>(
    searchParams.getAll("subsidy") || []
  );

  const communes = useMemo(() => {
    const found = regions.find((r) => r.name === region);
    return found ? found.communes : [];
  }, [region]);

  const toggleSubsidy = (value: string) => {
    setSelectedSubs((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (region) params.set("region", region);
    if (commune) params.set("commune", commune);
    if (propertyType) params.set("type", propertyType);
    if (bedrooms) params.set("bedrooms", bedrooms);
    if (bathrooms) params.set("bathrooms", bathrooms);
    if (minIncome) params.set("minIncome", minIncome);
    selectedSubs.forEach((s) => params.append("subsidy", s));
    router.push(`/properties?${params.toString()}`);
  };

  return (
    <form
      onSubmit={onSubmit}
      className={`bg-white border border-[var(--gray-300)] shadow-lg rounded-[16px] p-4 md:p-5 flex flex-col gap-3 ${
        floating ? "-mt-10 relative z-20" : ""
      }`}
    >
      <div className="grid gap-3 md:grid-cols-3">
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
          <select
            className="input"
            value={commune}
            onChange={(e) => setCommune(e.target.value)}
            disabled={!region}
          >
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
          <select
            className="input"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <option value="">Todas</option>
            {propertyTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-4">
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
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold text-[var(--gray-700)]">Subsidio / Beneficio</label>
          <div className="flex flex-wrap gap-1">
            {subsidies.map((s) => (
              <button
                type="button"
                key={s}
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
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="px-4 py-2.5 rounded-full bg-[var(--brand-blue)] text-white font-semibold shadow-sm"
        >
          Buscar
        </button>
      </div>
    </form>
  );
}
