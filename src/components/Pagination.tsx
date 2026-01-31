"use client";

import clsx from "clsx";

export function Pagination({
  page,
  total,
  onChange,
}: {
  page: number;
  total: number;
  onChange: (p: number) => void;
}) {
  const pages = Array.from({ length: total }, (_, i) => i + 1);
  return (
    <div className="flex items-center gap-2">
      <button
        className="px-3 py-1.5 rounded-full border border-[var(--gray-300)] text-sm"
        onClick={() => onChange(Math.max(1, page - 1))}
        disabled={page === 1}
      >
        Anterior
      </button>
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={clsx(
            "px-3 py-1.5 rounded-full border text-sm",
            p === page
              ? "bg-[var(--brand-blue)] text-white border-[var(--brand-blue)]"
              : "bg-white text-[var(--gray-700)] border-[var(--gray-300)]"
          )}
        >
          {p}
        </button>
      ))}
      <button
        className="px-3 py-1.5 rounded-full border border-[var(--gray-300)] text-sm"
        onClick={() => onChange(Math.min(total, page + 1))}
        disabled={page === total}
      >
        Siguiente
      </button>
    </div>
  );
}
