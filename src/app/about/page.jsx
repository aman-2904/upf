"use client";
import React from "react";
import { FiAward, FiUsers, FiTrendingUp, FiShield, FiGlobe, FiHeart ,FiClock} from "react-icons/fi";
import { Mail, Phone, MapPin } from "lucide-react";

export default function AboutPage() {
  // Company values data
  const companyValues = [
    {
      icon: <FiAward className="h-8 w-8" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, delivering top-quality solutions that exceed expectations."
    },
    {
      icon: <FiUsers className="h-8 w-8" />,
      title: "Collaboration",
      description: "We believe in the power of teamwork and building strong partnerships with our clients and stakeholders."
    },
    {
      icon: <FiTrendingUp className="h-8 w-8" />,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and innovative approaches to solve complex challenges."
    },
    {
      icon: <FiShield className="h-8 w-8" />,
      title: "Reliability",
      description: "Our clients trust us to deliver consistent, dependable solutions that ensure business continuity."
    },
    {
      icon: <FiGlobe className="h-8 w-8" />,
      title: "Global Reach",
      description: "We serve clients worldwide, bringing local expertise with global standards and best practices."
    },
    {
      icon: <FiHeart className="h-8 w-8" />,
      title: "Customer Focus",
      description: "Every decision we make is centered around delivering exceptional value to our customers."
    }
  ];

  // Achievements data
  const achievements = [
    {
      number: "60+",
      label: "Projects Completed",
      description: "Successfully delivered infrastructure solutions"
    },
    {
      number: "2+",
      label: "Years Experience",
      description: "Proven track record in the industry"
    },
    {
      number: "500+",
      label: "Happy Clients",
      description: "Satisfied customers worldwide"
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "Round-the-clock technical assistance"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative h-[400px] bg-[url('/banner.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-blue-700/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Upflair</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Empowering Technology Solutions for a Connected World
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Introduction Section */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Upflair Technology specializes in the electrical industry, having successfully completed numerous national-scale commercial and industrial projects. We provide reliable, efficient, and cost-effective solutions to both local and multinational companies across India. Offering end-to-end services, from design to execution and project management, we ensure top-quality results. Our commitment is backed by extensive technical support, after-sales service, and a well-stocked inventory for prompt customer response.
            </p>
          </div>

          {/* Mission and Vision Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Mission */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-700">
                <FiTrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide cutting-edge technology solutions that empower businesses to thrive in an increasingly connected world. We are committed to delivering innovative, reliable, and scalable solutions that meet the evolving needs of our clients.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 text-purple-700">
                <FiAward className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be a globally recognized leader in technology solutions, setting industry standards for excellence and innovation. We strive to create long-term value for our clients through strategic partnerships and a relentless focus on quality and customer satisfaction.
              </p>
            </div>
          </div>

          {/* Achievements Section */}
          <div className="mb-20">
            <h3 className="text-4xl font-semibold text-center text-gray-900 mb-12">Our Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-100 group"
                >
                  <div className="text-4xl font-bold text-[#0a1f55] mb-2 group-hover:scale-110 transition-transform duration-300">
                    {achievement.number}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {achievement.label}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h3 className="text-4xl font-semibold text-center text-gray-900 mb-12">Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {companyValues.map((value, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#0a1f55]/20"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#0a1f55]/10 text-[#0a1f55] transition-all duration-300 group-hover:bg-[#0a1f55] group-hover:text-white group-hover:scale-110">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#0a1f55] transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="bg-gradient-to-br from-[#0a1f55] to-[#132b74] rounded-2xl p-8 md:p-12 text-white mb-20">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why Choose Upflair?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <FiShield className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Proven Expertise</h4>
                    <p className="text-blue-100">
                      Industry-leading expertise with years of experience in delivering complex technology solutions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <FiUsers className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Dedicated Team</h4>
                    <p className="text-blue-100">
                      A team of highly skilled professionals committed to delivering exceptional results.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <FiClock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Timely Delivery</h4>
                    <p className="text-blue-100">
                      Commitment to meeting deadlines while maintaining the highest quality standards.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <FiGlobe className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Global Reach</h4>
                    <p className="text-blue-100">
                      Serving clients worldwide with local expertise and global standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <h3 className="text-4xl font-semibold text-center text-gray-900 mb-12">Meet Our Leadership Team</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="h-64 bg-gray-300 relative">
                  <img 
                    src="/team1.jpg" 
                    alt="Team Member" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h4 className="text-xl font-bold mb-1">John Doe</h4>
                      <p className="text-blue-100">CEO & Founder</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="h-64 bg-gray-300 relative">
                  <img 
                    src="/team2.jpg" 
                    alt="Team Member" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h4 className="text-xl font-bold mb-1">Jane Smith</h4>
                      <p className="text-blue-100">CTO</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="h-64 bg-gray-300 relative">
                  <img 
                    src="/team3.jpg" 
                    alt="Team Member" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h4 className="text-xl font-bold mb-1">Mike Johnson</h4>
                      <p className="text-blue-100">Head of Operations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}