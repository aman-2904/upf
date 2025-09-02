"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image"; // ✅ Import Next.js Image

const Headers = () => {
    const handleConnectNow = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <section className="bg-white  w-full z-50 left-0 border-b sticky top-0 ">
            <header className="w-full flex items-center justify-between container mx-auto py-6 bg-white">
                {/* Left Logo Section */}

                <div className="flex items-center gap-3">
                    {/* ✅ Replace text with an image */}
                    <Link href="/">
                        <Image
                            src="/logo.png"   // 👉 put your logo image in the /public folder as logo.png
                            alt="CDS Logo"
                            width={140}       // adjust size as needed
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
                       <a href="about" className="hover:text-blue-700 transition cursor-pointer">
                        About Us
                    </a>

                    <a href="/solutions" className="hover:text-blue-700 transition cursor-pointer">
                        Solutions
                    </a>

                    <a href="/services" className="hover:text-blue-700 transition cursor-pointer">
                        Services
                    </a>
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
