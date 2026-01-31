import Link from "next/link";
import { Article } from "@/types";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/learn/${article.id}`}
      className="bg-white border border-[var(--gray-300)] rounded-[14px] shadow-sm overflow-hidden flex flex-col hover:-translate-y-[1px] transition-transform"
    >
      <div className="h-40 w-full overflow-hidden">
        <img src={article.coverImage} alt={article.title} className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <p className="text-xs font-semibold text-[var(--brand-blue)]">{article.category}</p>
        <h3 className="text-lg font-semibold text-[var(--gray-900)] leading-tight">{article.title}</h3>
        <p className="text-sm text-[var(--gray-700)] line-clamp-2">{article.excerpt}</p>
      </div>
    </Link>
  );
}
