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

                  <h2 className="text-5xl lg:text-5xl font-medium text-[#ffffff] tracking-tight mb-8 ">
                    Authorized Business Partner for Delta Electronics

                  </h2>
                </div>
              </div>
              <div className="mb-8">

                <p className="text-xl text-gray-100 leading-relaxed mb-4">
                  Upflair Technologies is an authorized business partner of Delta Electronics PCL, a global leader in power solutions. As part of this partnership, Upflair Technologies is authorized to provide Delta’s energy-efficient power solutions across India from January 1, 2025, to December 31, 2025.

                </p>
                <p className="text-xl text-gray-100 leading-relaxed ">
                 This collaboration enables Upflair Technologies to offer high-quality, sustainable solutions for commercial and industrial power management, ensuring clients benefit from the latest in innovative and reliable technologies. Upflair Technologies is dedicated to delivering top-tier service and solutions, backed by Delta's trusted products.
                </p>
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