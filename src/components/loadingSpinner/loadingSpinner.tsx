import { motion } from "motion/react";

type LoadingSpinnerProps = {
	size?: number;
	thickness?: number;
	color?: string;
	backgroundColor?: string;
};

export default function LoadingSpinner({
	size = 32,
	thickness = 4,
	color = "#DB4444",
	backgroundColor = "#D1D5DB", 
}: LoadingSpinnerProps) {
	return (
		<motion.div
			className="rounded-full"
			style={{
				width: size,
				height: size,
				borderWidth: thickness,
				borderStyle: "solid",
				borderColor: backgroundColor,
				borderTopColor: color,
			}}
			animate={{ rotate: 360 }}
			transition={{
				duration: 1,
				ease: "linear",
				repeat: Infinity,
			}}
		/>
	);
}