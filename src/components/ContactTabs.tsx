"use client";

import { useState } from "react";

const tabs = [
  { id: "cotiza", label: "Cotiza" },
  { id: "asesoria", label: "Quiero Asesoría" },
];

export function ContactTabs() {
  const [tab, setTab] = useState("cotiza");

  return (
    <div className="bg-white border border-[var(--gray-300)] rounded-[14px] p-4 shadow-sm space-y-3">
      <div className="flex gap-2">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-3 py-2 rounded-full text-sm font-semibold border transition-colors ${
              tab === t.id
                ? "bg-[var(--brand-blue)] text-white border-[var(--brand-blue)]"
                : "bg-white text-[var(--gray-700)] border-[var(--gray-300)]"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <form className="grid gap-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <input className="input" placeholder="Nombre" required />
          <input className="input" placeholder="Apellido" required />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <input className="input" placeholder="Teléfono" required />
          <input className="input" placeholder="Correo" type="email" required />
        </div>
        <input className="input" placeholder="RUT (opcional)" />
        <button
          type="submit"
          className="mt-2 px-4 py-2.5 rounded-full bg-[var(--brand-blue)] text-white font-semibold"
        >
          Continuar
        </button>
        <div className="bg-[var(--brand-blue)]/5 text-[var(--gray-700)] text-sm rounded-[10px] p-3 border border-[var(--brand-blue)]/10">
          No solicitamos datos sensibles. Solo un asesor te contactará para continuar el proceso.
        </div>
      </form>
    </div>
  );
}
