"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { LinkWithChannel } from "../atoms/LinkWithChannel";

import logo from "@/assets/images/gltzlogo.png";

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
			<LinkWithChannel aria-label="homepage" href="/">
				<Image src={logo} alt="Your Store Name" width={40} height={40} />
			</LinkWithChannel>
		</div>
	);
};
