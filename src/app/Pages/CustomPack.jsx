"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CustomPack = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    // 🔹 LEFT card moves from left → center
    gsap.fromTo(
      leftRef.current,
      { x: -anima150, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          end: "top 40%",
          scrub: 1, // 🔥 smooth scroll sync
        },
      }
    );

    // 🔹 RIGHT card moves from right → center
    gsap.fromTo(
      rightRef.current,
      { x: 150, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          end: "top 40%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div ref={sectionRef} className="m-5">
      <div className="rounded-2xl overflow-hidden flex flex-col md:flex-row gap-3 p-6 bg-[#e9eeee]">

        {/* LEFT CARD */}
        <div
          ref={leftRef}
          className="bg-[#e9eeee] rounded-2xl p-6 flex-1 flex flex-col items-center"
        >
          <h3 className="text-[42px] dynapuff font-semibold text-gray-800">
            you
          </h3>
          <h5 className="text-[25px] dynapuff font-semibold text-gray-800">
            can
          </h5>
          <h2 className="text-[42px] dynapuff text-gray-800 leading-snug">
            Customize Trip
          </h2>
        </div>

        {/* CENTER IMAGE */}
        <div className="flex-1 rounded-2xl overflow-hidden relative">
          <Image
            src="/Nature1.jpg"
            alt="Location Image"
            fill
            className="object-cover"
          />
        </div>

        {/* RIGHT CARD */}
        <div
          ref={rightRef}
          className="bg-gradient-to-b from-[#cfe0df] to-[#d3efed] rounded-2xl p-6 flex-1 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              Customize your Trip
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Customize your trip according to your preferences and needs.
              Choose from a wide range of destinations, activities, and
              accommodations to create a personalized travel experience.
            </p>
          </div>

          <button className="mt-4 bg-black text-white px-4 py-2 rounded-full w-fit hover:bg-gray-800 transition">
            Explore Now
          </button>
        </div>

      </div>
    </div>
  );
};

export default CustomPack;