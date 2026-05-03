"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const HeroSection = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.from(
      textRef.current,
      {
        x: -200,
        
         duration: 1.5,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section className="h-screen w-full bg-black flex items-end justify-center relative">
      
      {/* Background Image */}
      <Image
        src="/HeroSection.png"
        alt="Hero Section"
        fill
        className="object-cover"
        priority
      />

      {/* Animated Text */}
      <div
        ref={textRef}
        className="absolute bottom-10 left-5 z-10 text-white"
      >
        <div className="flex items-end gap-3">
          <p className="text-[100px] md:text-[150px] font-extrabold leading-none">
            MK
          </p>
          <p className="text-[40px] md:text-[60px] font-bold">
            Tours
          </p>
        </div>

        <p className="text-sm md:text-lg mt-2">
          Explore the world with us. Unforgettable Journeys, Personalized Experiences, and Lot of Fun
        </p>
      </div>
    </section>
  );
};

export default HeroSection;