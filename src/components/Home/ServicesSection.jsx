"use client";
import React from "react";

// Data for the service cards. This makes the component clean and easy to update.
const servicesData = [
  {
    icon: (
      <svg
        className="h-12 w-12 text-gray-700 transition-transform duration-300 group-hover:scale-110 "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
    title: "Professional Services",
    description:
      "Our Consulting Services are a suite of offerings that help you construct and smoothly adopt an enterprise-ready architecture.",
  },
  {
    icon: (
      <svg
        className="h-12 w-12 text-gray-700 transition-transform duration-300 group-hover:scale-110 "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
        />
      </svg>
    ),
    title: "Centre Of Excellence",
    description:
      "UpFlair has built a state-of-the-art Centre of Excellence to incorporate some of the latest Cisco technologies and use cases.",
  },
  {
    icon: (
      <svg
        className="h-12 w-12 text-gray-700 transition-transform duration-300 group-hover:scale-110 "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    title: "Data Centre Build",
    description:
      "UpFlair offers solutions and services to create new data centres or upgrade retrofit and right-size on-premises Data Centres.",
  },
  {
    icon: (
      <svg
        className="h-12 w-12 text-gray-700 transition-transform duration-300 group-hover:scale-110 "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.5 18H20v-2.5"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13.5 18H6a2 2 0 01-2-2V8a2 2 0 012-2h7.5"
        />
      </svg>
    ),
    title: "Data Centre Relocation",
    description:
      "Engaging experienced professionals can ensure a successful data centre movement with minimum disruptions to business.",
  },
];

// CORRECTED: Switched to a named export by adding 'export' here
export const ServicesSection = () => {
  return (
    <section className="bg-white py-20 font-sans bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="container mx-auto px-4 text-center">
        {/* Top Section: Subtitle and Title */}
        <div className="mb-16">
          <p className="mb-4 inline-block rounded-full bg-white px-4 py-1 text-5xl font-semibold text-[#0a1f55]">
             Our Services 
          </p>
         <p className="max-w-4xl mx-auto text-lg">Upflair Technology provides end-to-end solutions for critical infrastructure, specializing in power, thermal control, IT systems, and monitoring, ensuring optimal performance in mission-critical environments.</p>
        </div>

        {/* Grid of Service Cards */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="group relative transform cursor-pointer rounded-2xl border border-2 border-[#0a1f55] bg-white  p-8 shadow-md  hover:shadow-2xl hover:shadow-blue-500/50 "
            >
              {/* Icon */}
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 transition-colors duration-300  mx-auto">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="mb-4 text-xl font-bold text-gray-900 transition-colors duration-300 ">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 transition-colors duration-300 ">
                {service.description}
              </p>

              {/* Learn More Link */}
              <a
                href="#"
                className="mt-6 inline-flex items-center text-blue-600 font-semibold transition-colors duration-300 "
              >
                Learn More
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  &rarr;
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServicesSection;