import { useState } from "react";
import { SlLogout } from "react-icons/sl";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const NavAuth = () => {
  const { logOut, user } = useAuthContext();
  const goTo = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <nav className="bg-gray-800 shadow">
      <div className="px-2 mx-auto">
        <div className="flex items-center justify-end h-16">
          <div className="relative ">
            <button
              type="button"
              className="flex items-center px-5 justify-center rounded-md text-gray-50 py-3 hover:bg-gray-700  focus:outline-none transition ease-in-out duration-300"
              onClick={toggleDropdown}
              id="options-menu"
            >
              {user && (
                <span className="ml-2 text-sm font-medium text-gray-50">
                  {user.firstName} {user.lastName}
                </span>
              )}
              <FaUserCircle className="w-6 h-6 ml-2" />
            </button>
            <div
              className={`${
                !isDropdownOpen && "opacity-0 invisible"
              } absolute right-0 mt-2 w-[184px] bg-gray-800 rounded-md shadow-lg ring- ring-black ring-opacity-5 transition-all  duration-1000 border border-gray-700 z-10`}
            >
              <div className="py-1" role="menu" aria-labelledby="options-menu">
                <a
                  onClick={() => {
                    logOut();
                    goTo("/auth/");
                  }}
                  className="py-2 text-md text-gray-100 hover:bg-gray-700 cursor-pointer flex items-center justify-center gap-x-5"
                  role="menuitem"
                >
                  <SlLogout />
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export { NavAuth };
