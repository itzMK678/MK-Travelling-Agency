"use client";

import React, { useEffect, useRef } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    // 🔹 LEFT FORM animation
    gsap.fromTo(
      formRef.current,
      { x: 50, opacity: 1 },
      {
        x: 0,
        opacity: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 15%",
          end: "top 80%",
          scrub: 1,
          duration: 2,
        },
      }
    );

    // 🔹 RIGHT INFO animation
    gsap.fromTo(
      infoRef.current,
      { x: -50, opacity: 1 },
      {
        x: 0,
        opacity: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 15%",
          end: "top 80%",
          scrub: 1,
          duration: 2,
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden min-h-screen bg-gradient-to-b from-[#ffffff] to-[#d3efed] text-black px-4 md:px-12 py-16"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Contact Us
        </h1>

        <p className="text-black max-w-xl mx-auto">
          Have questions or want to work with us? Fill out the form or
          reach us through social platforms.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {/* Contact Form */}
        <div
          ref={formRef}
          className="bg-white/50 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-[#bbcef2]"
        >
          <h2 className="text-2xl font-semibold mb-6">
            Send a Message
          </h2>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-white/20 border border-[#bbcef2] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#a5bfef]"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-white/20 border border-[#bbcef2] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#a5bfef]"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-white/20 border border-[#bbcef2] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#a5bfef]"
            ></textarea>

            <button className="w-full bg-[#a5bfef] hover:bg-[#8aa8d9] transition py-3 rounded-lg font-semibold">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info + Socials */}
        <div
          ref={infoRef}
          className="flex flex-col justify-between"
        >
          {/* Info */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Get in Touch
            </h2>

            <p className="text-gray-600 mb-4">
              We’d love to hear from you. Reach out through any of the
              following:
            </p>

            <p className="w-[300px] mb-2 bg-white text-gray-600 p-3 border border-gray-400 rounded-xl">
              📍 Haroonabad, Pakistan
            </p>

            <p className="w-[300px] mb-2 bg-white text-gray-600 p-3 border border-gray-400 rounded-xl">
              📧 raomamoonkhaliq@gmail.com
            </p>

            <p className="w-[300px] bg-white text-gray-600 p-3 border border-gray-400 rounded-xl">
              📞 +92 3326325661
            </p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Follow Us
            </h3>

            <div className="flex gap-4">
              <a className="p-3 bg-white rounded-full hover:bg-blue-600 hover:text-white transition duration-300 cursor-pointer">
                <FaFacebookF />
              </a>

              <a className="p-3 bg-white rounded-full hover:bg-pink-500 hover:text-white transition duration-300 cursor-pointer">
                <FaInstagram />
              </a>

              <a className="p-3 bg-white rounded-full hover:bg-sky-500 hover:text-white transition duration-300 cursor-pointer">
                <FaTwitter />
              </a>

              <a className="p-3 bg-white rounded-full hover:bg-blue-700 hover:text-white transition duration-300 cursor-pointer">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}