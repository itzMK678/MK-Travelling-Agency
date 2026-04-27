import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0f2027] via-[#132f3a] to-[#0b1c22] text-white   px-8 pt-10 pb-5">
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* COLUMN 1 - CONTACT */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact</h3>
          <p className="text-sm text-gray-300">support@email.com</p>
          <p className="text-sm text-gray-300 mt-2">+92 300 1234567</p>
          <p className="text-sm text-gray-300 mt-2">
            Lahore, Pakistan
          </p>
        </div>

        {/* COLUMN 2 - BOOKINGS */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Bookings</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Flights</li>
            <li>Hotels</li>
            <li>Packages</li>
            <li>Custom Tours</li>
          </ul>
        </div>

        {/* COLUMN 3 - COMPANY */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Partners</li>
          </ul>
        </div>

        {/* COLUMN 4 - NEWSLETTER */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Get Updates</h3>
          <p className="text-sm text-gray-300 mb-4">
            Subscribe to receive travel deals & updates
          </p>

          <div className="flex bg-white rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 text-black outline-none"
            />
            <button className="bg-yellow-400 text-black px-4 font-semibold">
              Join
            </button>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-600 mt-6 my-3"></div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
        
        <p>© 2026 Travel Co. All rights reserved.</p>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a href="#" className="hover:text-white"><FaFacebookF /></a>
          <a href="#" className="hover:text-white"><FaInstagram /></a>
          <a href="#" className="hover:text-white"><FaTwitter /></a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;