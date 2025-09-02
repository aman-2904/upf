"use client";
import React from "react";
import { FiHome, FiWifi, FiShield, FiZap, FiSettings } from "react-icons/fi";

export default function HomeOfficeSolutions() {
  const sections = [
    {
      id: 1,
      title: "product and the solutions we can provide",
      icon: <FiHome className="h-8 w-8" />,
      section:"https://msplgroup.com/assets/img/recent-projects-5.jpg",
      paragraphs: [
        "Achieve uninterrupted operations with Upflair’s advanced UPS ecosystem preventive maintenance contracts, real-time battery health monitoring, remote UPS oversight, and flexible rental options. From homes and offices to data centers and industrial sites, we keep your power clean, reliable, and compliant.",
        "We know how disruptive sudden power failures can be. At Upflair, we provide trusted UPS solutions that keep your home powered, protecting critical devices and ensuring uninterrupted comfort and connectivity.",
        "Upflair provides reliable UPS solutions for homes and offices, ensuring uninterrupted power for critical devices like computers, laptops, routers, security systems, and household appliances. With advanced APC UPS systems and tailored backup options, we safeguard your valuable electronics and keep your daily routines seamless, so you stay connected and productive even during unexpected outages.",
     
      ]
    },
    {
      id: 2,
      title: "Ensure Uninterrupted Power Supply with Our Home & Office Solutions",
      icon: <FiZap className="h-8 w-8" />,
      section:"https://msplgroup.com/assets/img/recent-projects-2.jpg",
      paragraphs: [
        `At Upflair, we prioritize understanding your unique power requirements—whether at home or in the office. If you’ve ever wondered, “Which UPS is best for my home?” or “What’s the right UPS for my workplace?” our thoughtfully designed solutions provide the answer. From compact, high-performance models for home users to scalable UPS systems for growing businesses, we deliver reliable and efficient power backup that ensures uninterrupted performance and complete peace of mind.`,
      ]
    },
    {
      id: 3,
      title: "Types of UPS for Home",
      icon: <FiShield className="h-8 w-8" />,
      section:"https://msplgroup.com/assets/img/recent-projects-1.jpg",
      paragraphs: [
        `Investing in a UPS solution for your home ensures the protection of your valuable electronics, prevents data loss, and maintains productivity even during power interruptions. This brings peace of mind and uninterrupted connectivity in today's digital age. We offer a wide range of power outage solutions for homes.`
      ]
    },
    {
      id: 4,
      title: "Types of UPS for Office",
      icon: <FiSettings className="h-8 w-8" />,
      section:"https://msplgroup.com/assets/img/recent-projects-4.jpg",
      paragraphs: [
        "UPS (Uninterruptible Power Supply) solutions for office provide reliable backup power to critical devices such as computers, servers, network equipment, and communication systems.",
        "Using a UPS for your laptop enhances productivity, protects valuable data, and ensures you have a backup power source when needed the most.",
        "By deploying UPS systems in offices, your business can guarantee uninterrupted operation, prevent costly downtime, safeguard sensitive electronic equipment, and maintain productivity even during power disturbances or outages.",
        "This allows for a seamless workflow without interruptions and provides peace of mind.",
      ]
    },
    {
      id: 5,
      title: "With upflair, your home and office will never suffer from power outages!",
      icon: <FiWifi className="h-8 w-8" />,
      section:"https://msplgroup.com/assets/img/recent-projects-3.jpg",
      paragraphs: [
       `1] We use top-quality equipment and technology to ensure that our UPS systems consistently deliver uninterrupted power supply, protecting your devices and critical equipment from power outages and fluctuations.`,
       `2] Our team of experts is available to assist you with any questions, concerns, or technical issues. We strive to provide prompt and effective solutions to ensure your satisfaction.`,
       `3] While delivering exceptional quality and service, we offer competitive pricing options. We believe in providing value for your investment by delivering reliable UPS solutions that meet your needs without breaking your budget.`
      ]
    }
  ];

  const imageGallery = [
    {
      title: "SMART-UPS",
      description: "Home Theatere & Smart Homes",
      image: "https://msplgroup.com/assets/img/hos1.png"
    },
    {
      title: " BACK-UPS Computer & Peripherals",
      description: "Computer & Peripherals",
      image: "https://msplgroup.com/assets/img/hos2.png"
    },
    {
      title: "BACK-UPS-PRO",
      description: "Computer & Peripherals",
      image: "https://msplgroup.com/assets/img/hos3.png"
    },
    {
      title: "BACK-UPS",
      description: "Computer & Peripherals",
      image: "https://msplgroup.com/assets/img/hos4.png"
    },
    {
      title: "UPS LINE-R",
      description: "Electrical Appliances",
      image: "https://msplgroup.com/assets/img/hos5.png"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-[url('/32.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-blue-700/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Home & Office Solutions</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Comprehensive energy solutions for residential and commercial spaces
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Transforming Spaces with Smart Technology</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our home and office solutions combine cutting-edge technology with practical applications to create intelligent, efficient, and comfortable environments that adapt to your lifestyle and business needs.
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
                  <div className="bg-gray-200 rounded-2xl h-100 flex items-center justify-center">
                    <img 
                      src={section.section}
                      alt={section.title}
                      className="w-full h-full object-cover "
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image Gallery Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Solution Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {imageGallery.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
                  <div className="h-64 bg-gray-200">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full cover"
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
          <div className="bg-gradient-to-r from-[#0a1f55] to-[#132b74] rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
              <p className="text-lg mb-8 text-blue-100">
                Contact our experts to discuss your home and office automation needs and discover how our solutions can enhance your daily life and business operations.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white text-[#0a1f55] hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105"
              >
                <span>Get Started Today</span>
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