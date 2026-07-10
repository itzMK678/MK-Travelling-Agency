import React from "react";
import Image from "next/image";
import { places } from "@/data/packages";
import BackButton from "@/app/components/BackButton";
import Link from "next/link";
const Page = async ({ params }) => {
  const { slug } = await params;
  const message = encodeURIComponent(
  
);
  const id = Number(slug);
  const pkg = places.find((place) => place.id === id);

  console.log("pkg =", pkg);

  if (!pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl">
        Package Not Found
      </div>
    );
  }

  const points = [
    `Location: ${pkg.location}`,
    `Days: ${pkg.days}`,
    `Price: Rs. ${pkg.price}`,
    `Rating: ${pkg.rating}`,
  ];

  return (
   <div className="min-h-screen bg-[#eef3ee] flex items-center justify-center p-6 md:p-10">
   <BackButton />
  <div className="w-full max-w-6xl bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

    {/* LEFT SIDE */}
    <div className="flex flex-col">
      {/* MAP */}
      <div className="relative h-[400px]">
        <iframe
          src={pkg.map}  alt="Map is loading"
          className="w-full h-full"
          loading="lazy"
        />

        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium shadow">
          📍 Location
        </div>
      </div>

      {/* INFO GRID */}
      <div className="p-4 m-3 w-full rounded-bl-lg  bg-[#e7efe9]">
        <div className="grid grid-cols-2 gap-4 text-sm">

          <div className="bg-white p-3 rounded-xl">
            <p className="text-gray-500">Location</p>
            <p className="font-semibold">{pkg.location}</p>
          </div>

          <div className="bg-white p-3 rounded-xl">
            <p className="text-gray-500">Duration</p>
            <p className="font-semibold">{pkg.days} Days</p>
          </div>

          <div className="bg-white p-3 rounded-xl">
            <p className="text-gray-500">Price</p>
            <p className="font-semibold">Rs. {pkg.price}</p>
          </div>

          <div className="bg-white p-3 rounded-xl">
            <p className="text-gray-500">Rating</p>
            <p className="font-semibold">⭐ {pkg.rating}</p>
          </div>

        </div>
      </div>

    </div>

    {/* RIGHT SIDE */}
    <div className="p-6 md:p-8 flex flex-col gap-6">

      <div className="text-xs uppercase tracking-widest text-green-700 font-semibold">
        Nature Experience
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
        {pkg.name}
      </h1>

      <div className="relative h-[220px] w-full rounded-2xl overflow-hidden shadow-md">
        <Image
          src={pkg.image}
          alt={pkg.name}
          fill
          className="object-cover"
        />

        <div className="absolute bottom-0 w-full bg-black/40 text-white text-sm p-3 italic">
          {pkg.detailDescription}
        </div>
      </div>

      <div className=" gap-2 flex flex-wrap text-xs">
      
    {pkg.placepoints.map((point, index) => (
      <div
        key={index}
        className="flex items-center gap-3 bg-[#f3f7f3] p-3 rounded-xl"
      >
        <span className="w-6 h-6 flex items-center justify-center rounded-full bg-green-600 text-white text-xs">
          {index + 1}
        </span>

        <span className="text-gray-700">{point}</span>
      </div>
    ))}
 
 
      </div>
      
<Link
  href={`https://wa.me/923326325661?text=Hello, I want to book the ${pkg.name} package.`}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-auto block bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl font-semibold tracking-wide transition text-center"
>
  BOOK THIS EXPERIENCE
</Link>
    </div>

  </div>
</div>
  );
};

export default Page;