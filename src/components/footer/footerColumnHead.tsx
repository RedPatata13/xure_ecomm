export default function FooterColumnHeadItem({ children }: { children: React.ReactNode }) {
    return (
        <div className="text-white font-semibold text-lg">
            { children }
        </div>
    )
}