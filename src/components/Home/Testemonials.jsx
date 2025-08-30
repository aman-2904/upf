"use client";
import React, { useState } from 'react';

const testimonials = [
  {
    name: "Rohan Verma",
    review: "Upflair has transformed our business with innovative power solutions and exceptional customer service. Their team’s expertise and dedication helped us achieve greater efficiency and reliability. Highly recommended for any organization seeking top-notch technology and support.",
    rating: 5
  },
  {
    name: "Vishnu K N",
    review: "I came to know about Upflair when I searched for vendors of APS UPS. Upflair provided the UPS at a low price in less lead time, compared with others. I have ordered UPS for my WFH requirement. The delivery happened within a week. The ordering, status update and delivery are done very professionally.",
    rating: 5
  },
  {
    name: "Ambadas Bhore",
    review: "I was looking for a UPS for WiFi and modem router. I searched Amazon and Flipkart, but they could not provide me suitable options. Upflair delivered me UPS in a day, Thanks!",
    rating: 5
  },
  {
    name: "Rajesh Kumar",
    review: "Upflair provided us with reliable power conditioning solutions that have significantly improved our data center's uptime. Their technical expertise and prompt service support are exceptional.",
    rating: 5
  },
  {
    name: "Priya Sharma",
    review: "The customized power supply solutions from Upflair have helped us reduce operational costs by 30%. Their team understood our requirements perfectly and delivered beyond expectations.",
    rating: 5
  },
  {
    name: "Arun Patel",
    review: "Outstanding service quality! Upflair's preventive maintenance program has kept our power systems running smoothly for over 3 years. Highly recommended for industrial applications.",
    rating: 5
  },
  {
    name: "Sneha Gupta",
    review: "From consultation to installation, Upflair demonstrated professionalism at every step. Their eco-friendly power solutions align perfectly with our sustainability goals.",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('right');
  const [cardWidth, setCardWidth] = useState(50);

  React.useEffect(() => {
    const handleResize = () => {
      setCardWidth(window.innerWidth < 640 ? 100 : 50);
    };
    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (direction === 'right') {
          if (prevIndex === testimonials.length - 2) {
            setDirection('left');
            return prevIndex - 1;
          }
          return prevIndex + 1;
        } else {
          if (prevIndex === 0) {
            setDirection('right');
            return prevIndex + 1;
          }
          return prevIndex - 1;
        }
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [direction, testimonials.length]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`h-5 w-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="font-sans py-20 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div 
        className="inset-0 bg-repeat bg-center opacity-5"

      ></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="text-orange-500 text-sm font-semibold tracking-wider uppercase">TESTIMONIALS</span>
            <div className="h-1 w-16 bg-orange-500 rounded mx-auto mt-2"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 tracking-tight">
            Client's Reviews
          </h2>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex flex-col sm:flex-row"
              style={{ transform: `translateX(-${currentIndex * cardWidth}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full sm:w-1/2 flex-shrink-0 px-2 sm:px-4 mb-6 sm:mb-0">
                  <div className="bg-gray-100 rounded-2xl p-4 sm:p-8 h-full">
                    {/* Quote Icon */}
                    <div className="mb-6">
                      <svg 
                        className="h-12 w-12 text-gray-200" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                      </svg>
                    </div>
                    
                    {/* Review Text */}
                    <p className="text-gray-600 text-lg leading-relaxed mb-6 italic">
                      "{testimonial.review}"
                    </p>
                    
                    {/* Rating Stars */}
                    <div className="flex justify-center mb-6">
                      {renderStars(testimonial.rating)}
                    </div>
                    
                    {/* Client Info */}
                    <div className="text-center border-t pt-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-1">
                        {testimonial.name}
                      </h3>
                      <p className="text-orange-500 font-medium mb-1">
                        Upflair
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
  
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {Array.from({ length: testimonials.length - 1 }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-orange-500 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;