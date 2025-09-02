"use client";
import React from "react";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import { Mail, Phone as PhoneIcon, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header Section with Background Image */}
      <section className="relative h-[400px] bg-[url('/contact-header.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/60 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Have questions or need assistance? We're here to help you with the best services and cooperation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Contact Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Location Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-700">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Location</h3>
              <p className="text-gray-600 mb-2">123 Business Avenue</p>
              <p className="text-gray-600">New York, NY 10001</p>
            </div>

            {/* Phone Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-700">
                <PhoneIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Call Us</h3>
              <p className="text-gray-600 mb-2">+1 (709) 238-6035</p>
              <p className="text-gray-600">Mon-Fri 9am-6pm EST</p>
            </div>

            {/* Email Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 text-purple-700">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Email Us</h3>
              <p className="text-gray-600 mb-2">support@upflair.com</p>
              <p className="text-gray-600">Response within 24 hours</p>
            </div>

            {/* Hours Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 text-orange-700">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Business Hours</h3>
              <p className="text-gray-600 mb-2">Monday - Friday</p>
              <p className="text-gray-600">9:00 AM - 6:00 PM EST</p>
            </div>
          </div>

          {/* Contact Form and Map Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="How can we help you today?"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-[#0a1f55] hover:bg-[#132b74] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Map Section */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="h-[480px] w-full relative">
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-700 mx-auto">
                      <MapPin className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Office Location</h3>
                    <p className="text-gray-600">123 Business Avenue, New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* FAQ Item 1 */}
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">How quickly do you respond to inquiries?</h3>
                <p className="text-gray-600">
                  We typically respond to all inquiries within 24 business hours during our regular operating days.
                </p>
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Do you offer international support?</h3>
                <p className="text-gray-600">
                  Yes, we provide support to clients worldwide with local expertise and global standards.
                </p>
              </div>

              {/* FAQ Item 3 */}
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What types of projects do you handle?</h3>
                <p className="text-gray-600">
                  We handle a wide range of commercial and industrial projects, providing reliable and efficient solutions.
                </p>
              </div>

              {/* FAQ Item 4 */}
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I schedule a consultation?</h3>
                <p className="text-gray-600">
                  Absolutely! Contact us through any of our channels to schedule a consultation with our experts.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-[#0a1f55] to-[#132b74] rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
              <p className="text-lg md:text-xl mb-8 text-blue-100">
                Contact us today for a free consultation and let's discuss how we can help you achieve your business goals.
              </p>
              <a
                href="tel:+17092386035"
                className="inline-flex items-center justify-center gap-3 bg-white text-[#0a1f55] hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <PhoneIcon className="h-5 w-5" />
                <span>Call Us Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}