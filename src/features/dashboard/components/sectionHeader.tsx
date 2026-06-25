interface SectionLabelProps {
	label: string;
}

interface SectionHeaderProps {
	labelText : string;
	headerText: string;
}

export function SectionLabel({ label }: SectionLabelProps) {
	return (
		<div className="flex items-center gap-3">
			<div className="w-4 h-8 rounded-md bg-[#DB4444]" />
			<span className="text-[#DB4444] font-semibold">{label}</span>
		</div>
	);
}

export default function SectionHeader({ labelText, headerText } : SectionHeaderProps){
	return (
        <div className="flex flex-col gap-3">
            <SectionLabel label={labelText}/>
            <div className="font-semibold text-xl">{headerText}</div>
        </div>
    )
}