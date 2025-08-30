"use client";
import React from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Send,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  // A reusable component for social media links for cleaner code
  const SocialLink = ({ href, icon: Icon, ariaLabel }) => (
    <Link
      href={href}
      aria-label={ariaLabel}
      className="group rounded-full p-2 transition-colors duration-300 hover:bg-blue-600"
    >
      <Icon className="h-5 w-5 text-gray-400 transition-colors duration-300 group-hover:text-white" />
    </Link>
  );

  // A reusable component for footer navigation links
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
    <footer className="bg-slate-900 text-gray-300">
      <div className="container mx-auto px-1 pt-16 pb-8">
        {/* Main grid with a more balanced 4-column layout */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Column 1: About the Company */}
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <Image
              src="/logo.png" // 👉 Your logo path
              alt="CDS Logo"
              width={160}
              height={54}
              priority
              // This class inverts the logo color to make it visible on a dark background.
              // For best results, use a dedicated white/light version of your logo.
              
            />
            <p className="text-sm leading-relaxed">
              Central Data Systems is a leading provider of innovative IT
              solutions, dedicated to helping businesses thrive in the digital
              era.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
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

          {/* Column 3: Official Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Official Info
            </h3>
            <div className="space-y-4">
              <p className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <span>
                  2nd Floor, Grey Rock, 10, 24th Main Rd, 1st Phase,
                  <br />
                  J. P. Nagar, Bengaluru, Karnataka - 560078.
                </span>
              </p>
              <a
                href="tel:+918061289800"
                className="flex items-center gap-3 transition-colors duration-300 hover:text-blue-400"
              >
                <Phone className="h-5 w-5 text-blue-400" />
                <span>+91 12345 9800</span>
              </a>
              <a
                href="mailto:info@cdspl.com"
                className="flex items-center gap-3 transition-colors duration-300 hover:text-blue-400"
              >
                <Mail className="h-5 w-5 text-blue-400" />
                <span>info@cdspl.com</span>
              </a>
            </div>
          </div>

          {/* Column 4: Newsletter & Socials */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Join Our Newsletter
            </h3>
            <p className="mb-4 text-sm">
              Get the latest updates and news delivered straight to your inbox.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-2 mb-4"
            >
              <label htmlFor="email-subscribe" className="sr-only">
                Your Email
              </label>
              <input
                id="email-subscribe"
                type="email"
                placeholder="Your email"
                className="w-full rounded-md border border-slate-700 bg-slate-800 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="rounded-md bg-blue-600 p-2 text-white transition-transform duration-300 hover:scale-105 hover:bg-blue-700"
                aria-label="Subscribe to newsletter"
              >
                <Send className="h-5 w-5" />
              </button>
            </form>
            <div className="flex gap-2">
              <SocialLink href="#" icon={Facebook} ariaLabel="Facebook" />
              <SocialLink href="#" icon={Twitter} ariaLabel="Twitter" />
              <SocialLink href="#" icon={Linkedin} ariaLabel="LinkedIn" />
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Policy Links */}
        <div className="flex flex-col items-center border-t border-slate-800 pt-6 text-sm md:flex-row md:justify-between">
          <p className="text-gray-400">
            © {new Date().getFullYear()} CDS – Central Data Systems. All rights
            reserved.
          </p>
          
          <div className="mt-4 flex gap-6 md:mt-0">
            <Link
              href="/privacy-policy"
              className="transition-colors duration-300 hover:text-blue-400"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="transition-colors duration-300 hover:text-blue-400"
            >
              Terms of Service
            </Link>
          </div>
        </div>
        <div>
            <Link href="https://rbshstudio.com/"
            className="transition-colors duration-300 hover:text-blue-400 flex justify-center pt-6">
                Powered By RBSH Studio
            </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;