import React from "react";
import Image from "next/image";

import Image1 from "@/assets/images/top1.jpg";
import Image2 from "@/assets/images/top2.jpg";
import Image3 from "@/assets/images/top3.jpg";
import Image4 from "@/assets/images/top4.jpg";

const SizingPage = () => {
	return (
		<div className="mx-auto max-w-4xl rounded-lg p-6">
			<h1 className="mb-6 text-center text-3xl font-bold text-gray-800">Sizing</h1>

			{/* Hero Image Placeholder  */}
			<div className="mb-6 flex h-64 w-full items-center justify-center bg-gray-300">
				<span className="text-gray-500">
					<Image src={Image1} alt="Your Store Name" />
				</span>
			</div>

			{/* Ring Sizer Section */}
			<section className="mb-8">
				<h2 className="mb-4 text-2xl font-semibold text-gray-700">Ring Sizer</h2>
				<p className="mb-2 text-gray-600">Two ways to do it, bestie.</p>
				<h3 className="text-lg font-medium text-gray-700">1. Measure an existing ring</h3>
				<ul className="mb-4 list-inside list-disc text-gray-600">
					<li>Choose an existing ring that fits your desired finger.</li>
					<li>Measure the internal diameter of the ring (in mm).</li>
					<li>Use the below chart to determine your best fit.</li>
				</ul>

				{/* Ring Image Placeholder */}
				<div className="mb-4 flex h-32 w-full items-center justify-center bg-gray-300">
					<span className="text-gray-500">
						<Image src={Image2} alt="Your Store Name" />
					</span>
				</div>

				<h3 className="text-lg font-medium text-gray-700">2. Measure your finger</h3>
				<ul className="list-inside list-disc text-gray-600">
					<li>Wrap a strip of paper around your finger and pull snug.</li>
					<li>Mark where the paper meets and measure the distance (in mm).</li>
					<li>Use the below chart to determine your best fit.</li>
				</ul>
			</section>

			{/* Ring Size Chart Placeholder */}
			<div className="mb-8 flex h-40 w-full items-center justify-center bg-gray-300">
				<span className="text-gray-500">
					<Image src={Image3} alt="Your Store Name" />
				</span>
			</div>

			{/* Bracelet Sizer Section */}
			<section>
				<h2 className="mb-4 text-2xl font-semibold text-gray-700">Bracelet Sizer</h2>
				<p className="mb-2 text-gray-600">Two ways to find your fit.</p>
				<h3 className="text-lg font-medium text-gray-700">1. Measure an existing bracelet</h3>
				<ul className="mb-4 list-inside list-disc text-gray-600">
					<li>Choose an existing bracelet that fits your wrist.</li>
					<li>Measure the length of the bracelet (in inches) to find your fit.</li>
				</ul>

				{/* Bracelet Image Placeholder */}
				<div className="mb-4 flex h-32 w-full items-center justify-center bg-gray-300">
					<span className="text-gray-500">
						<Image src={Image4} alt="Your Store Name" />
					</span>
				</div>

				<h3 className="text-lg font-medium text-gray-700">2. Measure your wrist</h3>
				<ul className="list-inside list-disc text-gray-600">
					<li>Wrap a strip of paper around your wrist and pull snug.</li>
					<li>Mark where the paper meets and measure the distance (in inches) to find your size.</li>
					<li>
						<em>Example: Measures 7 inches... 7 inches would be the chosen bracelet size.</em>
					</li>
				</ul>
			</section>
		</div>
	);
};

export default SizingPage;
