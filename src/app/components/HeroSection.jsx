"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import Header from "../components/Header";
import MobHeader from "../components/MobHeader";

const HeroSection = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    // 🔥 reset state first (IMPORTANT FIX)
    gsap.set(titleRef.current, { opacity: 1, x: 0 });
    gsap.set(subtitleRef.current, { opacity: 1, y: 0 });

    const tl = gsap.timeline();

    tl.from(titleRef.current, {
      x: -200,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    }).from(
      subtitleRef.current,
      {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.5"
    );
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/HeroSection.png"
        alt="MK Tours Hero Section"
        fill
        priority
        className="object-cover"
      />

      {/* Header */}
      <div className="hidden sm:block fixed top-0 left-0 w-full px-6 py-4 z-50">
        <Header />
      </div>

      <div className="block sm:hidden fixed top-0 left-0 w-full px-4 py-4 z-50">
        <MobHeader />
      </div>

      {/* Hero Text */}
      <div
        ref={titleRef}
        className="absolute bottom-10 left-5 md:left-10 text-white"
      >
        <div className="flex items-end gap-3">
          <h1 className="text-[80px] sm:text-[120px] md:text-[150px] font-extrabold leading-none">
            MK
          </h1>

          <h2 className="text-[35px] sm:text-[50px] md:text-[60px] font-bold mb-2">
            Tours
          </h2>
        </div>

        <div ref={subtitleRef}>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
            Explore breathtaking destinations, discover hidden gems,
            and create unforgettable memories with carefully curated travel experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;