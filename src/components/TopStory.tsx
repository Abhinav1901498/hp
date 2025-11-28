// src/components/TopStory.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Article } from '@/types';

export default function TopStory({ article }: { article: Article }) {
  return (
    <Link href={`/news/${article.slug}`} className="block relative h-96 md:h-screen overflow-hidden group cursor-pointer">
      <Image
        src={article.image}
        alt={article.title}
        fill
        priority
        className="object-cover group-hover:scale-105 transition-transform duration-1000"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Text Content — YE PART CHANGE KIYA HAI */}
      <div className="
        absolute 
        inset-x-0 
        bottom-10            
        md:bottom-auto   
        md:top-1/2 
        md:-translate-y-1/2 
        p-6 md:p-8 lg:p-20 
        text-white 
        max-w-5xl 
        mx-auto 
        w-full
      ">
        <span className="inline-block bg-red-600 px-5 py-3 text-2xl md:text-3xl font-bold rounded mb-4 shadow-lg">
          Breaking
        </span>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight drop-shadow-2xl">
          {article.title}
        </h1>

        <p className="text-lg md:text-2xl lg:text-3xl mt-6 max-w-4xl drop-shadow-lg font-medium">
          {article.excerpt}
        </p>
      </div>
    </Link>
  );
}