type HeroHollowButtonProps = {
	active?: boolean
	onClick?: () => void
}

export default function HeroHollowButton({
	active = false,
	onClick,
}: HeroHollowButtonProps) {
	return (
		<button
			type="button"
			onClick={onClick}
			aria-label="Carousel navigation"
			className={`
				h-4 w-4 rounded-full transition-all duration-200
				${active
					? "bg-red-600 border-2 border-white"
					: "bg-gray-400 border-2 border-transparent hover:bg-gray-500"
				}
			`}
		/>
	)
}