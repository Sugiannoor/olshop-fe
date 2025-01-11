import { useAuth } from "@/features/auth/hooks";
import { Navigate, Outlet } from "react-router-dom";

export const AuthLayout = () => {
  const { creds } = useAuth();

  if (creds) return <Navigate to="/marketplace" replace />;

  return (
    <main>
      <Outlet />
    </main>
  );
};
