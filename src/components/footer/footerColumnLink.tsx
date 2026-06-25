import { Link } from "react-router-dom";

type FooterColumnLinkProps = {
	children: string;
	target?: string;
	cutoffs?: number[];
};

export default function FooterColumnLink({
	children,
	target,
	cutoffs = [],
}: FooterColumnLinkProps) {
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
		<Link
			to={target ?? ""}
			className="hover:underline hover:pointer"
		>
			{content}
		</Link>
	);
}