"use client";
import React from 'react';

// Data for the feature items with icons and descriptions
const commitmentFeatures = [
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
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: "Skilled Workforce",
    description: "Our team consists of highly trained professionals with deep expertise in electrical engineering and power conditioning.",
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
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    title: "Continuous Innovation",
    description: "We stay ahead of trends with constant R&D to ensure that we provide cutting-edge, scalable solutions.",
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
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
        />
      </svg>
    ),
    title: "Customized Solutions",
    description: "Our solutions are fully customizable, ensuring that we meet the specific needs of your operations.",
  },
];

const reliabilityFeatures = [
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
    title: "Timely Delivery",
    description: "We guarantee on-time project completion with efficient management.",
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
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Cost-Effective Solutions",
    description: "We offer competitive pricing without compromising performance.",
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
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
    title: "Proven Industry Leadership",
    description: "Our solutions are trusted by top companies worldwide, ensuring peak performance with minimal risk.",
  },
];

const Extra = () => {
  return (
    <section className="font-sans py-20 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 bg-repeat bg-center opacity-5"
        style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.4\" fill-rule=\"evenodd\"%3E%3Cpath d=\"M0 40L40 0H20L0 20M40 40V20L20 40\"/%3E%3C/g%3E%3C/svg%3E')"}}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-4 h-1 w-16 bg-orange-500 rounded mx-auto"></div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 tracking-tight mb-6">
            Excellence In Every Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what sets us apart in the power conditioning industry through our commitment to quality and innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column: Our Commitment to Excellence */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Commitment to Excellence</h3>
            </div>
            
            <div className="space-y-8">
              {commitmentFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="group relative mr-6 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gray-50 shadow-md">
                    <div className="absolute inset-0 rounded-full border border-gray-200"></div>
                    {/* Animated border on hover */}
                    <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-green-500 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:animate-spin-slow"></div>
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Unparalleled Reliability and Performance */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Unparalleled Reliability & Performance</h3>
            </div>
            
            <div className="space-y-8">
              {reliabilityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="group relative mr-6 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gray-50 shadow-md">
                    <div className="absolute inset-0 rounded-full border border-gray-200"></div>
                    {/* Animated border on hover */}
                    <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-green-500 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:animate-spin-slow"></div>
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="group inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Get in Touch
            <svg 
              className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </button>
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

export default Extra;