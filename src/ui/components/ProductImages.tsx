"use client";

import { useState } from "react";
import { ProductImageWrapper, ProductImageWrapperSmall } from "@/ui/atoms/ProductImageWrapper";

type MediaItem = {
	url: string;
	alt?: string | null;
};

export default function ProductImages({ media, thumbnail }: { media: MediaItem[]; thumbnail: MediaItem }) {
	const [selectedImage, setSelectedImage] = useState<MediaItem>(thumbnail);

	return (
		<>
			<div className="overflow-hidden rounded-2xl">
				<div className="transition-transform duration-300 ease-in-out hover:scale-150">
					<ProductImageWrapper
						priority
						alt={selectedImage.alt ?? ""}
						width={1024}
						height={1024}
						src={selectedImage.url}
					/>
				</div>
			</div>
			<div className="mt-4 grid grid-cols-3 gap-2">
				{[thumbnail, ...media].map((mediaItem, index) => (
					<button
						key={index}
						type="button"
						className="overflow-hidden rounded-lg border p-1"
						onClick={() => setSelectedImage(mediaItem)}
					>
						<ProductImageWrapperSmall
							alt={mediaItem.alt ?? `Image ${index + 1}`}
							width={60}
							height={60}
							src={mediaItem.url}
						/>
					</button>
				))}
			</div>
		</>
	);
}
