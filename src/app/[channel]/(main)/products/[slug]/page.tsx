import edjsHTML from "editorjs-html";
import { revalidatePath } from "next/cache";
import { notFound } from "next/navigation";
import { type ResolvingMetadata, type Metadata } from "next";
import xss from "xss";
import { invariant } from "ts-invariant";

import { type WithContext, type Product } from "schema-dts";
import { AddButton, AddButtonOutline } from "./AddButton";
import { VariantSelector } from "@/ui/components/VariantSelector";
import { ProductImageWrapper, ProductImageWrapperSmall } from "@/ui/atoms/ProductImageWrapper";
import { AvailabilityMessage } from "@/ui/components/AvailabilityMessage";

import { executeGraphQL } from "@/lib/graphql";
import * as Checkout from "@/lib/checkout";
import { getGoldPrice } from "@/lib/getGoldPrice";
import {
	CheckoutAddLineDocument,
	ProductDetailsDocument,
	ProductListDocument,
	ProductVariantChannelListingUpdateDocument,
} from "@/gql/graphql";

const parser = edjsHTML();

export async function generateMetadata(
	{
		params,
		searchParams,
	}: {
		params: { slug: string; channel: string };
		searchParams: { variant?: string };
	},
	parent: ResolvingMetadata,
): Promise<Metadata> {
	const { product } = await executeGraphQL(ProductDetailsDocument, {
		variables: {
			slug: decodeURIComponent(params.slug),
			channel: params.channel,
		},
		revalidate: 60,
	});

	if (!product) {
		notFound();
	}

	const productName = product.seoTitle || product.name;
	const variantName = product.variants?.find(({ id }) => id === searchParams.variant)?.name;
	const productNameAndVariant = variantName ? `${productName} - ${variantName}` : productName;

	return {
		title: `${product.name} | ${product.seoTitle || (await parent).title?.absolute}`,
		description: product.seoDescription || productNameAndVariant,
		alternates: {
			canonical: process.env.NEXT_PUBLIC_STOREFRONT_URL
				? `${process.env.NEXT_PUBLIC_STOREFRONT_URL}/products/${encodeURIComponent(params.slug)}`
				: undefined,
		},
		openGraph: product.thumbnail
			? {
					images: [
						{
							url: product.thumbnail.url,
							alt: product.name,
						},
					],
				}
			: null,
	};
}

export async function generateStaticParams({ params }: { params: { channel: string } }) {
	const { products } = await executeGraphQL(ProductListDocument, {
		revalidate: 60,
		variables: { first: 20, channel: params.channel },
		withAuth: false,
	});

	const paths = products?.edges.map(({ node: { slug } }) => ({ slug })) || [];
	return paths;
}

