import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <nav className="bg-gray-800 shadow">
      <div className="px-8 mx-auto">
        <div className="flex items-center justify-end h-16">
          <div className="relative">
            <button
              type="button"
              className="flex items-center justify-center w-10 h-10 rounded-full text-gray-50 hover:bg-gray-500 focus:outline-none"
              onClick={toggleDropdown}
              id="options-menu"
            >
              <FaUserCircle className="w-6 h-6" />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1"
                  role="menu"
                  aria-labelledby="options-menu"
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-md text-gray-100 hover:bg-gray-600"
                    role="menuitem"
                  >
                    Logout
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Header };
