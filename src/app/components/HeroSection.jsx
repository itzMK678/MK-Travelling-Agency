"use client";
import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="h-screen  bg-black flex items-end justify-center relative">
      
      {/* Background Image */}
      <Image
        src="/HeroSection.png"
        alt="Hero Section"
        fill
        className="object-cover"
        priority
      />

      
     <div className="relative z-10 text-white mb-10">
  
  <div className="flex items-end gap-3">
    <p className="text-[120px] md:text-[150px] font-extrabold leading-none">
      MK
    </p>
    <p className="text-[40px] md:text-[60px] font-bold ">
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