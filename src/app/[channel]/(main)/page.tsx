import { ProductListByCollectionDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/lib/graphql";
import { ProductList } from "@/ui/components/ProductList";
import { HeroList } from "@/ui/components/HeroList";

export const metadata = {
	title: "Luxury Jewelry Store | Timeless Elegance & Craftsmanship",
	description:
		"Discover exquisite jewelry with our premium online storefront. Experience seamless shopping with our elegant, high-performance platform, designed for luxury brands in the Middle East.",
};

export default async function Page({ params }: { params: { channel: string } }) {
	const data = await executeGraphQL(ProductListByCollectionDocument, {
		variables: {
			slug: "featured-products",
			channel: params.channel,
		},
		revalidate: 60,
	});
	if (!data.collection?.products) {
		return null;
	}

	const data2 = await executeGraphQL(ProductListByCollectionDocument, {
		variables: {
			slug: "hero-products",
			channel: params.channel,
		},
		revalidate: 60,
	});

	if (!data2.collection?.products) {
		return null;
	}

	const products = data.collection?.products.edges.map(({ node: product }) => product);
	const hero_products = data2.collection?.products.edges.map(({ node: product }) => product);

	return (
		<section className="mx-auto max-w-7xl p-8 pb-16">
			<section className="mx-auto max-w-7xl p-8 pb-16">
				<h2 className="sr-only">Product list</h2>
				<HeroList products={hero_products} />
			</section>
			<section className="mx-auto max-w-7xl p-8 pb-16">
				<h2 className="sr-only">Product list</h2>
				<ProductList products={products} />
			</section>
		</section>
	);
}
