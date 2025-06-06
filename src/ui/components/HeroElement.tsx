import { LinkWithChannel } from "../atoms/LinkWithChannel";
import { ProductImageWrapper } from "@/ui/atoms/ProductImageWrapper";
import type { ProductListItemFragment } from "@/gql/graphql";
import { formatMoneyRange } from "@/lib/utils";

interface HeroElementProps {
	product: ProductListItemFragment;
	loading: "eager" | "lazy";
	priority?: boolean;
	description?: boolean;
}

interface CategoryDescription {
	blocks: Array<{
		data: {
			text: string;
		};
	}>;
}

/**
 * Renders a single product item in the hero section.
 */
export function HeroElement({ product, loading, priority }: HeroElementProps) {
	let descriptionText = "";

	try {
		const parsedData = JSON.parse(product.description ?? "") as CategoryDescription;
		descriptionText = parsedData.blocks.map((block) => block.data.text).join("\n");
	} catch (error) {
		console.error("Error parsing category description:", error);
		descriptionText = "Description not available.";
	}

	const sizeAttribute = product.attributes.find((attr) => attr.attribute.name?.toLowerCase() === "size")
		?.values[0]?.name;

	console.log("Size:", JSON.stringify(sizeAttribute));
	return (
		<li
			data-testid="ProductElement"
			className="text-dark relative flex flex-col overflow-hidden rounded-md transition"
		>
			<LinkWithChannel href={`/products/${product.slug}`} key={product.id}>
				<div className="relative z-0 flex items-center overflow-hidden px-6">
					<div className="container relative mx-auto flex px-6 py-16">
						<div className="relative z-0 flex flex-col sm:w-2/3 lg:w-2/5">
							<span className="mb-12 h-2 w-20 bg-gray-800 dark:bg-black"></span>
							<h3 className="text-dark text-start text-3xl font-semibold tracking-tight text-black sm:text-3xl">
								{product.name}
							</h3>

							<h5 className="text-dark py-6 text-start text-sm font-semibold tracking-tight text-black sm:text-sm">
								<div className="flex gap-2">
									<span className="inline-block rounded-full bg-black px-3 py-1 text-sm font-semibold text-gray-200">
										Weight : {product.weight?.value} g
									</span>
									<span className="text-black-800 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold">
										Size: {sizeAttribute ?? "0"}
									</span>
								</div>
							</h5>
							<h1 className="font-bebas-neue flex flex-col text-7xl font-black uppercase leading-none text-gray-800 sm:text-3xl dark:text-black">
								<span className="text-xl sm:text-3xl">
									{formatMoneyRange({
										start: product?.pricing?.priceRange?.start?.gross,
										stop: product?.pricing?.priceRange?.stop?.gross,
									})}
								</span>
							</h1>
							<p className="text-sm text-gray-700 sm:text-base dark:text-black">{descriptionText}</p>
							<div className="mt-8 flex">
								<a
									href={`/products/${product.slug}`}
									key={product.id}
									className="text-md hover:bg-grey-400 mr-4 rounded-full border-2 border-transparent bg-black px-4 py-1 uppercase text-white"
								>
									BUY NOW
								</a>
							</div>
						</div>
						<div className="relative hidden sm:block sm:w-1/3 lg:w-3/5">
							{product?.thumbnail?.url && (
								<ProductImageWrapper
									loading={loading}
									src={product.thumbnail.url}
									alt={product.thumbnail.alt ?? ""}
									width={212}
									height={212}
									sizes="212px"
									priority={priority}
									className="h-auto w-full"
								/>
							)}
						</div>
					</div>
				</div>
				{/*<div>
					<div className="grid grid-cols-2 gap-4">
						<div className=" p-4">
							
							{product?.thumbnail?.url && (
								<ProductImageWrapper
									loading={loading}
									src={product.thumbnail.url}
									alt={product.thumbnail.alt ?? ""}
									width={212}
									height={212}
									sizes="212px"
									priority={priority}
									className="h-auto w-full"
								/>
							)}
							
						</div>
						<div className="p-4">
							<div className="flex h-64 flex-col justify-between p-4">
								<div>
									<div className="p-4">
										<h3 className="mt-1 text-4xl font-bold">{product.name}</h3>
										<p className="mt-1 text-xl text-neutral-500" data-testid="ProductElement_Category">
											{product.category?.name}
										</p>
										<h1 className="mt-2 font-bold text-neutral-900" data-testid="ProductElement_PriceRange">
											{formatMoneyRange({
												start: product?.pricing?.priceRange?.start?.gross,
												stop: product?.pricing?.priceRange?.stop?.gross,
											})}
										</h1>
									</div>
								</div>

								<div className="p-4">
									<button className="rounded bg-black px-4 py-2 text-white">BUY ITEM</button>
								</div>
							</div>
						</div>
					</div>
				</div>*/}
			</LinkWithChannel>
		</li>
	);
}
