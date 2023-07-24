import { Outlet } from "react-router-dom";

import { NavPublic } from "../components/Navbar/NavPublic";

function PublicLayout() {
  return (
    <div className="flex flex-col w-full transition-all duration-300 ">
      <NavPublic />
      <div className="flex flex-col w-full h-screen justify-center items-center overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}

export { PublicLayout };
