"use client";

import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Propiedades", href: "/properties" },
  { label: "Inmobiliarias", href: "/developers" },
  { label: "Aprende", href: "/learn" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-[var(--gray-300)]">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="https://pruebasutsdev.com/wp-content/uploads/2026/01/uts.png"
              alt="UsaTuSubsidio"
              className="h-9 w-auto"
              loading="lazy"
            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-[15px] font-semibold text-[var(--gray-700)]">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-[var(--brand-blue)] transition-colors">
              {item.label}
            </Link>
          ))}
          <Link
            href="/properties"
            className="px-3.5 py-2 rounded-full bg-[var(--brand-blue)] text-white text-sm font-semibold shadow-sm"
          >
            Buscar Propiedades
          </Link>
        </nav>

        <button
          className="md:hidden inline-flex flex-col gap-1.5"
          onClick={() => setOpen((o) => !o)}
          aria-label="Abrir menú"
        >
          <span className="h-[2px] w-6 bg-[var(--gray-900)]" />
          <span className="h-[2px] w-6 bg-[var(--gray-900)]" />
          <span className="h-[2px] w-6 bg-[var(--gray-900)]" />
        </button>
      </div>

      <div
        className={clsx(
          "md:hidden overflow-hidden transition-[max-height] duration-200 border-t border-[var(--gray-300)] bg-white",
          open ? "max-h-80" : "max-h-0"
        )}
      >
        <div className="px-4 py-3 flex flex-col gap-3 text-[15px] font-semibold text-[var(--gray-700)]">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="py-1">
              {item.label}
            </Link>
          ))}
          <Link
            href="/properties"
            onClick={() => setOpen(false)}
            className="px-3 py-2 rounded-full bg-[var(--brand-blue)] text-white text-sm font-semibold text-center"
          >
            Buscar Propiedades
          </Link>
        </div>
      </div>
    </header>
  );
}
