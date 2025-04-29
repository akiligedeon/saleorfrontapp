import { LinkWithChannel } from "../atoms/LinkWithChannel";
import { ProductImageWrapper } from "@/ui/atoms/ProductImageWrapper";

import type { ProductListItemFragment } from "@/gql/graphql";
import { formatMoneyRange } from "@/lib/utils";

export function ProductElement({
	product,
	loading,
	priority,
}: { product: ProductListItemFragment } & { loading: "eager" | "lazy"; priority?: boolean }) {
	const sizeAttribute = product.attributes.find((attr) => attr.attribute.name?.toLowerCase() === "size")
		?.values[0]?.name;
	console.log("Size:", sizeAttribute);

	return (
		<li data-testid="ProductElement">
			<LinkWithChannel href={`/products/${product.slug}`} key={product.id}>
				<div>
					{product?.thumbnail?.url && (
						<ProductImageWrapper
							loading={loading}
							src={product.thumbnail.url}
							alt={product.thumbnail.alt ?? ""}
							width={212}
							height={212}
							sizes={"212px"}
							priority={priority}
						/>
					)}
					<div className="mt-2 flex justify-center">
						<div>
							{/* <h3 className="mt-1 text-sm font-semibold text-neutral-900">{product.name}</h3> */}
							<p className="mt-1 text-sm text-neutral-500" data-testid="ProductElement_Category">
								{product.category?.name}
							</p>
							<h5 className="text-dark py-1 text-start text-sm font-semibold tracking-tight text-black sm:text-sm">
								<div className="flex gap-2">
									<span className="inline-block rounded-full bg-black px-3 py-1 text-sm font-semibold text-gray-200">
										Weight : {product.weight?.value} g
									</span>
									<span className="text-black-800 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold">
										Size: {sizeAttribute ?? "0"}
									</span>
								</div>
							</h5>

							{/* <p className="mt-1 text-sm text-neutral-500" data-testid="ProductElement_Category">
								Size : {sizeAttribute}
							</p> */}

							{/* <p className="mt-1 text-sm text-neutral-500" data-testid="ProductElement_Category">
								{JSON.stringify(product)}
							</p> */}

							{/* <p className="mt-1 text-sm text-neutral-500" data-testid="ProductElement_Category">
									Weight : {product?.weight?.value} {product?.weight?.unit}
								</p> */}

							{/* <h1 className="font-bolder mt-2" data-testid="ProductElement_PriceRange">
								{formatMoneyRange({
									start: product?.pricing?.priceRange?.start?.gross,
									stop: product?.pricing?.priceRange?.stop?.gross,
								})}
							</h1> */}
							<h1 className="font-bolder mt-2" data-testid="ProductElement_PriceRange">
								{formatMoneyRange({
									start: product?.pricing?.priceRange?.start?.gross,
									stop: product?.pricing?.priceRange?.stop?.gross,
								})}
							</h1>
						</div>
					</div>
				</div>
			</LinkWithChannel>
		</li>
	);
}
