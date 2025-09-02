"use client";
import React from "react";
import { FiLayers, FiShield, FiZap, FiCheckCircle, FiAlertTriangle } from "react-icons/fi";

export default function EarthPitTesting() {
  const sections = [
    {
      id: 1,
      title: "Comprehensive Earth Resistance Testing",
      icon: <FiLayers className="h-8 w-8" />,
      paragraphs: [
        "Professional earth resistance testing ensures that grounding systems provide effective protection against electrical faults and lightning strikes, maintaining safety for personnel and equipment in all types of electrical installations.",
        "Advanced testing methods including fall-of-potential, Wenner four-pole, and clamp-on techniques provide accurate measurements of soil resistivity and grounding system effectiveness under various conditions.",
        "Seasonal testing programs account for variations in soil moisture content, temperature, and other environmental factors that can significantly affect grounding system performance throughout the year.",
        "Detailed analysis of test results identifies potential issues such as corroded ground rods, loose connections, or inadequate grounding electrode configurations that could compromise system safety.",
        "Compliance verification ensures that earth resistance values meet or exceed requirements specified in electrical codes including NEC, IEEE, and local authority having jurisdiction standards."
      ]
    },
    {
      id: 2,
      title: "Soil Resistivity Analysis",
      icon: <FiZap className="h-8 w-8" />,
      paragraphs: [
        "Comprehensive soil resistivity analysis provides essential data for designing effective grounding systems by determining the electrical characteristics of the earth at various depths and locations.",
        "Multi-depth testing reveals soil stratification and helps identify optimal locations and configurations for grounding electrodes to achieve the lowest possible earth resistance values.",
        "Seasonal variations in soil resistivity are documented to predict changes in grounding system performance due to weather conditions, irrigation, and other environmental factors.",
        "Geological assessment includes evaluation of soil composition, moisture content, and chemical properties that affect long-term corrosion resistance and grounding system reliability.",
        "Design recommendations based on soil analysis data ensure that new grounding systems will meet performance requirements while minimizing installation costs and maintenance needs."
      ]
    },
    {
      id: 3,
      title: "Grounding System Design Verification",
      icon: <FiShield className="h-8 w-8" />,
      paragraphs: [
        "Design verification testing confirms that installed grounding systems perform according to engineering specifications and provide adequate protection for all connected electrical equipment and systems.",
        "Touch and step potential measurements ensure that dangerous voltages cannot develop during fault conditions, protecting personnel who may be in contact with grounded equipment or walking in the area.",
        "Fault current distribution analysis verifies that grounding systems can safely handle maximum available fault currents without creating hazardous conditions or damaging equipment.",
        "Ground grid integrity testing uses specialized techniques to identify broken conductors, corroded connections, and other defects that could compromise grounding system effectiveness.",
        "Performance validation includes testing under simulated fault conditions to ensure that protective devices operate correctly and fault currents are safely directed to earth."
      ]
    },
    {
      id: 4,
      title: "Lightning Protection Assessment",
      icon: <FiAlertTriangle className="h-8 w-8" />,
      paragraphs: [
        "Lightning protection system testing verifies that air terminals, down conductors, and grounding systems provide effective protection against direct lightning strikes and induced surges.",
        "Bonding verification ensures that all metallic structures and systems are properly connected to the lightning protection system, preventing dangerous potential differences during lightning events.",
        "Surge protection device coordination testing confirms that protective devices work together effectively to limit overvoltages and prevent equipment damage from lightning-induced surges.",
        "Risk assessment analysis evaluates lightning exposure based on local storm frequency, building characteristics, and occupancy factors to determine appropriate protection levels.",
        "Compliance testing ensures that lightning protection systems meet requirements of NFPA 780, IEC 62305, and other applicable standards for lightning protection design and installation."
      ]
    },
    {
      id: 5,
      title: "Maintenance and Monitoring Programs",
      icon: <FiCheckCircle className="h-8 w-8" />,
      paragraphs: [
        "Preventive maintenance programs ensure that grounding systems continue to provide effective protection through regular inspection, testing, and corrective action when needed.",
        "Continuous monitoring systems provide real-time information about grounding system performance and alert maintenance personnel to changes that could affect safety or reliability.",
        "Corrosion assessment and mitigation includes evaluation of soil conditions and installation of cathodic protection or other measures to extend grounding system life.",
        "Documentation and record keeping track grounding system performance over time, supporting regulatory compliance and providing data for system optimization and planning.",
        "Emergency response procedures ensure that grounding system problems are quickly identified and corrected to maintain electrical safety and prevent equipment damage."
      ]
    }
  ];

  const imageGallery = [
    {
      title: "Earth Resistance Testing Equipment",
      description: "Professional earth resistance testing instruments measuring grounding system effectiveness and soil resistivity with high accuracy and reliability.",
      image: "/earth-pit-1.jpg"
    },
    {
      title: "Soil Resistivity Measurement",
      description: "Comprehensive soil resistivity testing using four-pole method to determine optimal grounding electrode placement and system design.",
      image: "/earth-pit-2.jpg"
    },
    {
      title: "Grounding System Inspection",
      description: "Detailed inspection of grounding electrodes, conductors, and connections to verify system integrity and identify maintenance needs.",
      image: "/earth-pit-3.jpg"
    },
    {
      title: "Lightning Protection Testing",
      description: "Verification of lightning protection system components including air terminals, down conductors, and bonding connections for optimal protection.",
      image: "/earth-pit-4.jpg"
    },
    {
      title: "Test Results Documentation",
      description: "Comprehensive reporting of earth resistance measurements, soil analysis, and grounding system performance with recommendations for improvements.",
      image: "/earth-pit-5.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-[url('/earth-pit-hero.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-700/60 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Earth Pit Testing</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Professional grounding system testing and analysis services
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Ensuring Electrical Safety Through Proper Grounding</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our earth pit testing services provide comprehensive assessment of grounding systems to ensure electrical safety, regulatory compliance, and optimal protection for personnel and equipment.
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
                      src={`/earth-pit-section-${section.id}.jpg`}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Earth Pit Testing Gallery</h2>
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
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Grounding System Testing?</h2>
              <p className="text-lg mb-8 text-green-100">
                Contact our grounding specialists to schedule comprehensive earth pit testing and ensure your electrical systems are properly protected and compliant.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white text-green-700 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
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