"use client";
import React from "react";
import { FiAward, FiUsers, FiTrendingUp, FiShield, FiGlobe, FiHeart } from "react-icons/fi";

// Data for company values and achievements
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

const About = () => {
  return (
    <section className="bg-gray-50 py-20 font-sans">
      <div className="container mx-auto ">
   

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-5xl font-medium text-[#0a1f55] mb-6">
              About Upflair
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="italic">
                    Empowering Technology Solutions
              </p>
              <p>
                   Upflair Technology specializes in the electrical industry, having successfully completed numerous national-scale commercial and industrial projects. We provide reliable, efficient, and cost-effective solutions to both local and multinational companies across India. Offering end-to-end services, from design to execution and project management, we ensure top-quality results. Our commitment is backed by extensive technical support, after-sales service, and a well-stocked inventory for prompt customer response. For any queries or pre-qualification details, please feel free to contact us. We are here to assist you with the best services and cooperation.
              </p>
             
            </div>
            
            {/* CTA Button */}
            <div className="pt-6">
              <button className="bg-[#0a1f55] hover:bg-[#132b74] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Learn More About Us
              </button>
            </div>
          </div>

          {/* Right Content - Image Placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#0a1f55] to-[#132b74] rounded-2xl p-8 shadow-2xl">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white flex">
              <div className="w-1/2">
                <h4 className="text-xl font-semibold mb-4">Why Choose Upflair?</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Industry-leading expertise</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Proven track record</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>24/7 support & monitoring</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Customized solutions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Global standards & compliance</span>
                  </li>
                </ul>
                </div>
                <div className="w-3/5 pl-4">
                    <img src="1.png" alt="" className="w-full h-full"/>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="">
          <h3 className="text-5xl font-medium text-center text-[#0a1f55] mb-12">
            Our Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#0a1f55]/20 group"
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


        {/* <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyValues.map((value, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#0a1f55]/20 cursor-pointer"
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
        </div> */}
      </div>
    </section>
  );
};

export default About;