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
        <button className="mobile-menu-button" onClick={handleMobileMenuToggle}>
          <svg
            className="h-6 w-6 fill-current text-white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </div>
    {/* Mobile Menu */}
    <div className={`md:hidden mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
      {/* You can use the same click handlers for mobile links */}
      <a onClick={goToLogin} className="block px-4 py-2 text-white">
        Login
      </a>
      <a onClick={goToRegister} className="block px-4 py-2 text-white">
        Register
      </a>
    </div>
  </nav>
);
};

export { NavPublic };
