"use client";
import React, { useState, useEffect, useRef } from "react";

// You can replace these with your actual image paths in the /public folder
const images = [
  "/1.png",
  "/2.png",
  "/3.png",
  "/1.png",
];

// Data for each carousel slide
const carouselData = [
  {
    subtitle: "Craft & Quality",
    title: "Made for moments that matter",
    description: "Every card is intentionally crafted, from the first set of hands it passes through to the last.",
    image: images[0],
    bgColor: "bg-[#d8a989]",
    buttonColor: "bg-[#f6e0cc]",
    buttonHoverColor: "hover:bg-[#f3d7ba]",
  },
  {
    subtitle: "Timeless Design",
    title: "Elegance in every detail",
    description: "Our designs blend classic aesthetics with modern sensibilities for a truly unique feel.",
    image: images[1],
    bgColor: "bg-[#a9c2d8]",
    buttonColor: "bg-[#d1e0ee]",
    buttonHoverColor: "hover:bg-[#c1d5e8]",
  },
  {
    subtitle: "Sustainable Sourcing",
    title: "Kind to the planet",
    description: "We use recycled materials and eco-friendly processes to minimize our impact.",
    image: images[2],
    bgColor: "bg-[#a9d8b1]",
    buttonColor: "bg-[#d8f0dc]",
    buttonHoverColor: "hover:bg-[#c6e8cf]",
  },
  {
    subtitle: "Personal Touch",
    title: "Your message, beautifully delivered",
    description: "Customize your cards to create a personal and unforgettable connection.",
    image: images[3],
    bgColor: "bg-[#d8a9d1]",
    buttonColor: "bg-[#f5dff1]",
    buttonHoverColor: "hover:bg-[#eacbe5]",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
        ),
      3000
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden font-sans">
      {/* Container for all the slides */}
      <div className="h-full w-full">
        {carouselData.map((slide, index) => (
          <section
            key={index}
            className="absolute top-0 left-0 h-full w-full transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(${(index - currentIndex) * 100}%)`,
            }}
          >
            <div className="flex h-full w-full flex-col md:flex-row">
              {/* Left Text Section */}
              <div
                className={`${slide.bgColor} flex flex-1 flex-col items-center justify-center p-10 text-center transition-colors duration-500 md:p-20`}
              >
                <p className="text-sm font-semibold uppercase tracking-widest text-gray-800">
                  {slide.subtitle}
                </p>
                <h2 className="mt-4 max-w-lg text-4xl font-semibold leading-tight text-gray-900 md:text-5xl">
                  {slide.title}
                </h2>
                <p className="mt-6 max-w-md text-base text-gray-800 md:text-lg">
                  {slide.description}
                </p>
                <a
                  href="#"
                  role="button"
                  className={`mt-8 rounded-md px-8 py-3 font-semibold text-gray-900 transition-all duration-300 ${slide.buttonColor} ${slide.buttonHoverColor}`}
                >
                  Learn More
                </a>
              </div>

              {/* Right Image Section */}
              <div className="relative h-[300px] flex-1 md:h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://placehold.co/1000x1000/EEE/31343C?text=Image+Not+Found`;
                  }}
                />
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Navigation Dots (Unchanged) */}
      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3">
        {carouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? "scale-125 bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default function App() {
  return <HeroSection />;
}