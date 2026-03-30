"use client";
import React from "react";

const data = ["Experience", "Trained", "Trusted", "Affordable"];

// Colors + hover colors
const colors = [
  "bg-[#BDA6CE] hover:bg-[#a58db8]",
  "bg-[#9B8EC7] hover:bg-[#7f73b3]",
  "bg-[#F891BB] hover:bg-[#e06fa2]",
  "bg-[#C9BEFF] hover:bg-[#a99ee6]",
];

const Box = () => {
  return (
    <div className="w-full py-10">
      {/* Heading */}
      <h1 className="font-extrabold text-[42px] text-center capitalize">
        Why Us
      </h1>

      {/* Boxes */}
      <div className="flex flex-wrap justify-center gap-6 p-8">
        {data.map((item, index) => (
          <div
            key={index}
            className={`
              ${colors[index % colors.length]}
              px-8 py-5 rounded-xl
              text-black font-semibold text-[18px] uppercase
              transition-all duration-300 ease-in-out
              hover:scale-105 hover:shadow-lg
              cursor-pointer
            `}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Box;