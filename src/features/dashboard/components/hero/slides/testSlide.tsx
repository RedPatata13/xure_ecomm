import type { CarouselProps } from "../heroCarousel";
export default function SampleHeroSlide({
    title,
    onClick,
}: CarouselProps) {
    return (
        <div className="relative flex h-full w-full items-center overflow-hidden rounded-xl bg-linear-to-r from-slate-900 to-slate-700 px-5 sm:px-10 md:px-16">
            <div className="max-w-xl">
                <p className="mb-1 sm:mb-2 text-[10px] sm:text-sm font-medium uppercase tracking-widest text-red-500">
                    Featured Game
                </p>
                <h1 className="mb-2 sm:mb-4 text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight">
                    {title}
                </h1>
                <p className="mb-3 sm:mb-6 text-xs sm:text-base md:text-lg text-slate-300 line-clamp-2 sm:line-clamp-none">
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                </p>
                <button
                    onClick={onClick}
                    className="rounded-lg bg-red-600 px-3 py-1.5 sm:px-6 sm:py-3 text-xs sm:text-base font-semibold text-white transition hover:bg-red-700"
                >
                    Learn More
                </button>
            </div>
            <div className="absolute right-4 sm:right-12 top-1/2 h-32 w-32 sm:h-64 sm:w-64 -translate-y-1/2 rounded-full bg-red-500/20 blur-3xl" />
        </div>
    );
}