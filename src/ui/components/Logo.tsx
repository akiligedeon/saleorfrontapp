"use client";
//import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LinkWithChannel } from "../atoms/LinkWithChannel";
import { NavLink } from "./nav/components/NavLink";

import logo from "@/assets/images/gltz.png";

const companyName = "GLTZ";

export const Logo = () => {
	const pathname = usePathname();

	if (pathname === "/") {
		return (
			<h1 className="flex items-center font-bold" aria-label="homepage">
				{companyName}
			</h1>
		);
	}

	return (
		<div className="flex items-center font-bold">
			<LinkWithChannel
				aria-label="homepage"
				href="/"
				className="no-underline focus:no-underline active:no-underline"
			>
				<NavLink href="/">
					<Image src={logo} alt="Your Store Name" width={60} height={60} />
				</NavLink>
			</LinkWithChannel>
		</div>
	);
};
