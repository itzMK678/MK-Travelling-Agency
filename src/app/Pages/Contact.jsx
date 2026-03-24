"use client";

import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white px-4 md:px-12 py-16">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-300 max-w-xl mx-auto">
          Have questions or want to work with us? Fill out the form or reach us through social platforms.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        
        {/* Contact Form */}
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/20">
          <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-white/20 border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-white/20 border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-white/20 border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>

            <button className="w-full bg-purple-600 hover:bg-purple-700 transition py-3 rounded-lg font-semibold">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info + Socials */}
        <div className="flex flex-col justify-between">
          
          {/* Info */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-300 mb-4">
              We’d love to hear from you. Reach out through any of the following:
            </p>

            <p className="text-gray-400">📍 Location: Your City, Country</p>
            <p className="text-gray-400">📧 Email: contact@example.com</p>
            <p className="text-gray-400">📞 Phone: +123 456 7890</p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>

            <div className="flex gap-4">
              <a className="p-3 bg-white/20 rounded-full hover:bg-blue-600 transition">
                <FaFacebookF />
              </a>

              <a className="p-3 bg-white/20 rounded-full hover:bg-pink-500 transition">
                <FaInstagram />
              </a>

              <a className="p-3 bg-white/20 rounded-full hover:bg-sky-500 transition">
                <FaTwitter />
              </a>

              <a className="p-3 bg-white/20 rounded-full hover:bg-blue-700 transition">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}