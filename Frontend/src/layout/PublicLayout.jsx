import { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { Header } from "../components/Header";
import { NavPublic } from "../components/Navbar/NavPublic";

function PublicLayout() {
  const { user } = useAuthContext();

  // useEffect(() => {
  //   if (user) {
  //     <Navigate to="/" />;
  //   }
  // }, [user]);

  return (
    <div className="flex flex-col w-full bg-red-500">
      {/* <Header /> */}
      <NavPublic />
      <div className="flex flex-col w-full h-screen overflow-y-auto bg-green-500">
        <Outlet />
      </div>
    </div>
  );
}

export { PublicLayout };
