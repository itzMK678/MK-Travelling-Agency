"use client";

import Image from "next/image";
import React, { useState,useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CustomPack = () => {
  const [active, setActive] = useState(false);
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    // 🔹 LEFT card moves from left → center
    gsap.fromTo(
      leftRef.current,
      { x: -150, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          end: "top 40%",
          scrub: 1, // 🔥 smooth scroll sync
        },
      }
    );

    // 🔹 RIGHT card moves from right → center
    gsap.fromTo(
      rightRef.current,
      { x: 150, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          end: "top 40%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div ref={sectionRef} className="m-5">
      <div className="rounded-2xl overflow-hidden flex flex-col md:flex-row gap-3 p-6 bg-[#e9eeee]">

        {/* LEFT CARD */} 
         <div
          ref={leftRef}
         className="rounded-2xl p-6 flex-1 flex flex-col justify-center
  ">

          <h3 className="text-[42px] dynapuff font-semibold text-gray-800">
            you
          </h3>
          <h5 className="text-[25px] dynapuff font-semibold text-gray-800">
            can
          </h5>
          <h2 className="text-[42px] dynapuff text-gray-800 leading-snug">
            Customize Trip
          </h2>
        </div>
  
        {/* CENTER IMAGE  */}
        <div
className={`flex-1 rounded-2xl overflow-hidden relative
transition-all duration-700
${
active
? "opacity-0 scale-90"
: "opacity-100 scale-100"
}`}
>
          <Image
            src="/Nature1.jpg"
            alt="Location Image"
            fill
            className="object-cover"
          />
        </div>

        {/* RIGHT CARD */}
        <div
          ref={rightRef}
         className=' bg-gradient-to-b from-[#cfe0df] to-[#d3efed] rounded-2xl p-6 flex-1 flex-col justify-between'>
          <div className={` ${active ? 'hidden' : 'block'} `}>
            <h3 className="text-xl font-semibold text-gray-800">
              Customize your Trip
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Customize your trip according to your preferences and needs.
              Choose from a wide range of destinations, activities, and
              accommodations to create a personalized travel experience.
            </p>
          

          <button onClick={() => setActive(!active)}
           className="cursor-pointer mt-4 bg-black text-white px-4 py-2 rounded-full w-fit hover:bg-gray-800 transition">
            Explore Now
          </button>
</div>
           <div 
className={`flex flex-1 flex-col gap-2 rounded-2xl overflow-hidden relative
transition-all duration-2000 ease-in-out
${
active
? "opacity-100 block "
: "opacity-0 hidden "
}`}>
           <div><h1 className="text-center text-3xl text-[#7fa8a6] font-extrabold mb-5">Give Detail</h1></div> 

  <form  className="flex flex-col gap-3 items-center">


    <input
      className="w-80 border border-[#7fa8a6] p-2 rounded"
      type="text"
      name="name"
      placeholder="Enter Your Name"
    />

    <input
      className="w-80 border border-[#7fa8a6] p-2 rounded"
      type="tel"
      name="contact"
      placeholder="Contact Number"
    />

    <input
      className="w-80 border border-[#7fa8a6] p-2 rounded"
      type="number"
      name="persons"
      placeholder="Number of Persons"
    />

    <input
      className="w-80 border border-[#7fa8a6] p-2 rounded"
      type="number"
      name="days"
      placeholder="Trip Days"
    />

    <input
      className="w-80 border border-[#7fa8a6] p-2 rounded"
      type="text"
      name="place"
      placeholder="Destination"
    />

        <div className="flex flex-1 gap-3" >
         <button className="cursor-pointer bg-black w-[150px]  text-white p-2 rounded ">
           Submit
         </button>
         <button className="cursor-pointer bg-black text-white w-[150px] p-2 rounded"
           type="button"
           onClick={() => setActive(false)}
           >
           Back
         </button>
        </div>

  </form>
</div>
        </div>

      </div>
     
    </div>
  );
};

export default CustomPack;