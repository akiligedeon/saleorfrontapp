import { clsx } from "clsx";
import { redirect } from "next/navigation";
import { LinkWithChannel } from "../atoms/LinkWithChannel";
import { type ProductDetailsFragmentFragment, type VariantDetailsFragment } from "@/gql/graphql";
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
	product: ProductDetailsFragmentFragment;
	channel: string;
	goldPrice: number | null;
}) {
	if (!selectedVariant && variants.length === 1 && variants[0]?.quantityAvailable) {
		redirect("/" + channel + getHrefForVariant({ productSlug: product.slug, variantId: variants[0].id }));
	}

	const currentVariant = selectedVariant || variants[0]; // i fall back to fisrt variant
	if (!currentVariant) return null; // safeguard

	const selectedWeight = currentVariant.attributes?.find((attr) => attr.attribute.slug === "weight");
	const weightString = selectedWeight?.values?.[0]?.name ?? "0";
	const weightValue = parseFloat(weightString);

	const safeGoldPrice = goldPrice ?? 0;
	const calculatedPrice =
		safeGoldPrice > 0 && weightValue > 0
			? ((safeGoldPrice / 31.10347) * 0.875 * weightValue + 4).toFixed(2)
			: "0.0";

	return (
		variants.length > 1 && (
			<fieldset className="my-4" role="radiogroup" data-testid="VariantSelector">
				<legend className="">
					<span className="text-xs text-neutral-600">
						<p className="text-md mb-8" data-testid="ProductElement_Price">
							{calculatedPrice} {currentVariant?.pricing?.price?.gross?.currency}
						</p>
						<p className="mb-8 text-sm" data-testid="ProductElement_Price">
							Shipping calculated at checkout.
						</p>
						<span className="text-xs text-neutral-600">Weight: {weightString}</span>
					</span>
				</legend>

				<div className="flex flex-wrap gap-3">
					{variants.map((variant) => {
						const isDisabled = !variant.quantityAvailable;
						const isCurrentVariant = currentVariant?.id === variant.id;

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
								<span className="font-bold">{variant.name}</span>
							</LinkWithChannel>
						);
					})}
				</div>
			</fieldset>
		)
	);
}
