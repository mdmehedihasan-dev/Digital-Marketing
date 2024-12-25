import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";

const NavBar = () => {
  const menuItems = [
    "HOME",
    "ABOUT",
    "PAGES",
    "SERVICES",
    "TEAM",
    "BLOG",
    "CONTACT",
  ];
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="flex border-b-[1px]  items-center justify-between px-20 py-8">
        {/* Logo */}
        <div>
          <img src="/logo-black.webp" alt="Logo" />
        </div>

        {/* nav menu items  */}

        <div className="flex bg-white gap-x-20">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="relative overflow-hidden text-base font-semibold text-black cursor-pointer"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Main visible text layer */}
              <div className="relative flex ">
                {item.split("").map((letter, i) => (
                  <span
                    key={i}
                    className="inline-block letter"
                    style={{
                      transitionDelay: `${i * 0.1}s`,
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </div>

              {/* Shadow layer for each letter */}
              <div
                className={`absolute top-0 left-0 w-full h-full flex`}
                style={{
                  pointerEvents: "none",
                }}
              >
                {item.split("").map((letter, i) => (
                  <span
                    key={`shadow-${i}`}
                    className={`letter inline-block  text-black opacity-100  transition-all duration-500 ease-in-out transform ${
                      hoveredIndex === index
                        ? "translate-y-[-24px] opacity-0 "
                        : "translate-y-0 opacity-100"
                    }`}
                    style={{
                      transitionDelay: `${i * 0.1}s`,
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        {/* Search & Menu Icons */}
        <div className="flex items-center gap-x-10">
          <div>
            <FaSearch className="size-5" />
          </div>
          <div className="w-px h-8 bg-gray-300"></div>
          <div>
            <FaBarsStaggered className="size-5" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
