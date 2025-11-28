// src/app/category/sports/page.tsx

import Link from 'next/link';
import Image from 'next/image';

export default function SportsPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO SECTION – Full Stadium Vibe with Centered Text */}
      <div className="relative h-screen">
        <Image
          src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1600&q=90"
          alt="Cricket Stadium India"
          fill
          className="object-cover brightness-75"
          priority
        />

        {/* Dark gradient for text clarity */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        {/* Text – Perfectly centered on all devices */}
        <div className="absolute inset-0 flex items-center justify-center px-6 md:px-12 lg:px-20">
          <div className="container mx-auto max-w-7xl text-white text-center md:text-left">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 drop-shadow-2xl leading-tight">
              <span className="text-blue-500">SPORTS</span>
            </h1>
            <p className="text-2xl md:text-4xl font-light mb-8 drop-shadow-lg tracking-wider">
              Cricket • Football • Olympics • IPL • World Cup
            </p>
            <p className="text-lg md:text-2xl lg:text-3xl max-w-5xl drop-shadow-lg leading-relaxed mx-auto md:mx-0">
              Live scores, match highlights, player interviews, and exclusive coverage from every sport across India.
            </p>
            <div className="mt-12">
              <span className="inline-block bg-blue-600 text-white px-14 py-6 rounded-full text-2xl md:text-3xl font-bold shadow-2xl animate-pulse border-4 border-blue-400">
                Live Updates Coming Soon
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Coming Soon Section – Text Left + Image Right */}
      <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-7xl">

          {/* Main Heading */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-center text-gray-800 mb-20">
            Latest Sports News
          </h2>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* LEFT SIDE — Text */}
            <div className="space-y-8 order-2 md:order-1">
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                Sports section launching very soon...
              </p>

              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                Get ready for <span className="text-blue-600 font-bold">live scores</span>, 
                <span className="text-cyan-600 font-bold"> IPL & T20 updates</span>, 
                cricket highlights, football transfers, player stats, match analysis, 
                and exclusive interviews with your favorite athletes!
              </p>

              <p className="text-lg md:text-xl text-gray-500">
                Whether it's cricket, football, badminton, kabaddi, or Olympics — 
                we’re bringing the stadium to your screen. The game is about to begin!
              </p>

              {/* Back to Home Button */}
              <div className="mt-10">
                <Link
                  href="/"
                  className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-12 py-6 rounded-full text-2xl md:text-3xl font-bold hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50"
                >
                  Back to Home
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE — Epic Sports Image */}
            <div className="order-1 md:order-2">
              <div className="relative rounded-3xl overflow-hidden shadow-3xl group">
                <img
                  src="https://static.toiimg.com/thumb/imgsize-59906,msid-125639050,width-375,resizemode-4/125639050.jpg"
                  alt="Indian Cricket Team Victory Celebration"
                  className="w-full h-96 md:h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-3xl" />
                
                {/* COMING SOON Badge */}
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-5xl md:text-6xl lg:text-7xl font-black drop-shadow-2xl tracking-wider leading-tight">
                    COMING<br />
                    <span className="text-cyan-400">SOON</span>
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