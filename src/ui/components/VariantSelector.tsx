import { clsx } from "clsx";
import { redirect } from "next/navigation";
import { LinkWithChannel } from "../atoms/LinkWithChannel";
import { type OrderDetailsFragment, type VariantDetailsFragment } from "@/gql/graphql";
import { getHrefForVariant } from "@/lib/utils";

export function VariantSelector({
	selectedVariant,
	variants,
	product,
	channel,
	goldPrice,
}: {
	selectedVariant?: VariantDetailsFragment;
	variants: readonly VariantDetailsFragment[];
	product: OrderDetailsFragment;
	channel: string;
	//price: any;
	goldPrice: number | null;
}) {
	if (!selectedVariant && variants.length === 1 && variants[0]?.quantityAvailable) {
		redirect("/" + channel + getHrefForVariant({ productSlug: product.id, variantId: variants[0].id }));
	}
	console.log("Selected Variant:", selectedVariant);

	//const selectedSize = selectedVariant?.attributes?.find((attr) => attr.attribute.slug === "size");
	const selectedWeight = selectedVariant?.attributes?.find((attr) => attr.attribute.slug === "weight");

	// Check the weight string directly
	const weightString = selectedWeight?.values?.[0]?.name ?? "0";
	console.log("Weight String:", weightString);

	const weightValue = parseFloat(weightString);
	console.log("Parsed Weight Value:", weightValue);

	const safeGoldPrice = goldPrice ?? 0;
	console.log("Gold Price:", safeGoldPrice);

	const calculatedPrice =
		safeGoldPrice > 0 && weightValue > 0
			? ((safeGoldPrice / 31.10347) * 0.875 * weightValue + 4).toFixed(2)
			: "0.0";

	console.log("Final Calculated Price:", calculatedPrice);

	return (
		variants.length > 1 && (
			<fieldset className="my-4" role="radiogroup" data-testid="VariantSelector">
				<legend className="">
					{/*selectedSize?.values.map((v) => v.name).join(", ")*/}
					<span className="text-xs text-neutral-600">
						<p className="text-md mb-8" data-testid="ProductElement_Price">
							{calculatedPrice} {selectedVariant?.pricing?.price?.gross?.currency}
						</p>
						<p className="mb-8 text-sm" data-testid="ProductElement_Price">
							Shipping calculated at checkout.
						</p>
						<span className="text-xs text-neutral-600">Weight: {weightString}</span>
						{/* Cost :{calculatedPrice} - {selectedSize?.values.map((v) => v.name).join(", ")} * {price} ={" "} */}
						{/* {selectedSize?.values?.map((v) => v.name).join(", ") * price}{" "}
						{selectedVariant?.pricing?.price?.gross?.currency} */}
					</span>
				</legend>
				{/* <legend className="">Variants {" VARIANTS DATA : " + JSON.stringify(variants)}</legend> */}
				<div className="flex flex-wrap gap-3">
					{variants.map((variant) => {
						const isDisabled = !variant.quantityAvailable;
						const isCurrentVariant = selectedVariant?.id === variant.id;

						// Extract specific attributes
						//const color = variant?.attributes?.find((attr) => attr.attribute.slug === "color");
						//const size = variant?.attributes?.find((attr) => attr.attribute.slug === "size");

						return (
							<LinkWithChannel
								key={variant.id}
								prefetch={true}
								scroll={false}
								href={
									isDisabled ? "#" : getHrefForVariant({ productSlug: product.slug, variantId: variant.id })
								}
								className={clsx(
									isCurrentVariant
										? "border-transparent bg-neutral-900 text-white hover:bg-neutral-800"
										: "border-neutral-200 bg-white text-neutral-900 hover:bg-neutral-100",
									"relative flex min-w-[5ch] flex-col items-center justify-center overflow-hidden rounded border p-3 text-center text-sm font-semibold focus-within:outline focus-within:outline-2 aria-disabled:cursor-not-allowed aria-disabled:bg-neutral-100 aria-disabled:text-neutral-800 aria-disabled:opacity-50",
									isDisabled && "pointer-events-none",
								)}
								role="radio"
								tabIndex={isDisabled ? -1 : undefined}
								aria-checked={isCurrentVariant}
								aria-disabled={isDisabled}
							>
								{/* Variant Name */}
								<span className="font-bold">{variant.name}</span>

								{/* Attributes */}
								{/* {color && (
									<span className="text-xs text-neutral-600">
										Color: {color.values.map((v) => v.name).join(", ")}
									</span>
								)} */}
								{/* {size && (
									<span className="text-xs text-neutral-600">
										Size: {size.values.map((v) => v.name).join(", ")}
									</span>
								)} */}

								{/* Weight */}
							</LinkWithChannel>
						);
					})}
				</div>
			</fieldset>
		)
	);
}
