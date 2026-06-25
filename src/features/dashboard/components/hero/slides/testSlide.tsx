import type { CarouselProps } from "../heroCarousel";

export default function SampleHeroSlide({
	title,
	onClick,
}: CarouselProps) {
	return (
		<div className="relative flex h-full w-full items-center overflow-hidden rounded-xl bg-linear-to-r from-slate-900 to-slate-700 px-16">
			<div className="max-w-xl">
				<p className="mb-2 text-sm font-medium uppercase tracking-widest text-red-500">
					Featured Game
				</p>

				<h1 className="mb-4 text-5xl font-bold text-white">
					{title}
				</h1>

				<p className="mb-6 text-lg text-slate-300">
					Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
				</p>

				<button
					onClick={onClick}
					className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
				>
					Learn More
				</button>
			</div>

			<div className="absolute right-12 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-red-500/20 blur-3xl" />
		</div>
	);
}