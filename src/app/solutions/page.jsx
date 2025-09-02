"use client";
import React from "react";
import { FiHome, FiBriefcase, FiTool, FiServer, FiRefreshCw, FiZap } from "react-icons/fi";

export default function SolutionsPage() {
  // Solutions data
  const solutions = [
    {
      id: 1,
      title: "Home & Office Solutions",
      icon: <FiHome className="h-8 w-8" />,
      description: "Comprehensive energy solutions for residential and commercial spaces",
      features: [
        "Smart home automation systems",
        "Energy-efficient lighting solutions",
        "Home automation security integration",
        "Commercial building energy management"
      ]
    },
    {
      id: 2,
      title: "Business Solution",
      icon: <FiBriefcase className="h-8 w-8" />,
      description: "Tailored business energy management and efficiency solutions",
      features: [
        "Custom business energy audits",
        "Cost optimization strategies",
        "Smart office automation",
        "Energy usage analytics"
      ]
    },
    {
      id: 3,
      title: "Industrial Solution",
      icon: <FiTool className="h-8 w-8" />,
      description: "Heavy-duty industrial power and infrastructure solutions",
      features: [
        "Industrial power distribution systems",
        "Heavy machinery electrical solutions",
        "Factory automation and control systems",
        "Industrial safety and compliance"
      ]
    },
    {
      id: 4,
      title: "Data Center Solutions",
      icon: <FiServer className="h-8 w-8" />,
      description: "Mission-critical data center power and cooling solutions",
      features: [
        "Data center power infrastructure",
        "Precision cooling systems",
        "Uninterrupted power supply (UPS)",
        "Data center monitoring solutions"
      ]
    },
    {
      id: 5,
      title: "Green Solution",
      icon: <FiRefreshCw className="h-8 w-8" />,
      description: "Sustainable and environmentally friendly energy solutions",
      features: [
        "Solar power integration",
        "Energy storage solutions",
        "Green building certifications",
        "Carbon footprint reduction"
      ]
    },
    {
      id: 6,
      title: "Electrical Turnkey Contract",
      icon: <FiZap className="h-8 w-8" />,
      description: "Complete electrical project management and implementation",
      features: [
        "End-to-end project management",
        "Electrical system design",
        "Installation and commissioning",
        "Maintenance and support"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative h-[400px] bg-[url('/solutions-header.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/60 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Solutions</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Comprehensive energy solutions for every sector
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Introduction Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Empowering Businesses with Innovative Solutions</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We provide comprehensive solutions designed to meet the unique energy and power needs of various industries and applications. Our solutions combine cutting-edge technology with proven expertise to deliver reliable, efficient, and scalable systems that power your operations and growth.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {solutions.map((solution) => (
              <div 
                key={solution.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-100 transform hover:-translate-y-1"
              >
                <div className="p-8">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-700">
                    {solution.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors duration-300">
                    {solution.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-6">
                    {solution.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-3">
                    {solution.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Learn More Button */}
                <div className="px-8 pb-8">
                  <a
                    href="#"
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                  >
                    Learn More
                    <span className="ml-2 transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Comprehensive Solutions Section */}
          <div className="bg-gradient-to-r from-[#0a1f55] to-[#132b74] rounded-2xl p-8 md:p-12 text-white mb-16">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Comprehensive Solutions for Every Industry</h2>
              <p className="text-lg text-blue-100 mb-12 text-center">
                Our solutions are designed to meet the diverse needs of various industries with tailored energy and power management systems that ensure reliability, efficiency, and sustainability.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Solution 1 */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-xl font-semibold text-white mb-4">Smart Infrastructure</div>
                  <p className="text-blue-100">
                    Intelligent systems for efficient energy management and automation across residential, commercial, and industrial applications.
                  </p>
                </div>
                
                {/* Solution 2 */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-xl font-semibold text-white mb-4">Mission-Critical Systems</div>
                  <p className="text-blue-100">
                    Uninterrupted power solutions for data centers, hospitals, and other facilities where reliability is essential.
                  </p>
                </div>
                
                {/* Solution 3 */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-xl font-semibold text-white mb-4">Sustainable Power</div>
                  <p className="text-blue-100">
                    Green energy solutions that reduce environmental impact while optimizing energy efficiency and cost savings.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Industries Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Industries We Serve</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Industry 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-700">
                  <FiHome className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Residential</h3>
                <p className="text-gray-600">
                  Innovative energy solutions for homes and apartment complexes that enhance comfort, security, and efficiency while reducing energy consumption and costs.
                </p>
              </div>
              
              {/* Industry 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-700">
                  <FiBriefcase className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Commercial</h3>
                <p className="text-gray-600">
                  Scalable energy management solutions for office buildings, shopping centers, and commercial complexes that optimize energy usage and reduce operational costs.
                </p>
              </div>
              
              {/* Industry 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-purple-700">
                  <FiTool className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Industrial</h3>
                <p className="text-gray-600">
                  Robust power systems for manufacturing plants, processing facilities, and other industrial applications requiring high-capacity, reliable electrical infrastructure.
                </p>
              </div>
              
              {/* Industry 4 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 text-orange-700">
                  <FiServer className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Data Centers</h3>
                <p className="text-gray-600">
                  Mission-critical power and cooling solutions for data centers, ensuring 24/7 reliability, scalability, and optimal performance.
                </p>
              </div>
              
              {/* Industry 5 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 text-red-700">
                  <FiRefreshCw className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Green Energy</h3>
                <p className="text-gray-600">
                  Sustainable energy solutions including solar integration, energy storage, and eco-friendly power systems for a greener future.
                </p>
              </div>
              
              {/* Industry 6 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4 text-indigo-700">
                  <FiZap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Infrastructure</h3>
                <p className="text-gray-600">
                  Comprehensive electrical infrastructure solutions for new construction or upgrades to existing facilities, ensuring safety, efficiency, and compliance.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-[#0a1f55] to-[#132b74] rounded-2xl p-8 md:p-12 text-white mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Perfect Solution?</h2>
              <p className="text-lg mb-8 text-blue-100">
                Our team of experts is ready to help you find the optimal energy and power solutions for your specific needs.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white text-[#0a1f55] hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Contact Our Experts</span>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13 18L19 12L13 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}