
import { ProductListByCollectionDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/lib/graphql";
import { ProductList } from "@/ui/components/ProductList";
//import { HeroList } from "@/ui/components/HeroList";

import dynamic from 'next/dynamic';

//const HeaderFour = dynamic(() => import('@/ui/layout/headers/header-4'), { ssr: false });
const JewelryBanner = dynamic(() => import('@/ui/components/banner/jewelry-banner'), { ssr: false });
const JewelryShopBanner = dynamic(() => import('@/ui/components/shop-banner/jewelry-shop-banner'), { ssr: false });
const JewelryAbout = dynamic(() => import('@/ui/components/about/jewelry-about'), { ssr: false });
const FeatureAreaThree = dynamic(() => import('@/ui/components/features/feature-area-3'), { ssr: false });



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
	//const hero_products = data2.collection?.products.edges.map(({ node: product }) => product);

	return (
    
		<section className="mx-auto p-0 pb-16">
			
			{/*<section className="mx-auto pb-16">
				<h2 className="sr-only">Product list</h2>
				<HeroList products={hero_products} />
			</section>
			<HeaderFour/>*/}
			<JewelryBanner/>
			<FeatureAreaThree />
			<JewelryShopBanner/>
			<JewelryAbout/>
			<div className="border-b">
				<div className="px-6 py-8 sm:px-6 sm:py-20">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-dark text-center text-2xl font-semibold tracking-tight text-black sm:text-4xl">
							Connect with Our Gold Jewelry Experts Today
						</h2>
						<p className="text-md mx-auto mt-3 max-w-xl text-gray-600 sm:mt-6 sm:text-lg sm:leading-snug">
							Discover the perfect piece to elevate your collection by reaching out to our seasoned gold
							jewelry specialists. Whether you're ready to make a purchase or wish to schedule a personalized
							visit, our team is here to assist you every step of the way. Contact us now to experience
							exceptional service and exquisite craftsmanship tailored to your desires.
						</p>
						<div className="mt-6 flex items-center justify-center gap-x-6 sm:mt-10">
							<a
								className="flex h-[38px] min-w-[130px] flex-row items-center justify-center rounded-full border border-transparent bg-black px-4 px-8 py-1.5 py-6 text-base text-sm font-medium font-medium tracking-wide tracking-wide text-white transition duration-150 ease-in-out disabled:cursor-not-allowed disabled:opacity-50"
								href="mailto:darkeagent@gmail.com"
								target="_blank"
							>
								Contact us now
							</a>
						</div>
					</div>
				</div>
			</div>
			<section className="mx-auto pb-16">
				<h2 className="sr-only">Product list</h2>
				<ProductList products={products} />
			</section>
		</section>
	);
}
