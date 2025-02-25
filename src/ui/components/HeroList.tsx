import React from "react";
import { HeroElement } from "./HeroElement";
import type { ProductListItemFragment } from "@/gql/graphql";

interface HeroListProps {
	products: readonly ProductListItemFragment[];
}

/**
 * Renders a responsive grid of products (the "hero" section).
 */
export const HeroList: React.FC<HeroListProps> = ({ products }) => {
	return (
		<ul
			className="
        mx-auto 
        grid 
        max-w-7xl 
        grid-cols-1 
        gap-6 
        p-4 
        sm:grid-cols-2 
        lg:grid-cols-1 
        xl:grid-cols-1
      "
		>
			{products.map((product, index) => (
				<HeroElement
					key={product.id}
					product={product}
					priority={index < 2}
					loading={index < 3 ? "eager" : "lazy"}
				/>
			))}
		</ul>
	);
};
