// src/components/NewsCard.tsx
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  article: {
    slug: string;
    title: string;
    excerpt?: string;
    image?: string;
    category?: string;
  };
};

export default function NewsCard({ article }: Props) {
  return (
    <Link href={`/news/${article.slug}`} className="block h-full">
      <article className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 h-full flex flex-col">
        {/* Image */}
        <div className="relative overflow-hidden">
          {article.image ? (
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
            />
          ) : (
            <div className="w-full h-56 bg-gradient-to-b from-gray-200 to-gray-300" />
          )}
          {/* Category Tag */}
          <div className="absolute top-4 left-4 bg-black/70 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm">
            {article.category || "News"}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-bold text-gray-900 line-clamp-2 mb-3 leading-tight">
            {article.title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed flex-1">
            {article.excerpt || "Click to read full story..."}
          </p>

          {/* Read more arrow */}
          <div className="mt-4 text-cyan-600 font-semibold text-sm flex items-center gap-2 group">
            Read More
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </div>
        </div>
      </article>
    </Link>
  );
}