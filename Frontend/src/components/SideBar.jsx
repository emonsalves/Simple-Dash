import { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

import { BsArrowLeftCircle } from "react-icons/bs";
import { AiFillPieChart } from "react-icons/ai";
import { SiFuturelearn, SiGooglefit } from "react-icons/si";
import { SlLogout } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import Logo from "../assets/vite.svg";
import HamburgerButton from "./HamburgerMenuButton/HamburgerButton";
import { useAuthContext } from "../context/AuthContext";

const Sidebar = () => {
  const { logOut } = useAuthContext();
  const [open, setOpen] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();
  const goTo = useNavigate();

  const Menus = [
    { title: "Dashboard", path: "dashboard", src: <AiFillPieChart /> },
    { title: "Course", path: "/", src: <SiFuturelearn /> },
    { title: "Profile", path: "/in/profile", src: <CgProfile /> },
    {
      title: "Reset Password",
      path: "/auth/reset-password",
      src: <SiGooglefit />,
    },
  ];

  return (
    <>
      {/* Desktop Menu */}
      <div
        className={`${
          open ? "w-60" : "w-fit"
        } hidden sm:block fixed top-0 left-0 h-screen overflow-visible border-r border-gray-600 p-5 bg-slate-800 z-10`}
      >
        <BsArrowLeftCircle
          className={`${
            !open && "rotate-180"
          } absolute text-3xl rounded-full cursor-pointer top-9 -right-4 fill-gray-400 bg-gray-800`}
          onClick={() => setOpen(!open)}
        />
        <NavLink to="/">
          <div className={`flex ${open && "gap-x-4"} items-center`}>
            <img src={Logo} alt="" className="pl-2" />
            {open && (
              <span className="text-xl font-medium whitespace-nowrap text-white">
                System
              </span>
            )}
          </div>
        </NavLink>

        <ul className="pt-6">
          {Menus.map((menu, index) => (
            <NavLink to={menu.path} key={index}>
              <li
                className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer text-white hover:bg-gray-700
                        mt-2 ${
                          location.pathname === menu.path && "bg-gray-700"
                        }`}
              >
                <span className="text-2xl">{menu.src}</span>
                <span
                  className={`${
                    !open && "hidden"
                  } origin-left duration-300 hover:block`}
                >
                  {menu.title}
                </span>
              </li>
            </NavLink>
          ))}
        </ul>

        {/* Logout Menu */}
        <div className="absolute bottom-5 w-44">
          <button
            className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer text-white hover:bg-gray-700 mt-2 w-full`}
            onClick={() => {
              logOut();
              goTo("/auth/");
            }}
          >
            <span className="text-2xl">
              <SlLogout />
            </span>
            <span className={`${!open && "hidden"}`}>Logout</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="pt-0">
        <HamburgerButton
          setMobileMenu={setMobileMenu}
          mobileMenu={mobileMenu}
        />
      </div>
      <div className="sm:hidden">
        <div
          className={`${
            mobileMenu ? "flex" : "hidden"
          } absolute z-50 flex-col items-center self-end py-8 mt-16 space-y-6 font-bold sm:w-auto left-6 right-6 text-white bg-slate-800 drop-shadow md rounded-xl`}
        >
          {Menus.map((menu, index) => (
            <NavLink
              to={menu.path}
              key={index}
              onClick={() => setMobileMenu(false)}
            >
              <span
                className={` ${
                  location.pathname === menu.path && "bg-gray-700"
                } p-2 rounded-xl hover:bg-gray-700`}
              >
                {menu.title}
              </span>
            </NavLink>
          ))}
          <button
            className={`flex justify-center items-center gap-x-6 p-3 text-base font-bold rounded-lg cursor-pointer text-white hover:bg-gray-700 mt-2 w-full`}
            onClick={() => {
              logOut();
              goTo("/auth/");
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export { Sidebar };
