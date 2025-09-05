"use client";
import React from "react";
import { FiPower, FiShield, FiAlertCircle, FiCheckSquare, FiTool } from "react-icons/fi";

export default function SocketTesting() {
  const sections = [
    {
      id: 1,
      title: "Electrical Socket Safety Testing",
  icon: <FiPower className="h-8 w-8" />, 
      paragraphs: [
        "Comprehensive electrical socket testing ensures that all power outlets provide safe and reliable electrical connections while meeting strict safety standards and regulatory requirements for residential and commercial installations.",
        "Visual inspection and physical examination identify obvious defects such as damaged faceplates, loose mounting, burned contacts, or improper installation that could create safety hazards or operational problems.",
        "Electrical continuity testing verifies proper connections between socket terminals and building wiring systems, ensuring that power is delivered safely and efficiently to connected devices and equipment.",
        "Insulation resistance measurements confirm that electrical insulation between conductors and ground systems meets minimum safety requirements and will prevent dangerous electrical leakage or shock hazards.",
        "Load testing validates that sockets can safely handle rated current without overheating, voltage drop, or other performance issues that could damage connected equipment or create fire hazards."
      ]
    },
    {
      id: 2,
      title: "RCD and RCBO Functionality Testing",
      icon: <FiShield className="h-8 w-8" />,
      paragraphs: [
        "Residual Current Device (RCD) testing ensures that protective devices respond correctly to earth leakage currents, providing essential protection against electrocution and electrical fires.",
        "Trip time measurements verify that RCDs operate within specified time limits when dangerous earth leakage occurs, ensuring rapid disconnection of power to prevent injury or equipment damage.",
        "Sensitivity testing confirms that RCDs trip at the correct current levels and do not cause nuisance tripping during normal operation of electrical equipment with minor leakage currents.",
        "RCBO (Residual Current Breaker with Overload protection) testing combines earth leakage and overcurrent protection verification to ensure complete circuit protection functionality.",
        "Regular testing schedules ensure that protective devices continue to function correctly over time and provide reliable protection against electrical hazards throughout their service life."
      ]
    },
    {
      id: 3,
      title: "Polarity and Wiring Verification",
      icon: <FiCheckSquare className="h-8 w-8" />,
      paragraphs: [
        "Polarity testing ensures that electrical sockets are correctly wired with proper phase, neutral, and earth connections, preventing equipment damage and safety hazards from incorrect polarity.",
        "Phase sequence testing in three-phase installations verifies correct rotation and phase relationships to ensure proper operation of motors and other three-phase equipment.",
        "Earth continuity testing confirms that protective earth connections provide reliable paths for fault currents and maintain safe touch voltages during equipment failures.",
        "Socket outlet testing includes verification of proper pin assignments and contact resistance to ensure reliable connections and prevent arcing or overheating at connection points.",
        "Documentation of wiring verification provides records required for electrical inspections, insurance compliance, and maintenance planning to support ongoing electrical safety programs."
      ]
    },
    {
      id: 4,
      title: "Power Quality Assessment",
      icon: <FiAlertCircle className="h-8 w-8" />,
      paragraphs: [
        "Power quality testing at socket outlets identifies voltage variations, harmonic distortion, and other electrical disturbances that could affect the performance of sensitive electronic equipment.",
        "Voltage measurement and analysis ensures that supply voltages remain within acceptable limits for connected equipment and comply with electrical standards and utility requirements.",
        "Frequency stability testing verifies that electrical frequency remains constant and within tolerance limits required for proper operation of clocks, motors, and frequency-sensitive equipment.",
        "Harmonic analysis identifies distortion in electrical waveforms that could cause overheating, interference, or malfunction in electronic devices and computer equipment.",
        "Power factor measurement helps identify inefficient electrical loads and provides data needed for power factor correction and energy efficiency improvements."
      ]
    },
    {
      id: 5,
      title: "Maintenance and Compliance Reporting",
      icon: <FiTool className="h-8 w-8" />,
      paragraphs: [
        "Comprehensive testing reports document all socket testing results, identified defects, and recommendations for corrective action to maintain electrical safety and compliance.",
        "Regulatory compliance verification ensures that electrical installations meet current electrical codes and standards including local building codes and electrical safety requirements.",
        "Preventive maintenance recommendations based on testing results help prevent electrical problems before they cause equipment damage, safety hazards, or operational disruptions.",
        "Test certificates provide official documentation required for electrical inspections, insurance claims, and regulatory compliance demonstrations to authorities having jurisdiction.",
        "Follow-up testing schedules ensure that electrical systems continue to meet safety and performance requirements throughout their operational life with appropriate maintenance intervals."
      ]
    }
  ];

  const imageGallery = [
    {
      title: "Socket Testing Equipment",
      description: "Professional socket testing instruments for comprehensive electrical outlet safety and performance verification in residential and commercial installations.",
      image: "/socket-testing-1.jpg"
    },
    {
      title: "RCD Testing Procedure",
      description: "Systematic testing of Residual Current Devices to ensure proper operation and protection against earth leakage and electrocution hazards.",
      image: "/socket-testing-2.jpg"
    },
    {
      title: "Polarity Verification",
      description: "Detailed polarity and wiring verification testing to ensure correct electrical connections and prevent equipment damage from incorrect wiring.",
      image: "/socket-testing-3.jpg"
    },
    {
      title: "Power Quality Analysis",
      description: "Advanced power quality testing at electrical outlets to identify voltage variations, harmonics, and other electrical disturbances affecting equipment performance.",
      image: "/socket-testing-4.jpg"
    },
    {
      title: "Testing Documentation",
      description: "Comprehensive test reports and certificates documenting socket testing results, compliance status, and maintenance recommendations for electrical safety.",
      image: "/socket-testing-5.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-[url('/socket-testing-hero.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/80 to-orange-700/60 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Socket Testing</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Comprehensive electrical outlet safety and performance testing
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Ensuring Electrical Outlet Safety and Reliability</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our socket testing services provide thorough assessment of electrical outlets to ensure safe operation, regulatory compliance, and optimal performance for all types of electrical installations.
            </p>
          </div>

          {/* Main Content Sections */}
          <div className="space-y-16 mb-20">
            {sections.map((section, index) => (
              <div key={section.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-700">
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
                      src={`/socket-testing-section-${section.id}.jpg`}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Socket Testing Gallery</h2>
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
          <div className="bg-gradient-to-r from-yellow-600 to-orange-700 rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Socket Testing Services?</h2>
              <p className="text-lg mb-8 text-yellow-100">
                Contact our electrical testing experts to schedule comprehensive socket testing and ensure your electrical outlets are safe, compliant, and performing optimally.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white text-yellow-700 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Schedule Testing</span>
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