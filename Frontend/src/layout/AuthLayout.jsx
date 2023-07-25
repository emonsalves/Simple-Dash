import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/SideBar";

function AuthLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full h-14">
        <Header />
        <div className="flex flex-col w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export { AuthLayout };