export default async function Page({
	params,
	searchParams,
}: {
	params: { slug: string; channel: string };
	searchParams: { variant?: string };
}) {
	const { product } = await executeGraphQL(ProductDetailsDocument, {
		variables: {
			slug: decodeURIComponent(params.slug),
			channel: params.channel,
		},
		revalidate: 60,
	});

	if (!product) {
		notFound();
	}

	const description = product?.description ? parser.parse(JSON.parse(product.description)) : null;
	const variants = product.variants;
	const selectedVariantID = searchParams.variant;
	const selectedVariant = variants?.find(({ id }) => id === selectedVariantID);
	const isAvailable = variants?.some((v) => v.quantityAvailable) ?? false;
	const goldPrice = await getGoldPrice();
	const firstImage = product.thumbnail;

	console.log("GOLD PRICE :" + goldPrice);

	async function addItem() {
		"use server";

		const checkout = await Checkout.findOrCreate({
			checkoutId: Checkout.getIdFromCookies(params.channel),
			channel: params.channel,
		});

		invariant(checkout, "This should never happen");

		Checkout.saveIdToCookie(params.channel, checkout.id);

		if (!selectedVariantID || !selectedVariant) return;

		// ✅ Update price via ProductVariantChannelListingUpdate
		const channelListing = selectedVariant.channelListings?.find(
			(cl: { channel: { slug: string } }) => cl.channel.slug === params.channel,
		);

		if (channelListing) {
			await executeGraphQL(ProductVariantChannelListingUpdateDocument, {
				variables: {
					id: selectedVariant.id,
					input: [
						{
							channelId: channelListing.channel.id,
							price: goldPrice ?? 1, // convert to string if required
						},
					],
				},
			});
		}

		// ✅ Add to cart
		await executeGraphQL(CheckoutAddLineDocument, {
			variables: {
				id: checkout.id,
				productVariantId: decodeURIComponent(selectedVariantID),
			},
			cache: "no-cache",
		});

		revalidatePath("/cart");
	}

	const productJsonLd: WithContext<Product> = {
		"@context": "https://schema.org",
		"@type": "Product",
		image: product.thumbnail?.url,
		...(selectedVariant
			? {
					name: `${product.name} - ${selectedVariant.name}`,
					description: product.seoDescription || `${product.name} - ${selectedVariant.name}`,
					offers: {
						"@type": "Offer",
						availability: selectedVariant.quantityAvailable
							? "https://schema.org/InStock"
							: "https://schema.org/OutOfStock",
						priceCurrency: selectedVariant.pricing?.price?.gross.currency,
						price: selectedVariant.pricing?.price?.gross.amount,
					},
				}
			: {
					name: product.name,
					description: product.seoDescription || product.name,
					offers: {
						"@type": "AggregateOffer",
						availability: product.variants?.some((v) => v.quantityAvailable)
							? "https://schema.org/InStock"
							: "https://schema.org/OutOfStock",
						priceCurrency: product.pricing?.priceRange?.start?.gross.currency,
						lowPrice: product.pricing?.priceRange?.start?.gross.amount,
						highPrice: product.pricing?.priceRange?.stop?.gross.amount,
					},
				}),
	};

	return (
		<section className="mx-auto grid max-w-7xl p-8">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(productJsonLd),
				}}
			/>
			<form className="grid gap-2 sm:grid-cols-2 lg:grid-cols-8" action={addItem}>
				<div className="md:col-span-1 lg:col-span-5">
					{firstImage && (
						<div className="overflow-hidden rounded-2xl">
							<div className="transition-transform duration-300 ease-in-out hover:scale-150">
								<ProductImageWrapper
									priority
									alt={firstImage.alt ?? ""}
									width={1024}
									height={1024}
									src={firstImage.url}
								/>
							</div>
						</div>
					)}
					<div className="mt-4 grid grid-cols-3 gap-2">
						{product.media?.map((mediaItem, index) => (
							<div key={index} className="overflow-hidden rounded-lg border p-1">
								<ProductImageWrapperSmall
									alt={mediaItem.alt ?? `Image ${index + 1}`}
									width={80}
									height={80}
									src={mediaItem.url}
								/>
							</div>
						))}
					</div>
				</div>
				<div className="flex flex-col pt-6 sm:col-span-1 sm:px-6 sm:pt-0 lg:col-span-3 lg:pt-16">
					{variants && (
						<VariantSelector
							selectedVariant={selectedVariant}
							variants={variants}
							product={product}
							channel={params.channel}
							goldPrice={goldPrice ?? null}
						/>
					)}
					<AvailabilityMessage isAvailable={isAvailable} />
					<div className="mt-8">
						<AddButtonOutline disabled={!selectedVariantID || !selectedVariant?.quantityAvailable} />
					</div>
					<div className="mt-2">
						<AddButton disabled={!selectedVariantID || !selectedVariant?.quantityAvailable} />
					</div>

					{description && (
						<div className="mt-8 space-y-6 text-sm text-neutral-500">
							{description.map((content) => (
								<div key={content} dangerouslySetInnerHTML={{ __html: xss(content) }} />
							))}
						</div>
					)}
				</div>
			</form>
		</section>
	);
}
