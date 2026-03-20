import React from 'react'
import Image from 'next/image'
const Header = () => {
  return (
     <header className=" bg-red-500 text-blue-500 mt-5 mx-5 px-8 py-4 flex justify-between items-center">
      
      <div className="text-2xl font-bold">
        <Image src="/logo.png" alt="Logo" width={150} height={150} />
      </div>

      {/* CENTER: Empty spa

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