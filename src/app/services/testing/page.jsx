"use client";
import React from "react";
import { FiTool, FiCalendar, FiShield, FiClock, FiCheckCircle } from "react-icons/fi";

export default function MaintenanceAMC() {
  const sections = [
    {
      id: 1,
      title: "Comprehensive Maintenance Programs",
      icon: <FiTool className="h-8 w-8" />,
      paragraphs: [
        "Our comprehensive maintenance programs ensure optimal performance and reliability of electrical systems through systematic inspection, testing, and preventive maintenance activities.",
        "Scheduled maintenance activities include regular inspection of electrical equipment, cleaning of connections, lubrication of moving parts, and replacement of consumable components before failure occurs.",
        "Condition monitoring using advanced diagnostic techniques identifies potential problems before they cause equipment failure, enabling proactive maintenance and minimizing unplanned downtime.",
        "Maintenance documentation provides complete records of all maintenance activities, equipment condition assessments, and parts replacement history for warranty and regulatory compliance.",
        "Customized maintenance schedules based on equipment criticality, operating conditions, and manufacturer recommendations ensure optimal maintenance frequency and resource allocation."
      ]
    },
    {
      id: 2,
      title: "Annual Maintenance Contracts (AMC)",
      icon: <FiCalendar className="h-8 w-8" />,
      paragraphs: [
        "Annual Maintenance Contracts provide comprehensive electrical system maintenance coverage with predictable costs and guaranteed response times for both routine and emergency services.",
        "Contract terms include regular preventive maintenance visits, priority emergency response, spare parts availability, and technical support to ensure continuous system operation.",
        "Flexible contract options accommodate different customer needs, from basic maintenance coverage to comprehensive service agreements including parts, labor, and emergency support.",
        "Performance guarantees ensure that maintained equipment meets specified reliability targets and availability requirements, with penalties for underperformance.",
        "Contract benefits include reduced maintenance costs, improved equipment reliability, extended equipment life, and priority access to technical expertise and spare parts."
      ]
    },
    {
      id: 3,
      title: "Emergency Response Services",
      icon: <FiShield className="h-8 w-8" />,
      paragraphs: [
        "24/7 emergency response services provide rapid response to electrical system failures and urgent maintenance needs to minimize downtime and restore operations quickly.",
        "Emergency response teams include experienced technicians equipped with diagnostic equipment, common spare parts, and specialized tools to address most electrical emergencies on-site.",
        "Response time guarantees ensure that emergency calls receive priority attention with defined response times based on contract terms and emergency severity levels.",
        "Emergency troubleshooting and repair capabilities address power outages, equipment failures, safety hazards, and other urgent electrical problems that threaten operations or safety.",
        "Escalation procedures ensure that complex problems receive appropriate technical expertise and resources to achieve rapid resolution and prevent recurring issues."
      ]
    },
    {
      id: 4,
      title: "Predictive Maintenance Services",
      icon: <FiClock className="h-8 w-8" />,
      paragraphs: [
        "Predictive maintenance uses advanced monitoring and analysis techniques to predict equipment failures before they occur, enabling proactive maintenance scheduling and cost optimization.",
        "Condition monitoring techniques include vibration analysis, thermal imaging, oil analysis, electrical signature analysis, and ultrasonic testing to assess equipment health.",
        "Data analysis and trending identify patterns in equipment condition data that indicate developing problems, allowing maintenance to be scheduled at optimal times.",
        "Maintenance optimization uses predictive data to determine the most cost-effective maintenance strategies and timing, balancing maintenance costs with reliability requirements.",
        "Reliability improvement programs use predictive maintenance data to identify root causes of recurring problems and implement permanent solutions to improve system reliability."
      ]
    },
    {
      id: 5,
      title: "Maintenance Management Systems",
      icon: <FiCheckCircle className="h-8 w-8" />,
      paragraphs: [
        "Advanced maintenance management systems provide comprehensive tracking and management of all maintenance activities, from routine inspections to major overhauls and emergency repairs.",
        "Work order management streamlines maintenance processes by automating work order generation, scheduling, tracking, and completion documentation for improved efficiency.",
        "Asset management capabilities track equipment inventory, maintenance history, parts consumption, and performance metrics to optimize maintenance strategies and costs.",
        "Reporting and analytics provide insights into maintenance performance, equipment reliability, cost trends, and opportunities for improvement in maintenance programs.",
        "Integration with customer systems enables seamless data exchange and provides customers with real-time visibility into maintenance activities and equipment status."
      ]
    }
  ];

  const imageGallery = [
    {
      title: "Maintenance Team in Action",
      description: "Professional maintenance technicians performing routine electrical system inspection and preventive maintenance activities to ensure optimal performance.",
      image: "/maintenance-1.jpg"
    },
    {
      title: "AMC Service Documentation",
      description: "Comprehensive Annual Maintenance Contract documentation and service records that track all maintenance activities and equipment performance.",
      image: "/maintenance-2.jpg"
    },
    {
      title: "Emergency Response Team",
      description: "24/7 emergency response team equipped with diagnostic equipment and tools ready to address urgent electrical maintenance needs.",
      image: "/maintenance-3.jpg"
    },
    {
      title: "Predictive Maintenance Technology",
      description: "Advanced predictive maintenance equipment including thermal imaging, vibration analysis, and condition monitoring systems for proactive maintenance.",
      image: "/maintenance-4.jpg"
    },
    {
      title: "Maintenance Management Dashboard",
      description: "Digital maintenance management system providing real-time tracking of maintenance activities, equipment status, and performance metrics.",
      image: "/maintenance-5.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-[url('/maintenance-hero.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-cyan-700/60 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Maintenance & AMC Services</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Comprehensive electrical maintenance and support services
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Ensuring Electrical System Reliability Through Expert Maintenance</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our maintenance and AMC services provide comprehensive electrical system care to ensure optimal performance, reliability, and longevity of your electrical infrastructure.
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
                      src={`/maintenance-section-${section.id}.jpg`}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Maintenance Services Gallery</h2>
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
          <div className="bg-gradient-to-r from-blue-600 to-cyan-700 rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Reliable Maintenance?</h2>
              <p className="text-lg mb-8 text-blue-100">
                Contact our maintenance experts to discuss your AMC requirements and discover how our comprehensive maintenance services can ensure your electrical systems operate reliably.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Get AMC Quote</span>
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