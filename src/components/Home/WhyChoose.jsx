"use client";
import React from "react";

// Data for the feature items - kept this the same for easy content management
const features = [
  {
    icon: (
      <svg
        className="h-8 w-8 text-green-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Improved Comfort And Safety",
    description: "Experience enhanced comfort and safety with our premium power supply solutions.",
  },
  {
    icon: (
        <svg 
            className="h-8 w-8 text-green-600" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
        >
            <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
            />
        </svg>
    ),
    title: "Cost Savings",
    description: "Unlock substantial cost savings with our reliable power supply solutions.",
  },
  {
    icon: (
        <svg 
            className="h-8 w-8 text-green-600" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
        >
            <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
            <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-4-4l4.586-4.586a2 2 0 012.828 0L20 12"
            />
        </svg>
    ),
    title: "Environmental Impact",
    description: "Minimize your environmental impact with our eco-friendly power supply solutions.",
  },
];

// This is the main component with enhanced styling
const WhyChoose = () => {
  return (
    <section className="font-sans py-20 bg-slate-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 bg-repeat bg-center opacity-5"
        style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.4\" fill-rule=\"evenodd\"%3E%3Cpath d=\"M0 40L40 0H20L0 20M40 40V20L20 40\"/%3E%3C/g%3E%3C/svg%3E')"}}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap items-center">
          {/* Left Column: Text Content and Features */}
          <div className="w-full lg:w-1/2 lg:pr-16">
            <div className="mb-12">
              <div className="mb-4 h-1 w-16 bg-orange-500 rounded"></div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 tracking-tight">
                Why To Choose UpFlair Technology?
              </h2>
            </div>

            {/* Features List */}
            <div className="space-y-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="group relative mr-6 flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-md">
                    <div className="absolute inset-0 rounded-full border border-gray-200"></div>
                    {/* Animated bold border on hover */}
                    <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-green-500 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:animate-spin-slow"></div>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Video and Contact Info */}
          <div className="w-full lg:w-1/2 mt-16 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Data Center"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm transition-opacity duration-300 opacity-0 hover:opacity-100">
                <button
                  className="group flex h-24 w-24 items-center justify-center rounded-full bg-white bg-opacity-20 transition-all duration-300 hover:bg-opacity-30 hover:scale-110"
                  aria-label="Play video"
                >
                  <svg
                    className="h-12 w-12 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Overlapping Contact Cards */}
            <div className="relative z-10 -mt-16 flex flex-col sm:flex-row justify-end items-stretch drop-shadow-lg">
                <div className="bg-blue-800 text-white p-6 rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300 flex-1">
                    <h4 className="font-semibold text-blue-200">CALL FOR A QUOTE:</h4>
                    <p className="text-xl font-bold">9035300045</p>
                </div>
                <div className="bg-white text-gray-800 p-6 rounded-b-2xl sm:rounded-r-2xl sm:rounded-bl-none shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300 flex-1">
                    <h4 className="font-semibold text-gray-500">EMAIL ADDRESS:</h4>
                    <p className="text-lg font-bold">sales@upflair.in</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin 2s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default WhyChoose;

