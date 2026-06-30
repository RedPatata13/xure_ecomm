import { Button as BaseButton } from '@headlessui/react'

type ButtonSize = "sm" | "md" | "lg";

const sizeStyles: Record<ButtonSize, string> = {
    sm: "px-4 py-1.5 text-xs",
    md: "px-6 py-2 text-sm",
    lg: "px-8 py-3 text-base",
};

export default function Button({ children, type = "button", size = "md", className = "", disabled = false, onClick = () => {} }: { 
    children: React.ReactNode, 
    type?: "submit" | "button" | "reset",
    size?: ButtonSize,
    className?: string,
    disabled?: boolean,
    onClick?: () => void
}) {
    return (
        <BaseButton 
            type={type} 
            disabled={disabled}
            onClick={onClick}
            className={`rounded bg-[#DB4444] text-white data-active:bg-red-700 data-hover:bg-red-600 data-disabled:opacity-50 data-disabled:cursor-not-allowed whitespace-nowrap ${sizeStyles[size]} ${className}`}
            >   
            {children}
        </BaseButton>
    )
}