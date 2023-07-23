import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/SideBar";
import { Header } from "../components/Header";

function AuthLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full h-14 bg-red-500">
        <Header />
        <div className="flex flex-col w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export { AuthLayout };
