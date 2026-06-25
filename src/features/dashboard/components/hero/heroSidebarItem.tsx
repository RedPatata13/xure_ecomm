import { Link } from "react-router-dom"

export default function HeroSidebarItem({ children } : { children: React.ReactNode}){
    return (
        <Link
            to=""
            className="font-semibold hover:font-bold hover:underline"
        >
            {children}
        </Link>
    )
}