"use client";
import React from "react";
import Image from "next/image";

const HeroSection = () => {
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

      
    <div className="absolute bottom-10 left-5 z-10 text-white">
  
  <div className="flex items-end gap-3">
    <p className="text-[150px] md:text-[150px] font-extrabold leading-none">
      MK
    </p>
    <p className="text-[150px] md:text-[60px] font-bold">
      Tours
    </p>
  </div>

  <p className="text-sm md:text-lg mt-2">
    Discover amazing places with us
  </p>

</div>

    </section>
  );
};

export default HeroSection;