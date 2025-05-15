import { type ReactNode } from "react";
import { executeGraphQL } from "@/lib/graphql";
import { ChannelsListDocument } from "@/gql/graphql";

export const generateStaticParams = async () => {
	if (process.env.SALEOR_APP_TOKEN) {
		const channels = await executeGraphQL(ChannelsListDocument, {
			withAuth: false, // Don't use cookies
			headers: {
				Authorization: `Bearer ${process.env.SALEOR_APP_TOKEN}`, // Provide App Token
			},
		});

		return (
			channels.channels?.filter((channel) => channel.isActive).map((channel) => ({ channel: channel.slug })) ?? []
		);
	} else {
		return [{ channel: "default-channel" }];
	}
};

export default function ChannelLayout({ children }: { children: ReactNode }) {
	return children;
}
