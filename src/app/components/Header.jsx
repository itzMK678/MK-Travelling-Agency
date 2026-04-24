"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import InstantBox from "./InstantBox";
import { useState } from "react";
const Header = () => {
  const linkStyle =
    "relative text-[#223553] font-light p-2 text-[18px] transition-all duration-300 ease-in-out hover:text-[#1a2a44] hover:scale-105";
const [isInstantBoxOpen, setIsInstantBoxOpen] = useState(false);
  return (
    <header className="w-full bg-white rounded-2xl px-8 py-4 flex justify-between items-center shadow-md">

      {/* Logo */}
      <Image
        src="/logo.png"
        alt="Logo"
        width={130}
        height={130}
        className="h-auto w-fit"
      />

      {/* Navigation */}
      <nav className="relative flex gap-8 text-sm font-medium items-center">

        <Link href="/" className={linkStyle}>
          Home
        </Link>

        <Link href="/packages" className={linkStyle}>
          Packages
        </Link>

        <Link href="/about" className={linkStyle}>
          About
        </Link>

        <Link href="/contact" className={linkStyle}>
          Contact
        </Link>

        {/* CTA Button */}
        <div
          onClick={() => setIsInstantBoxOpen(!isInstantBoxOpen)}
          className="bg-[#223553] cursor-pointer text-white px-4 py-2 rounded-[8px]
          font-light text-[18px]
          transition-all duration-300 ease-in-out
          hover:scale-105 hover:bg-[#1a2a44]"
        >
          Book
         
        </div>
        <div className=" absolute z-10 top-10 right-1">
          {isInstantBoxOpen && <InstantBox />}
        </div>
 
      </nav>
    </header>
  );
};

export default Header;