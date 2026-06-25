import { ChevronRight, ChevronLeft } from "lucide-react";

interface NavigationButtonsProps {
    onPrev?: () => void;
    onNext?: () => void;
    disableLeft?: boolean;
    disableRight?: boolean;
}

export default function LeftRightButtons({ onPrev, onNext, disableLeft, disableRight }: NavigationButtonsProps) {
    return (
        <div className="flex gap-2">
            <button
                onClick={onPrev}
                disabled={disableLeft}
                className="bg-gray-100 rounded-full p-4 transition-colors disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-200"
            >
                <ChevronLeft className="w-4 h-4" />
            </button>
            <button
                onClick={onNext}
                disabled={disableRight}
                className="bg-gray-100 rounded-full p-4 transition-colors disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-200"
            >
                <ChevronRight className="w-4 h-4" />
            </button>
        </div>
    );
}