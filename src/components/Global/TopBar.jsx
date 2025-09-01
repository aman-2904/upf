"use client";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn, FaVimeoV } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="bg-[#0a1f55] text-white text-sm py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        
        {/* Left Section */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-white" />
            <span>+91 9035300045</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-white" />
            <span>sales@upflair.in</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-6 mt-2 sm:mt-0">
          {/* Links */}
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">Careers</a>
            <span>|</span>
            <a href="#" className="hover:underline">Media</a>
            <span>|</span>
            <a href="#" className="hover:underline">FAQs</a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-3">
            <a href="#" className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition"><FaFacebookF /></a>
            <a href="#" className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition"><FaTwitter /></a>
            <a href="#" className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition"><FaGooglePlusG /></a>
            <a href="#" className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition"><FaLinkedinIn /></a>
            <a href="#" className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition"><FaVimeoV /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
