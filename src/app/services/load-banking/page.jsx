"use client";
import React from "react";
import { FiSettings, FiTool, FiZap, FiShield, FiCpu } from "react-icons/fi";

export default function SpecialisedServices() {
  const sections = [
    {
      id: 1,
      title: "Custom Electrical Solutions",
      icon: <FiSettings className="h-8 w-8" />,
      paragraphs: [
        "Our specialized electrical solutions are tailored to meet unique industry requirements and challenging applications that standard solutions cannot address effectively.",
        "Custom control panel design and manufacturing creates application-specific solutions for industrial processes, building automation, and specialized equipment control requirements.",
        "Engineered solutions for hazardous locations include explosion-proof equipment, intrinsically safe systems, and specialized protection methods for chemical, petrochemical, and mining applications.",
        "High-voltage electrical services encompass testing, maintenance, and installation of medium and high-voltage systems requiring specialized expertise and safety procedures.",
        "Emergency electrical services provide rapid response for critical system failures, ensuring minimal downtime and swift restoration of essential electrical services."
      ]
    },
    {
      id: 2,
      title: "Advanced Electrical Testing",
      icon: <FiZap className="h-8 w-8" />,
      paragraphs: [
        "Specialized testing services go beyond standard electrical testing to address complex systems and unique requirements using advanced equipment and specialized techniques.",
        "High-voltage testing includes dielectric strength testing, partial discharge analysis, and insulation evaluation for transformers, switchgear, and cable systems.",
        "Power system studies encompass load flow analysis, short circuit studies, protective device coordination, and arc flash analysis for complex electrical installations.",
        "Electromagnetic compatibility (EMC) testing ensures that electrical equipment operates correctly in the presence of electromagnetic interference and does not create harmful emissions.",
        "Specialized calibration services for electrical test equipment ensure accuracy and traceability to national standards for critical measurement applications."
      ]
    },
    {
      id: 3,
      title: "Industrial Automation Integration",
      icon: <FiCpu className="h-8 w-8" />,
      paragraphs: [
        "Comprehensive automation integration services combine electrical, control, and information systems to create seamless industrial automation solutions for complex manufacturing processes.",
        "SCADA (Supervisory Control and Data Acquisition) system implementation provides centralized monitoring and control capabilities for distributed industrial processes and facilities.",
        "PLC programming and integration creates customized control logic for specialized machinery and processes that require precise automation and safety interlocks.",
        "Industrial networking solutions implement robust communication systems using Ethernet/IP, Profibus, Modbus, and other industrial protocols for reliable data exchange.",
        "Human-Machine Interface (HMI) development provides intuitive operator interfaces for complex control systems, enhancing productivity and reducing operator training requirements."
      ]
    },
    {
      id: 4,
      title: "Energy Management Systems",
      icon: <FiShield className="h-8 w-8" />,
      paragraphs: [
        "Advanced energy management systems provide comprehensive monitoring, analysis, and optimization of electrical energy consumption for complex facilities and industrial processes.",
        "Real-time energy monitoring systems track consumption patterns, identify inefficiencies, and provide actionable data for energy optimization strategies and cost reduction.",
        "Demand response automation enables facilities to participate in utility demand response programs, reducing energy costs during peak demand periods through automated load management.",
        "Power quality monitoring and analysis identifies electrical disturbances that can affect sensitive equipment and processes, enabling proactive mitigation strategies.",
        "Energy reporting and analytics provide detailed insights into energy usage patterns, cost allocation, and opportunities for efficiency improvements and sustainability initiatives."
      ]
    },
    {
      id: 5,
      title: "Specialized Maintenance Programs",
      icon: <FiTool className="h-8 w-8" />,
      paragraphs: [
        "Customized maintenance programs address the unique requirements of specialized electrical equipment and critical systems that require expert knowledge and specialized procedures.",
        "Predictive maintenance using vibration analysis, thermal imaging, oil analysis, and electrical signature analysis prevents unexpected failures and optimizes maintenance scheduling.",
        "Condition-based maintenance strategies use real-time monitoring data to determine optimal maintenance timing based on actual equipment condition rather than arbitrary schedules.",
        "Specialized equipment overhaul and refurbishment services extend the life of critical electrical equipment through expert repair and upgrade of components and systems.",
        "Emergency maintenance services provide rapid response capabilities for critical system failures, ensuring minimal downtime and swift restoration of essential operations."
      ]
    }
  ];

  const imageGallery = [
    {
      title: "Custom Control Panel",
      description: "Specialized control panel design and manufacturing for unique industrial applications requiring custom electrical solutions and advanced functionality.",
      image: "/specialised-1.jpg"
    },
    {
      title: "High-Voltage Testing",
      description: "Advanced high-voltage testing equipment and procedures for comprehensive evaluation of power system components and insulation integrity.",
      image: "/specialised-2.jpg"
    },
    {
      title: "Automation Integration",
      description: "Complex industrial automation integration combining multiple systems and technologies for seamless process control and monitoring.",
      image: "/specialised-3.jpg"
    },
    {
      title: "Energy Management System",
      description: "Sophisticated energy management platform providing real-time monitoring, analysis, and optimization of electrical energy consumption.",
      image: "/specialised-4.jpg"
    },
    {
      title: "Predictive Maintenance",
      description: "Advanced predictive maintenance technologies using multiple analysis techniques to prevent equipment failures and optimize maintenance strategies.",
      image: "/specialised-5.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-[url('/specialised-hero.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-indigo-700/60 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Specialised Services</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Expert solutions for unique electrical challenges and requirements
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Advanced Electrical Solutions for Complex Requirements</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our specialised services address unique electrical challenges and complex requirements that demand expert knowledge, advanced equipment, and innovative solutions.
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
                      src={`/specialised-section-${section.id}.jpg`}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Specialised Services Gallery</h2>
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
          <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Specialised Solutions?</h2>
              <p className="text-lg mb-8 text-purple-100">
                Contact our specialists to discuss your unique electrical requirements and discover how our advanced solutions can address your complex challenges.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white text-purple-700 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Discuss Requirements</span>
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