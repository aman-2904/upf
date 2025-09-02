"use client";
import React from "react";
import { FiRefreshCw, FiSun, FiLeaf, FiTrendingUp, FiBattery } from "react-icons/fi";

export default function GreenSolutions() {
  const sections = [
    {
      id: 1,
      title: "Solar Power Integration",
      icon: <FiSun className="h-8 w-8" />,
      paragraphs: [
        "Comprehensive solar power solutions that seamlessly integrate with existing electrical infrastructure to provide clean, renewable energy while reducing dependence on traditional utility power sources.",
        "Advanced photovoltaic system design optimizes solar panel placement, inverter selection, and electrical configuration to maximize energy production and return on investment.",
        "Grid-tie capabilities with net metering allow excess solar energy to be fed back into the utility grid, providing additional revenue streams and improving economic benefits.",
        "Battery backup integration provides energy storage for periods when solar production is insufficient, ensuring continuous power availability while maximizing renewable energy utilization.",
        "Smart monitoring and control systems track solar production, energy consumption, and system performance in real-time, providing detailed analytics to optimize system operation."
      ]
    },
    {
      id: 2,
      title: "Energy Storage Solutions",
      icon: <FiBattery className="h-8 w-8" />,
      paragraphs: [
        "Advanced battery energy storage systems provide reliable backup power, peak demand management, and integration with renewable energy sources to optimize energy costs.",
        "Lithium-ion battery technology offers high energy density, long cycle life, and fast charging capabilities for both residential and commercial energy storage applications.",
        "Intelligent battery management systems monitor cell health, optimize charging cycles, and protect against overcharge conditions to maximize battery life and ensure safe operation.",
        "Peak shaving capabilities reduce demand charges by storing energy during low-cost periods and discharging during peak demand times, resulting in significant cost savings.",
        "Seamless integration with solar power systems stores excess renewable energy for use during periods of low production, maximizing the value of your renewable energy investment."
      ]
    },
    {
      id: 3,
      title: "Green Building Certifications",
    //   icon: <FiLeaf className="h-8 w-8" />,
      paragraphs: [
        "Support for achieving green building certifications including LEED, ENERGY STAR, and BREEAM through comprehensive energy efficiency improvements and sustainable design practices.",
        "Energy auditing and assessment services identify opportunities for efficiency improvements and provide detailed recommendations for achieving certification requirements.",
        "Documentation and reporting services ensure all certification requirements are met and properly documented, streamlining the certification process and ensuring successful outcomes.",
        "Ongoing monitoring and verification services track building performance against certification standards, ensuring continued compliance and optimal energy performance.",
        "Integration with building management systems provides automated reporting and analytics to support certification maintenance and continuous improvement initiatives."
      ]
    },
    {
      id: 4,
      title: "Carbon Footprint Reduction",
      icon: <FiTrendingUp className="h-8 w-8" />,
      paragraphs: [
        "Comprehensive carbon footprint analysis and reduction strategies help organizations minimize their environmental impact while achieving cost savings through improved efficiency.",
        "Renewable energy integration reduces reliance on fossil fuels and significantly decreases greenhouse gas emissions from building operations and energy consumption.",
        "Energy efficiency improvements including LED lighting, smart controls, and HVAC optimization reduce overall energy consumption and associated carbon emissions.",
        "Carbon offset programs and renewable energy credits provide additional options for achieving carbon neutrality and meeting sustainability goals and commitments.",
        "Regular monitoring and reporting track progress toward carbon reduction goals, providing transparency and accountability for sustainability initiatives and stakeholder reporting."
      ]
    },
    {
      id: 5,
      title: "Sustainable Technology Implementation",
      icon: <FiRefreshCw className="h-8 w-8" />,
      paragraphs: [
        "Implementation of cutting-edge sustainable technologies including smart grids, energy management systems, and IoT devices to optimize energy use and reduce waste.",
        "Electric vehicle charging infrastructure supports the transition to sustainable transportation while providing new revenue opportunities for commercial properties.",
        "Waste heat recovery systems capture and repurpose waste heat from industrial processes and building systems to improve overall energy efficiency.",
        "Water conservation technologies including smart irrigation and leak detection systems reduce water consumption and support comprehensive sustainability goals.",
        "Lifecycle assessment and sustainable material selection ensure that all system components and installations support long-term environmental objectives."
      ]
    }
  ];

  const imageGallery = [
    {
      title: "Solar Installation",
      description: "Professional solar panel installation with optimal positioning for maximum energy production and integration with existing electrical systems.",
      image: "/green-1.jpg"
    },
    {
      title: "Battery Storage System",
      description: "Advanced lithium-ion battery storage system providing backup power and peak demand management for residential and commercial applications.",
      image: "/green-2.jpg"
    },
    {
      title: "Green Building Monitoring",
      description: "Comprehensive building energy monitoring system tracking efficiency metrics and supporting green building certification requirements.",
      image: "/green-3.jpg"
    },
    {
      title: "EV Charging Station",
      description: "Electric vehicle charging infrastructure supporting sustainable transportation and providing additional revenue opportunities.",
      image: "/green-4.jpg"
    },
    {
      title: "Smart Energy Dashboard",
      description: "Real-time energy monitoring and analytics dashboard providing insights into renewable energy production and consumption patterns.",
      image: "/green-5.jpg"
    }
  ];
      

  return (

    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-[url('/7.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-700/60 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Green Solutions</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Sustainable and environmentally friendly energy solutions
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Building a Sustainable Future</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our green energy solutions combine renewable technologies with intelligent systems to create sustainable, cost-effective, and environmentally responsible energy infrastructure.
            </p>
          </div>

          {/* Main Content Sections */}
          <div className="space-y-16 mb-20">
            {sections.map((section, index) => (
              <div key={section.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-700">
                      {section.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">{section.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {section.paragraphs.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-600 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center">
                    <img 
                      src={`/green-section-${section.id}.jpg`}
                      alt={section.title}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image Gallery Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Green Solution Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {imageGallery.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="h-64 bg-gray-200">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Go Green?</h2>
              <p className="text-lg mb-8 text-green-100">
                Contact our sustainability experts to discover how green energy solutions can reduce costs and environmental impact for your organization.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white text-green-700 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Start Your Green Journey</span>
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