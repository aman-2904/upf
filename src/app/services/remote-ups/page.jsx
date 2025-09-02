"use client";
import React from "react";
import { FiBatteryCharging, FiActivity, FiAlertCircle, FiTrendingDown, FiCheckCircle } from "react-icons/fi";

export default function BatteryImpedanceTesting() {
  const sections = [
    {
      id: 1,
      title: "Battery Health Assessment",
      icon: <FiBatteryCharging className="h-8 w-8" />,
      paragraphs: [
        "Comprehensive battery health assessment evaluates the condition and performance of backup power systems through advanced impedance testing, voltage measurements, and capacity analysis to ensure reliable emergency power availability.",
        "Internal resistance measurements reveal battery cell degradation and identify weak cells that could compromise the entire battery string performance during critical power outage situations.",
        "Capacity testing determines the actual energy storage capability compared to nameplate ratings, providing accurate data for backup runtime calculations and replacement planning.",
        "Temperature compensation ensures accurate measurements across varying environmental conditions, accounting for the significant impact of temperature on battery performance and test results.",
        "Baseline establishment creates reference measurements for future comparison, enabling trend analysis and predictive maintenance scheduling based on actual battery condition."
      ]
    },
    {
      id: 2,
      title: "DC Voltage Analysis",
      icon: <FiActivity className="h-8 w-8" />,
      paragraphs: [
        "Precise DC voltage measurements across individual battery cells and complete strings identify voltage imbalances that indicate cell degradation, charging system problems, or connection issues.",
        "Float voltage monitoring ensures proper charging levels are maintained to maximize battery life while preventing overcharging that can damage cells and reduce service life.",
        "Load testing under controlled conditions simulates actual emergency conditions to verify that batteries can deliver required power for specified duration during outages.",
        "Charging system analysis evaluates charger performance, regulation accuracy, and temperature compensation to ensure optimal battery maintenance and longevity.",
        "Voltage ripple analysis identifies AC components in DC systems that can accelerate battery degradation and indicate problems with rectifier or filtering systems."
      ]
    },
    {
      id: 3,
      title: "Ripple Current Measurement",
      icon: <FiTrendingDown className="h-8 w-8" />,
      paragraphs: [
        "AC ripple current measurement identifies unwanted alternating current components in DC battery systems that can cause excessive heating and accelerated battery degradation.",
        "Harmonic analysis of ripple currents reveals the frequency components and sources of AC contamination, enabling targeted corrective action to protect battery systems.",
        "Thermal impact assessment evaluates the heating effects of ripple currents on battery performance and life expectancy, providing data for system optimization.",
        "Charger performance evaluation determines whether excessive ripple results from charger malfunction, inadequate filtering, or improper system configuration.",
        "Mitigation strategies include filter installation, charger adjustment, or system reconfiguration to minimize ripple current and extend battery service life."
      ]
    },
    {
      id: 4,
      title: "Predictive Maintenance Planning",
      icon: <FiAlertCircle className="h-8 w-8" />,
      paragraphs: [
        "Trend analysis of impedance measurements over time reveals the rate of battery degradation and enables accurate prediction of when replacement will be required.",
        "Risk assessment identifies batteries with high failure probability, allowing for proactive replacement before critical failures occur during emergency situations.",
        "Maintenance scheduling optimization uses actual battery condition data rather than arbitrary time intervals to determine when testing and maintenance should be performed.",
        "Cost optimization balances battery replacement costs against reliability requirements, helping determine the most economical replacement strategy for different applications.",
        "Documentation and reporting provide complete records of battery performance trends, test results, and maintenance actions for warranty claims and regulatory compliance."
      ]
    },
    {
      id: 5,
      title: "Compliance and Safety Verification",
      icon: <FiCheckCircle className="h-8 w-8" />,
      paragraphs: [
        "IEEE and industry standard compliance verification ensures that battery systems meet performance requirements for critical applications including emergency lighting, fire safety, and backup power systems.",
        "Safety testing includes verification of proper ventilation, temperature monitoring, and protection systems to prevent battery-related safety hazards including thermal runaway and gas accumulation.",
        "Regulatory compliance documentation supports inspections by authorities having jurisdiction and demonstrates adherence to building codes and safety standards.",
        "Insurance requirements verification provides documentation that may be required by insurance companies to maintain coverage for facilities with critical backup power systems.",
        "Quality assurance protocols ensure that all testing procedures follow established standards and that results are accurate, reliable, and properly documented for future reference."
      ]
    }
  ];

  const imageGallery = [
    {
      title: "Battery Impedance Tester",
      description: "Advanced battery impedance testing equipment measuring internal resistance and voltage of individual battery cells to assess health and performance.",
      image: "/battery-testing-1.jpg"
    },
    {
      title: "UPS Battery Bank Testing",
      description: "Comprehensive testing of uninterruptible power supply battery bank including impedance measurements and capacity verification.",
      image: "/battery-testing-2.jpg"
    },
    {
      title: "Battery Monitoring System",
      description: "Continuous battery monitoring system tracking voltage, temperature, and impedance trends for predictive maintenance planning.",
      image: "/battery-testing-3.jpg"
    },
    {
      title: "Load Testing Equipment",
      description: "Battery load testing equipment simulating actual operating conditions to verify backup power capability and runtime performance.",
      image: "/battery-testing-4.jpg"
    },
    {
      title: "Test Results Analysis",
      description: "Detailed analysis of battery test results showing impedance trends, voltage measurements, and recommendations for maintenance actions.",
      image: "/battery-testing-5.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-[url('/battery-testing-hero.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-700/60 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Battery Impedance Testing</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Comprehensive battery health assessment and performance verification
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Ensuring Reliable Backup Power</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our battery impedance testing services provide comprehensive assessment of backup power systems to ensure reliable emergency power availability when you need it most.
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
                      src={`/battery-testing-section-${section.id}.jpg`}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Battery Testing Gallery</h2>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Test Your Batteries?</h2>
              <p className="text-lg mb-8 text-green-100">
                Contact our battery testing specialists to schedule comprehensive impedance testing and ensure your backup power systems are ready when you need them.
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