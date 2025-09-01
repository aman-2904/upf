"use client";
import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const slides = [
  {
    id: 1,
    title: "Empowering your Potential, Energising your Growth",
    subtitle: "Producing What Matters!",
    desc: "We focus on equipping you with the tools, technologies, and expertise needed to maximize your potential and fuel sustainable growth.",
    video: "/home.mp4", // Replace with your video URL
  },

];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

 

  return (
    <div className="relative w-full h-[600px] overflow-hidden bg-gray-800">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={slide.video}
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <p className="text-white tracking-widest text-sm uppercase mb-2">
              {slide.subtitle}
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {slide.title}
            </h1>
            <p className="max-w-2xl mx-auto mb-6 text-lg text-gray-100">
              {slide.desc}
            </p>
            <div className="flex space-x-4">
              <button className="px-6 py-3 bg-[#169548] hover:bg-[#0a1f55] rounded shadow text-white font-semibold transition">
                Learn More →
              </button>
              <button className="px-6 py-3 bg-[#169548] hover:bg-[#0a1f55] rounded shadow text-white font-semibold transition">
                Global Help →
              </button>
            </div>
          </div>
        </div>
      ))}

     
    </div>
  );
}
