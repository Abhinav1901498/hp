// src/app/category/gadgets/page.tsx

import Link from 'next/link';
import Image from 'next/image';

export default function GadgetsPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO SECTION – Text Center/Upper + Full Screen Image */}
<div className="relative h-screen">
  <Image
    src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1600&q=90"
    alt="Latest Gadgets & Smartphones"
    fill
    className="object-cover brightness-75"
    priority
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

  {/* YE PART CHANGE KIYA HAI — Text ab center ya thoda upar! */}
  <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-20">
    <div className="container mx-auto max-w-7xl text-white">
      <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 drop-shadow-2xl leading-tight">
        <span className="text-green-400">GADGETS</span>
      </h1>
      <p className="text-2xl md:text-4xl font-light mb-8 drop-shadow-lg">
        Phones • Laptops • Earbuds • Smartwatch • Gaming Gear
      </p>
      <p className="text-lg md:text-2xl max-w-4xl drop-shadow-lg leading-relaxed">
        Reviews, comparisons, launch dates, and best deals on the latest gadgets in India.
      </p>
      <div className="mt-12">
        <span className="inline-block bg-green-600 text-white px-12 py-5 rounded-full text-2xl font-bold shadow-2xl animate-pulse">
          New Launches Coming Soon
        </span>
      </div>
    </div>
  </div>
</div>
      {/* Gadgets — Coming Soon: Text Left + Image Right */}
<div className="bg-gradient-to-b from-gray-50 to-gray-100 py-24 md:py-32">
  <div className="container mx-auto px-6 max-w-7xl">

    {/* Main Heading */}
    <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-center text-gray-800 mb-20 tracking-tight">
      Latest Gadgets
    </h2>

    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

      {/* LEFT SIDE — Text */}
      <div className="space-y-9 order-2 md:order-1">
        <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
          Gadgets section launching very soon...
        </p>

        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
          Get ready for <span className="text-green-600 font-bold">in-depth reviews</span>, 
          <span className="text-teal-600 font-bold"> unboxing videos</span>, 
          detailed comparisons, performance tests, camera shootouts, 
          battery benchmarks, and exclusive deals on smartphones, laptops, 
          earbuds, smartwatches, drones, and everything tech!
        </p>

        <p className="text-lg md:text-xl text-gray-500">
          From flagship killers to budget beasts — we test, we compare, we tell you what’s worth buying. 
          The ultimate gadget destination is almost here!
        </p>

        {/* Back to Home Button */}
        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center gap-4 bg-gradient-to-r from-green-600 to-teal-600 text-white px-12 py-6 rounded-full text-2xl md:text-3xl font-bold hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-teal-500/60"
          >
            Back to Home
          </Link>
        </div>
      </div>

      {/* RIGHT SIDE — Gadget Image */}
      <div className="order-1 md:order-2">
        <div className="relative rounded-3xl overflow-hidden shadow-3xl group">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-6TCkVlxmKzYSHMP3ZZCQtgT6qf4O4lhYhw&s"
            alt="Latest Smartphones, Laptops & Gadgets"
            className="w-full h-96 md:h-full object-cover group-hover:scale-105 transition-transform duration-1000"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          
          {/* COMING SOON Badge */}
          <div className="absolute bottom-8 left-8 text-white">
            <p className="text-5xl md:text-6xl lg:text-7xl font-black drop-shadow-2xl tracking-wider leading-none">
              COMING<br />
              <span className="text-green-400 drop-shadow-glow">SOON</span>
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
</div>
  );
}