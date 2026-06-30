import { Search } from "lucide-react";
import { useState } from "react";

interface SearchBarProps {
    onSearch?: (query: string) => void;
    placeholder?: string;
    className? : string;
}

export default function SearchBar({ onSearch, placeholder = "What are you looking for?", className = "" }: SearchBarProps) {
    const [query, setQuery] = useState("");

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        onSearch?.(query);
    }

    return (
        <form onSubmit={handleSubmit} className={`flex items-center bg-gray-100 rounded px-4 py-2 gap-2 w-64 ${className}`}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={placeholder}
                className="bg-transparent outline-none text-sm text-gray-500 placeholder-gray-400 flex-1"
            />
            <button type="submit">
                <Search className="w-4 h-4 text-gray-600 hover:text-black transition-colors" />
            </button>
        </form>
    )
}