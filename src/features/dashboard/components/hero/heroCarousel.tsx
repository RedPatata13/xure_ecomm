import React, { useState, useCallback, useEffect } from "react";
import HeroHollowButton from "./heroHollowButton";

export interface CarouselProps {
    title: string;
    onNext?: () => void;
    onPrevious?: () => void;
    onClick?: () => void;
}

export type CarouselSlideComponent = React.ComponentType<CarouselProps>;

export default function HeroCarousel({ slides }: { slides: CarouselSlideComponent[] }) {
    const [current, setCurrent] = useState(0);
    const PASSIVE_NEXT_MS = 8000;

    const handleNext = useCallback(() => {
        setCurrent(prev => (prev + 1) % slides.length);
    }, [slides.length]);

    const handlePrevious = useCallback(() => {
        setCurrent(prev => (prev - 1 + slides.length) % slides.length);
    }, [slides.length]);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") handleNext();
            if (e.key === "ArrowLeft") handlePrevious();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [handleNext, handlePrevious]);

    useEffect(() => {
        if (slides.length <= 1) return;
        const intervalId = setInterval(() => {
            handleNext();
        }, PASSIVE_NEXT_MS);
        return () => clearInterval(intervalId);
    }, [slides.length, handleNext]);

    const slideColors = [
        "bg-slate-800",
        "bg-indigo-800",
        "bg-emerald-800",
        "bg-violet-800",
        "bg-rose-800",
    ];

    return (
        <div className="relative w-full select-none">
            <div className="relative h-72 w-full overflow-hidden rounded-xl">
                <div
                    className="flex h-full transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                >
                    {slides.map((Slide, index) => (
                        <div
                            key={index}
                            className={`flex h-full w-full shrink-0 items-center justify-center ${slideColors[index % slideColors.length]}`}
                        >
                            <Slide
                                title={`Slide ${index + 1}`}
                                onNext={handleNext}
                                onPrevious={handlePrevious}
                            />
                        </div>
                    ))}
                </div>

                <button
                    onClick={handlePrevious}
                    aria-label="Previous slide"
                    className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border-2 border-white/60 bg-transparent p-2 text-white/80 transition hover:border-white hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-white"
                >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    onClick={handleNext}
                    aria-label="Next slide"
                    className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border-2 border-white/60 bg-transparent p-2 text-white/80 transition hover:border-white hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-white"
                >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                <div
                    className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/20 px-3 py-2 backdrop-blur-sm"
                    role="tablist"
                    aria-label="Slide navigation"
                >
                    {slides.map((_, index) => (
                        <HeroHollowButton
                            key={index}
                            active={index === current}
                            onClick={() => setCurrent(index)}
                        />
                    ))}
                </div>

                {slides.length > 1 && (
                    <div
                        className="absolute bottom-0 left-0 z-10 h-1 w-full bg-white/10"
                        aria-hidden="true"
                    >
                        <div
                            key={current}
                            className="h-full bg-white/70"
                            style={{
                                animation: `hero-carousel-progress ${PASSIVE_NEXT_MS}ms linear forwards`,
                            }}
                        />
                    </div>
                )}
            </div>

            <style>{`
                @keyframes hero-carousel-progress {
                    from { width: 0%; }
                    to { width: 100%; }
                }
            `}</style>
        </div>
    );
}