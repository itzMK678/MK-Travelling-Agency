import {React } from "react";
import Image from "next/image";
import Link from "next/link";
import { House } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Rainbow } from 'lucide-react';
import { Info } from 'lucide-react';
const MobHeader = () => {
  return (
  
  <div className="bg-white w-fit flex flex-col justify-center items-center border rounded-2xl border-gray-300 gap-4 shadow-md p-2">
 <Image
          src="/SmallLogo.png"
          alt="Logo"
          width={50}
          height={50} 
          priority
         className="h-auto w-fit"
       />
 
<div> <Link href="/" className= "  cursor-pointer text-gray-500 flex flex-col border-t justify-center items-center p-2 hover:rounded-2xl border-gray-200 w-full hover:text-black hover:bg-gray-300" > 
      <House />
      Home
       </Link></div>

   
     <div >
    <Link href="#allpacks" className= "  cursor-pointer text-gray-500 flex flex-col border-t justify-center items-center p-2 hover:rounded-2xl border-gray-200 w-full hover:text-black hover:bg-gray-300" > 
     <Rainbow />
    Offers
       </Link>
    </div>
 
  <div >
    <Link href="#contact" className= "  cursor-pointer text-gray-500 flex flex-col border-t justify-center items-center p-2 hover:rounded-2xl border-gray-200 w-full hover:text-black hover:bg-gray-300" > 
     <Phone />
      Contact
       </Link>
    </div>
   
 <div >
    <Link href="#blogs" className= "  cursor-pointer text-gray-500 flex flex-col border-t justify-center items-center p-2 hover:rounded-2xl border-gray-200 w-full hover:text-black hover:bg-gray-300" > 
    <Info />
      About
       </Link>
    </div>
 

  </div>
  )
}

export default MobHeader