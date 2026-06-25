import { useState } from "react";

export default function CategoryTile({ children, urlPath }: { children: React.ReactNode, urlPath: string }) {
    const [isPressed, setIsPressed] = useState(false);

    return (
        <div
            onMouseDown={() => setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
            onMouseLeave={() => setIsPressed(false)}
            className={`flex flex-col items-center justify-center gap-3 p-6 w-full border rounded cursor-pointer transition-colors aspect-square
                ${isPressed ? "bg-[#DB4444] text-white border-[#DB4444]" : "bg-white text-black border-gray-300 hover:border-gray-400"}`}
        >
            <img
                src={urlPath}
                alt="Category"
                className={`stroke-0 w-12 h-12 object-contain ${isPressed ? "invert" : ""}`}
            />
            <span className="text-sm text-center">{children}</span>
        </div>
    )
}