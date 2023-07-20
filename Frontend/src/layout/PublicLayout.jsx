import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

function PublicLayout() {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/auth");
    }
  }, [navigate, user]);
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Outlet />
    </div>
  );
}

export { PublicLayout };
