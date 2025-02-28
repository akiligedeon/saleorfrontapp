import Link from "next/link";
import { NavLink } from "./NavLink";
import { executeGraphQL } from "@/lib/graphql";
import { MenuGetBySlugDocument } from "@/gql/graphql";

export const NavLinks = async ({ channel }: { channel: string }) => {
	const navLinks = await executeGraphQL(MenuGetBySlugDocument, {
		variables: { slug: "navbar", channel },
		revalidate: 60 * 60 * 24,
	});

	// Define local links
	const localLinks = [
		{ id: "local-1", name: "Size Chart", href: "/size" },
		{ id: "local-2", name: "About Us", href: "/about" },
		{ id: "local-3", name: "Care", href: "/care" },
	];

	// Merge dynamic Saleor links with local links
	const combinedLinks = [...(navLinks.menu?.items || []),...localLinks];

	return (
		<>
			{combinedLinks.map((item) => {
				if ("href" in item) {
					// Local link case
					return (
						<NavLink key={item.id} href={item.href}>
							{item.name}
						</NavLink>
					);
				}

				// Saleor dynamic links
				if (item.category) {
					return (
						<NavLink key={item.id} href={`/categories/${item.category.slug}`}>
							{item.category.name}
						</NavLink>
					);
				}
				if (item.collection) {
					return (
						<NavLink key={item.id} href={`/collections/${item.collection.slug}`}>
							{item.collection.name}
						</NavLink>
					);
				}
				if (item.page) {
					return (
						<NavLink key={item.id} href={`/pages/${item.page.slug}`}>
							{item.page.title}
						</NavLink>
					);
				}
				if (item.url) {
					return (
						<Link key={item.id} href={item.url}>
							{item.name}
						</Link>
					);
				}
				return null;
			})}
		</>
	);
};
