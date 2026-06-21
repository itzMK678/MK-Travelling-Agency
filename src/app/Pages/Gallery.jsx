
"use client";

import Image from "next/image";

const images = [
  { src: "/Nature1.jpg", height: "h-[250px]" },
  { src: "/Nature2.jpg", height: "h-[320px]" },
  { src: "/Nature3.png", height: "h-[400px]" },
  { src: "/Nature1.jpg", height: "h-[250px]" },
  { src: "/Nature2.jpg", height: "h-[320px]" },
  { src: "/Nature3.png", height: "h-[400px]" },
  { src: "/Nature1.jpg", height: "h-[300px]" },
  { src: "/Nature2.jpg", height: "h-[320px]" },
];

export default function GallerySection() {
  return (
    <section className="w-full py-16 px-4 md:px-12 bg-gradient-to-b from-white to-[#f8fafc]">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-sm tracking-widest text-blue-500 uppercase">
          The Gallery
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Snapshots of Immensity
        </h2>
      </div>

      {/* Masonry Layout */}
      <div className="columns-2 md:columns-4 gap-5 space-y-5">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-2xl break-inside-avoid cursor-pointer"
          >
            {/* Image */}
            <Image
              src={img.src}
              alt={`gallery-${index}`}
              width={500}
              height={500}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}

          </div>
        ))}
      </div>

    </section>
  );
}