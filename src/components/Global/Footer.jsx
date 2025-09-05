"use client";
import React from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const FooterLink = ({ href, children }) => (
    <li>
      <Link
        href={href}
        className="transition-colors duration-300 hover:text-blue-400"
      >
        {children}
      </Link>
    </li>
  );

  return (
    <footer className=" bg-slate-900 text-gray-300">
      <div className="container mx-auto  pt-12 pb-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {/* Column 1 */}
          <div className="space-y-4 text-center md:text-left flex flex-col items-center md:items-start">
            <Image
              src="/logo.png"
              alt="UP Flair Logo"
              width={160}
              height={54}
              priority
            />
            {/* <p className="text-sm leading-relaxed">
              Upflair is a leading provider of innovative digital solutions, 
              specializing in web development, mobile applications, and digital 
              transformation to empower businesses in the modern digital landscape.
            </p> */}
          </div>

          {/* Column 2 */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">
              Official Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <MapPin className="h-7 w-10 text-blue-400" />
                <span>
                  Ground floor, Srishyalaya No.523 A, 19th Main Service Road, HSR Layout Sector III,
                  <br />
                  Bengaluru, Bengaluru Urban, Karnataka, 560102
                </span>
              </div>
              <a
                href="tel:+919035300045"
                className="flex items-center gap-3 justify-center md:justify-start transition-colors duration-300 hover:text-blue-400"
              >
                <Phone className="h-5 w-5 text-blue-400" />
                <span>+91 9035300045</span>
              </a>
              <a
                href="mailto:sales@upflair.in"
                className="flex items-center gap-3 justify-center md:justify-start transition-colors duration-300 hover:text-blue-400"
              >
                <Mail className="h-5 w-5 text-blue-400" />
                <span>sales@upflair.in</span>
              </a>
            </div>
          </div>

          {/* Column 4 */}
       
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center border-t border-slate-800 pt-6 text-sm md:flex-row md:justify-between">
          <p className="text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Upflair. All rights reserved.
          </p>

          <div className="mt-4 flex gap-6 md:mt-0">
            <Link
              href=""
              className="transition-colors duration-300 hover:text-blue-400"
            >
              Privacy Policy
            </Link>
            <Link
              href=""
              className="transition-colors duration-300 hover:text-blue-400"
            >
              Terms of Service
            </Link>
          </div>
        </div>

        <div className="flex justify-center pt-6">
          <Link
            href="https://rbshstudio.com/"
            className="transition-colors duration-300 hover:text-blue-400"
          >
            Powered By RBSH Studio
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
