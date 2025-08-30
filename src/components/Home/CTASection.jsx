"use client";
import React from "react";
import { ArrowRight } from "lucide-react"; // Make sure to install lucide-react

const CTASection = () => {
  return (
    
    <section className="bg-gradient-to-r from-[#e8b958] to-[#f5c972] font-sans overflow-hidden">
      <div className="container mx-auto max-w-7xl py-20">
        <div className="relative flex flex-col items-center justify-between gap-10 rounded-2xl md:flex-row">
          {/* Decorative Glow Effect */}
          <div className="absolute -top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-white/10 blur-3xl opacity-50 pointer-events-none"></div>

          {/* Left Side: Text Content */}
          <div className="z-10 text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-[#0a1f55] sm:text-4xl">
              Choose UPFlair as a Digital Transformation Partner
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#0a1f55]/90">
              UPFlair provides comprehensive support and professional services to help organizations throughout their Digital Transformation Journey.
            </p>
          </div>

          {/* Right Side: Button */}
          <div className="z-10 flex-shrink-0">
            <a
              href="#"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#0a1f55] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-4">
                Connect with us
              </span>
              <ArrowRight className="absolute right-6 h-5 w-5 translate-x-12 transform opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
            </a>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default CTASection;

