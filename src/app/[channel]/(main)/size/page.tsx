import React from "react";
import Image from "next/image";

import Image1 from "@/assets/images/top1.png";
import Image2 from "@/assets/images/top2.png";
import Image3 from "@/assets/images/top3.png";
import Image4 from "@/assets/images/top4.png";

const CareGuide = () => {
	return (
		<div className="mx-auto max-w-4xl rounded-lg p-6">
			<h1 className="mb-6 text-center text-3xl font-bold text-gray-800">Care Guide</h1>

			<section className="mb-8">
				<div className="mb-4 flex h-64 w-full items-center justify-center bg-gray-300">
					<span className="text-gray-600">
						<Image src={Image1} alt="Your Store Name" />
					</span>
				</div>
				<h2 className="mb-4 text-center text-xl font-semibold text-gray-700">the dos + don’ts</h2>
			</section>

			<section className="mb-8 flex flex-col items-center gap-6 md:flex-row">
				<div className="flex h-48 w-48 items-center justify-center bg-gray-300">
					<span className="text-gray-600">
						<Image src={Image2} alt="Your Store Name" />
					</span>
				</div>
				<div>
					<h3 className="mb-2 text-lg font-semibold text-gray-700">10k & 14k Gold</h3>
					<p className="mb-2 text-gray-600">
						Our 10k & 14k gold is timeless, luxurious, and made to last forever. It will not oxidize or
						discolor.
					</p>
					<ul className="list-inside list-disc text-gray-600">
						<li>Waterproof</li>
						<li>Clean with soft brush using warm water</li>
						<li>Store in a dry, safe place</li>
					</ul>
				</div>
			</section>

			<section className="mb-8 flex flex-col items-center gap-6 md:flex-row">
				<div>
					<h3 className="mb-2 text-lg font-semibold text-gray-700">Gold Vermeil</h3>
					<p className="mb-2 text-gray-600">
						It looks and feels like real gold but is called Vermeil. Contains a thick layer of gold on
						sterling silver.
					</p>
					<ul className="list-inside list-disc text-gray-600">
						<li>Apply perfumes, hair care, and skin care before wear</li>
						<li>Remove before showering and swimming</li>
						<li>Store in a dry, safe place</li>
					</ul>
				</div>
				<div className="flex h-48 w-48 items-center justify-center bg-gray-300">
					<span className="text-gray-600">
						<Image src={Image3} alt="Your Store Name" />
					</span>
				</div>
			</section>

			<section className="flex flex-col items-center gap-6 md:flex-row">
				<div className="flex h-48 w-48 items-center justify-center bg-gray-300">
					<span className="text-gray-600">
						<Image src={Image4} alt="Your Store Name" />
					</span>
				</div>
				<div>
					<h3 className="mb-2 text-lg font-semibold text-gray-700">925 Sterling Silver</h3>
					<p className="mb-2 text-gray-600">
						925 Sterling Silver is an alloy composed of 92.5% pure silver. Contains rhodium plating for shine.
					</p>
					<ul className="list-inside list-disc text-gray-600">
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
