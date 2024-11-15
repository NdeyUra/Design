import React, { useState } from "react";
import { sidebarItems } from "../constants/sidebarItem";
import { ReactComponent as DarkMode } from "../assets/icons/darkMode.svg";
import { ReactComponent as LogOut } from "../assets/icons/logout.svg";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (label: string) => {
    setActiveItem(label);
  };

  return (
    <>
      {/* Toggle Button for smaller screens */}
      {!isOpen && (
        <button
          className="lg:hidden p-4 fixed top-0 left-0 z-50"
          onClick={toggleSidebar}
        >
          <span className="material-icons">menu</span>
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed m-3 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static w-[247px] h-[1194px] bg-white p-6 transition-transform duration-300 ease-in-out rounded-2xl shadow-lg z-100 opacity-100`}
      >
        {/* Close button for small screens */}
        {isOpen && (
          <button
            className="lg:hidden p-4 absolute top-0 right-0 z-50"
            onClick={toggleSidebar}
          >
            <span className="material-icons">close</span>
          </button>
        )}

        {/* Sidebar header */}
        <div className="text-xl font-bold mb-6">Shoorah</div>

        {/* Sidebar menu items */}
        <ul>
          {sidebarItems.map(
            (item: { label: string; Icon: React.ComponentType }) => (
              <li key={item.label} className="relative">
                <button
                  className="flex items-center h-[60px] w-full gap-[20px] rounded"
                  onClick={() => handleItemClick(item.label)}
                >
                  {activeItem === item.label && (
                    <div className="absolute left-[-15%] h-[60px] w-[8px] bg-[#4A57DA]"></div>
                  )}
                  <item.Icon />
                  <span
                    className="ml-1 font-medium text-500 leading-[36px] text-[#0B1D2E]"
                    style={{
                      fontFamily: "P22 Mackinac",
                      textUnderlinePosition: "from-font",
                      textDecorationSkipInk: "none",
                    }}
                  >
                    {item.label}
                  </span>
                </button>
              </li>
            )
          )}
        </ul>

        {/* Divider */}
        <svg
          width="199"
          height="2"
          viewBox="0 0 199 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="my-6"
        >
          <path d="M0 1H199" stroke="#CED2D5" strokeWidth="1.5" />
        </svg>

        {/* Buttons below divider */}
        <button className="flex items-center h-[60px] w-full gap-[20px] rounded">
          <DarkMode />
          <span
            className="ml-1 font-medium text-500 leading-[36px] text-[#0B1D2E]"
            style={{
              fontFamily: "P22 Mackinac",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
            Darkmode
          </span>
        </button>
        <button className="flex items-center h-[60px] w-full gap-[20px] rounded">
          <LogOut />
          <span
            className="ml-1 font-medium text-500 leading-[36px] text-[#0B1D2E]"
            style={{
              fontFamily: "P22 Mackinac",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
            Logout
          </span>
        </button>
      </aside>
    </>
  );
};

export default Sidebar;
