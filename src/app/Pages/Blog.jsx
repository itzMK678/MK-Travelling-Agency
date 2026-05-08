"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    // 🔹 LEFT CARD animation
    gsap.fromTo(
      leftRef.current,
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

    // 🔹 RIGHT CARD animation
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
      <div className="rounded-2xl flex flex-col md:flex-row gap-3 p-6 bg-[#D0E3E1]">

        {/* LEFT CARD */}
        <div
          ref={leftRef}
          className="bg-[#A7C7C5] rounded-2xl p-6 flex-1 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-xl font-semibold text-gray-600">
              Blog your experience
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Share your travel stories and insights with our community.
              Discover new places and get inspired by the experiences of
              fellow travelers.
            </p>
          </div>

          <button className="mt-4 bg-gray-600 text-white px-4 py-2 rounded-full w-fit hover:bg-gray-800 transition">
            Explore Now
          </button>
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
          className="bg-[#D0E3E1] rounded-2xl p-6 flex-1 flex flex-col justify-center"
        >
          <h2 className="text-[42px] dynapuff text-gray-600 leading-snug">
            Blog
          </h2>
          <p className="text-[22px] dynapuff text-gray-600">
            your experience
          </p>
        </div>

      </div>
    </div>
  );
};

export default Blog;