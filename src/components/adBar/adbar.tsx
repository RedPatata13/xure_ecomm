import { useState } from "react";
import { ChevronDown } from "lucide-react";

const LANGUAGES = ["English", "Filipino", "Spanish", "French", "Japanese"];

interface AnnouncementBarProps {
  shopNowHref?: string;
  children: React.ReactNode;
}

export default function AdBar({
  children,
  shopNowHref = "#",
}: AnnouncementBarProps) {
  const [selectedLang, setSelectedLang] = useState("English");
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-black text-white text-sm px-4 sm:px-6 py-2 sm:py-3 flex items-center justify-between gap-2">
      <p className="flex-1 text-center text-xs sm:text-sm flex flex-wrap justify-center items-center gap-x-2 gap-y-0.5">
        {children}
        <a
          href={shopNowHref}
          className="font-bold underline underline-offset-2 hover:text-gray-300 whitespace-nowrap"
        >
          Shop Now
        </a>
      </p>

      <div className="relative flex-shrink-0">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-1 text-xs sm:text-sm hover:text-gray-300 transition-colors whitespace-nowrap"
        >
          <span className="hidden sm:inline">{selectedLang}</span>
          <span className="sm:hidden">{selectedLang.slice(0, 2)}</span>
          <ChevronDown
            className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>

        {open && (
          <div className="absolute top-full right-0 mt-2 bg-white text-black rounded shadow-lg z-50 w-32">
            {LANGUAGES.map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  setSelectedLang(lang);
                  setOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
              >
                {lang}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
