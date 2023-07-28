import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/SideBar";
import { NavAuth } from "../components/Navbar/NavAuth";

function AuthLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full h-14">
        <NavAuth />
        <div className="flex flex-col w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export { AuthLayout };
