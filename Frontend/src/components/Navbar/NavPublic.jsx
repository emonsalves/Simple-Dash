import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavPublic = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const goTo = useNavigate();

  const goToLogin = () => {
    goTo("/auth");
  };
  const goToRegister = () => {
    goTo("/auth/register");
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-white text-xl">Mi Sitio</span>
        </div>
        <div className="hidden md:flex space-x-4">
          <a onClick={goToLogin} className="text-gray-300 hover:text-white">
            Login
          </a>
          <a onClick={goToRegister} className="text-gray-300 hover:text-white">
            Register
          </a>
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
          <a onClick={goToLogin} className="text-gray-300 hover:text-white">
            Login
          </a>
          <a onClick={goToRegister} className="text-gray-300 hover:text-white">
            Register
          </a>
        </div>
      </div>
    </nav>
  );
};

export { NavPublic };
