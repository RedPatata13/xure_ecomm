export default function FooterColumnItem({ text, cutoff }: { text: string, cutoff?: number }) {
    if (cutoff && text.length > cutoff) {
        const breakIndex = text.lastIndexOf(" ", cutoff);
        const firstLine = text.slice(0, breakIndex);
        const secondLine = text.slice(breakIndex + 1);
        return (
            <div className="text-white">
                {firstLine}<br />{secondLine}
            </div>
        );
    }

    return (
        <div className="text-white">
            {text}
        </div>
    );
}