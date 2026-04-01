"use client";
import React, { useState } from "react";

const data = ["Experience", "Trained", "Trusted", "Affordable"];

const clicked = [
  "5+ years of experience",
  "Trained by experts and well known in the area",
  "Trusted by thousands of clients",
  "Most affordable prices",
];

const colors = [
  "bg-[#BDA6CE]",
  "bg-[#9B8EC7]",
  "bg-[#F891BB]",
  "bg-[#C9BEFF]",
];

const Box = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <div className="w-full py-10">
      <h1 className="font-extrabold text-[42px] text-center capitalize">
        Why Us
      </h1>

      <div className="flex flex-wrap justify-center gap-6 p-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-[220px] h-[120px] perspective"
            onClick={() => handleFlip(index)}
          >
            <div
              className={`
                relative w-full h-full duration-500 transform-style preserve-3d
                ${flippedIndex === index ? "rotate-y-180" : ""}
              `}
            >
              {/* Front */}
              <div
                className={`
                  absolute w-full h-full rounded-xl flex items-center justify-center
                  text-black font-semibold text-[18px] uppercase
                  ${colors[index % colors.length]}
                  backface-hidden
                `}
              >
                {item}
              </div>

              {/* Back */}
              <div
                className={`
                  absolute w-full h-full rounded-xl flex items-center justify-center
                  text-black text-center px-3
                  ${colors[index % colors.length]}
                  rotate-y-180 backface-hidden
                `}
              >
                {clicked[index]}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Box;