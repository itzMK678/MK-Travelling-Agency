"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import InstantBox from "./InstantBox";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";

const Header = () => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const navRef = useRef(null);

  const [isInstantBoxOpen, setIsInstantBoxOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(logoRef.current, {
        x: 0,
        opacity: 1,
      });

      gsap.set(navRef.current, {
        x: 0,
        opacity: 1,
      });

      gsap.set(containerRef.current, {
        y: 0,
        opacity: 1,
      });

      const tl = gsap.timeline();

      tl.from(containerRef.current, {
        y: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          logoRef.current,
          {
            x: -60,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          navRef.current,
          {
            x: 60,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "<"
        );
    }, containerRef);

    return () => {
      ctx.revert(); // cleanup all animations
    };
  }, [pathname]);

  const linkStyle =
    "relative text-[#223553] font-light p-2 text-[18px] transition-all duration-300 ease-in-out hover:text-[#1a2a44] hover:scale-105";

  return (
    <header
      ref={containerRef}
      className="relative w-full overflow-visible bg-white rounded-2xl px-8 py-4 flex justify-between items-center shadow-md"
    >
      {/* Logo */}
      <div ref={logoRef}>
        <Image
          src="/logo.png"
          alt="Logo"
          width={130}
          height={130}
          priority
          className="w-auto h-auto"
        />
      </div>

      {/* Navigation */}
      <nav
        ref={navRef}
        className="relative flex gap-8 text-sm font-medium items-center"
      >
        <Link href="/" className={linkStyle}>
          Home
        </Link>

        <Link href="#allpacks" className={linkStyle}>
          Packages
        </Link>

        <Link href="#blogs" className={linkStyle}>
          About
        </Link>

        <Link href="#contact" className={linkStyle}>
          Contact
        </Link>

        <button
          onClick={() => setIsInstantBoxOpen((prev) => !prev)}
          className="bg-[#223553] cursor-pointer text-white px-4 py-2 rounded-[8px] font-light text-[18px] transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#1a2a44]"
        >
          Book
        </button>

        {isInstantBoxOpen && (
          <div className="absolute top-12 right-0 z-50">
            <InstantBox />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;