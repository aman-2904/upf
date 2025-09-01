"use client";
import React from "react";

// Data for the stats section. This makes it easy to update the values and text.
const statsData = [
  {
    icon: (
      <svg
        className="h-16 w-16 text-green-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 9h16M4 12h16"
        />
      </svg>
    ),
    value: "500+",
    label: "Customer's Satisfied",
  },
  {
    icon: (
      <svg
        className="h-16 w-16 text-green-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m6 8l-6-3.5L5 21"
        />
      </svg>
    ),
    value: "2+",
    label: "Years of Service",
  },
  {
    icon: (
      <svg
        className="h-16 w-16 text-green-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    value: "60+",
    label: "Projects Completed",
  },
];

const StatsSection = () => {
  return (
    <section className="bg-white py-24 sm:py-32 font-sans container mx-auto">
      <div className=" mx-auto max-w-7xl ">
        <div className="grid grid-cols-1 gap-y-16 text-center lg:grid-cols-3">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="group flex flex-col items-center gap-y-4 transform transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="transition-transform duration-300 group-hover:scale-110">
                {stat.icon}
              </div>

              {/* Stat Value */}
              <p className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl font-serif">
                {stat.value}
              </p>

              {/* Stat Label */}
              <p className="text-lg leading-7 text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
