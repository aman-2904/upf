"use client";
import React from "react";
import { FiCamera, FiEye, FiShield, FiMonitor, FiCloud } from "react-icons/fi";

export default function VideoSurveillanceSolutions() {
  const sections = [
    {
      id: 1,
      title: "Advanced Camera Systems",
      icon: <FiCamera className="h-8 w-8" />,
      paragraphs: [
        "State-of-the-art IP camera systems with ultra-high definition 4K and 8K resolution capabilities provide crystal-clear video surveillance for comprehensive security monitoring across residential, commercial, and industrial facilities.",
        "Intelligent video analytics and AI-powered features including facial recognition, license plate detection, object tracking, and behavioral analysis enhance security effectiveness while reducing false alarms and manual monitoring requirements.",
        "Wide dynamic range (WDR) and low-light performance ensure optimal image quality in challenging lighting conditions, providing 24/7 surveillance capability regardless of environmental factors or time of day.",
        "Vandal-resistant and weatherproof camera housings protect equipment in harsh environments while maintaining optimal performance, ensuring reliable operation in outdoor installations and high-risk areas.",
        "Pan-tilt-zoom (PTZ) cameras with precise motor control and programmable patrol patterns provide flexible monitoring coverage and the ability to focus on specific areas of interest when security events occur.",
        "Thermal imaging capabilities detect heat signatures and provide surveillance in complete darkness or adverse weather conditions, offering enhanced security monitoring beyond traditional visible light cameras."
      ]
    },
    {
      id: 2,
      title: "Intelligent Monitoring Systems",
      icon: <FiEye className="h-8 w-8" />,
      paragraphs: [
        "Centralized video management systems (VMS) provide unified control and monitoring of multiple camera feeds, recording systems, and security devices from a single intuitive interface accessible from control rooms or mobile devices.",
        "Real-time event detection and automated alerting systems notify security personnel immediately when predefined conditions are met, enabling rapid response to security incidents and reducing potential losses.",
        "Motion detection and perimeter protection systems create virtual security zones and trigger automatic recording, lighting, or alarm systems when unauthorized access is detected in restricted areas.",
        "Integration with access control systems correlates video footage with entry events, providing comprehensive security logs and enabling forensic investigation capabilities for security incidents.",
        "Remote monitoring capabilities allow authorized personnel to view live video feeds and recorded footage from anywhere using secure internet connections and mobile applications.",
        "Video analytics and search functions enable rapid location of specific events or individuals within large video archives, significantly reducing investigation time and improving security response effectiveness."
      ]
    },
    {
      id: 3,
      title: "Network Video Recording",
      icon: <FiMonitor className="h-8 w-8" />,
      paragraphs: [
        "Enterprise-grade network video recorders (NVR) provide reliable storage and management of video data with redundant storage options, ensuring critical footage is preserved and accessible when needed.",
        "Scalable storage architecture supports both local and cloud-based recording options, with automatic failover capabilities that ensure continuous recording even during hardware failures or network interruptions.",
        "Intelligent recording schedules and motion-triggered recording optimize storage utilization while ensuring all critical events are captured, reducing storage costs and extending retention periods.",
        "Advanced compression technologies including H.264 and H.265 codecs minimize bandwidth requirements and storage consumption while maintaining high video quality for evidence and forensic purposes.",
        "Redundant RAID storage configurations protect against data loss and provide high availability for critical security recordings, ensuring video evidence remains accessible for legal and investigative purposes.",
        "Automated backup and archival systems transfer older recordings to long-term storage while maintaining quick access to recent footage, optimizing performance and storage management."
      ]
    },
    {
      id: 4,
      title: "Access Control Integration",
      icon: <FiShield className="h-8 w-8" />,
      paragraphs: [
        "Seamless integration with electronic access control systems correlates video surveillance with entry events, providing comprehensive security monitoring and detailed audit trails for all facility access.",
        "Biometric authentication systems including fingerprint, facial recognition, and iris scanning provide high-security access control while automatically triggering video recording of all entry attempts.",
        "Visitor management systems with integrated photography and video verification ensure all visitors are properly documented and monitored throughout their time on the premises.",
        "Emergency lockdown capabilities can be triggered automatically by video analytics or manually by security personnel, securing facilities during security incidents or emergency situations.",
        "Mobile access control allows authorized personnel to grant temporary access remotely while monitoring entry through live video feeds, providing flexibility while maintaining security protocols.",
        "Compliance reporting and audit trail generation provide detailed logs of all access events and video recordings for regulatory compliance and security assessment purposes."
      ]
    },
    {
      id: 5,
      title: "Cloud-Based Solutions",
      icon: <FiCloud className="h-8 w-8" />,
      paragraphs: [
        "Cloud-based video surveillance platforms provide scalable, cost-effective solutions with automatic software updates, remote configuration, and enterprise-grade security without requiring on-site server infrastructure.",
        "Hybrid cloud storage solutions combine local recording for immediate access with cloud backup for long-term retention, providing optimal performance while ensuring data protection and accessibility.",
        "Multi-site management capabilities enable centralized monitoring and management of surveillance systems across multiple locations from a single dashboard, simplifying operations for distributed organizations.",
        "Bandwidth optimization and intelligent streaming reduce network requirements while maintaining video quality, making cloud-based solutions viable even for locations with limited internet connectivity.",
        "Automatic software updates and security patches ensure surveillance systems remain current with latest features and security protections without requiring on-site technical support.",
        "Pay-as-you-scale pricing models allow organizations to start with basic systems and expand capabilities as needs grow, providing cost-effective surveillance solutions for businesses of all sizes."
      ]
    }
  ];

  const imageGallery = [
    {
      title: "Security Control Center",
      description: "Professional security monitoring center with multiple displays showing live video feeds and integrated access control systems for comprehensive facility security.",
      image: "/surveillance-1.jpg"
    },
    {
      title: "IP Camera Installation",
      description: "High-definition IP cameras with advanced analytics capabilities providing 24/7 surveillance coverage for commercial and industrial facilities.",
      image: "/surveillance-2.jpg"
    },
    {
      title: "Video Analytics Dashboard",
      description: "Intelligent video management system with AI-powered analytics for automated threat detection and comprehensive security monitoring.",
      image: "/surveillance-3.jpg"
    },
    {
      title: "Mobile Monitoring App",
      description: "Remote video surveillance access through secure mobile applications enabling real-time monitoring from anywhere with internet connectivity.",
      image: "/surveillance-4.jpg"
    },
    {
      title: "Integrated Security System",
      description: "Complete security solution combining video surveillance with access control and alarm systems for comprehensive facility protection.",
      image: "/surveillance-5.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-[url('/9.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-blue-700/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Video Surveillance Solutions</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Advanced security monitoring and intelligent surveillance systems
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Comprehensive Security Through Intelligent Surveillance</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our video surveillance solutions provide advanced security monitoring with AI-powered analytics, ensuring comprehensive protection for your facilities while enabling proactive threat detection and response.
            </p>
          </div>

          {/* Main Content Sections */}
          <div className="space-y-16 mb-20">
            {sections.map((section, index) => (
              <div key={section.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-700">
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
                      src={`/surveillance-section-${section.id}.jpg`}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Video Surveillance Gallery</h2>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Secure Your Facility?</h2>
              <p className="text-lg mb-8 text-blue-100">
                Contact our security experts to discuss your video surveillance requirements and discover how our intelligent monitoring solutions can protect your assets.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white text-[#0a1f55] hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Get Security Assessment</span>
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