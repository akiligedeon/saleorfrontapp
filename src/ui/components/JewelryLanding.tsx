// components/JewelryLanding.tsx
import Image from "next/image";

export default function JewelryLanding() {
  return (
    <section className="font-sans">
      {/* Top Features */}
      <div className="flex justify-between text-sm text-gray-700 py-4 border-b">
        <div className="flex items-center gap-2">
          <span>🚚</span> Free Delivery <span className="text-xs text-gray-400">Orders from all item</span>
        </div>
        <div className="flex items-center gap-2">
          <span>↩️</span> Return & Refund <span className="text-xs text-gray-400">Money back guarantee</span>
        </div>
        <div className="flex items-center gap-2">
          <span>🏅</span> Member Discount <span className="text-xs text-gray-400">Orders over $140.00</span>
        </div>
        <div className="flex items-center gap-2">
          <span>📞</span> Support 24/7 <span className="text-xs text-gray-400">Contact us 24 hours a day</span>
        </div>
      </div>

      {/* Promo Banners */}
      <div className="grid md:grid-cols-3 gap-4 py-6">
        <div className="bg-blue-50 p-4 text-center">
          <p className="text-sm text-blue-700 font-medium">Collection</p>
          <h2 className="font-bold text-lg">Ardeco pearl Rings style 2023</h2>
          <button className="mt-4 px-4 py-2 border rounded hover:bg-blue-100 transition text-sm">
            Shop Now →
          </button>
          {/* Replace with actual Image component if available */}
          <div className="mt-4 flex justify-center gap-2">
            <Image src="/earring1.png" alt="Earrings" width={70} height={70} />
            <Image src="/earring2.png" alt="Earrings" width={70} height={70} />
          </div>
        </div>

        <div className="md:col-span-2 relative h-[300px]">
          <Image
            src="/ring-gold-diamonds.jpg"
            alt="Ring gold with diamonds"
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
          <div className="absolute bottom-4 left-4 text-white">
            <p className="text-sm">Collection</p>
            <h2 className="text-xl font-semibold">Ring gold with diamonds</h2>
            <button className="mt-2 bg-white text-black px-4 py-1 rounded text-sm hover:bg-gray-200">
              Shop Now →
            </button>
          </div>
        </div>
      </div>

      {/* Mid Banners */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-green-100 p-4 text-center">
          <p className="text-xs text-green-600 font-medium">Trending</p>
          <h3 className="font-semibold">Tropical Set</h3>
          <Image src="/tropical.png" alt="Tropical Set" width={60} height={60} className="mx-auto mt-2" />
        </div>

        <div className="bg-yellow-100 p-4 text-center">
          <p className="text-xs text-yellow-600 font-medium">New Arrival</p>
          <h3 className="font-semibold">Gold Jewelry</h3>
          <Image src="/gold-jewelry.png" alt="Gold Jewelry" width={60} height={60} className="mx-auto mt-2" />
        </div>
      </div>

      {/* Collaboration Section */}
      <div className="grid md:grid-cols-2 gap-4 mt-10">
        <div className="relative h-[400px]">
          <Image src="/model.png" alt="Model" layout="fill" objectFit="cover" className="rounded" />
        </div>
        <div className="flex flex-col justify-center px-6">
          <p className="text-xs text-orange-500">Unity Collection</p>
          <h2 className="text-3xl font-bold mt-2 mb-4">Shop our limited Edition Collaborations</h2>
          <p className="text-gray-600 mb-4 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula
            vitae mauris sit amet tempor. Donec consectetur lorem ipsum.
          </p>
          <button className="w-fit px-4 py-2 bg-black text-white rounded hover:bg-gray-800 text-sm">
            Contact Us →
          </button>
        </div>
      </div>
    </section>
  );
}
