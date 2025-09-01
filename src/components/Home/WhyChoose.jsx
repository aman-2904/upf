"use client";
import { FaPlay } from "react-icons/fa";

export default function WhoWeAre() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 ">
        {/* Left Content */}
        <div>

          <h2 className="text-5xl font-bold text-gray-900 leading-none mb-4">
            Why To Choose <br /> <span className="text-[#169548]"> Upflair Technology?</span>
          </h2>
          <p className="text-gray-600 mb-4 text-xl mt-6">
            <span className="text-2xl text-[#0a1f55] font-semibold">

              Improved Comfort And Safety</span> <br />
            Experience enhanced comfort and safety with our premium <br /> power supply solutions.
          </p>
          <p className="text-gray-600 mb-6 text-xl">
            <span className="text-2xl  text-[#0a1f55] font-semibold">
              Cost Savings</span> <br />
            Unlock substantial cost savings with our reliable power supply solutions.
          </p>
          <p className="text-gray-600 mb-6 text-xl">
            <span className="text-2xl  text-[#0a1f55] font-semibold">Environmental Impact</span> <br />
            Minimize your environmental impact with our eco-friendly <br /> power supply solutions.</p>


        </div>

        {/* Right Images */}
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-3">
            <img
              src="/img1.jpeg"
              alt="Main"
              className="h-50 w-full"
            />
          </div>
          <div className="col-span-2">
            <img
              src="/1.png"
              alt="Secondary"
              className="h-50 w-full"
            />
          </div>
          <div className="h-40 w-full bg-[#343e8c] text-white text-2xl text-end flex flex-col items-center justify-center">
            <h1 className="text-4xl">Upflair </h1>
            <p className="">technologies</p>
          </div>
        </div>
      </div>
    </section>
  );
}
