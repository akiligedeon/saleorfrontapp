import React from "react";
import { Carousel } from "flowbite-react";
import { HeroElement } from "./HeroElement";
import type { ProductListItemFragment } from "@/gql/graphql";

interface HeroListProps {
  products: readonly ProductListItemFragment[];
}

/**
 * Renders a carousel of products (the "hero" section).
 */
export const HeroList: React.FC<HeroListProps> = ({ products }) => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <Carousel>
        {products.map((product, index) => (
          <HeroElement
            key={product.id}
            product={product}
            priority={index < 2}
            loading={index < 3 ? "eager" : "lazy"}
          />
        ))}
      </Carousel>
    </div>
  );
};
