import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Header = () => {
  return (
 <header className="w-full bg-white rounded-2xl text-blue-500 px-8 py-4 flex justify-between items-center shadow-md">
  
  <Image
    src="/logo.png"
    alt="Logo"
    width={130}
    height={130}
    className="h-auto w-fit"
  />

  <nav className="flex gap-8 text-sm font-medium">
   
    <Link href="/" className='text-[#223553] font-light text-[18px] hover:font-semibold'>Home</Link>
    <Link href="" className='text-[#223553] font-light text-[18px] hover:font-semibold'>About</Link>
    <Link href="" className='text-[#223553] font-light text-[18px] hover:font-semibold'>Services</Link>
    <Link href="" className='text-[#223553] font-light text-[18px] hover:font-semibold'>Contact</Link>
  </nav>

</header>
  )
}

export default Header