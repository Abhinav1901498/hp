// src/components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-700 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-3xl md:text-4xl font-bold tracking-wider">
            <span className="font-bold text-yellow-300">Hindustan News</span>
          </Link>
         <nav className="hidden md:flex space-x-8 text-xl font-semibold">
  <Link href="/" className="hover:text-yellow-300 transition">Home</Link>
  <Link href="/category/national" className="hover:text-yellow-300 transition">National</Link>
  <Link href="/category/entertainment" className="hover:text-yellow-300 transition">Entertainment</Link>
  <Link href="/category/sports" className="hover:text-yellow-300 transition">Sports</Link>
  <Link href="/category/technology" className="hover:text-yellow-300 transition">Technology</Link>
  <Link href="/category/gadgets" className="hover:text-yellow-300 transition">Gadgets</Link>
</nav>
        </div>
      </div>
    </header>
  );
}