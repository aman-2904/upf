"use client";
import React from 'react';

const DeltaPartner = () => {
  return (
    <section className="font-sans py-10 relative overflow-hidden bg-[#0a1f55]">
      <div className="container mx-auto ">
        <div className="">

         

          {/* Main Content */}
          <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Side - Info */}
            <div>
               {/* Header */}
          <div className="">
            <div className="">
         
            <h2 className="text-5xl lg:text-5xl font-medium text-[#ffffff] tracking-tight mb-8 -mt-8">
              Authorized Business Partner
            </h2>
               </div>
          </div>
              <div className="mb-8">

                <p className="text-xl text-gray-100 leading-relaxed">
                  We partner with leading technology companies to deliver cutting-edge digital solutions with certified expertise and comprehensive technical support.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-100 mb-1">Certified Partnerships</h3>
                    <p className="text-gray-100">Official partnerships with leading technology providers and platforms</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-100 mb-1">Expert Support</h3>
                    <p className="text-gray-100">Comprehensive technical assistance and ongoing project support</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-100 mb-1">Latest Technologies</h3>
                    <p className="text-gray-100">Access to cutting-edge tools and frameworks for modern development</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Technology Stack */}
            <div className="flex justify-center">
          
                <div className="h-120">
                  {/* Embed PDF inside the frame */}
                  <img src="/imahe.png" className="h-full" />
                </div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeltaPartner;