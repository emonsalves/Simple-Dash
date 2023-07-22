import { Outlet } from "react-router-dom";

import { NavPublic } from "../components/Navbar/NavPublic";

function PublicLayout() {

  return (
    <div className="flex flex-col w-full bg-red-500">
      <NavPublic />
      <div className="flex flex-col w-full h-screen justify-center items-center overflow-y-auto bg-green-500">
        <Outlet />
      </div>
    </div>
  );
}

export { PublicLayout };
