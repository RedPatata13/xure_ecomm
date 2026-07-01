export default function FooterColumnHeadItem({ children, className = ""}: { children: React.ReactNode, className: string }) {
    return (
        <div className={`text-white font-semibold text-lg ${className}`}>
            { children }
        </div>
    )
}