"use client";
import React from "react";
import { FiThermometer, FiCamera, FiAlertTriangle, FiEye, FiTrendingUp } from "react-icons/fi";

export default function Thermography() {
  const sections = [
    {
      id: 1,
      title: "Infrared Thermal Imaging",
      icon: <FiCamera className="h-8 w-8" />,
      paragraphs: [
        "Advanced infrared thermal imaging technology captures temperature variations across electrical equipment and connections, revealing hotspots and potential failure points before they cause costly downtime or safety hazards.",
        "High-resolution thermal cameras detect temperature differences as small as 0.1°C, providing precise identification of overheating components, loose connections, and overloaded circuits that require immediate attention.",
        "Non-contact temperature measurement ensures safe inspection of energized equipment without interrupting operations, allowing for comprehensive assessment while maintaining continuous production.",
        "Thermal imaging surveys cover all critical electrical components including switchgear, transformers, motor control centers, and distribution panels to ensure comprehensive facility assessment.",
        "Professional thermal imaging technicians use calibrated equipment and follow standardized procedures to ensure accurate and reliable temperature measurements and analysis."
      ]
    },
    {
      id: 2,
      title: "Electrical Hotspot Detection",
      icon: <FiAlertTriangle className="h-8 w-8" />,
      paragraphs: [
        "Systematic hotspot detection identifies electrical connections and components operating at elevated temperatures, indicating increased resistance due to corrosion, looseness, or overloading conditions.",
        "Temperature threshold analysis compares measured temperatures against established standards and manufacturer specifications to determine the severity of identified thermal anomalies.",
        "Priority classification of thermal findings helps maintenance teams focus on the most critical issues first, preventing equipment failures and safety incidents through targeted corrective action.",
        "Root cause analysis determines whether hotspots result from loose connections, overloading, contamination, or component degradation, enabling appropriate corrective measures.",
        "Follow-up thermal inspections verify the effectiveness of corrective actions and ensure that identified problems have been properly resolved and temperatures returned to normal ranges."
      ]
    },
    {
      id: 3,
      title: "Preventive Maintenance Planning",
      icon: <FiTrendingUp className="h-8 w-8" />,
      paragraphs: [
        "Thermal imaging data supports predictive maintenance programs by establishing baseline temperatures and tracking thermal trends over time to predict when maintenance will be required.",
        "Maintenance scheduling optimization uses thermal inspection results to prioritize work orders based on equipment condition rather than arbitrary time intervals, reducing costs and improving reliability.",
        "Historical thermal data analysis reveals patterns in equipment degradation and helps establish optimal inspection frequencies for different types of electrical components.",
        "Integration with computerized maintenance management systems (CMMS) enables automatic work order generation when thermal conditions exceed predetermined thresholds.",
        "Cost-benefit analysis demonstrates the value of thermal inspection programs by quantifying prevented failures, avoided downtime, and extended equipment life."
      ]
    },
    {
      id: 4,
      title: "Safety and Compliance Assessment",
      icon: <FiEye className="h-8 w-8" />,
      paragraphs: [
        "Thermal safety assessments identify overheating conditions that could pose fire hazards or create unsafe working conditions for personnel operating electrical equipment.",
        "NFPA 70E compliance verification ensures that electrical equipment temperatures remain within safe limits and that thermal conditions do not create additional arc flash or electrocution hazards.",
        "Insurance compliance documentation provides thermal inspection reports that may be required by insurance companies to maintain coverage and demonstrate proactive maintenance practices.",
        "Regulatory compliance support includes documentation required for OSHA inspections and other regulatory requirements related to electrical safety and equipment maintenance.",
        "Safety training includes education on thermal hazards and proper response procedures when elevated temperatures are detected during routine operations."
      ]
    },
    {
      id: 5,
      title: "Post-Repair Verification",
      icon: <FiThermometer className="h-8 w-8" />,
      paragraphs: [
        "Post-repair thermal verification confirms that corrective actions have successfully resolved identified thermal issues and that equipment temperatures have returned to acceptable levels.",
        "Comparative analysis between pre-repair and post-repair thermal images provides visual documentation of repair effectiveness and system improvement.",
        "Quality assurance protocols ensure that all repairs meet temperature specifications and that no new thermal issues have been introduced during the repair process.",
        "Documentation and reporting provide complete records of thermal conditions before and after repairs, supporting warranty claims and maintenance history tracking.",
        "Ongoing monitoring schedules are established to ensure that repaired equipment continues to operate within acceptable thermal limits over time."
      ]
    }
  ];

  const imageGallery = [
    {
      title: "Thermal Camera in Action",
      description: "Professional thermal imaging camera capturing temperature variations in electrical equipment to identify hotspots and potential failure points.",
      image: "/thermography-1.jpg"
    },
    {
      title: "Electrical Panel Thermal Image",
      description: "Thermal image of electrical panel showing temperature distribution and identifying overheating connections that require immediate attention.",
      image: "/thermography-2.jpg"
    },
    {
      title: "Motor Control Center Inspection",
      description: "Comprehensive thermal inspection of motor control center revealing hotspots in motor starters and control circuits.",
      image: "/thermography-3.jpg"
    },
    {
      title: "Transformer Thermal Analysis",
      description: "Thermal analysis of power transformer showing temperature patterns and identifying potential cooling system issues or overloading conditions.",
      image: "/thermography-4.jpg"
    },
    {
      title: "Thermal Inspection Report",
      description: "Detailed thermal inspection report with temperature measurements, thermal images, and prioritized recommendations for corrective action.",
      image: "/thermography-5.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-[url('/thermography-hero.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-orange-700/60 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Thermography Services</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Advanced thermal imaging for electrical system assessment
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Precision Thermal Imaging Solutions</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our thermography services use advanced infrared technology to identify electrical hotspots and potential failure points, enabling proactive maintenance and preventing costly equipment failures.
            </p>
          </div>

          {/* Main Content Sections */}
          <div className="space-y-16 mb-20">
            {sections.map((section, index) => (
              <div key={section.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-700">
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
                      src={`/thermography-section-${section.id}.jpg`}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Thermography Service Gallery</h2>
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
          <div className="bg-gradient-to-r from-red-600 to-orange-700 rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Thermal Inspection?</h2>
              <p className="text-lg mb-8 text-red-100">
                Contact our thermal imaging specialists to schedule a comprehensive thermographic inspection of your electrical systems and identify potential issues before they cause problems.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white text-red-700 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Schedule Inspection</span>
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