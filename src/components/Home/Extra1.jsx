"use client";
import { FaCheck } from "react-icons/fa";

export default function Extra1() {


    const features1 = [
    {
      title: "Timely Delivery",
      desc: "We guarantee on-time project completion with efficient management.",
    },
    {
      title: "Cost-Effective Solutions",
      desc: "We offer competitive pricing without compromising performance.",
    },
    {
      title: "Proven Industry Leadership",
      desc: "Our solutions are trusted by top companies worldwide, ensuring peak performance with minimal risk.",
    },
 
  ];
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
             <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Excellence In Every Solution
          </h2>
          <p className="text-gray-600 mb-6">
           Discover what sets us apart in the power conditioning industry through our commitment to quality and innovation.
          </p>

          {/* Features */}
      
           <div className="space-y-6">
            <h1>Unparalleled Reliability & Performance</h1>
            {features1.map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <FaCheck className="text-blue-500 text-xl mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Left Image */}
        <div>
          <img
            src="/img2.jpeg"
            alt="Electrician working"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Content */}
   
      </div>
    </section>
  );
}
