"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import InstantBox from "./InstantBox";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";

const Header = () => {
  const boxRef = useRef(null);
  const rightRef = useRef(null);
  const leftRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const [isInstantBoxOpen, setIsInstantBoxOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();

    // Header animation
    tl.from(boxRef.current, {
      y: -200,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    })
      .from(
        leftRef.current,
        {
          x: -100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.6"
      )
      .from(
        rightRef.current,
        {
          x: 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "<"
      );
  }, []);

  // Mobile menu animation
  useEffect(() => {
    if (isMobileMenuOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        {
          opacity: 0,
          y: -30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        }
      );
    }
  }, [isMobileMenuOpen]);

  const linkStyle =
    "relative text-[#223553] font-light text-[17px] transition-all duration-300 hover:text-[#1a2a44] hover:scale-105";

  return (
    <header
      ref={boxRef}
      className="relative w-full bg-white rounded-2xl px-5 md:px-8 py-4 flex justify-between items-center shadow-md"
    >
      {/* Logo */}
      <div ref={leftRef}>
        <Image
          src="/logo.png"
          alt="Logo"
          width={120}
          height={120}
          priority
          className="h-auto w-fit"
        />
      </div>

      {/* Desktop Nav */}
      <nav
        ref={rightRef}
        className="hidden md:flex gap-8 text-sm font-medium items-center"
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
          className="bg-[#223553] cursor-pointer text-white px-4 py-2 rounded-[8px] font-light text-[17px] transition-all duration-300 hover:scale-105 hover:bg-[#1a2a44]"
        >
          Book
        </button>

        {isInstantBoxOpen && (
          <div className="absolute z-20 top-16 right-0">
            <InstantBox />
          </div>
        )}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-[#223553]"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="absolute top-[90px] left-0 w-full bg-white rounded-2xl shadow-xl p-6 flex flex-col gap-5 md:hidden z-50"
        >
          <Link
            href="/"
            className={linkStyle}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            href="#allpacks"
            className={linkStyle}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Packages
          </Link>

          <Link
            href="#blogs"
            className={linkStyle}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>

          <Link
            href="#contact"
            className={linkStyle}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>

          <button
            onClick={() => {
              setIsInstantBoxOpen((prev) => !prev);
            }}
            className="bg-[#223553] text-white py-3 rounded-xl text-[17px] transition-all duration-300 hover:bg-[#1a2a44]"
          >
            Book
          </button>

          {isInstantBoxOpen && (
            <div className="w-full">
              <InstantBox />
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;