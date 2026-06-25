import { Link } from "react-router-dom";

export default function NavBarItem({ children, target, onClick }: { 
    children: React.ReactNode;
    target?: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}) {
    return (
        <Link
            to={target ?? ""}
            onClick={onClick}
            className="hover:underline"
        >
            {children}
        </Link>
    )
}