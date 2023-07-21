import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { Header } from "../components/Header";

function PublicLayout() {
  const { user } = useAuthContext();
  const goTo = useNavigate();

  useEffect(() => {
    if (user) {
      goTo("/auth");
    }
  }, [goTo, user]);
  return (
    <div className="flex flex-col w-full bg-red-500">
      <Header />
      <div className="flex flex-col w-full h-screen overflow-y-auto bg-green-500">
        <Outlet />
      </div>
    </div>
  );
}

export { PublicLayout };
