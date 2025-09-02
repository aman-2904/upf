"use client";
import React from "react";
import { FiGift, FiStar, FiShield, FiHeart, FiAward } from "react-icons/fi";

export default function AMCOffers() {
  const sections = [
    {
      id: 1,
      title: "Exclusive AMC Package Benefits",
      icon: <FiGift className="h-8 w-8" />,
      paragraphs: [
        "Our exclusive AMC packages provide comprehensive electrical maintenance coverage with significant cost savings compared to individual service calls and emergency repairs.",
        "Priority service guarantee ensures that AMC customers receive first priority for both routine maintenance scheduling and emergency response, minimizing downtime and disruption.",
        "Discounted parts and labor rates provide substantial savings on replacement components and repair services throughout the contract period, reducing total maintenance costs.",
        "Complimentary annual electrical safety inspections identify potential hazards and compliance issues before they become serious problems, ensuring ongoing safety and regulatory compliance.",
        "Extended warranty coverage on maintained equipment provides additional protection beyond manufacturer warranties, giving customers peace of mind and protection against unexpected repair costs."
      ]
    },
    {
      id: 2,
      title: "Premium Customer Rewards",
      icon: <FiStar className="h-8 w-8" />,
      paragraphs: [
        "Long-term AMC customers enjoy exclusive rewards and benefits that recognize their loyalty and provide additional value beyond standard maintenance services.",
        "Loyalty discount programs offer increasing savings for customers who maintain multi-year AMC agreements, rewarding commitment with progressively better pricing.",
        "Complimentary upgrades and enhancements are offered to long-term customers as new technologies become available, ensuring systems remain current and efficient.",
        "Priority access to new services and technologies gives AMC customers first opportunity to benefit from advanced maintenance techniques and innovative solutions.",
        "Dedicated customer support provides direct access to senior technical staff and expedited resolution of questions or concerns, ensuring superior customer experience."
      ]
    },
    {
      id: 3,
      title: "Comprehensive Coverage Options",
      icon: <FiShield className="h-8 w-8" />,
      paragraphs: [
        "Flexible coverage tiers allow customers to select the level of maintenance service that best matches their operational requirements and budget constraints.",
        "All-inclusive packages cover routine maintenance, emergency repairs, parts replacement, and technical support under a single predictable annual fee for complete peace of mind.",
        "Customizable service agreements accommodate unique customer requirements, equipment configurations, and operational schedules to provide optimal maintenance coverage.",
        "Multi-site coverage options provide consistent maintenance standards and pricing across multiple locations, simplifying management and ensuring uniform service quality.",
        "Scalable contracts grow with customer needs, allowing easy addition of new equipment or facilities to existing maintenance agreements without service disruption."
      ]
    },
    {
      id: 4,
      title: "Special Promotional Offers",
      icon: <FiHeart className="h-8 w-8" />,
      paragraphs: [
        "Limited-time promotional offers provide exceptional value for new AMC customers, including discounted first-year rates and complimentary additional services.",
        "Referral rewards program offers significant incentives for existing customers who refer new business, creating mutual benefits and building our customer community.",
        "Seasonal maintenance specials provide opportune timing for major maintenance activities at reduced rates, helping customers optimize maintenance budgets.",
        "Equipment upgrade incentives offer special pricing on system improvements and modernization projects for AMC customers, encouraging proactive system enhancement.",
        "Bundle discounts combine multiple services under comprehensive packages that provide greater value than individual service contracts, maximizing customer savings."
      ]
    },
    {
      id: 5,
      title: "Value-Added Services",
      icon: <FiAward className="h-8 w-8" />,
      paragraphs: [
        "Complimentary training programs for customer personnel ensure proper equipment operation and basic maintenance capabilities, reducing service calls and improving system reliability.",
        "Free consultation services provide expert advice on system optimization, energy efficiency improvements, and compliance requirements without additional charges.",
        "Performance monitoring and reporting services track system performance and provide regular updates on maintenance activities, equipment condition, and improvement opportunities.",
        "Emergency parts inventory ensures that critical spare parts are readily available for immediate response to equipment failures, minimizing downtime and repair delays.",
        "Technology updates and notifications keep customers informed about new developments, safety bulletins, and improvement opportunities relevant to their electrical systems."
      ]
    }
  ];

  const imageGallery = [
    {
      title: "AMC Benefits Overview",
      description: "Comprehensive overview of Annual Maintenance Contract benefits including cost savings, priority service, and exclusive customer rewards and incentives.",
      image: "/amc-offers-1.jpg"
    },
    {
      title: "Customer Loyalty Program",
      description: "Exclusive loyalty rewards program for long-term AMC customers featuring progressive discounts, complimentary upgrades, and premium support services.",
      image: "/amc-offers-2.jpg"
    },
    {
      title: "Flexible Coverage Options",
      description: "Range of AMC coverage tiers and customizable service agreements designed to meet diverse customer needs and operational requirements.",
      image: "/amc-offers-3.jpg"
    },
    {
      title: "Promotional Packages",
      description: "Special promotional offers and seasonal discounts providing exceptional value for new AMC customers and equipment upgrade opportunities.",
      image: "/amc-offers-4.jpg"
    },
    {
      title: "Value-Added Services",
      description: "Complimentary training, consultation, and monitoring services that enhance the value of AMC contracts and improve customer outcomes.",
      image: "/amc-offers-5.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-[url('/amc-offers-hero.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/80 to-purple-700/60 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">AMC Offers to Customers</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Exclusive benefits and rewards for our valued AMC customers
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Exceptional Value and Rewards for Our AMC Customers</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our AMC offers provide exceptional value, exclusive benefits, and special rewards to show our appreciation for customers who choose comprehensive maintenance coverage.
            </p>
          </div>

          {/* Main Content Sections */}
          <div className="space-y-16 mb-20">
            {sections.map((section, index) => (
              <div key={section.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center text-pink-700">
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
                      src={`/amc-offers-section-${section.id}.jpg`}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">AMC Offers Gallery</h2>
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
          <div className="bg-gradient-to-r from-pink-600 to-purple-700 rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Enjoy AMC Benefits?</h2>
              <p className="text-lg mb-8 text-pink-100">
                Contact us today to learn about our current AMC offers and discover how you can benefit from our exclusive customer rewards and comprehensive maintenance coverage.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white text-pink-700 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Explore AMC Offers</span>
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