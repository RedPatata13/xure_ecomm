import { ChevronRight, ChevronLeft } from "lucide-react";

interface NavigationButtonsProps {
    onPrev?: () => void;
    onNext?: () => void;
    disableLeft?: boolean;
    disableRight?: boolean;
    className?: string;
}

export default function LeftRightButtons({ onPrev, onNext, disableLeft, disableRight, className = "" }: NavigationButtonsProps) {
    return (
        <div className={`flex gap-2 sm:gap-3 ${className}`}>
            <button
                onClick={onPrev}
                disabled={disableLeft}
                className="bg-gray-100 rounded-full p-2.5 sm:p-3 md:p-4 transition-colors disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-200"
            >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
                onClick={onNext}
                disabled={disableRight}
                className="bg-gray-100 rounded-full p-2.5 sm:p-3 md:p-4 transition-colors disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-200"
            >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
        </div>
    );
}