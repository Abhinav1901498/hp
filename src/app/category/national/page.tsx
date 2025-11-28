// src/app/category/national/page.tsx

import Link from 'next/link';
import Image from 'next/image';

export default function NationalPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO SECTION – Text Center + National News Style */}
      <div className="relative h-screen">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/a/a8/India_flag_emblem.jpg"
          alt="Indian Flag & Parliament"
          fill
          className="object-cover brightness-75"
          priority
        />

        {/* Strong dark gradient for better readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

        {/* Text – Perfectly centered (mobile + desktop) */}
        <div className="absolute inset-0 flex items-center justify-center px-6 md:px-12 lg:px-20">
          <div className="container mx-auto max-w-7xl text-white text-center md:text-left">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 drop-shadow-2xl leading-tight">
              <span className="text-orange-500">NATIONAL</span>
            </h1>
            <p className="text-2xl md:text-4xl font-light mb-8 drop-shadow-lg tracking-wider">
              Breaking News • Politics • Government • States • Development
            </p>
            <p className="text-lg md:text-2xl lg:text-3xl max-w-5xl drop-shadow-lg leading-relaxed mx-auto md:mx-0">
              Latest updates from Parliament, PMO, states, elections, policies and everything happening across India – first and fastest!
            </p>
            <div className="mt-12">
              <span className="inline-block bg-orange-600 text-white px-14 py-6 rounded-full text-2xl md:text-3xl font-bold shadow-2xl animate-pulse border-4 border-orange-400">
                Top Headlines Soon
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Coming Soon Section – Text Left + Image Right */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-7xl">

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* LEFT SIDE — Text */}
            <div className="text-left order-2 md:order-1 space-y-8">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-800 mb-8 leading-tight">
                Latest National News
              </h2>

              <p className="text-xl md:text-xl lg:text-2xl leading-relaxed text-gray-600">
                Our team is working around the clock to bring you the{" "}
                <span className="text-orange-600 font-bold">
                  fastest, most accurate and fully verified
                </span>{" "}
                national news from every corner of India.
                <br /><br />
                From Parliament debates to election updates, policy decisions to ground reports — everything will be here,{" "}
                <span className="text-red-600 font-bold">first and in full detail</span>.
                <br /><br />
                <span className="text-orange-600 font-black text-3xl md:text-4xl">
                  National News section launching very soon — stay tuned!
                </span>
              </p>

              <Link
                href="/"
                className="inline-flex items-center gap-4 bg-gradient-to-r from-orange-600 to-red-600 text-white px-10 py-6 rounded-full text-2xl font-bold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-orange-500/50"
              >
                Back to Home
              </Link>
            </div>

            {/* RIGHT SIDE — Image */}
            <div className="order-1 md:order-2">
              <div className="relative rounded-3xl overflow-hidden shadow-3xl">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk4LKl8rXl-YY_-YOp7zjr-WGzfP-LGctfbw&s"
                  alt="Indian Parliament & National News"
                  className="w-full h-96 md:h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-3xl" />
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-5xl md:text-6xl font-black drop-shadow-2xl tracking-wider">
                    COMING<br />SOON
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