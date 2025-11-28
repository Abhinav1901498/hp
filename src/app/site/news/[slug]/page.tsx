// src/app/news/[slug]/page.tsx   ← बिल्कुल यही जगह!

import { mockArticles } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = mockArticles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-gray-50">
      <div className="relative h-96 md:h-screen">
        <Image
          src={article.image || "/placeholder.jpg"}
          alt={article.title}
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 -mt-32 relative z-10 pb-20">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-10">
          <div className="text-sm text-gray-500 mb-4">
            {new Date(article.publishedAt).toLocaleDateString('en-IN', {
              day: 'numeric', month: 'long', year: 'numeric'
            })} • {article.author} • {article.views.toLocaleString()} views
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-8">
            {article.title}
          </h1>

          <div 
            className="prose prose-lg max-w-none text-gray-700 leading-8"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <div className="text-center mt-16">
            <Link href="/" className="bg-red-600 text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-red-700 transition">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}