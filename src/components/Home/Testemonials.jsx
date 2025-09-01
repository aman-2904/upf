"use client";
import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const testimonials = [
  {
    name: "Rajesh Mehta",
    position: "CEO, TechVision Solutions",
    review: "Upflair delivered an exceptional e-commerce platform that increased our online sales by 150% within 6 months. Their team's technical expertise and innovative approach to digital transformation is truly remarkable. The project was completed on time and within budget.",
    rating: 5
  },
  {
    name: "Priya Sharma",
    position: "Marketing Director, GreenTech Industries",
    review: "Working with Upflair was a game-changer for our digital marketing strategy. They developed a comprehensive web application and mobile app that streamlined our operations. Their attention to detail and customer-centric approach sets them apart from other agencies.",
    rating: 5
  },

  {
    name: "Vikram Singh",
    position: "CTO, FinanceFirst",
    review: "Upflair's expertise in fintech solutions is outstanding. They developed a secure, compliant platform that handles thousands of transactions daily. Their commitment to quality and security standards is exemplary.",
    rating: 5
  },
  {
    name: "Anita Desai",
    position: "Brand Manager, FashionForward",
    review: "Our new e-commerce website and mobile app developed by Upflair has transformed our customer experience. The modern design, seamless functionality, and robust backend have significantly boosted our online presence and sales.",
    rating: 5
  },
  {
    name: "Rohit Agarwal",
    position: "Director, EduTech Solutions",
    review: "Upflair created an innovative learning management system that serves over 10,000 students. Their understanding of educational technology and user experience design resulted in a platform that both educators and students love.",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`h-5 w-5 ${index < rating ? 'text-orange-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="font-sans py-20 bg-gray-50">
      <div className="container mx-auto ">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 leading-tight max-w-4xl mx-auto">
          Clients Review
          </h2>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center max-w-7xl mx-auto">
          {/* Left Side - Image Placeholder */}
          <div className="relative">
            <div className=" aspect-[4/2] flex items-center justify-center text-gray-600 -mt-12">
              <div className="text-center">
                <img src="/img1.jpeg" alt="" />
              </div>
            </div>
          </div>

          {/* Right Side - Testimonial Content */}
          <div className="relative">
            <div className="bg-white p-8 md:p-12 shadow-lg relative h-[500px] flex flex-col justify-between">
              {/* Quote */}
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-[#0a1f55] mb-6 line-clamp-2">
                  "{currentTestimonial.name === 'Rajesh Mehta' ? 'Many Benefits for the environment' : currentTestimonial.review.split('.')[0]}."
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed line-clamp-6 overflow-hidden">
                  {currentTestimonial.review}
                </p>
              </div>

              {/* Client Info - Fixed at bottom */}
              <div className="mt-auto">
                <div className="flex items-center gap-4 mb-6">
                  {/* Avatar */}
                  <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-sm font-medium">
                    {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-gray-600">
                      {currentTestimonial.position}
                    </p>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1">
                  {renderStars(currentTestimonial.rating)}
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex flex-row absolute bottom-4 -right-1 transform -translate-y-1/2 flex flex-col gap-4">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 group"
                aria-label="Previous testimonial"
              >
                <FiChevronLeft className="h-6 w-6 text-gray-600 group-hover:text-gray-900" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white  shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 group"
                aria-label="Next testimonial"
              >
                <FiChevronRight className="h-6 w-6 text-gray-600 group-hover:text-gray-900" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;