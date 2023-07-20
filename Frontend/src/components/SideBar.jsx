// src/Sidebar.js
import { useState } from "react";

const SideBar = () => {
  const [isCollapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed((prevState) => !prevState);
  };

  return (
    <div className="flex">
      <div
        className={`w-64 bg-gray-800 h-screen text-white ${
          isCollapsed ? "hidden" : "block"
        }`}
      >
        <div className="p-4">Logo</div>
        <ul className="py-4">
          <li className="px-4 py-2 hover:bg-gray-700">Item 1</li>
          <li className="px-4 py-2 hover:bg-gray-700">Item 2</li>
          <li className="px-4 py-2 hover:bg-gray-700">Item 3</li>
        </ul>
      </div>
      <div className="flex-grow">
        <button
          className="bg-gray-800 text-white px-4 py-2"
          onClick={toggleCollapse}
        >
          {isCollapsed ? "Mostrar Sidebar" : "Ocultar Sidebar"}
        </button>
        <div className="p-4">Contenido principal</div>
      </div>
    </div>
  );
};

export { SideBar };
