"use client";
import React from 'react';

const DeltaPartner = () => {
  return (
    <section className="font-sans py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="text-orange-500 text-sm font-semibold tracking-wider uppercase">PARTNERSHIP</span>
              <div className="h-1 w-16 bg-orange-500 rounded mx-auto mt-2"></div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 tracking-tight">
              Technology Partners
            </h2>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Info */}
            <div>
              <div className="mb-8">
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  We partner with leading technology companies to deliver cutting-edge digital solutions with certified expertise and comprehensive technical support.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Certified Partnerships</h3>
                    <p className="text-gray-600">Official partnerships with leading technology providers and platforms</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Expert Support</h3>
                    <p className="text-gray-600">Comprehensive technical assistance and ongoing project support</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Latest Technologies</h3>
                    <p className="text-gray-600">Access to cutting-edge tools and frameworks for modern development</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Technology Stack */}
            <div className="flex justify-center">
            <div className="relative">
  <div className="bg-gradient-to-br from-gray-50  h-120 to-white p-8 rounded-2xl  border">
    {/* Embed PDF inside the frame */}
   <img src="/imahe.png" className="h-full"/>

  </div>

  {/* Decorative elements */}
  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-orange-400"></div>
  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-orange-400"></div>
  <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-orange-400"></div>
  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-orange-400"></div>
</div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default DeltaPartner;