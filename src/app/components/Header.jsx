"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import InstantBox from "./InstantBox";

const Header = () => {
  const [isInstantBoxOpen, setIsInstantBoxOpen] = useState(false);

  // Refs
  const logoRef = useRef(null);
  const navRef = useRef(null);

  // GSAP Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Logo animation (from left)
      gsap.from(logoRef.current, {
        x: -120,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Nav items animation (from right with stagger)
      gsap.from(navRef.current.children, {
        x: 120,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });
    });

    return () => ctx.revert(); // cleanup
  }, []);

  const linkStyle =
    "relative text-[#223553] font-light p-2 text-[18px] transition-all duration-300 ease-in-out hover:text-[#1a2a44] hover:scale-105";

  return (
    <header className="w-full bg-white rounded-2xl px-8 py-4 flex justify-between items-center shadow-md">
      
      {/* Logo */}
      <div ref={logoRef}>
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
        ref={navRef}
        className="relative flex gap-8 text-sm font-medium items-center"
      >
        <Link href="/" className={linkStyle}>Home</Link>
        <Link href="/packages" className={linkStyle}>Packages</Link>
        <Link href="/about" className={linkStyle}>About</Link>
        <Link href="/contact" className={linkStyle}>Contact</Link>

        {/* CTA Button */}
        <button
          onClick={() => setIsInstantBoxOpen((prev) => !prev)}
          className="bg-[#223553] cursor-pointer text-white px-4 py-2 rounded-[8px] font-light text-[18px] transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#1a2a44]"
        >
          Book
        </button>

        {/* Instant Box */}
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