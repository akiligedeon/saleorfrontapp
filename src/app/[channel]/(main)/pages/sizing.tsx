import React from "react";

const CareGuide = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Care Guide
      </h1>
      
      <section className="mb-8">
        <div className="w-full h-64 bg-gray-300 flex items-center justify-center mb-4">
          <span className="text-gray-600">Image Placeholder</span>
        </div>
        <h2 className="text-xl font-semibold text-gray-700 text-center mb-4">
          the dos + don’ts
        </h2>
      </section>
      
      <section className="mb-8 flex flex-col md:flex-row items-center gap-6">
        <div className="w-48 h-48 bg-gray-300 flex items-center justify-center">
          <span className="text-gray-600">Image</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">10k & 14k Gold</h3>
          <p className="text-gray-600 mb-2">
            Our 10k & 14k gold is timeless, luxurious, and made to last forever. It will not oxidize or discolor.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Waterproof</li>
            <li>Clean with soft brush using warm water</li>
            <li>Store in a dry, safe place</li>
          </ul>
        </div>
      </section>
      
      <section className="mb-8 flex flex-col md:flex-row items-center gap-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Gold Vermeil</h3>
          <p className="text-gray-600 mb-2">
            It looks and feels like real gold but is called Vermeil. Contains a thick layer of gold on sterling silver.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Apply perfumes, hair care, and skin care before wear</li>
            <li>Remove before showering and swimming</li>
            <li>Store in a dry, safe place</li>
          </ul>
        </div>
        <div className="w-48 h-48 bg-gray-300 flex items-center justify-center">
          <span className="text-gray-600">Image</span>
        </div>
      </section>
      
      <section className="flex flex-col md:flex-row items-center gap-6">
        <div className="w-48 h-48 bg-gray-300 flex items-center justify-center">
          <span className="text-gray-600">Image</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">925 Sterling Silver</h3>
          <p className="text-gray-600 mb-2">
            925 Sterling Silver is an alloy composed of 92.5% pure silver. Contains rhodium plating for shine.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Apply perfumes, hair care, and skin care before wear</li>
            <li>Remove before showering and swimming</li>
            <li>Store in a dry, safe place</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default CareGuide;
