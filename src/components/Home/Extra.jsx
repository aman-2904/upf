"use client";
import React from 'react';
import { FiGlobe, FiShield, FiRefreshCw } from 'react-icons/fi';

// Data for the three main feature cards
const energyFeatures = [
  {
    icon: <FiGlobe className="h-16 w-16" />,
    title: "Energy Around World",
    subtitle: "Enhance The Energy Production",
    isCenter: false,
  },
  {
    icon: <FiShield className="h-16 w-16" />,
    title: "Stability & Comfort",
    subtitle: "At dolore magna aliqua enim veniam aliquip exa aute irure dolor reprehen quis nostrud exercitation.",
    isCenter: true,
  },
  {
    icon: <FiRefreshCw className="h-16 w-16" />,
    title: "Renewable Resources",
    subtitle: "Enhance The Energy Production",
    isCenter: false,
  },
];

const Extra = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Pattern - Large geometric shapes for depth */}


      <div className="container mx-auto px-4 relative z-10">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight max-w-5xl mx-auto">
            Building & Maintaining The Energy
            <br />
            Infrastructures Throughout The World
          </h2>
        </div>

        {/* Three Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {energyFeatures.map((feature, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 md:p-12 text-center transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl ${
                feature.isCenter
                  ? 'bg-gradient-to-br from-teal-400 to-cyan-500 text-white shadow-2xl'
                  : 'bg-white text-gray-800 shadow-xl hover:shadow-2xl'
              }`}
            >
              {/* Icon */}
              <div className={`flex items-center justify-center mb-6 ${
                feature.isCenter ? 'text-white' : 'text-teal-500'
              }`}>
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${
                feature.isCenter ? 'text-white' : 'text-gray-900'
              }`}>
                {feature.title}
              </h3>

              {/* Subtitle/Description */}
              <p className={`text-base md:text-lg leading-relaxed ${
                feature.isCenter 
                  ? 'text-white/90' 
                  : 'text-gray-600'
              }`}>
                {feature.subtitle}
              </p>

              {/* Center card special styling */}
              {feature.isCenter && (
                <>
                  {/* Decorative element */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-1 bg-white/50 rounded-full"></div>
                  </div>
                  
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-300/20 to-cyan-400/20 rounded-2xl"></div>
                </>
              )}

              {/* Side cards hover effect */}
              {!feature.isCenter && (
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </div>
          ))}
        </div>

        {/* Optional bottom section for additional content */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center w-12 h-1 bg-white/30 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Extra;