import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./navigation/routes";
import { useAuthStore } from "./features/auth/stores/authStore";
import { useEffect } from "react";

export default function App() {
  const setUser = useAuthStore((s) => s.setUser);

  useEffect(() => {
    fetch('/api/me', { credentials: "include" })
      .then(res => res.ok ? res.json() : null) 
      .then(data => {
        if (data?.user) setUser(data.user);
      })
      .catch(() => {});
  }, [setUser]);
  
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}