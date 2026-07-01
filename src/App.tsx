import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./navigation/routes";
import { useAuthStore } from "./features/auth/stores/authStore";
import { useEffect } from "react";

export default function App() {
	const setUser = useAuthStore(s => s.setUser);
	const setInitialized = useAuthStore(s => s.setInitialized);

useEffect(() => {
	console.log("Starting /api/me");

	fetch("/api/me", { credentials: "include" })
		.then(res => {
			console.log("/api/me status:", res.status);
			return res.ok ? res.json() : null;
		})
		.then(data => {
			console.log("/api/me data:", data);

			if (data?.user) {
				console.log("Calling setUser");
				setUser(data.user);
			}
		})
		.finally(() => {
			console.log("/api/me finished");
			setInitialized(true);
		});
}, [setUser, setInitialized]);

	return (
		<BrowserRouter>
			<AppRoutes />
		</BrowserRouter>
	);
}