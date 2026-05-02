"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import InstantBox from "./InstantBox";
import { gsap } from "gsap";

const Header = () => {
  const boxRef = useRef(null);
  const rightRef = useRef(null);
  const leftRef = useRef(null);

  const [isInstantBoxOpen, setIsInstantBoxOpen] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();

    // Step 1: whole header comes from top
    tl.from(boxRef.current, {
      y: -200,
      opacity: 0,
      duration: 1.8,
      ease: "power3.out",
    })

   .from(leftRef.current, {
  x: -150,
  opacity: 0,
  duration: 1.4,
  ease: "power3.out",
})

// Step 3: nav from right (start at SAME time)
.from(rightRef.current, {
  x: 150,
  opacity: 0,
  duration: 1.4,
  ease: "power3.out",
}, "<")

  }, []);

  const linkStyle =
    "relative text-[#223553] font-light p-2 text-[18px] transition-all duration-300 ease-in-out hover:text-[#1a2a44] hover:scale-105";

  return (
    <header
      ref={boxRef}
      className="relative w-full overflow-visible bg-white rounded-2xl px-8 py-4 flex justify-between items-center shadow-md"
    >
      {/* Logo */}
      <div ref={leftRef}>
        <Image
          src="/logo.png"
          alt="Logo"
          width={130}
          height={130}
          priority
          className="h-auto w-fit"
        />
      </div>

      {/* Navigation */}
      <nav
        ref={rightRef}
        className="relative flex gap-8 text-sm font-medium items-center"
      >
        <Link href="/" className={linkStyle}>Home</Link>
       <Link href="#allpacks" className={linkStyle}>
  Packages
</Link>
        <Link href="#blogs" className={linkStyle}>About</Link>
        <Link href="#contact" className={linkStyle}>Contact</Link>

        <button
          onClick={() => setIsInstantBoxOpen((prev) => !prev)}
          className="bg-[#223553] cursor-pointer text-white px-4 py-2 rounded-[8px] font-light text-[18px] transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#1a2a44]"
        >
          Book
        </button>

        {isInstantBoxOpen && (
          <div className="absolute z-10 top-10 right-0">
            <InstantBox />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;