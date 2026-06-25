import { useEffect } from "react";
import { useAuthStore } from "../stores/authStore";

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const setUser = useAuthStore(s => s.setUser);
  const clearUser = useAuthStore(s => s.clearUser);
  const setInitialized = useAuthStore(s => s.setInitialized);

  useEffect(() => {
    fetch("http://localhost:3000/api/me", {
      credentials: "include",   
    })
      .then(res => res.ok ? res.json() : null)
      .then(data => {
        setUser(data?.user ?? null);
      })
      .catch(() => clearUser)
      .finally(() => setInitialized(true));
  }, [clearUser, setUser, setInitialized]);

  return <>{children}</>;
}