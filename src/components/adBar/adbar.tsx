import { useState } from "react";
import { ChevronDown } from "lucide-react";

const LANGUAGES = ["English", "Filipino", "Spanish", "French", "Japanese"];

interface AnnouncementBarProps {
    shopNowHref?: string;
    children : React.ReactNode
}

export default function AdBar({ children, shopNowHref = "#" }: AnnouncementBarProps) {
    const [selectedLang, setSelectedLang] = useState("English");
    const [open, setOpen] = useState(false);

    return (
        <div className="bg-black text-white text-sm px-6 py-3 flex items-center justify-between">

            
            <div className="w-32 hidden sm:block" />

            
            <p className="text-center text-xs sm:text-sm flex gap-2">
                { children }
                
                <a href={shopNowHref} className="font-bold underline underline-offset-2 hover:text-gray-300">
                    Shop Now
                </a>
            </p>

            
            <div className="relative w-32 flex justify-end">
                <button
                    onClick={() => setOpen(!open)}
                    className="flex items-center gap-1 text-sm hover:text-gray-300 transition-colors"
                >
                    {selectedLang}
                    <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
                </button>

                {open && (
                    <div className="absolute top-full right-0 mt-2 bg-white text-black rounded shadow-lg z-50 w-32">
                        {LANGUAGES.map(lang => (
                            <button
                                key={lang}
                                onClick={() => { setSelectedLang(lang); setOpen(false); }}
                                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
                            >
                                {lang}
                            </button>
                        ))}
                    </div>
                )}
            </div>

        </div>
    )
}