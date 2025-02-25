import NextImage, { type ImageProps } from "next/image";

export const ProductImageWrapper = (props: ImageProps) => {
	return (
		<div className="m-auto aspect-square max-w-xs overflow-hidden rounded-sm border-red-500 md:max-w-sm">
			<NextImage {...props} className="h-full w-full object-contain object-center p-0" />
		</div>
	);
};
