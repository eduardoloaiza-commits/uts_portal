type Banner = {
  title: string;
  description: string;
  href: string;
};

export function BannerCards({ banners }: { banners: Banner[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {banners.map((banner) => (
        <a
          key={banner.title}
          href={banner.href}
          className="block bg-white rounded-[16px] border border-[var(--gray-300)] p-5 shadow-sm hover:-translate-y-[1px] transition-transform"
        >
          <p className="text-sm font-semibold text-[var(--brand-blue)] mb-1">Aprende</p>
          <h3 className="text-lg font-semibold text-[var(--gray-900)]">{banner.title}</h3>
          <p className="text-sm text-[var(--gray-700)] mt-2">{banner.description}</p>
        </a>
      ))}
    </div>
  );
}
