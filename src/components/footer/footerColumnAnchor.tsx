type FooterColumnAnchorProps = {
	children: string;
	href?: string;
	cutoffs?: number[];
	className? : string;
};

export default function FooterColumnAnchor({
	children,
	href = "",
	cutoffs = [],
	className = ""
}: FooterColumnAnchorProps) {
	const content: React.ReactNode[] = [];
	let start = 0;

	const sortedCutoffs = [...cutoffs].sort((a, b) => a - b);

	sortedCutoffs.forEach((cutoff, index) => {
		content.push(children.slice(start, cutoff));
		content.push(<br key={`br-${index}`} />);
		start = cutoff;
	});

	content.push(children.slice(start));

	return (
		<a
			href={href}
			className={`hover:underline ${className}`}
		>
			{content}
		</a>
	);
}