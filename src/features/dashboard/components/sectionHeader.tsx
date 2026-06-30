interface SectionLabelProps {
    label: string;
}
interface SectionHeaderProps {
    labelText: string;
    headerText: string;
    className?: string;
}

export function SectionLabel({ label }: SectionLabelProps) {
    return (
        <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-3 h-6 sm:w-4 sm:h-8 rounded-md bg-[#DB4444]" />
            <span className="text-sm sm:text-base text-[#DB4444] font-semibold">{label}</span>
        </div>
    );
}

export default function SectionHeader({ labelText, headerText, className }: SectionHeaderProps) {
    return (
        <div className={`flex flex-col gap-2 sm:gap-3 w-full ${className}`}>
            <SectionLabel label={labelText} />
            <div className="font-semibold text-lg sm:text-xl md:text-2xl">{headerText}</div>
        </div>
    );
}