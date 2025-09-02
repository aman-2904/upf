"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";

const Headers = () => {
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

    const handleConnectNow = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const solutionCategories = [
         {
            title: "All Solutions",
            description: "Comprehensive energy solutions for residential and commercial spaces",
            href: "/solutions"
        },
        {
            title: "Home & Office Solutions",
            description: "Comprehensive energy solutions for residential and commercial spaces",
            href: "/solutions/home-office"
        },
        {
            title: "Business Solutions",
            description: "Tailored business energy management and efficiency solutions",
            href: "/solutions/business"
        },
        {
            title: "Industrial Solutions",
            description: "Heavy-duty industrial power and infrastructure solutions",
            href: "/solutions/industrial"
        },
        {
            title: "Data Center Solutions",
            description: "Mission-critical data center power and cooling solutions",
            href: "/solutions/data-center"
        },
        {
            title: "Green Solutions",
            description: "Sustainable and environmentally friendly energy solutions",
            href: "/solutions/green"
        },
        {
            title: "Electrical Turnkey Contract",
            description: "Complete electrical project management and implementation",
            href: "/solutions/electrical-turnkey"
        },
        {
            title: "Video Surveillance Solutions",
            description: "Advanced security monitoring and intelligent surveillance systems",
            href: "/solutions/video-surveillance"
        },
        {
            title: "Micro Data Centre FX",
            description: "Compact edge computing solutions for distributed infrastructure",
            href: "/solutions/micro-datacenter-fx"
        }
    ];

    const serviceCategories = [
         {
            title: "All Services",
            description: "Our Consulting Services are a suite of offerings that help you construct and smoothly adopt an enterprise-ready architecture.",
            href: "/services"
        },
        {
            title: "UPS Maintenance Contracts",
            description: "We at MSPL group provides Comprehensive UPS maintenance contracts designed to your specific power requirements, ensuring reliable UPS service, annual maintenance, expert guidance on how to maintain your UPS, and a thorough UPS maintenance checklist.",
            href: "/services/ups-maintenance"
        },
        {
            title: "Battery Monitoring",
            description: "Efficiently monitor and manage your UPS battery health with our advanced battery monitoring system, offering comprehensive oversight and proactive measures to ensure optimal performance and reliability.",
            href: "/services/thermography"
        },
        {
            title: "Remote UPS Monitoring",
            description: "Experience seamless remote monitoring and management of your UPS systems with our state-of-the-art UPS remote monitoring service, including advanced features such as APC remote UPS monitoring, ensuring proactive maintenance and uninterrupted power protection.",
            href: "/services/remote-ups"
        },
        {
            title: "UPS Hire",
            description: "Get reliable power on demand with our flexible UPS hire service, offering convenient rental UPS solutions that cater to your specific needs, ensuring uninterrupted power supply and peace of mind.",
            href: "/services/ups-hire"
        },
        {
            title: "UPS Relocation & Disposal",
            description: "Effortlessly handle UPS relocations and disposal with our comprehensive service, including professional assistance for seamless UPS relocation and proper disposal of UPS units and batteries, adhering to environmental regulations.",
            href: "/services/relocation"
        },
        {
            title: "Load Bank Testing",
            description: "Ensure the reliability of your UPS system through our meticulous load bank testing service, employing industry-standard procedures for thorough UPS load bank testing, validating performance and safeguarding against potential issues.",
            href: "/services/load-banking"
        },
        {
            title: "Integrated System Testing",
            description: "Streamline the evaluation and functionality of your integrated systems with our comprehensive integrated system testing service, ensuring seamless coordination and performance across all interconnected components.",
            href: "/services/testing"
        },
        {
            title: "Energy Audit",
            description: "Practical renewable energy technology that reduces costs and helps the environment.",
            href: "/services/audit"
        }
    ];

    return (
        <section className="bg-white  w-full z-50 left-0 border-b sticky top-0 ">
            <header className="w-full flex items-center justify-between container mx-auto py-6 bg-white">
                {/* Left Logo Section */}

                <div className="flex items-center gap-3">
                    {/* ✅ Replace text with an image */}
                    <Link href="/">
                        <Image
                            src="/logo.png"   
                            alt="CDS Logo"
                            width={140}     
                            height={40}
                            priority
                        />
                    </Link>
                </div>

                {/* Center Navigation */}
                <nav className="hidden md:flex items-center gap-8 text-[18px] font-medium text-[#0a0a23]">
                    <a href="/" className="hover:text-blue-700 transition">
                        Home
                    </a>
                    <a href="/about" className="hover:text-blue-700 transition cursor-pointer">
                        About Us
                    </a>
                    
                    {/* Solutions Dropdown */}
                    <div 
                        className="relative"
                        onMouseEnter={() => setIsSolutionsOpen(true)}
                        onMouseLeave={() => setIsSolutionsOpen(false)}
                    >
                        <button className="flex items-center gap-1 hover:text-blue-700 transition cursor-pointer">
                            Solutions
                            <FiChevronDown className={`transition-transform duration-200 ${isSolutionsOpen ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {/* Solutions Dropdown Menu */}
                        {isSolutionsOpen && (
                            <div className="absolute top-full -left-140 mt-2 w-[1200px] bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                                <div className="p-6">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-4">SOLUTION CATEGORIES</h3>
                                    <div className="grid grid-cols-4 gap-6">
                                        {solutionCategories.map((solution, index) => (
                                            <a
                                                key={index}
                                                href={solution.href}
                                                className="block p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                                            >
                                                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                                                    {solution.title}
                                                </h4>
                                                <p className="text-sm text-gray-600 leading-relaxed">
                                                    {solution.description}
                                                </p>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    
                    {/* Services Dropdown */}
                    <div 
                        className="relative"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                    >
                        <button className="flex items-center gap-1 hover:text-blue-700 transition cursor-pointer container mx-auto">
                            Services
                            <FiChevronDown className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {/* Dropdown Menu */}
                        {isServicesOpen && (
                            <div className="absolute top-full -left-190 mt-2 w-[1300px] bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                                <div className="p-6">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-4">SERVICE CATEGORIES</h3>
                                    <div className="grid grid-cols-4 gap-6">
                                        {serviceCategories.map((service, index) => (
                                            <a
                                                key={index}
                                                href={service.href}
                                                className="block p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                                            >
                                                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                                                    {service.title}
                                                </h4>
                                                <p className="text-sm text-gray-600 leading-relaxed">
                                                    {service.description}
                                                </p>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </nav>

                {/* Right Connect Now Button */}
                <div>
                    <button
                        onClick={handleConnectNow}
                        className="bg-[#0a1f55] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#132b74] transition flex items-center gap-2 cursor-pointer"
                    >
                        Connect Now →
                    </button>
                </div>
            </header>
        </section>

    );
};

export default Headers;
