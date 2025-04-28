import { notFound } from "next/navigation";
import { type ResolvingMetadata, type Metadata } from "next";
import { ProductListByCategoryDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/lib/graphql";
import { ProductList } from "@/ui/components/ProductList";

export const generateMetadata = async (
	{ params }: { params: { slug: string; channel: string } },
	parent: ResolvingMetadata,
): Promise<Metadata> => {
	const { category } = await executeGraphQL(ProductListByCategoryDocument, {
		variables: { slug: params.slug, channel: params.channel },
		revalidate: 60,
	});

	return {
		title: `${category?.name || "Categroy"} | ${category?.seoTitle || (await parent).title?.absolute}`,
		description: category?.seoDescription || category?.description || category?.seoTitle || category?.name,
	};
};

interface CategoryDescription {
	blocks: Array<{
		data: {
			text: string;
		};
	}>;
}

export default async function Page({ params }: { params: { slug: string; channel: string } }) {
	const { category } = await executeGraphQL(ProductListByCategoryDocument, {
		variables: { slug: params.slug, channel: params.channel },
		revalidate: 60,
	});

	if (!category || !category.products) {
		notFound();
	}

	const { name, products } = category;
	let descriptionText = "";

	try {
		const parsedData = JSON.parse(category.description ?? "") as CategoryDescription;
		descriptionText = parsedData.blocks.map((block) => block.data.text).join("\n");
	} catch (error) {
		console.error("Error parsing category description:", error);
		descriptionText = "Description not available.";
	}
	return (
		<div className="mx-auto max-w-7xl p-8 pb-16">
			<div className="mx-auto px-4 sm:container">
				<div className="border-stroke dark:border-dark-3 border-b">
					<h2 className="text-dark mb-2 text-2xl font-semibold">{name}</h2>
					<p className="text-body-color dark:text-dark-6 mb-6 text-sm font-medium">{descriptionText}</p>
				</div>
			</div>
			<ProductList products={products.edges.map((e) => e.node)} />
		</div>
	);
}
