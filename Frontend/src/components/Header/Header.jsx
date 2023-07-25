import { useState } from "react";
import { SlLogout } from "react-icons/sl";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const Header = () => {
  const { logOut, user } = useAuthContext();
  const goTo = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <nav className="bg-gray-800 shadow">
      <div className="px-4 mx-auto">
        <div className="flex items-center justify-end h-16">
          <div className="relative ">
            <button
              type="button"
              className="flex items-center justify-center rounded-md text-gray-50 hover:py-3 hover:bg-gray-500  focus:outline-none transition ease-in-out duration-300"
              onClick={toggleDropdown}
              id="options-menu"
            >
              {user && (
                <span className="ml-2 text-sm font-medium text-gray-50">
                  {user.first_name} {user.last_name}
                </span>
              )}
              <FaUserCircle className="w-6 h-6 ml-2" />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 transition ease-in-out duration-300 border border-gray-700 z-10">
                <div
                  className="py-1"
                  role="menu"
                  aria-labelledby="options-menu"
                >
                  <a
                    onClick={() => {
                      logOut();
                      goTo("/auth/");
                    }}
                    className="px-4 py-2 text-md text-gray-100 hover:bg-gray-600 cursor-pointer flex items-center justify-center gap-x-5"
                    role="menuitem"
                  >
                    <SlLogout />
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
