export interface SubFooterItemProps {
	logoPath?: string;
	itemHeader: string;
	itemLabel: string;
}

export default function SubFooterItem(props: SubFooterItemProps) {
	return (
		<div className="flex flex-col items-center gap-2 w-0.3">
			<img
				src={props.logoPath ?? "/favicon.svg"}
				alt=""
				className="w-16 h-16 rounded-lg object-cover"
			/>
			<div className="font-bold uppercase">{props.itemHeader}</div>
			<p>{props.itemLabel}</p>
		</div>
	);
}