"use client";

import { useMemo, useState } from "react";
import { properties } from "@/data/properties";
import { PropertyCard } from "@/components/PropertyCard";
import { Filters, FiltersSidebar } from "@/components/FiltersSidebar";
import { Pagination } from "@/components/Pagination";

const PAGE_SIZE = 9;

export default function PropertiesPage() {
  const [filters, setFilters] = useState<Filters>({ sort: "destacados" });
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let list = [...properties];
    if (filters.region) list = list.filter((p) => p.region === filters.region);
    if (filters.commune) list = list.filter((p) => p.commune === filters.commune);
    if (filters.type) list = list.filter((p) => p.propertyType === filters.type);
    if (filters.bedrooms) list = list.filter((p) => p.bedroomsMax >= Number(filters.bedrooms));
    if (filters.bathrooms) list = list.filter((p) => p.bathroomsMax >= Number(filters.bathrooms));
    if (filters.minIncome) list = list.filter((p) => p.minIncome >= Number(filters.minIncome));
    if (filters.subsidies && filters.subsidies.length) {
      list = list.filter((p) => filters.subsidies!.every((s) => p.subsidies.includes(s as any)));
    }
    switch (filters.sort) {
      case "minIncomeAsc":
        list.sort((a, b) => a.minIncome - b.minIncome);
        break;
      case "minIncomeDesc":
        list.sort((a, b) => b.minIncome - a.minIncome);
        break;
      default:
        list.sort((a, b) => (b.highlighted ? 1 : 0) - (a.highlighted ? 1 : 0));
    }
    return list;
  }, [filters]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
      <div className="lg:sticky lg:top-24 h-fit">
        <FiltersSidebar
          onChange={(f) => {
            setFilters(f);
            setPage(1);
          }}
        />
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-[var(--gray-900)]">Propiedades</h1>
          <p className="text-sm text-[var(--gray-700)]">{filtered.length} resultados</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {pageItems.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
        <div className="pt-2">
          <Pagination page={page} total={totalPages} onChange={(p) => setPage(p)} />
        </div>
      </div>
    </div>
  );
}
