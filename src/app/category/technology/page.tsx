// src/app/category/technology/page.tsx

import Link from 'next/link';
import Image from 'next/image';

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO SECTION – Futuristic Tech Vibe with Centered Text */}
      <div className="relative h-screen">
        <Image
          src="https://miro.medium.com/v2/resize:fit:1600/0*2KbdblCHGH4PWZBO.jpeg"
          alt="AI & Future Technology"
          fill
          className="object-cover brightness-70"
          priority
        />

        {/* Dark + Cyan Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />

        {/* Text – Perfectly Centered on All Devices */}
        <div className="absolute inset-0 flex items-center justify-center px-6 md:px-12 lg:px-20">
          <div className="container mx-auto max-w-7xl text-white text-center md:text-left">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 drop-shadow-2xl leading-tight tracking-tight">
              <span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]">
                TECHNOLOGY
              </span>
            </h1>
            <p className="text-2xl md:text-4xl font-light mb-8 drop-shadow-lg tracking-wider">
              AI • Gadgets • Mobile • Internet • Startups
            </p>
            <p className="text-lg md:text-2xl lg:text-3xl max-w-5xl drop-shadow-lg leading-relaxed mx-auto md:mx-0">
              Latest launches, reviews, AI updates, 5G, Jio, Apple, Samsung – 
              everything tech, <span className="text-cyan-300 font-bold">first on FakeHindustan!</span>
            </p>
            <div className="mt-12">
              <span className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-14 py-6 rounded-full text-2xl md:text-3xl font-bold shadow-2xl animate-pulse border-4 border-cyan-400/50 shadow-cyan-500/50">
                Tech News Coming Soon
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Coming Soon Section – Text Left + Image Right */}
      <div className="bg-gradient-to-b from-gray-50 via-white to-gray-100 py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-7xl">

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-center text-gray-800 mb-20 tracking-tight">
            Latest Tech News
          </h2>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* LEFT SIDE — Text */}
            <div className="space-y-9 order-2 md:order-1">
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                Technology section launching very soon...
              </p>

              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                Get ready for <span className="text-cyan-600 font-bold">AI breakthroughs</span>, 
                <span className="text-blue-600 font-bold"> smartphone launches</span>, 
                in-depth gadget reviews, 5G & 6G updates, software news, startups, quantum computing, 
                and exclusive tech scoops!
              </p>

              <p className="text-lg md:text-xl text-gray-500">
                From Silicon Valley to Bengaluru, we’re bringing tomorrow’s technology to you today. 
                <br />The future is loading…
              </p>

              <div className="mt-10">
                <Link
                  href="/"
                  className="inline-flex items-center gap-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-12 py-6 rounded-full text-2xl md:text-3xl font-bold hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/60"
                >
                  Back to Home
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE — Futuristic Image */}
            <div className="order-1 md:order-2">
              <div className="relative rounded-3xl overflow-hidden shadow-3xl group">
                <img
                  src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1024,h_570/https://theincmagazine.com/wp-content/uploads/2022/10/The-Role-of-Technology-in-Modern-Society-1024x570.jpg"
                  alt="AI & Futuristic Technology"
                  className="w-full h-96 md:h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-cyan-500/20 rounded-3xl" />
                
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-5xl md:text-6xl lg:text-7xl font-black drop-shadow-2xl tracking-wider leading-none">
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