import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";
import { Sidebar } from "../components/SideBar";
import { Header } from "../components/Header";

function AuthLayout() {
  const { user } = useAuthContext();
  const goTo = useNavigate();

  useEffect(() => {
    if (user) {
      goTo("/");
    }
  }, [goTo, user]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full h-screen overflow-y-auto bg-red-500">
        <Header />
        <div className="flex flex-col w-full h-screen overflow-y-auto bg-green-500">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export { AuthLayout };
