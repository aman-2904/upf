"use client";
import React from "react";
import { FiBriefcase, FiTrendingUp, FiUsers, FiTarget, FiBarChart } from "react-icons/fi";

export default function BusinessSolutions() {
  const sections = [
    {
      id: 1,
      title: "Business Energy Audits",
      icon: <FiBarChart className="h-8 w-8" />,
      paragraphs: [
        "Comprehensive business energy audits provide detailed analysis of your organization's energy consumption patterns, identifying opportunities for cost reduction and efficiency improvements across all operational areas.",
        "Our expert auditors utilize advanced monitoring equipment and data analytics to examine electrical systems, HVAC operations, lighting efficiency, and equipment performance to create a complete energy profile of your business.",
        "Detailed reporting includes actionable recommendations prioritized by potential savings, implementation cost, and return on investment, enabling informed decision-making for energy improvement projects.",
        "Benchmark analysis compares your energy performance against industry standards and similar businesses, helping identify areas where your organization can achieve competitive advantages through improved efficiency.",
        "Ongoing monitoring services track progress after implementation of recommended improvements, ensuring that projected savings are achieved and maintained over time.",
        "Regulatory compliance support ensures that your business meets all applicable energy standards and can take advantage of available incentives, rebates, and tax credits for energy efficiency improvements."
      ]
    },
    {
      id: 2,
      title: "Cost Optimization Strategies",
      icon: <FiTrendingUp className="h-8 w-8" />,
      paragraphs: [
        "Strategic cost optimization goes beyond simple energy reduction to encompass comprehensive financial planning that maximizes operational efficiency while minimizing total cost of ownership for business systems.",
        "Demand management strategies help businesses avoid costly peak demand charges by implementing load shifting, energy storage, and automated demand response systems that reduce electricity costs during high-rate periods.",
        "Power factor correction and electrical system optimization reduce utility penalties and improve overall system efficiency, resulting in immediate cost savings and improved equipment reliability.",
        "Energy procurement strategies include competitive supplier selection, contract negotiation, and risk management to secure the most favorable energy rates and terms for your business operations.",
        "Equipment lifecycle management ensures optimal timing for system upgrades and replacements, balancing capital expenditure with operational savings to maximize return on investment.",
        "Financial modeling and forecasting provide long-term visibility into energy costs and savings opportunities, enabling strategic planning and budgeting for future energy-related investments."
      ]
    },
    {
      id: 3,
      title: "Smart Office Automation",
      icon: <FiUsers className="h-8 w-8" />,
      paragraphs: [
        "Intelligent office automation systems create productive work environments through integrated control of lighting, climate, security, and communication systems that adapt to occupancy patterns and user preferences.",
        "Occupancy-based controls automatically adjust lighting, temperature, and ventilation based on real-time presence detection, ensuring comfort when needed while minimizing energy waste in unoccupied areas.",
        "Meeting room automation includes integrated audio-visual systems, automatic scheduling displays, and environmental controls that create seamless experiences for presentations and collaboration.",
        "Workspace personalization allows employees to customize their immediate environment through mobile applications, improving comfort and productivity while maintaining overall building efficiency.",
        "Integration with business systems includes calendar synchronization, visitor management, and facilities booking that streamline operations and enhance the employee experience.",
        "Data analytics and reporting provide insights into space utilization, energy consumption, and employee preferences, enabling continuous optimization of office operations and planning for future needs."
      ]
    },
    {
      id: 4,
      title: "Energy Usage Analytics",
      icon: <FiTarget className="h-8 w-8" />,
      paragraphs: [
        "Advanced energy analytics platforms provide real-time visibility into consumption patterns, enabling proactive management of energy costs and identification of optimization opportunities across your business operations.",
        "Machine learning algorithms analyze historical data to identify anomalies, predict equipment failures, and recommend optimal operating schedules that minimize energy costs while maintaining operational requirements.",
        "Detailed sub-metering and monitoring track energy usage by department, equipment, or process, enabling accurate cost allocation and targeted efficiency improvements where they will have the greatest impact.",
        "Predictive analytics forecast future energy needs based on business growth, seasonal patterns, and operational changes, supporting strategic planning and budget development for energy-related expenses.",
        "Benchmarking capabilities compare your energy performance against industry standards and best practices, identifying opportunities to achieve superior efficiency and competitive advantages.",
        "Automated reporting and alerting systems notify management of unusual consumption patterns, equipment inefficiencies, or cost-saving opportunities, enabling rapid response to optimize performance."
      ]
    },
    {
      id: 5,
      title: "Scalable Business Infrastructure",
      icon: <FiBriefcase className="h-8 w-8" />,
      paragraphs: [
        "Scalable infrastructure solutions grow with your business, providing flexible electrical and automation systems that can adapt to changing operational requirements without major capital expenditure.",
        "Modular design approaches enable phased implementation and expansion of energy systems, allowing businesses to spread costs over time while maintaining optimal performance at each stage of growth.",
        "Future-ready installations incorporate advanced technologies and expandable architectures that support emerging business needs, ensuring long-term value and avoiding costly retrofits.",
        "Standardized platforms and protocols ensure compatibility across different systems and vendors, providing flexibility in equipment selection and reducing long-term maintenance complexity.",
        "Cloud-based management systems provide remote monitoring and control capabilities that scale seamlessly from single locations to multi-site enterprises without additional infrastructure investment.",
        "Professional support services include system design, implementation planning, training, and ongoing maintenance to ensure that your infrastructure continues to meet business needs as you grow."
      ]
    }
  ];

  const imageGallery = [
    {
      title: "Energy Analytics Dashboard",
      description: "Comprehensive energy monitoring and analytics platform that provides real-time insights into business energy consumption and optimization opportunities.",
      image: "/business-1.jpg"
    },
    {
      title: "Smart Office Control System",
      description: "Integrated office automation solution that manages lighting, climate, and security systems to enhance productivity while reducing operational costs.",
      image: "/business-2.jpg"
    },
    {
      title: "Cost Optimization Interface",
      description: "Advanced cost management tools that track energy expenses, identify savings opportunities, and optimize utility procurement strategies.",
      image: "/business-3.jpg"
    },
    {
      title: "Business Energy Audit",
      description: "Professional energy assessment using state-of-the-art monitoring equipment to identify efficiency improvements and cost reduction opportunities.",
      image: "/business-4.jpg"
    },
    {
      title: "Scalable Infrastructure",
      description: "Flexible and expandable electrical infrastructure designed to grow with your business needs while maintaining optimal efficiency and performance.",
      image: "/business-5.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-[url('/2.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-blue-700/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Business Solutions</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Tailored business energy management and efficiency solutions
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Optimizing Business Operations Through Smart Energy Management</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our business solutions combine strategic energy management with cutting-edge technology to reduce operational costs, improve efficiency, and create competitive advantages for your organization.
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
                      src={`/business-section-${section.id}.jpg`}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Business Solution Gallery</h2>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your Business?</h2>
              <p className="text-lg mb-8 text-blue-100">
                Contact our business energy experts to discover how our solutions can reduce costs, improve efficiency, and create competitive advantages for your organization.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white text-[#0a1f55] hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Schedule Consultation</span>
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