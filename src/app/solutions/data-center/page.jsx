"use client";
import React from "react";
import { FiServer, FiCpu, FiShield, FiThermometer, FiMonitor } from "react-icons/fi";

export default function DataCenterSolutions() {
  const sections = [
    {
      id: 1,
      title: "Data Center Power Infrastructure",
      icon: <FiServer className="h-8 w-8" />,
      paragraphs: [
        "Mission-critical power infrastructure designed specifically for data centers, providing redundant power distribution, uninterruptible power supplies, and backup generation systems to ensure 99.99% uptime reliability.",
        "Modular power distribution units (PDUs) and remote power panels provide flexible power delivery with hot-swappable components, allowing for maintenance and expansion without service interruption to critical IT equipment.",
        "Advanced power monitoring and management systems track real-time consumption, efficiency metrics, and environmental conditions, enabling proactive management and optimization of data center operations.",
        "Dual-path power distribution with automatic and static transfer switches ensures seamless failover during power events, protecting critical data and maintaining continuous service availability.",
        "Energy-efficient power conversion and distribution systems minimize power losses and heat generation, reducing cooling requirements and overall operational costs while maximizing available IT capacity.",
        "Scalable architecture supports data center growth from initial deployment through multiple expansion phases, with standardized components and designs that ensure consistent performance and reliability."
      ]
    },
    {
      id: 2,
      title: "Precision Cooling Systems",
      icon: <FiThermometer className="h-8 w-8" />,
      paragraphs: [
        "Precision cooling solutions maintain optimal temperature and humidity conditions for IT equipment while maximizing energy efficiency through advanced control systems and intelligent load management.",
        "Hot aisle/cold aisle containment systems optimize airflow patterns and prevent hot and cold air mixing, significantly improving cooling efficiency and reducing energy consumption in data center environments.",
        "Variable capacity cooling systems automatically adjust cooling output based on actual heat loads, providing precise temperature control while minimizing energy waste during periods of lower IT utilization.",
        "Redundant cooling architecture with N+1 or N+2 configurations ensures continuous cooling availability even during equipment maintenance or unexpected failures, protecting valuable IT infrastructure.",
        "Advanced monitoring and control systems track temperature, humidity, and airflow throughout the data center, providing early warning of potential issues and enabling proactive maintenance.",
        "Free cooling and economizer systems take advantage of favorable outdoor conditions to reduce mechanical cooling requirements, significantly lowering energy costs and environmental impact."
      ]
    },
    {
      id: 3,
      title: "Uninterrupted Power Supply Systems",
      icon: <FiCpu className="h-8 w-8" />,
      paragraphs: [
        "Enterprise-grade UPS systems provide clean, reliable power during utility outages and power quality events, protecting critical data center equipment from damage and data loss.",
        "Modular UPS architecture allows for scalable deployment and maintenance without service interruption, with hot-swappable modules that can be added or replaced during operation.",
        "Battery monitoring and management systems track battery health, predict replacement needs, and optimize charging cycles to maximize battery life and ensure reliable backup power availability.",
        "Distributed UPS topology reduces single points of failure while providing efficient power conversion and improved system reliability through multiple smaller UPS units rather than single large systems.",
        "Advanced power conditioning features include voltage regulation, frequency control, and harmonic filtering to ensure clean power delivery that meets the strict requirements of sensitive IT equipment.",
        "Integration with building management systems and remote monitoring platforms enables centralized oversight of UPS performance, battery status, and maintenance requirements across multiple data centers."
      ]
    },
    {
      id: 4,
      title: "Data Center Monitoring Solutions",
      icon: <FiMonitor className="h-8 w-8" />,
      paragraphs: [
        "Comprehensive monitoring solutions provide real-time visibility into all aspects of data center operations, including power, cooling, security, and environmental conditions from centralized dashboards.",
        "Environmental monitoring systems track temperature, humidity, air pressure, and air quality throughout the data center, alerting operators to conditions that could threaten equipment reliability.",
        "Power monitoring and metering systems measure consumption at multiple levels from facility entrance to individual servers, enabling detailed analysis of power usage effectiveness (PUE) and optimization opportunities.",
        "Intelligent alerting and notification systems provide early warning of potential issues through multiple communication channels, enabling rapid response to prevent service disruptions.",
        "Historical data logging and analytics capabilities identify trends, predict future needs, and support capacity planning decisions for both power and cooling infrastructure.",
        "Integration with IT service management platforms creates a complete operational picture that correlates infrastructure performance with application and service availability metrics."
      ]
    },
    {
      id: 5,
      title: "Security and Access Control",
      icon: <FiShield className="h-8 w-8" />,
      paragraphs: [
        "Multi-layered physical security systems protect data center assets through perimeter security, access control, surveillance, and intrusion detection tailored specifically for mission-critical facilities.",
        "Biometric access control systems provide secure authentication using fingerprint, iris, or facial recognition technology, ensuring that only authorized personnel can access sensitive areas.",
        "Comprehensive video surveillance with intelligent analytics monitors all areas of the data center, providing real-time alerts for unauthorized access attempts or suspicious activities.",
        "Mantrap entry systems and security vestibules provide controlled access to critical areas, preventing tailgating and ensuring proper authentication before entry to server rooms.",
        "Integration with fire suppression and life safety systems ensures coordinated response to emergency situations while maintaining security protocols and protecting personnel safety.",
        "Audit trails and compliance reporting track all access events and security activities, supporting regulatory requirements and providing detailed forensic capabilities for security investigations."
      ]
    }
  ];

  const imageGallery = [
    {
      title: "Data Center Operations Center",
      description: "State-of-the-art network operations center providing 24/7 monitoring and management of critical data center infrastructure and IT systems.",
      image: "/datacenter-1.jpg"
    },
    {
      title: "Server Room Infrastructure",
      description: "Mission-critical server room with redundant power distribution, precision cooling, and advanced monitoring systems for maximum uptime.",
      image: "/datacenter-2.jpg"
    },
    {
      title: "UPS Power Systems",
      description: "Enterprise-grade uninterruptible power supply systems providing clean, reliable backup power for critical data center operations.",
      image: "/datacenter-3.jpg"
    },
    {
      title: "Cooling Infrastructure",
      description: "Advanced precision cooling systems with hot aisle containment and variable capacity controls for optimal energy efficiency.",
      image: "/datacenter-4.jpg"
    },
    {
      title: "Security Control Center",
      description: "Comprehensive security monitoring and access control systems protecting critical data center assets and ensuring authorized access only.",
      image: "/datacenter-5.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-[url('/6.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-blue-700/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Data Center Solutions</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Mission-critical data center power and cooling solutions
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Ensuring Mission-Critical Reliability</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our data center solutions provide the highest levels of reliability, efficiency, and security for mission-critical operations, ensuring your digital infrastructure operates at peak performance 24/7.
            </p>
          </div>

          {/* Main Content Sections */}
          <div className="space-y-16 mb-20">
            {sections.map((section, index) => (
              <div key={section.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-700">
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
                      src={`/datacenter-section-${section.id}.jpg`}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Data Center Solution Gallery</h2>
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
          <div className="bg-gradient-to-r from-[#0a1f55] to-[#132b74] rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Data Center?</h2>
              <p className="text-lg mb-8 text-blue-100">
                Contact our data center experts to discuss your mission-critical infrastructure requirements and ensure maximum uptime and efficiency.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white text-[#0a1f55] hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Plan Your Data Center</span>
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