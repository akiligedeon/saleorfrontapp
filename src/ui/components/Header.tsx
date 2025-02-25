import { Logo } from "./Logo";
import { Nav } from "./nav/Nav";

export function Header({ channel }: { channel: string }) {
	return (
		<header className="sticky top-0 z-20 bg-neutral-100/50 backdrop-blur-md">
			<p className="flex h-10 items-center justify-center bg-slate-900 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
				Get free delivery on orders over $100
			</p>
			<div className="mx-auto max-w-7xl px-3 sm:px-8">
				<div className="flex h-16 justify-between gap-4 md:gap-8">
					<Logo />
					<Nav channel={channel} />
				</div>
			</div>
		</header>
	);
}
