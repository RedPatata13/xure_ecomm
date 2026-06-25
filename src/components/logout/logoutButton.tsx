import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "../../features/auth/stores/authStore";
import { useNavigate } from "react-router-dom";
import type { AuthState } from "../../features/auth/stores/authStore";

async function logoutUser() {
    const res = await fetch("/api/logout", {
        method: "POST",
        credentials: "include"
    });
    if (!res.ok) throw new Error("Logout failed");
}

export default function LogoutButton() {
    const clearUser = useAuthStore((s: AuthState) => s.clearUser);
    const navigate = useNavigate();

    const { mutate: logout, isPending } = useMutation({
        mutationFn: logoutUser,
        onSuccess: () => {
            clearUser();
            navigate("/login");
        }
    });

    return (
        <div className="relative group">
            <button
                onClick={() => logout()}
                disabled={isPending}
                className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-200 text-gray-400 bg-white transition-colors duration-200 hover:bg-[#DB4444] hover:text-white hover:border-[#DB4444] disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isPending ? (
                    <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                )}
            </button>

            <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs text-white bg-gray-700 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                Sign out
            </span>
        </div>
    )
}