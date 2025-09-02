"use client";
import React from "react";
import { FiZap, FiClipboard, FiSettings, FiUsers, FiCheckCircle } from "react-icons/fi";

export default function ElectricalTurnkeySolutions() {
  const sections = [
    {
      id: 1,
      title: "End-to-End Project Management",
      icon: <FiClipboard className="h-8 w-8" />,
      paragraphs: [
        "Comprehensive project management services from initial concept through final commissioning, ensuring seamless execution of electrical projects with single-point responsibility.",
        "Dedicated project teams coordinate all aspects including design, procurement, installation, testing, and commissioning to deliver projects on time and within budget.",
        "Risk management and quality assurance processes identify and mitigate potential issues before they impact project timelines or performance.",
        "Regular progress reporting and stakeholder communication ensure transparency and alignment throughout the project lifecycle.",
        "Change management procedures handle modifications efficiently while maintaining project integrity and controlling costs."
      ]
    },
    {
      id: 2,
      title: "Electrical System Design",
      icon: <FiSettings className="h-8 w-8" />,
      paragraphs: [
        "Custom electrical system design services create optimal solutions tailored to specific operational requirements and regulatory compliance needs.",
        "Advanced modeling and simulation tools validate designs before implementation, ensuring optimal performance and reliability.",
        "Energy efficiency optimization incorporates latest technologies and best practices to minimize operational costs.",
        "Code compliance and safety analysis ensure all designs meet applicable standards and regulations.",
        "Future expansion planning incorporates scalability and flexibility for evolving business needs."
      ]
    },
    {
      id: 3,
      title: "Installation and Commissioning",
      icon: <FiZap className="h-8 w-8" />,
      paragraphs: [
        "Professional installation services by certified technicians ensure proper implementation of electrical systems according to design specifications.",
        "Comprehensive testing and commissioning procedures verify system performance and safety before final acceptance.",
        "Quality control inspections at every phase ensure workmanship meets the highest industry standards.",
        "Documentation and as-built drawings provide complete system records for future maintenance and modifications.",
        "Training and handover procedures ensure client personnel understand system operation and maintenance requirements."
      ]
    },
    {
      id: 4,
      title: "Maintenance and Support",
      icon: <FiUsers className="h-8 w-8" />,
      paragraphs: [
        "Ongoing maintenance and support services ensure continued optimal performance and reliability of electrical systems.",
        "Preventive maintenance programs minimize unexpected failures and extend equipment life through regular inspections and servicing.",
        "24/7 emergency response capabilities provide rapid assistance for critical issues that could impact operations.",
        "Spare parts management and inventory services ensure quick access to replacement components when needed.",
        "Performance monitoring and optimization services identify opportunities for efficiency improvements and upgrades."
      ]
    },
    {
      id: 5,
      title: "Compliance and Safety Management",
      icon: <FiCheckCircle className="h-8 w-8" />,
      paragraphs: [
        "Comprehensive safety management ensures all work complies with applicable codes, standards, and regulatory requirements.",
        "Regular safety training and certification programs keep all personnel current with latest safety practices and requirements.",
        "Documentation and reporting systems track compliance activities and provide audit trails for regulatory inspections.",
        "Incident management and investigation procedures ensure rapid response to safety events and continuous improvement.",
        "Insurance and bonding coverage provide financial protection and demonstrate commitment to professional service delivery."
      ]
    }
  ];

  const imageGallery = [
    {
      title: "Project Planning Center",
      description: "Comprehensive project management facility coordinating all aspects of electrical turnkey projects from design through commissioning.",
      image: "/electrical-1.jpg"
    },
    {
      title: "Electrical Installation",
      description: "Professional electrical installation by certified technicians using advanced tools and techniques for optimal results.",
      image: "/electrical-2.jpg"
    },
    {
      title: "System Testing",
      description: "Comprehensive testing and commissioning procedures ensuring system performance and safety before final acceptance.",
      image: "/electrical-3.jpg"
    },
    {
      title: "Control Panel Assembly",
      description: "Custom control panel fabrication and assembly meeting exact specifications and industry standards.",
      image: "/electrical-4.jpg"
    },
    {
      title: "Maintenance Services",
      description: "Ongoing maintenance and support services ensuring continued optimal performance and reliability of electrical systems.",
      image: "/electrical-5.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-[url('/8.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-blue-700/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Electrical Turnkey Contract</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Complete electrical project management and implementation
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Complete Project Solutions</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our turnkey electrical contracts provide complete project solutions from design through commissioning, offering single-point responsibility for successful project delivery.
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
                      src={`/electrical-section-${section.id}.jpg`}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Turnkey Solution Gallery</h2>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Turnkey Project?</h2>
              <p className="text-lg mb-8 text-blue-100">
                Contact our project management experts to discuss your electrical project requirements and discover our comprehensive turnkey solutions.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white text-[#0a1f55] hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Start Your Project</span>
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