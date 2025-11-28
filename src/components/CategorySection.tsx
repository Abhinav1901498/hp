// src/components/CategorySection.tsx
import NewsCard from './NewsCard';
import { Article } from '@/types';

interface Props {
  title: string;
  articles: Article[];
  vertical?: boolean;
}

export default function CategorySection({ title, articles, vertical = false }: Props) {
  if (articles.length === 0) return null;

  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold text-red-700 mb-6 border-b-4 border-red-700 inline-block pb-2">
        {title}
      </h2>
      <div className={`grid gap-6 ${vertical ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'}`}>
        {articles.slice(0, vertical ? 6 : 8).map(article => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}