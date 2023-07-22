import { useNavigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { Sidebar } from "../components/SideBar";
import { Header } from "../components/Header";

function AuthLayout() {

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