import React from "react";
import Image from "next/image";

import Image1 from "@/assets/images/top1.png";
import Image2 from "@/assets/images/top2.png";
import Image3 from "@/assets/images/top3.png";
import Image4 from "@/assets/images/top4.png";

const SizingPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 rounded-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Sizing Guide</h1>
      
      {/* Hero Image Placeholder */}
      <div className="w-full h-64 bg-gray-300 flex items-center justify-center mb-6">
        <span className="text-gray-500">
          <Image src={Image1} alt="Your Store Name" />
        </span>
      </div>

      {/* Ring Sizer Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Ring Sizer</h2>
        <p className="text-gray-600 mb-2">Two ways to do it, bestie.</p>
        <h3 className="text-lg font-medium text-gray-700">1. Measure an existing ring</h3>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Choose an existing ring that fits your desired finger.</li>
          <li>Measure the internal diameter of the ring (in mm).</li>
          <li>Use the below chart to determine your best fit.</li>
        </ul>
        
        {/* Ring Image Placeholder */}
        <div className="w-full h-32 bg-gray-300 flex items-center justify-center mb-4">
          <span className="text-gray-500"><Image src={Image2} alt="Your Store Name" /></span>
        </div>

        <h3 className="text-lg font-medium text-gray-700">2. Measure your finger</h3>
        <ul className="list-disc list-inside text-gray-600">
          <li>Wrap a strip of paper around your finger and pull snug.</li>
          <li>Mark where the paper meets and measure the distance (in mm).</li>
          <li>Use the below chart to determine your best fit.</li>
        </ul>
      </section>

      {/* Ring Size Chart Placeholder */}
      <div className="w-full h-40 bg-gray-300 flex items-center justify-center mb-8">
        <span className="text-gray-500"><Image src={Image3} alt="Your Store Name" /></span>
      </div>

      {/* Bracelet Sizer Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Bracelet Sizer</h2>
        <p className="text-gray-600 mb-2">Two ways to find your fit.</p>
        <h3 className="text-lg font-medium text-gray-700">1. Measure an existing bracelet</h3>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Choose an existing bracelet that fits your wrist.</li>
          <li>Measure the length of the bracelet (in inches) to find your fit.</li>
        </ul>
        
        {/* Bracelet Image Placeholder */}
        <div className="w-full h-32 bg-gray-300 flex items-center justify-center mb-4">
          <span className="text-gray-500"><Image src={Image4} alt="Your Store Name" /></span>
        </div>

        <h3 className="text-lg font-medium text-gray-700">2. Measure your wrist</h3>
        <ul className="list-disc list-inside text-gray-600">
          <li>Wrap a strip of paper around your wrist and pull snug.</li>
          <li>Mark where the paper meets and measure the distance (in inches) to find your size.</li>
          <li><em>Example: Measures 7 inches... 7 inches would be the chosen bracelet size.</em></li>
        </ul>
      </section>
    </div>
  );
};

export default SizingPage;
