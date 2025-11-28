// src/app/(site)/page.tsx

import Link from 'next/link';
import { mockArticles } from '@/lib/data';
import TopStory from '@/components/TopStory';

export default function HomePage() {
  const topStory = mockArticles[0];

  const national = mockArticles.filter(
    a => a.category === "National" && a.id !== topStory.id && a.slug
  );

  const technology = mockArticles.filter(
    a => ["Technology", "AI", "Gadgets"].includes(a.category) && a.id !== topStory.id && a.slug
  );

  return (
    <>
      <TopStory article={topStory} />

      {/* FULL WIDTH BACKGROUND */}
      <div className="bg-gray-50 py-16 -mt-20 relative z-10">
        <div className="px-4 md:px-8 lg:px-12 xl:px-20">

          {/* National - Full Width */}
          {national.length > 0 && (
            <FullWidthSection
              title="National"
              color="text-orange-600"
              gradient="from-orange-500 to-red-600"
              articles={national}
            />
          )}

          {/* Technology & Gadgets - Full Width */}
          {technology.length > 0 && (
            <FullWidthSection
              title="Technology & Gadgets"
              color="text-cyan-600"
              gradient="from-cyan-500 to-blue-600"
              articles={technology}
            />
          )}

        </div>
      </div>

      {/* ABOUT SECTION – Left Text + Right Image (Premium Dark Mode) */}
      <section className="bg-gradient-gray-50 py-32">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT – About Text */}
            <div className="text-white space-y-10">
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-black leading-tight">
                Welcome to <span className="text-orange-500">Hindustan News</span>
              </h2>

              <p className="text-xl md:text-2xl text-black leading-relaxed">
                India’s fastest-growing digital news platform delivering <span className="text-cyan-400 font-bold">real-time updates</span> across National, Sports, Entertainment, Technology, Gadgets and more.
              </p>

              <p className="text-lg md:text-xl text-black leading-relaxed">
                From Parliament debates to IPL sixes, Bollywood blockbusters to AI revolutions — 
                we bring you verified news, in-depth analysis, and stories that matter, <span className="text-orange-400 font-bold">before anyone else</span>.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-10">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
                  <p className="text-4xl font-black text-cyan-400">10M+</p>
                  <p className="text-black text-xl">Monthly Readers</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
                  <p className="text-4xl font-black text-orange-400">24/7</p>
                  <p className="text-black text-xl">Live Coverage</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
                  <p className="text-4xl font-black text-yellow-400">100%</p>
                  <p className="text-black text-xl">Independent</p>
                </div>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-4 bg-gradient-to-r from-orange-600 to-red-600 text-white px-10 py-5 rounded-full text-xl font-bold hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-orange-500/50"
              >
                Know More About Us
              </Link>
            </div>

            {/* RIGHT – Stunning Hero Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-3xl border-4 border-cyan-500/30">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbWQ_Z-J8HqWLw1c4BVemHCeoZHIys8BYQnQ&s"
                  alt="FakeHindustan Newsroom & Digital India"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-5 rounded-2xl shadow-3xl font-black text-2xl md:text-3xl border-4 border-cyan-400">
                #1 Digital News
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

// FULL WIDTH SECTION COMPONENT
function FullWidthSection({ title, color, gradient, articles }: {
  title: string;
  color: string;
  gradient: string;
  articles: any[];
}) {
  return (
    <section className="mb-32">
      <div className="flex items-center gap-6 mb-14 max-w-full">
        <div className={`h-2.5 w-32 bg-gradient-to-r ${gradient} rounded-full`} />
        <h2 className={`text-6xl md:text-7xl font-black ${color} tracking-tighter`}>
          {title}
        </h2>
        <div className={`h-2.5 flex-1 bg-gradient-to-r ${gradient} opacity-25 rounded-full`} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10 lg:gap-12 -mx-4 md:-mx-8 lg:-mx-12 xl:-mx-20 px-4 md:px-8 lg:px-12 xl:px-20">
        {articles.map((article: any, index: number) => (
          <div
            key={article.id}
            className="animate-slideUp"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <FullWidthCard article={article} />
          </div>
        ))}
      </div>
    </section>
  );
}

// FULL WIDTH CARD
function FullWidthCard({ article }: { article: any }) {
  return (
    <a href={`/news/${article.slug}`} className="block group h-full">
      <article className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-100 flex flex-col h-full">
        <div className="relative overflow-hidden">
          {article.image ? (
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-800"
            />
          ) : (
            <div className="w-full h-72 bg-gradient-to-br from-gray-200 to-gray-400" />
          )}
          <div className="absolute top-6 left-6 bg-black/80 text-white px-5 py-2.5 rounded-full text-sm font-bold backdrop-blur-md">
            {article.category || "Breaking"}
          </div>
        </div>

        <div className="p-8 flex flex-col flex-1">
          <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight line-clamp-3 mb-5 group-hover:text-orange-600 transition-colors">
            {article.title}
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed line-clamp-4 flex-1">
            {article.excerpt || "Tap to read full story..."}
          </p>
          <div className="mt-6 text-orange-600 font-bold text-lg flex items-center gap-3">
            Read Full Story
            <span className="group-hover:translate-x-4 transition-transform text-3xl">→</span>
          </div>
        </div>
      </article>
    </a>
  );
}