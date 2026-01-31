import { articles } from "@/data/articles";
import { ArticleCard } from "@/components/ArticleCard";

export default function LearnPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-[var(--gray-900)]">Aprende del Subsidio</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {articles.map((a) => (
          <ArticleCard key={a.id} article={a} />
        ))}
      </div>
    </div>
  );
}
