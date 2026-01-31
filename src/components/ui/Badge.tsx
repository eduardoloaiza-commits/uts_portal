import clsx from "clsx";

export function Badge({ children, muted = false }: { children: React.ReactNode; muted?: boolean }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-sm font-semibold",
        muted
          ? "bg-[var(--gray-100)] text-[var(--gray-700)] border border-[var(--gray-300)]"
          : "bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] border border-[var(--brand-blue)]/20"
      )}
    >
      {children}
    </span>
  );
}
