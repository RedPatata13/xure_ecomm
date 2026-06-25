import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../features/auth/stores/authStore";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const user = useAuthStore(u => u.user);
  const initialized = useAuthStore(u => u.initialized);

  if (!initialized) return null; 
  if (!user) return <Navigate to="/login" replace />;
  return <>{children}</>;
}