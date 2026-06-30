import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export interface PasswordInputProps {
	password: string;
	className?: string;
	disabled?: boolean;
	onChange?: (value: string) => void;
	placeholder?: string;
	type?: "password" | "text";
}

export default function PasswordInput({
	password,
	className = "",
	disabled = false,
	onChange,
	placeholder = "Password",
	type = "password",
}: PasswordInputProps) {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className={`relative ${className}`}>
			<input
				type={showPassword ? "text" : type}
				placeholder={placeholder}
				value={password}
				onChange={(e) => onChange?.(e.target.value)}
				disabled={disabled}
				className="w-full border-b border-gray-300 py-2 pr-10 text-sm outline-none transition-colors focus:border-[#DB4444] disabled:opacity-50"
				autoComplete="new-password"
			/>

			<button
				type="button"
				onClick={() => setShowPassword((prev) => !prev)}
				disabled={disabled}
				className="absolute right-0 top-1/2 -translate-y-1/2 p-1 text-gray-500 hover:text-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
				aria-label={showPassword ? "Hide password" : "Show password"}
			>
				{showPassword ? (
					<EyeOff size={18} />
				) : (
					<Eye size={18} />
				)}
			</button>
		</div>
	);
}