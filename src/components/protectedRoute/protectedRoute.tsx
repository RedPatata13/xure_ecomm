import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../features/auth/stores/authStore";
import type React from "react";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
	const user = useAuthStore(u => u.user);
	const initialized = useAuthStore(u => u.initialized);

	console.log("ProtectedRoute", {
		user,
		initialized,
		path: window.location.pathname,
	});

	if (!initialized) return null;

	if (!user) {
		console.log("Redirecting because user is null");
		return <Navigate to="/login" replace />;
	}

	return <>{children}</>;
}