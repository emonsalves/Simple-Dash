// // src/Sidebar.js
// import { useState } from "react";

// const SideBar = () => {
//   const [isCollapsed, setCollapsed] = useState(false);

//   const toggleCollapse = () => {
//     setCollapsed((prevState) => !prevState);
//   };

//   return (
//     <div className="flex">
//       <div
//         className={`w-64 bg-gray-800 h-screen text-white ${
//           isCollapsed ? "hidden" : "block"
//         }`}
//       >
//         <div className="p-4">Logo</div>
//         <ul className="py-4">
//           <li className="px-4 py-2 hover:bg-gray-700">Item 1</li>
//           <li className="px-4 py-2 hover:bg-gray-700">Item 2</li>
//           <li className="px-4 py-2 hover:bg-gray-700">Item 3</li>
//         </ul>
//       </div>
//       <div className="flex-grow">
//         <button
//           className="bg-gray-800 text-white px-4 py-2"
//           onClick={toggleCollapse}
//         >
//           {isCollapsed ? "Mostrar Sidebar" : "Ocultar Sidebar"}
//         </button>
//         <div className="p-4">Contenido principal</div>
//       </div>
//     </div>
//   );
// };

// export { SideBar };

import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { BsArrowLeftCircle } from "react-icons/bs";
import { AiFillPieChart } from "react-icons/ai";
import { SiFuturelearn } from "react-icons/si";
import { SiOpenaccess } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import Logo from "../assets/vite.svg";
import HamburgerButton from "./HamburgerMenuButton/HamburgerButton";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();
  // const goTo = (path) => useNavigate(path);

  const Menus = [
    { title: "Dashboard", path: "/test", src: <AiFillPieChart /> },
    { title: "Course", path: "/reset-password", src: <SiFuturelearn /> },
    // { title: "Profile", path: "/", src: <CgProfile /> },
    { title: "Signin", path: "/login", src: <SiOpenaccess />, gap: "true" },
  ];

  return (
    <>
      <div
        className={`${
          open ? "w-60" : "w-fit"
        } hidden sm:block relative h-screen duration-300 bg-gray-100 border-r border-gray-200 dark:border-gray-600 p-5 dark:bg-slate-800`}
      >
        <BsArrowLeftCircle
          className={`${
            !open && "rotate-180"
          } absolute text-3xl bg-white fill-slate-800  rounded-full cursor-pointer top-9 -right-4 dark:fill-gray-400 dark:bg-gray-800`}
          onClick={() => setOpen(!open)}
        />
        {/* <Link to="/">
          <div className={`flex ${open && "gap-x-4"} items-center`}>
            <img src={Logo} alt="" className="pl-2" />
            {open && (
              <span className="text-xl font-medium whitespace-nowrap dark:text-white">
                System
              </span>
            )}
          </div>
        </Link> */}

        <ul className="pt-6">
          {Menus.map((menu, index) => (
            <Link to={menu.path} key={index}>
              <li
                className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700
                        ${menu.gap ? "mt-9" : "mt-2"} ${
                  location.pathname === menu.path &&
                  "bg-gray-200 dark:bg-gray-700"
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
            </Link>
          ))}
        </ul>
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
          } absolute z-50 flex-col items-center self-end py-8 mt-16 space-y-6 font-bold sm:w-auto left-6 right-6 dark:text-white  bg-gray-50 dark:bg-slate-800 drop-shadow md rounded-xl`}
        >
          {Menus.map((menu, index) => (
            <Link
              to={menu.path}
              key={index}
              onClick={() => setMobileMenu(false)}
            >
              <span
                className={` ${
                  location.pathname === menu.path &&
                  "bg-gray-200 dark:bg-gray-700"
                } p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700`}
              >
                {menu.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export { Sidebar };
