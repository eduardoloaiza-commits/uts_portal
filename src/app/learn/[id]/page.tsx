import { notFound } from "next/navigation";
import { articles } from "@/data/articles";

type Props = { params: { id: string } };

export default function ArticleDetail({ params }: Props) {
  const article = articles.find((a) => a.id === params.id);
  if (!article) return notFound();

  return (
    <div className="space-y-4">
      <div className="h-56 w-full rounded-[16px] overflow-hidden border border-[var(--gray-300)]">
        <img src={article.coverImage} alt={article.title} className="w-full h-full object-cover" />
      </div>
      <div className="space-y-2">
        <p className="text-sm font-semibold text-[var(--brand-blue)]">{article.category}</p>
        <h1 className="text-3xl font-bold text-[var(--gray-900)]">{article.title}</h1>
      </div>
      <p className="text-[var(--gray-700)] leading-relaxed">{article.content}</p>
    </div>
  );
}
