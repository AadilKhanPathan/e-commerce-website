import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="w-full">
      <div className="relative w-full h-[45vh] min-h-[500px]">
        {/* Background image */}

        <Image
          src={"/hero.jpg"}
          alt="hero"
          fill
          priority
          className="object-cover"
        />

        {/* Gradient overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-34 left-8 md:left-16 z-10 max-w-xl">
          <p className="text-sm font-semibold tracking-wide text-gray-200 mb-2">
            Luxury Watch Brands
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Timeless Elegance on Your wrist
          </h1>

          <div className="flex gap-3">
            <Link href="#collection" className="flex items-center gap-2 bg-white text-black font-semibold px-6 py-2 rounded-2xl hover:bg-white/80 transition">
              Explore Collection
            </Link>
            {/* <button className="flex items-center gap-2 bg-gray-500/40 text-white font-semibold px-6 py-2 rounded hover:bg-gray-500/60 transition">
                    <PlusIcon className="w-5 h-5" />
                    Add to list
                  </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
