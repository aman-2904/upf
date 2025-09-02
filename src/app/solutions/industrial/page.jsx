"use client";
import React from "react";
import { FiTool, FiCpu, FiShield, FiSettings, FiZap } from "react-icons/fi";

export default function IndustrialSolutions() {
  const sections = [
    {
      id: 1,
      title: "Industrial Power Distribution Systems",
      icon: <FiZap className="h-8 w-8" />,
      paragraphs: [
        "Advanced industrial power distribution systems provide reliable, efficient, and safe electrical infrastructure for manufacturing facilities, processing plants, and other heavy industrial applications requiring high-capacity power management.",
        "Robust switchgear and distribution panels are engineered to handle extreme industrial environments, featuring arc-resistant designs, advanced protection systems, and modular construction for easy maintenance and expansion.",
        "Power quality solutions include harmonic filtering, voltage regulation, and power factor correction to ensure clean, stable power delivery that protects sensitive equipment and optimizes operational efficiency.",
        "Redundant power systems and automatic transfer capabilities ensure continuous operation during utility outages or equipment failures, minimizing costly production downtime and protecting critical processes.",
        "Smart metering and monitoring systems provide real-time visibility into power consumption, demand patterns, and system performance, enabling proactive maintenance and energy optimization strategies.",
        "Compliance with industrial safety standards including IEEE, NEMA, and OSHA requirements ensures worker safety and regulatory compliance while maintaining optimal system performance and reliability."
      ]
    },
    {
      id: 2,
      title: "Heavy Machinery Electrical Solutions",
      icon: <FiCpu className="h-8 w-8" />,
      paragraphs: [
        "Specialized electrical solutions for heavy industrial machinery including motor control centers, variable frequency drives, and custom control panels designed to optimize performance and extend equipment life.",
        "Motor protection and control systems provide precise speed control, torque management, and overload protection for critical industrial processes, ensuring reliable operation under demanding conditions.",
        "Custom automation interfaces integrate machinery control with plant-wide systems, enabling coordinated operation, remote monitoring, and predictive maintenance capabilities for improved efficiency.",
        "Energy-efficient motor technologies and drive systems reduce power consumption while maintaining or improving performance, resulting in significant operational cost savings and reduced environmental impact.",
        "Predictive maintenance systems use vibration analysis, thermal monitoring, and electrical signature analysis to detect potential failures before they occur, preventing costly unplanned downtime.",
        "Retrofit and upgrade services modernize existing machinery with current technology, improving efficiency, safety, and reliability while extending the useful life of capital equipment investments."
      ]
    },
    {
      id: 3,
      title: "Factory Automation and Control Systems",
      icon: <FiSettings className="h-8 w-8" />,
      paragraphs: [
        "Comprehensive factory automation solutions integrate manufacturing processes, material handling, quality control, and information systems to optimize production efficiency and product quality.",
        "Programmable logic controllers (PLCs) and distributed control systems (DCS) provide precise process control with real-time monitoring, data logging, and automatic adjustment capabilities.",
        "Human-machine interfaces (HMI) and supervisory control systems enable operators to monitor and control complex manufacturing processes from centralized control rooms with intuitive graphical displays.",
        "Industrial networking and communication protocols ensure seamless data exchange between automation systems, enterprise software, and remote monitoring platforms for complete operational visibility.",
        "Safety instrumented systems (SIS) and emergency shutdown systems protect personnel, equipment, and the environment by automatically responding to hazardous conditions with fail-safe operation.",
        "Integration with enterprise resource planning (ERP) and manufacturing execution systems (MES) creates a complete digital manufacturing environment that optimizes production scheduling and resource utilization."
      ]
    },
    {
      id: 4,
      title: "Industrial Safety and Compliance",
      icon: <FiShield className="h-8 w-8" />,
      paragraphs: [
        "Comprehensive safety systems designed to meet stringent industrial safety standards, protecting workers, equipment, and the environment through redundant safety measures and fail-safe designs.",
        "Arc flash analysis and mitigation includes detailed studies, protective equipment recommendations, and system modifications to reduce arc flash hazards and ensure worker safety during maintenance operations.",
        "Grounding and bonding systems provide effective fault current paths and protection against electrical hazards, ensuring safe operation of industrial equipment and compliance with safety codes.",
        "Emergency power systems and life safety systems ensure continued operation of critical safety equipment during power outages, including emergency lighting, ventilation, and communication systems.",
        "Environmental monitoring and control systems track air quality, temperature, humidity, and other environmental parameters to maintain safe working conditions and regulatory compliance.",
        "Regular safety audits and compliance assessments ensure ongoing adherence to evolving safety standards and regulations, with recommendations for improvements and updates as needed."
      ]
    },
    {
      id: 5,
      title: "Process Optimization Technology",
      icon: <FiTool className="h-8 w-8" />,
      paragraphs: [
        "Advanced process optimization technologies use data analytics, machine learning, and real-time control to maximize production efficiency, reduce waste, and improve product quality.",
        "Real-time process monitoring collects and analyzes thousands of data points per second to identify optimization opportunities and automatically adjust process parameters for optimal performance.",
        "Energy management systems optimize power consumption across industrial processes, implementing demand response strategies and load scheduling to minimize energy costs while maintaining production targets.",
        "Quality control automation uses advanced sensors, vision systems, and statistical process control to ensure consistent product quality and reduce defect rates throughout the manufacturing process.",
        "Predictive analytics identify patterns in process data to forecast equipment performance, predict maintenance needs, and optimize production schedules for maximum efficiency and minimum downtime.",
        "Continuous improvement platforms provide tools for ongoing process optimization, including performance tracking, root cause analysis, and implementation of best practices across multiple production lines."
      ]
    }
  ];

  const imageGallery = [
    {
      title: "Industrial Control Room",
      description: "State-of-the-art control room featuring advanced monitoring systems and automation controls for comprehensive industrial process management and optimization.",
      image: "/industrial-1.jpg"
    },
    {
      title: "Power Distribution Center",
      description: "High-capacity industrial power distribution facility with redundant systems and advanced protection mechanisms for reliable power delivery.",
      image: "/industrial-2.jpg"
    },
    {
      title: "Automated Manufacturing Line",
      description: "Fully automated production line with integrated control systems, quality monitoring, and predictive maintenance capabilities.",
      image: "/industrial-3.jpg"
    },
    {
      title: "Safety Systems Integration",
      description: "Comprehensive industrial safety systems including emergency shutdown, fire protection, and environmental monitoring for worker protection.",
      image: "/industrial-4.jpg"
    },
    {
      title: "Process Optimization Center",
      description: "Advanced analytics and optimization center that maximizes industrial efficiency through real-time monitoring and intelligent control systems.",
      image: "/industrial-5.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-[url('/5.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-blue-700/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Industrial Solutions</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Heavy-duty industrial power and infrastructure solutions
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Powering Industrial Excellence</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our industrial solutions provide robust, reliable, and efficient power systems designed to meet the demanding requirements of heavy industrial applications while ensuring safety and compliance.
            </p>
          </div>

          {/* Main Content Sections */}
          <div className="space-y-16 mb-20">
            {sections.map((section, index) => (
              <div key={section.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-700">
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
                      src={`/industrial-section-${section.id}.jpg`}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Industrial Solution Gallery</h2>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Power Your Industry?</h2>
              <p className="text-lg mb-8 text-blue-100">
                Contact our industrial experts to discuss your heavy-duty power and automation requirements and discover how our solutions can optimize your operations.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white text-[#0a1f55] hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Get Industrial Quote</span>
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