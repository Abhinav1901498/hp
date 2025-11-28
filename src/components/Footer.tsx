// src/components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-16 border-t border-gray-800">
      <div className="container mx-auto px-6">

        {/* Logo + Description */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black text-white mb-4">
            <span className="text-red-600">Hindustan News</span>
          </h2>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
            This is a demo/educational project. All news stories are fictional and for learning purposes only.
          </p>
          <p className="mt-4 text-xl text-gray-500">
            Made with ❤️ using Next.js 14 + Tailwind CSS
          </p>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 text-2xl">

          <div>
            <h3 className="font-bold text-white mb-4">Trending</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-red-500 transition">Viral News</Link></li>
              <li><Link href="#" className="hover:text-red-500 transition">Bollywood Gossip</Link></li>
              <li><Link href="#" className="hover:text-red-500 transition">Cricket Updates</Link></li>
              <li><Link href="#" className="hover:text-red-500 transition">Technology</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">States</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-red-500 transition">Uttar Pradesh</Link></li>
              <li><Link href="#" className="hover:text-red-500 transition">Bihar</Link></li>
              <li><Link href="#" className="hover:text-red-500 transition">Rajasthan</Link></li>
              <li><Link href="#" className="hover:text-red-500 transition">Maharashtra</Link></li>
              <li><Link href="#" className="hover:text-red-500 transition">Delhi</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Entertainment</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-red-500 transition">Bollywood</Link></li>
              <li><Link href="#" className="hover:text-red-500 transition">Hollywood</Link></li>
              <li><Link href="#" className="hover:text-red-500 transition">OTT Releases</Link></li>
              <li><Link href="#" className="hover:text-red-500 transition">Celeb Interviews</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Lifestyle</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-red-500 transition">Health</Link></li>
              <li><Link href="#" className="hover:text-red-500 transition">Fashion</Link></li>
              <li><Link href="#" className="hover:text-red-500 transition">Travel</Link></li>
              <li><Link href="#" className="hover:text-red-500 transition">Food</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Sports</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-red-500 transition">Cricket</Link></li>
              <li><Link href="#" className="hover:text-red-500 transition">IPL 2025</Link></li>
              <li><Link href="#" className="hover:text-red-500 transition">Football</Link></li>
              <li><Link href="#" className="hover:text-red-500 transition">Olympics</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">More</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-red-500 transition">Astrology</Link></li>
              <li><Link href="#" className="hover:text-red-500 transition">Religion</Link></li>
              <li><Link href="#" className="hover:text-red-500 transition">Videos</Link></li>
              <li><Link href="#" className="hover:text-red-500 transition">Photo Gallery</Link></li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-2xl">
            © 2025 Hindustan News. All rights reserved. | Privacy Policy | Terms of Use | Contact Us
          </p>
        </div>
      </div>
    </footer>
  );
}