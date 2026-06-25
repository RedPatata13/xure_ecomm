type Theme = "dark" | "light";

export default function Exclusive({ theme = "light" }: { theme?: Theme} ){
    return (
        <div className={`text-lg font-bold ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>Exclusive</div>
    )
} 