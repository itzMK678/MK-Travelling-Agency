"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { House, Phone, Rainbow, Info } from "lucide-react";

const MobHeader = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="bg-white w-fit flex flex-col justify-center items-center border rounded-2xl border-gray-300 gap-4 shadow-md p-2">
      
      {/* Logo */}
      <Image
        src="/SmallLogo.png"
        alt="Logo"
        width={50}
        height={50}
        priority
        className="h-auto w-fit cursor-pointer"
        onClick={() => setShow(!show)}
      />

      {/* Menu */}
      <div
        className={`flex flex-col justify-center items-center gap-2 overflow-hidden origin-top transition-all duration-500 ease-in-out ${
          show
            ? "max-h-[500px] opacity-100 scale-y-100"
            : "max-h-0 opacity-0 scale-y-0"
        }`}
      >
        <Link
          href="/"
          className="cursor-pointer text-gray-500 flex flex-col border-t justify-center items-center p-2 hover:rounded-2xl border-gray-200 w-full hover:text-black hover:bg-gray-300 transition-all duration-300"
        >
          <House />
          Home
        </Link>

        <Link
          href="#allpacks"
          className="cursor-pointer text-gray-500 flex flex-col border-t justify-center items-center p-2 hover:rounded-2xl border-gray-200 w-full hover:text-black hover:bg-gray-300 transition-all duration-300"
        >
          <Rainbow />
          Offers
        </Link>

        <Link
          href="#contact"
          className="cursor-pointer text-gray-500 flex flex-col border-t justify-center items-center p-2 hover:rounded-2xl border-gray-200 w-full hover:text-black hover:bg-gray-300 transition-all duration-300"
        >
          <Phone />
          Contact
        </Link>

        <Link
          href="#blogs"
          className="cursor-pointer text-gray-500 flex flex-col border-t justify-center items-center p-2 hover:rounded-2xl border-gray-200 w-full hover:text-black hover:bg-gray-300 transition-all duration-300"
        >
          <Info />
          About
        </Link>
      </div>
    </div>
  );
};

export default MobHeader;