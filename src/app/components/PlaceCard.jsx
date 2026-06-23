import React from "react";
import Image from "next/image";
import Link from "next/link";

const PlaceCard = ({ place }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-[300px] hover:shadow-xl transition-all duration-300">
      
      {/* Image Section */}
      <div className="relative">
        <Image
          src={place.image}
          alt={place.name}
          width={500}
          height={300}
          className="w-full h-[180px] object-cover"
        />
        <span className="absolute top-3 left-3 bg-white/80 text-sm px-3 py-1 rounded-full font-semibold">
          {place.price}Rs
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold">{place.name}</h3>
        <p className="text-gray-500 text-sm mt-1">
          {place.description}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex justify-between gap-2 px-4 pb-4">
        <Link href={`/DetailPage/${place.id}`} className="bg-black text-white px-4 py-2 rounded-full text-sm w-full hover:bg-gray-800 transition">
          View Details
        </Link>
        <Link href={`/DetailPage/${place.id}/negotiate`} className="bg-gray-200 px-4 py-3 rounded-full text-sm w-full hover:bg-gray-300 transition">
          Negotiate
        </Link>
      </div>
    </div>
  );
};

export default PlaceCard;