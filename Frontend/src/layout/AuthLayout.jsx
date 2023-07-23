import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

function AuthLayout() {
  return (
    <div className="flex transition-all duration-300">
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
