// src/app/category/entertainment/page.tsx

import Link from 'next/link';
import Image from 'next/image';

export default function EntertainmentPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO SECTION – Text Center + Filmy Style */}
      <div className="relative h-screen">
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=90"
          alt="Bollywood Red Carpet"
          fill
          className="object-cover brightness-75"
          priority
        />
        
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        {/* Text – Center mein (mobile + desktop) */}
        <div className="absolute inset-0 flex items-center justify-center px-6 md:px-12 lg:px-20">
          <div className="container mx-auto max-w-7xl text-white text-center md:text-left">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 drop-shadow-2xl leading-tight">
              <span className="text-yellow-400">ENTERTAINMENT</span>
            </h1>
            <p className="text-2xl md:text-4xl font-light mb-8 drop-shadow-lg tracking-wider">
              Bollywood • Hollywood • Gossip • Celebs • Movies • Music
            </p>
            <p className="text-lg md:text-2xl lg:text-3xl max-w-4xl drop-shadow-lg leading-relaxed mx-auto md:mx-0">
              Get the hottest celebrity news, movie reviews, red carpet moments, 
              and exclusive gossip from the world of showbiz.
            </p>
            <div className="mt-12">
              <span className="inline-block bg-yellow-400 text-black px-12 py-6 rounded-full text-2xl md:text-3xl font-bold shadow-2xl animate-pulse">
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Stories Section – Text Left + Image Right */}
      <div className="container mx-auto px-6 py-32">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-center text-gray-800 mb-20">
          Latest Stories
        </h2>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          
          {/* LEFT SIDE – Text */}
          <div className="text-left space-y-8 order-2 md:order-1">
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 leading-tight">
              Entertainment section launching very soon...
            </p>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Stay tuned for the hottest <span className="text-pink-600 font-bold">Bollywood gossip</span>, 
              in-depth <span className="text-yellow-500 font-bold">movie reviews</span>, 
              exclusive celebrity interviews, box-office updates, red-carpet moments, 
              and all the drama from Hollywood and beyond!
            </p>
            
            <p className="text-lg md:text-xl text-gray-500">
              Your daily dose of glamour, fun, and entertainment is just a few days away. 
              Get ready—we’re bringing the spotlight to you!
            </p>

            {/* Back to Home Button */}
            <div className="mt-10">
              <Link
                href="/"
                className="inline-flex items-center gap-4 bg-gradient-to-r from-pink-600 to-yellow-500 text-white px-12 py-6 rounded-full text-2xl md:text-3xl font-bold hover:scale-110 transition-all duration-300 shadow-2xl"
              >
                Back to Home
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE – Image */}
          <div className="order-1 md:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://5.imimg.com/data5/SELLER/Default/2020/10/OX/FX/UB/98833934/entertainment-programs.jpg"
                alt="Bollywood Stars & Red Carpet"
                className="w-full h-96 md:h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-4xl md:text-5xl font-black drop-shadow-2xl">
                  Coming Soon
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}