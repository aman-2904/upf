"use client";
import React from "react";
import { FiZap, FiBarChart, FiActivity, FiSettings, FiShield } from "react-icons/fi";

export default function PowerQualityAnalysis() {
  const sections = [
    {
      id: 1,
      title: "Electrical System Assessment",
      icon: <FiZap className="h-8 w-8" />,
      paragraphs: [
        "Comprehensive electrical system assessment forms the foundation of power quality analysis, involving detailed examination of voltage levels, current flows, and power factor measurements across all phases of your electrical infrastructure.",
        "Advanced power analyzers and monitoring equipment capture real-time data on voltage fluctuations, harmonic distortion, and transient events that can impact sensitive equipment performance and operational efficiency.",
        "Systematic evaluation of electrical panels, distribution systems, and load connections identifies potential weak points and areas requiring immediate attention to prevent costly equipment failures.",
        "Load analysis determines the actual power consumption patterns compared to design specifications, revealing opportunities for optimization and capacity planning for future expansion.",
        "Documentation of all findings provides a baseline for ongoing monitoring and helps establish maintenance schedules that prevent problems before they occur."
      ]
    },
    {
      id: 2,
      title: "Harmonic Analysis and Mitigation",
      icon: <FiActivity className="h-8 w-8" />,
      paragraphs: [
        "Harmonic distortion analysis identifies non-linear loads that introduce unwanted frequencies into the electrical system, causing overheating, equipment malfunction, and reduced power factor.",
        "Spectrum analysis reveals the specific harmonic frequencies present in your system, allowing for targeted mitigation strategies that address the root causes of power quality issues.",
        "Harmonic filters and power conditioning equipment recommendations are based on detailed analysis of your specific harmonic profile and operational requirements.",
        "Total harmonic distortion (THD) measurements ensure compliance with IEEE 519 standards and help prevent penalties from utility companies for poor power quality.",
        "Ongoing harmonic monitoring provides early warning of changes in system behavior that could indicate developing problems with equipment or electrical infrastructure."
      ]
    },
    {
      id: 3,
      title: "Voltage Regulation and Stability",
      icon: <FiSettings className="h-8 w-8" />,
      paragraphs: [
        "Voltage stability analysis ensures that all electrical equipment receives the proper voltage levels required for optimal performance and longevity, preventing premature failure and efficiency losses.",
        "Automatic voltage regulators (AVR) and tap-changing transformers are evaluated for proper operation and settings to maintain consistent voltage across varying load conditions.",
        "Voltage sag and swell analysis identifies external factors and internal load changes that cause voltage disturbances, enabling proactive measures to protect sensitive equipment.",
        "Power factor correction systems are assessed for effectiveness in maintaining optimal power factor and reducing reactive power charges from utility companies.",
        "Voltage unbalance measurements ensure equal loading across all three phases, preventing motor overheating and reducing energy consumption through balanced operation."
      ]
    },
    {
      id: 4,
      title: "Transient and Surge Protection",
      icon: <FiShield className="h-8 w-8" />,
      paragraphs: [
        "Transient analysis captures brief but potentially damaging voltage spikes and surges that can destroy sensitive electronic equipment and disrupt operations.",
        "Lightning protection system evaluation ensures adequate grounding and surge suppression to protect against external electrical disturbances and weather-related events.",
        "Surge protective device (SPD) assessment verifies proper installation and operation of protective equipment at service entrance, panel, and point-of-use locations.",
        "Switching transient analysis identifies internal sources of voltage spikes from motor starting, capacitor switching, and other operational events that require mitigation.",
        "Coordinated protection schemes ensure that surge protective devices work together effectively without interfering with normal protective relay operation."
      ]
    },
    {
      id: 5,
      title: "Power Quality Monitoring and Reporting",
      icon: <FiBarChart className="h-8 w-8" />,
      paragraphs: [
        "Continuous power quality monitoring provides ongoing assessment of electrical system performance, capturing intermittent problems that might be missed during periodic testing.",
        "Automated data logging and analysis systems track power quality parameters over extended periods, revealing patterns and trends that indicate developing issues.",
        "Customized reporting provides clear documentation of power quality compliance, equipment performance, and recommendations for system improvements.",
        "Alarm and notification systems alert facility managers immediately when power quality parameters exceed acceptable limits, enabling rapid response to prevent equipment damage.",
        "Trend analysis helps predict future power quality issues and plan preventive maintenance activities that minimize downtime and extend equipment life."
      ]
    }
  ];

  const imageGallery = [
    {
      title: "Power Quality Analyzer",
      description: "Advanced three-phase power quality analyzer capturing real-time data on voltage, current, harmonics, and transient events for comprehensive electrical system assessment.",
      image: "/power-quality-1.jpg"
    },
    {
      title: "Harmonic Analysis Display",
      description: "Detailed harmonic spectrum analysis showing frequency components and total harmonic distortion levels for identifying and mitigating power quality issues.",
      image: "/power-quality-2.jpg"
    },
    {
      title: "Voltage Monitoring System",
      description: "Continuous voltage monitoring equipment tracking voltage levels, sags, swells, and interruptions to ensure stable power delivery to critical equipment.",
      image: "/power-quality-3.jpg"
    },
    {
      title: "Power Factor Correction",
      description: "Automated power factor correction system maintaining optimal power factor and reducing reactive power charges while improving system efficiency.",
      image: "/power-quality-4.jpg"
    },
    {
      title: "Data Analysis Dashboard",
      description: "Comprehensive power quality monitoring dashboard providing real-time data visualization and historical trend analysis for informed decision making.",
      image: "/power-quality-5.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-[url('/power-quality-hero.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/60 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Power Quality Analysis</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Comprehensive power quality assessment and monitoring solutions
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Ensuring Optimal Power Quality</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our power quality analysis services provide comprehensive assessment and monitoring of electrical systems to ensure optimal performance, prevent equipment damage, and maintain operational efficiency.
            </p>
          </div>

          {/* Main Content Sections */}
          <div className="space-y-16 mb-20">
            {sections.map((section, index) => (
              <div key={section.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-700">
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
                      src={`/power-quality-section-${section.id}.jpg`}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Power Quality Analysis Gallery</h2>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Improve Your Power Quality?</h2>
              <p className="text-lg mb-8 text-blue-100">
                Contact our power quality experts to schedule a comprehensive analysis of your electrical systems and discover optimization opportunities.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white text-[#0a1f55] hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Schedule Analysis</span>
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