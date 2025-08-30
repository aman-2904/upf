"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image"; // ✅ Import Next.js Image
import { ChevronDown } from "lucide-react";

const Headers = () => {
    return (
        <section className="bg-white relative w-full z-50 left-0 border-b sticky top-0 ">
            <header className="w-full flex items-center justify-between container mx-auto py-2  bg-white">
                {/* Left Logo Section */}

                <div className="flex items-center gap-3">
                    {/* ✅ Replace text with an image */}
                    <Link href="/">
                        <Image
                            src="/logo.png"   // 👉 put your logo image in the /public folder as logo.png
                            alt="CDS Logo"
                            width={120}       // adjust size as needed
                            height={30}
                            priority
                        />
                    </Link>
                </div>

                {/* Center Navigation */}
                <nav className="hidden md:flex items-center gap-8 text-[16px] font-medium text-[#0a0a23]">
                    <Link href="/" className="hover:text-blue-700 transition">
                        Home
                    </Link>

                    <div className="flex items-center gap-1 cursor-pointer hover:text-blue-700 transition">
                        <span>Solutions</span>

                    </div>

                    <div className="flex items-center gap-1 cursor-pointer hover:text-blue-700 transition">
                        <span>Services</span>

                    </div>

                    <div className="flex items-center gap-1 cursor-pointer hover:text-blue-700 transition">
                        <span>About Us</span>

                    </div>

                    <Link href="/contact" className="hover:text-blue-700 transition">
                        Contact Us
                    </Link>
                </nav>

                {/* Right Contact Now Button */}
                <div>
                    <Link
                        href="/contact"
                        className="bg-[#0a1f55] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#132b74] transition flex items-center gap-2"
                    >
                        Contact now →
                    </Link>
                </div>
            </header>
        </section>

    );
};

export default Headers;
