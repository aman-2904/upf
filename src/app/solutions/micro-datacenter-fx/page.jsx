"use client";
import React from "react";
import { FiServer, FiCpu, FiThermometer, FiShield, FiZap } from "react-icons/fi";

export default function MicroDataCentreFXSolutions() {
  const sections = [
    {
      id: 1,
      title: "Compact Infrastructure Design",
      icon: <FiServer className="h-8 w-8" />,
      paragraphs: [
        "Micro data centre solutions provide enterprise-grade computing infrastructure in compact, self-contained units designed for edge computing, remote locations, and space-constrained environments where traditional data centers are not feasible.",
        "Modular rack systems maximize computing density while maintaining optimal airflow and accessibility for maintenance, incorporating standardized 19-inch rack mounting with efficient cable management and component organization.",
        "Pre-configured and pre-tested systems reduce deployment time and complexity, arriving ready for immediate installation with all critical components integrated and validated for optimal performance and reliability.",
        "Scalable architecture allows multiple micro data centre units to be linked together for increased capacity, providing flexible growth options without requiring complete infrastructure redesign or major capital investment.",
        "Standardized form factors and industry-compliant designs ensure compatibility with existing IT equipment and future technology upgrades, protecting investment and providing long-term flexibility.",
        "Space-efficient design optimizes every cubic foot of available space while maintaining compliance with industry standards for accessibility, safety, and environmental controls."
      ]
    },
    {
      id: 2,
      title: "Edge Computing Capabilities",
      icon: <FiCpu className="h-8 w-8" />,
      paragraphs: [
        "Edge computing architecture brings processing power closer to data sources and end users, reducing latency, improving performance, and enabling real-time decision making for IoT, industrial automation, and distributed applications.",
        "High-performance computing resources including multi-core processors, high-speed memory, and solid-state storage provide the computational power needed for AI, machine learning, and data analytics at the network edge.",
        "Low-latency networking and high-bandwidth connectivity ensure rapid data processing and transmission, supporting time-critical applications such as autonomous vehicles, industrial control systems, and augmented reality.",
        "Distributed processing capabilities enable load balancing across multiple edge locations, improving overall system resilience and ensuring continued operation even if individual sites experience issues.",
        "Real-time data analytics and processing reduce the need to transmit large volumes of raw data to centralized cloud facilities, improving bandwidth efficiency and reducing operational costs.",
        "Support for containerized applications and microservices architectures enables flexible deployment of edge computing workloads with automated scaling and resource management."
      ]
    },
    {
      id: 3,
      title: "Integrated Cooling Systems",
      icon: <FiThermometer className="h-8 w-8" />,
      paragraphs: [
        "Advanced cooling technologies maintain optimal operating temperatures for high-density computing equipment in compact form factors, utilizing efficient heat removal methods that minimize energy consumption and noise levels.",
        "Liquid cooling solutions provide superior heat dissipation for high-performance processors and GPUs, enabling maximum computing density while maintaining component reliability and extending equipment lifespan.",
        "Intelligent thermal management systems automatically adjust cooling output based on real-time temperature monitoring and workload demands, optimizing energy efficiency while ensuring component protection.",
        "Redundant cooling systems with automatic failover capabilities ensure continuous operation even during cooling system maintenance or unexpected failures, protecting valuable computing equipment and data.",
        "Ambient temperature monitoring and control maintain optimal environmental conditions throughout the micro data centre, protecting sensitive equipment from temperature fluctuations and humidity variations.",
        "Energy-efficient cooling designs minimize power consumption and heat generation, reducing operational costs and environmental impact while maintaining peak system performance."
      ]
    },
    {
      id: 4,
      title: "Security and Access Control",
      icon: <FiShield className="h-8 w-8" />,
      paragraphs: [
        "Multi-layered physical security systems protect critical computing infrastructure through secure enclosures, access control systems, and environmental monitoring designed specifically for unmanned edge locations.",
        "Tamper-evident seals and intrusion detection systems provide immediate notification of unauthorized access attempts, enabling rapid security response and forensic investigation capabilities.",
        "Biometric access control and smart card authentication ensure only authorized personnel can access critical computing equipment, with detailed audit trails of all access events and activities.",
        "Environmental monitoring systems track temperature, humidity, air quality, and other conditions that could impact equipment reliability, providing early warning of potential issues.",
        "Remote monitoring and management capabilities enable centralized oversight of distributed micro data centres, reducing the need for on-site personnel while maintaining security and operational control.",
        "Compliance with industry security standards including SOC 2, ISO 27001, and NIST frameworks ensures that micro data centre deployments meet enterprise security requirements and regulatory compliance needs."
      ]
    },
    {
      id: 5,
      title: "Power and UPS Systems",
      icon: <FiZap className="h-8 w-8" />,
      paragraphs: [
        "Integrated uninterruptible power supply (UPS) systems provide clean, reliable power with seamless backup capabilities, protecting critical computing equipment from power outages and electrical disturbances.",
        "High-efficiency power distribution units (PDUs) optimize electrical conversion and minimize power losses, reducing operational costs and heat generation while providing precise power monitoring and control.",
        "Battery backup systems with intelligent management provide extended runtime during power outages, with automatic testing and monitoring to ensure batteries remain ready when needed most.",
        "Power monitoring and analytics track energy consumption patterns and efficiency metrics, enabling optimization of power usage and identification of potential issues before they impact operations.",
        "Renewable energy integration capabilities support solar, wind, and other clean energy sources, reducing environmental impact and operational costs while improving energy independence.",
        "Remote power management enables administrators to monitor and control power systems from centralized locations, providing operational flexibility and reducing the need for on-site maintenance visits."
      ]
    }
  ];

  const imageGallery = [
    {
      title: "Micro Data Centre Unit",
      description: "Complete micro data centre solution in compact form factor providing enterprise-grade computing infrastructure for edge locations and space-constrained environments.",
      image: "/micro-datacenter-1.jpg"
    },
    {
      title: "Edge Computing Rack",
      description: "High-density computing equipment optimized for edge applications with integrated cooling and power systems for maximum performance in minimal space.",
      image: "/micro-datacenter-2.jpg"
    },
    {
      title: "Cooling System Integration",
      description: "Advanced liquid cooling technology providing efficient heat dissipation for high-performance computing equipment in compact micro data centre deployments.",
      image: "/micro-datacenter-3.jpg"
    },
    {
      title: "Power and UPS Systems",
      description: "Integrated power distribution and backup systems ensuring reliable operation and protection of critical computing infrastructure in edge locations.",
      image: "/micro-datacenter-4.jpg"
    },
    {
      title: "Remote Monitoring Interface",
      description: "Centralized management dashboard providing real-time monitoring and control of distributed micro data centre deployments from a single interface.",
      image: "/micro-datacenter-5.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-[url('/10.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-blue-700/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Micro Data Centre FX</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Compact edge computing solutions for distributed infrastructure
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Edge Computing Revolution</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our Micro Data Centre FX solutions bring enterprise-grade computing infrastructure to the edge, enabling low-latency processing, improved performance, and distributed computing capabilities in compact, efficient form factors.
            </p>
          </div>

          {/* Main Content Sections */}
          <div className="space-y-16 mb-20">
            {sections.map((section, index) => (
              <div key={section.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700">
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
                      src={`/micro-datacenter-section-${section.id}.jpg`}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Micro Data Centre FX Gallery</h2>
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
          <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Deploy Edge Computing?</h2>
              <p className="text-lg mb-8 text-indigo-100">
                Contact our edge computing specialists to discuss your micro data centre requirements and discover how our FX solutions can bring computing power closer to your data and users.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white text-indigo-700 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Explore Edge Solutions</span>
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