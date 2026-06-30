import type { LucideIcon } from "lucide-react";
import LoadingSpinner from "../loadingSpinner/loadingSpinner";

type IconButtonProps = {
	icon: LucideIcon;
	onClick?: () => void;
	tooltip?: string;
	disabled?: boolean;
	loading?: boolean;
	size?: number;
	className?: string;
};

export default function IconButton({
	icon: Icon,
	onClick,
	tooltip,
	disabled = false,
	loading = false,
	size = 18,
	className = "",
}: IconButtonProps) {
	return (
		<div className="relative group">
			<button
				onClick={onClick}
				disabled={disabled || loading}
				className={`flex items-center justify-center w-9 h-9 rounded-full border border-gray-200 text-gray-400 bg-white transition-colors duration-200 hover:bg-[#DB4444] hover:text-white hover:border-[#DB4444] disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
			>
				{loading ? (
					<LoadingSpinner size={size} thickness={2} />
				) : (
					<Icon size={size} />
				)}
			</button>

			{tooltip && (
				<span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs text-white bg-gray-700 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
					{tooltip}
				</span>
			)}
		</div>
	);
}