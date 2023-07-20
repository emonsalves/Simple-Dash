import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";
import { Sidebar } from "../components/SideBar";
import { Header } from "../components/Header";

function AuthLayout() {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/auth");
    }
  }, [navigate, user]);

  return (
    <div className="min-h-screen grid grid-cols-1 xl:grid-cols-6">
      <Sidebar />
      <div className="xl:col-span-5">
        <Header />
        <div className="h-[90vh] overflow-y-scroll p-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export { AuthLayout };
