export function Footer() {
  return (
    <footer className="mt-16 border-t border-[var(--gray-300)] bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <img
            src="https://pruebasutsdev.com/wp-content/uploads/2026/01/uts.png"
            alt="UsaTuSubsidio"
            className="h-10 w-auto"
            loading="lazy"
          />
          <div className="text-sm text-[var(--gray-600)]">
            UsaTuSubsidio — Plataforma de proyectos con subsidio.
          </div>
        </div>
        <div className="text-sm text-[var(--gray-600)]">© {new Date().getFullYear()} UsaTuSubsidio. Todos los derechos reservados.</div>
      </div>
    </footer>
  );
}
