import React from 'react'
import Image from 'next/image'
const Header = () => {
  return (
     <header className="w-full bg-white text-blue-500  px-8 py-4 flex items-center">
      
      {/* LEFT: Logo */}
      <div className="text-2xl font-bold">
        <Image src="/logo.png" alt="Logo" width={150} height={150} />
      </div>

      {/* CENTER: Empty space */}
      <div className="flex-1"></div>

      {/* RIGHT: Menu */}
      <nav className="flex gap-8 text-sm font-medium">
        <a href="#" className="hover:text-purple-400 transition">Home</a>
        <a href="#" className="hover:text-purple-400 transition">About</a>
        <a href="#" className="hover:text-purple-400 transition">Services</a>
        <a href="#" className="hover:text-purple-400 transition">Contact</a>
      </nav>

    </header>
  )
}

export default Header