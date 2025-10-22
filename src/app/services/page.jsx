"use client";
import React from "react";
import { FiSettings, FiThermometer, FiBattery, FiLayers, FiPlug, FiTool, FiCalendar, FiGift } from "react-icons/fi";

export default function ServicesPage() {
  // Services data
  const services = [
    {
      id: 1,
      title: "Ups Maintenance Contract", 
      icon: <FiSettings className="h-8 w-8" />,
      description: "Comprehensive electrical power quality assessment and analysis to identify issues affecting equipment performance and reliability.",
      features: [
        "Voltage disturbance analysis",
        "Harmonic measurement and mitigation",
        "Power factor correction",
        "Load flow analysis and optimization"
      ],
      link: "/services/ups-maintenance"
    },
    {
      id: 2,
      title: "Battery Monitoring",
      icon: <FiThermometer className="h-8 w-8" />,
      description: "Eficiently monitor and manage your UPS battery health with our advanced battery monitoring system, offering comprehensive oversight and proactive measures to ensure optimal performance and reliability.",
      features: [
        "Infrared thermal imaging",
        "Electrical hotspot detection",
        "Preventive maintenance planning",
        "Safety and compliance assessment"
      ],
      link: "/services/thermography"
    },
    {
      id: 3,
      title: "Remote UPS Monitoring",
      icon: <FiBattery className="h-8 w-8" />,
      description: "Professional battery testing services to ensure reliable backup power systems and optimal battery performance.",
      features: [
        "Battery condition assessment",
        "Impedance and conductance testing",
        "Load testing and capacity verification",
        "Maintenance scheduling optimization"
      ],
      link: "/services/remote-ups"
    },
    {
      id: 4,
      title: "UPS Hire",
      icon: <FiLayers className="h-8 w-8" />,
      description: "Comprehensive grounding system testing and analysis to ensure electrical safety and regulatory compliance.",
      features: [
        "Earth resistance testing",
        "Soil resistivity analysis",
        "Grounding system design verification",
        "Lightning protection assessment"
      ],
      link: "/services/ups-hire"
    },
    {
      id: 5,
      title: "UPS Relocation & Disposal",
    //   icon: <FiPlug className="h-8 w-8" />,
      description: "Electrical outlet safety and performance testing to ensure safe operation and regulatory compliance.",
      features: [
        "Electrical socket safety testing",
        "RCD and RCBO functionality testing",
        "Polarity and wiring verification",
        "Power quality assessment"
      ],
      link: "/services/relocation"
    },
    {
      id: 6,
      title: "Load Bank Testing",
      icon: <FiTool className="h-8 w-8" />,
      description: "Expert solutions for unique electrical challenges and complex requirements that demand specialized knowledge.",
      features: [
        "Custom electrical solutions",
        "Advanced electrical testing",
        "Industrial automation integration",
        "Energy management systems"
      ],
      link: "/services/testing"
    },
    {
      id: 7,
      title: "Integrated System Testing",
      icon: <FiCalendar className="h-8 w-8" />,
      description: "Comprehensive electrical maintenance and Annual Maintenance Contract services to ensure system reliability.",
      features: [
        "Comprehensive maintenance programs",
        "Emergency response services",
        "Predictive maintenance services",
        "Maintenance management systems"
      ],
      link: "/services/testing"
    },
    {
      id: 8,
      title: "Energy Audit",
      icon: <FiGift className="h-8 w-8" />,
      description: "Exclusive benefits and rewards for our valued AMC customers with special offers and comprehensive coverage.",
      features: [
        "Exclusive AMC package benefits",
        "Premium customer rewards",
        "Comprehensive coverage options",
        "Value-added services"
      ],
      link: "/services/audit"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative h-[400px] bg-[url('/banner.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-blue-700/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              End-to-end solutions for critical infrastructure
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Introduction Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Professional Electrical Testing and Maintenance Services</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Upflair Technology provides comprehensive electrical testing, analysis, and maintenance services to ensure optimal performance, safety, and reliability of your electrical systems and infrastructure.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-100 transform hover:-translate-y-1"
              >
                <div className="p-8">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-700">
                    {service.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Learn More Button */}
                <div className="px-8 pb-8">
                  <a
                    href={service.link}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                  >
                    Learn More
                    <span className="ml-2 transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Service Categories Section */}
          <div className="bg-gradient-to-r from-[#0a1f55] to-[#132b74] rounded-2xl p-8 md:p-12 text-white mb-16">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Service Categories</h2>
              <p className="text-lg text-blue-100 mb-12 text-center">
                We offer a comprehensive range of services to meet the diverse needs of our clients, from consulting to implementation and ongoing support.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Service Category 1 */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-xl font-semibold text-white mb-4">Consulting Services</div>
                  <p className="text-blue-100">
                    Strategic guidance and expert advice to help you make informed decisions about your infrastructure and technology investments.
                  </p>
                </div>
                
                {/* Service Category 2 */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-xl font-semibold text-white mb-4">Design & Engineering</div>
                  <p className="text-blue-100">
                    Comprehensive design and engineering services to ensure your systems are optimized for performance, efficiency, and scalability.
                  </p>
                </div>
                
                {/* Service Category 3 */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-xl font-semibold text-white mb-4">Implementation</div>
                  <p className="text-blue-100">
                    End-to-end implementation services with expert project management to ensure successful deployment of your solutions.
                  </p>
                </div>
                
                {/* Service Category 4 */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-xl font-semibold text-white mb-4">Maintenance & Support</div>
                  <p className="text-blue-100">
                    Ongoing maintenance and support services to ensure your systems continue to operate at peak performance.
                  </p>
                </div>
                
                {/* Service Category 5 */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-xl font-semibold text-white mb-4">Training</div>
                  <p className="text-blue-100">
                    Comprehensive training programs to ensure your team has the knowledge and skills to maximize your investment.
                  </p>
                </div>
                
                {/* Service Category 6 */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-xl font-semibold text-white mb-4">Managed Services</div>
                  <p className="text-blue-100">
                    Outsourced management of your critical systems by our team of experienced professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Benefits Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Key Benefits of Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Benefit 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-700">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016a9 9 0 11-14.236 0m14.236 0L18 8M7 16l2-2m10 2v-2a9 9 0 00-18 0v2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Expertise & Experience</h3>
                <p className="text-gray-600">
                  Our team of certified professionals brings decades of combined experience in critical infrastructure solutions across multiple industries.
                </p>
              </div>
              
              {/* Benefit 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-700">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">End-to-End Solutions</h3>
                <p className="text-gray-600">
                  From concept to completion, we provide comprehensive services that cover every aspect of your infrastructure needs.
                </p>
              </div>
              
              {/* Benefit 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-purple-700">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m-6-8h6"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Scalability</h3>
                <p className="text-gray-600">
                  Our services are designed to scale with your business, providing flexible solutions that grow with your evolving needs.
                </p>
              </div>
              
              {/* Benefit 4 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 text-orange-700">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Timely Delivery</h3>
                <p className="text-gray-600">
                  We understand the importance of meeting deadlines while maintaining the highest quality standards.
                </p>
              </div>
              
              {/* Benefit 5 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 text-red-700">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l3 3L21 3m0 0h-6.586l-3-3H3v6.586l3 3" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6.5a2.5 2.5 0 00-2.5-2.5H3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Assurance</h3>
                <p className="text-gray-600">
                  Our rigorous quality control processes ensure that every project meets the highest industry standards.
                </p>
              </div>
              
              {/* Benefit 6 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4 text-indigo-700">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Support</h3>
                <p className="text-gray-600">
                  Our dedicated support team is available around the clock to address any issues and ensure continuous operation.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-[#0a1f55] to-[#132b74] rounded-2xl p-8 md:p-12 text-white mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Infrastructure?</h2>
              <p className="text-lg mb-8 text-blue-100">
                Contact our team of experts today to discuss your specific requirements and discover the optimal solutions for your business.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white text-[#0a1f55] hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Contact Our Experts</span>
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
