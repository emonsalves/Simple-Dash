import { Outlet, Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

function ProtectedRoute() {
  const auth = useAuthContext();
  return auth.isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoute;
