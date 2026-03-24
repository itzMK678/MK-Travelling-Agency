import React from "react";
import Image from "next/image";


const Blog = () => {
  return (
    <div>
    <div className=" m-5 rounded-2xl flex flex-col md:flex-row gap-3 p-6 bg-gradient-to-bl from-white  via-[#f2fffe] to-[white]">

      {/* LEFT CARD */}
     <div className="bg-gradient-to-b from-[#cfe0df]  to-[#d3efed] rounded-2xl p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            Customize your Trip
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Customzize your trip according to your preferences and needs. Choose from a wide range of destinations, activities, and accommodations to create a personalized travel experience that suits your style and budget.
          </p>
        </div>

        <button className="mt-4 bg-black text-white px-4 py-2 rounded-full w-fit hover:bg-gray-800 transition">
          Explore Now
        </button>
      </div>

      {/* CENTER IMAGE CARD */}
      <div className="flex-1 rounded-2xl overflow-hidden relative">
        <Image
          src="/Nature1.jpg"
    alt="Location Image"
    fill
    className="object-cover"
        />
      </div>

      {/* RIGHT CARD */}
      
 <div className="bg-[#e9eeee] rounded-2xl p-6 flex-1 flex items-center">
        <h2 className="text-2xl font-serif text-gray-800 leading-snug">
         Customize Trip
        </h2>
      </div>
    </div>
    </div>
  );
};

export default Blog;