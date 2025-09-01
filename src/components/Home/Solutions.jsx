"use client";
import React from 'react';
import { FiHome, FiBriefcase, FiTool, FiServer, FiRefreshCw, FiZap } from 'react-icons/fi';

// Data for the solution cards
const solutionsData = [
  {
    id: 1,
    title: "Home & Office Solutions",
    icon: <FiHome className="h-8 w-8" />,
    backgroundImage: "https://res.cloudinary.com/dpc285jfe/image/upload/v1692711594/msplwebp/home_dbgl0i.webp", // Replace with actual image paths
    description: "Comprehensive energy solutions for residential and commercial spaces"
  },
  {
    id: 2,
    title: "Business Solution",
    icon: <FiBriefcase className="h-8 w-8" />,
    backgroundImage: "https://res.cloudinary.com/dpc285jfe/image/upload/v1692711594/msplwebp/bsindex_ph6sin.webp",
    description: "Tailored business energy management and efficiency solutions"
  },
  {
    id: 3,
    title: "Industrial Solution",
    icon: <FiTool className="h-8 w-8" />,
    backgroundImage: "https://res.cloudinary.com/dpc285jfe/image/upload/v1692711594/msplwebp/isindex_hiuopj.webp",
    description: "Heavy-duty industrial power and infrastructure solutions"
  },
  {
    id: 4,
    title: "Data Center Solutions",
    icon: <FiServer className="h-8 w-8" />,
    backgroundImage: "	https://res.cloudinary.com/dpc285jfe/image/upload/v1692711594/msplwebp/dsindex_rffolz.webp", // Replace with your actual image paths
    description: "Mission-critical data center power and cooling solutions"
  },
  {
    id: 5,
    title: "Green Solution",
    icon: <FiRefreshCw className="h-8 w-8" />,
    backgroundImage: "	https://res.cloudinary.com/dpc285jfe/image/upload/v1692711594/msplwebp/gsindex_rfxmg6.webp", // Replace with your actual image paths
    description: "Sustainable and environmentally friendly energy solutions"
  },
  {
    id: 6,
    title: "Electrical Turnkey Contract",
    icon: <FiZap className="h-8 w-8" />,
    backgroundImage: "https://res.cloudinary.com/dpc285jfe/image/upload/v1692711594/msplwebp/etindex_sld9q1.webp", // Replace with your actual image paths
    description: "Complete electrical project management and implementation"
  }
];

const Solutions = () => {
  return (
    <section className="pt-10 bg-gray-50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 ">
            Our Solutions
          </h2>      
        </div>
        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {solutionsData.map((solution) => (
            <div
              key={solution.id}
              className="group relative overflow-hidden rounded-2xl aspect-[16/10] cursor-pointer transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Background Image with Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-gray-700"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('${solution.backgroundImage}')`
                }}
              ></div>
              {/* Content Overlay */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                {/* Icon */}
                <div className="flex justify-start mb-4">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {solution.icon}
                  </div>
                </div>
                {/* Title */}
                <div className="mt-auto">
                  <h3 className="text-2xl md:text-2xl font-medium text-white mb-2 group-hover:text-green-300 transition-colors duration-300">
                    {solution.title}
                  </h3>  
                </div>
                {/* Decorative Element */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              {/* Hover Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;