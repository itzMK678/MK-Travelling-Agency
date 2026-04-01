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
            Blog your experience 
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Share your travel stories and insights with our community. Discover new places and get inspired by the experiences of fellow travelers.
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
        <h2 className="text-[42px]  dynapuff text-gray-800 leading-snug">
         Blog 
        </h2>
        <p className="text-[22px]  dynapuff ">your experience</p>
      </div>
    </div>
    </div>
  );
};

export default Blog;