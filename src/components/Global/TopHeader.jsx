"use client";
import React from "react";
import { Phone, Mail, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

const TopHeader = () => {
  return (
    <header className="bg-[#3b5998] text-white font-sans">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 py-3 sm:flex-row">
        {/* Contact Information */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
          <a
            href="tel:+17092386035"
            className="flex items-center gap-2 text-sm transition-opacity hover:opacity-80"
          >
            <Phone size={16} />
            <span>+1 (709) 238-6035</span>
          </a>
          <a
            href="mailto:support@eltron.com"
            className="flex items-center gap-2 text-sm transition-opacity hover:opacity-80"
          >
            <Mail size={16} />
            <span>support@eltron.com</span>
          </a>
        </div>

        {/* Navigation and Social Links */}
        <div className="flex items-center gap-6">
          {/* Text Links */}
          <nav className="hidden items-center gap-4 text-sm md:flex">
            <a href="#" className="transition-opacity hover:opacity-80">
              Careers
            </a>
            <span className="opacity-50">|</span>
            <a href="#" className="transition-opacity hover:opacity-80">
              Media
            </a>
            <span className="opacity-50">|</span>
            <a href="#" className="transition-opacity hover:opacity-80">
              FAQs
            </a>
          </nav>

          {/* Social Media Icons */}
          <div className="flex items-center gap-2">
            <a href="#" aria-label="Facebook" className="rounded-full p-2 transition-colors hover:bg-white/10">
              <Facebook size={16} />
            </a>
            <a href="#" aria-label="Twitter" className="rounded-full p-2 transition-colors hover:bg-white/10">
              <Twitter size={16} />
            </a>
            <a href="#" aria-label="LinkedIn" className="rounded-full p-2 transition-colors hover:bg-white/10">
              <Linkedin size={16} />
            </a>
            <a href="#" aria-label="YouTube" className="rounded-full p-2 transition-colors hover:bg-white/10">
              <Youtube size={16} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
