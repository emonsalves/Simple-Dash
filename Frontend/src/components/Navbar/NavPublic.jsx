import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NavPublic = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const goTo = useNavigate();
  const location = useLocation();

  const menuItems = [
    { text: "Login", path: "/auth" },
    { text: "Register", path: "/auth/register" },
  ];

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 fixed w-full z-10 top-0 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center" onClick={() => goTo("/")}>
          <span className="text-white text-xl hover:text-white cursor-pointer">
            My Site
          </span>
        </div>
        <div className="hidden md:flex space-x-4">
          {menuItems.map((item, index) => (
            <a
              key={index}
              onClick={() => goTo(item.path)}
              className={`${
                location.pathname === item.path
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
              } cursor-pointer`}
            >
              {item.text}
            </a>
          ))}
        </div>
        <div className="md:hidden flex items-center">
          <button
            className="mobile-menu-button"
            onClick={handleMobileMenuToggle}
          >
            Menu
          </button>
        </div>
      </div>
      <div className={`${isMobileMenuOpen ? "" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
          {menuItems.map((item, index) => (
            <a
              key={index}
              onClick={() => goTo(item.path)}
              className={`${
                location.pathname === item.path
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item.text}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export { NavPublic };
