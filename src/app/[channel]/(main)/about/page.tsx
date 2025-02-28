import React from "react";
const AboutUs = () => {
    return (
      <div className="bg-gray-900 text-gray-200 min-h-screen py-12 px-6 md:px-20 lg:px-40">
        <section className="text-center max-w-4xl mx-auto">
          
          <h1 className="title-font py-2 text-3xl font-medium leading-tight text-gray-50">
            GLTZ Luxury Jewelry Store
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Welcome to <span className="text-gray-100 font-semibold">Gltz</span>, Dubai’s premier online jewelry boutique. We specialize in curating
            an exclusive selection of timeless, handcrafted pieces that embody elegance, sophistication, and craftsmanship.
          </p>
        </section>
  
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-50">Our Story</h2>
          <p className="mt-4 text-gray-400">
            Established in the heart of Dubai, Gltz was born from a passion for fine jewelry and a commitment to luxury.
            Our founders, seasoned artisans and gemologists, sought to redefine elegance by blending traditional artistry with
            modern sophistication.
          </p>
        </section>
  
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-50">Craftsmanship & Quality</h2>
          <p className="mt-4 text-gray-400">
            Each Gltz creation is meticulously crafted using ethically sourced diamonds, precious metals, and rare gemstones.
            Our artisans ensure that every piece meets the highest standards of precision and excellence, making your jewelry
            as timeless as your most treasured moments.
          </p>
        </section>
  
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-50">Our Collections</h2>
          <p className="mt-4 text-gray-400">
            From dazzling diamond rings to elegant gold necklaces, our collections reflect the beauty and brilliance of Middle
            Eastern luxury. Whether you seek a statement piece for an unforgettable occasion or a delicate everyday adornment,
            Gltz has something exquisite for every style.
          </p>
        </section>
  
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-50">Why Choose Gltz?</h2>
          <ul className="mt-4 text-gray-400 list-disc list-inside space-y-2">
            <li>Exclusive, handpicked collections designed for elegance and sophistication.</li>
            <li>Ethically sourced diamonds and responsibly crafted pieces.</li>
            <li>Seamless online shopping experience with worldwide delivery.</li>
            <li>Unparalleled customer service and personalized consultations.</li>
          </ul>
        </section>
  
        <section className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-50">Experience Luxury with Gltz</h2>
          <p className="mt-4 text-gray-400">
            Join us on a journey of timeless elegance and unparalleled craftsmanship. Discover the finest jewelry Dubai has to offer, crafted to celebrate your most precious moments.
          </p>
          <button className="mt-6 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded-lg uppercase">
            Explore Our Collections
          </button>
        </section>
      </div>
    );
  }
  

export default AboutUs;
