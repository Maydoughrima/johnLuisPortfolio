import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Moon, Sun, X } from "lucide-react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

export default function Navbar() {
  const [isLightMode, setIsLightMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsLightMode(true);
      document.documentElement.classList.add("light");
    }
  }, []);

  const toggleTheme = () => {
    if (isLightMode) {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
      setIsLightMode(false);
    } else {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
      setIsLightMode(true);
    }
  };

  const navItems = [
    "Home",
    "Works",
    "Skills",
    "Process",
    "About Me",
    "Contact Me",
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-end items-center p-4 bg-black/10 backdrop-blur-md border-b border-white/10">
        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-bodySm font-medium mr-6 items-center text-text">
          {navItems.map((item) => (
            <NavLink key={item}>
              <li className="cursor-pointer hover:text-accent transition-colors">
                {item}
              </li>
            </NavLink>
          ))}
        </ul>

        {/* Action Buttons (Theme & Menu) */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="relative flex items-center justify-between w-[72px] h-[36px] rounded-full bg-secondary border border-border p-1 cursor-pointer transition-colors duration-500 ease-out"
            aria-label="Toggle theme"
          >
            {/* Sliding Indicator */}
            <div
              className={`absolute top-1 left-1 w-[28px] h-[28px] rounded-full bg-accent transition-transform duration-500 ease-out ${
                isLightMode ? "translate-x-[34px]" : "translate-x-0"
              }`}
            />
            {/* Icons */}
            <div className="relative z-10 w-[28px] h-[28px] flex items-center justify-center pointer-events-none">
              <Moon
                size={16}
                className={`transition-colors duration-500 ease-out ${!isLightMode ? "text-white" : "text-muted"}`}
              />
            </div>
            <div className="relative z-10 w-[28px] h-[28px] flex items-center justify-center pointer-events-none">
              <Sun
                size={16}
                className={`transition-colors duration-500 ease-out ${isLightMode ? "text-white" : "text-muted"}`}
              />
            </div>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center justify-center p-1 text-text hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={28} strokeWidth={1.5} />
            ) : (
              <HiOutlineMenuAlt4 size={28} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed top-[68px] left-0 w-full z-40 bg-primary/95 backdrop-blur-xl border-border shadow-2xl transition-all duration-500 ease-in-out md:hidden grid ${
          isMobileMenuOpen
            ? "grid-rows-[1fr] opacity-100 border-b"
            : "grid-rows-[0fr] opacity-0 border-b-0"
        }`}
      >
        <div className="overflow-hidden h-[calc(100vh-68px)]">
          <ul className="flex flex-col items-start px-8 py-12 gap-8 text-h3 font-body font-medium text-text">
            {navItems.map((item, index) => (
              <NavLink key={item} onClick={() => setIsMobileMenuOpen(false)}>
                <li
                  className={`cursor-pointer hover:text-accent transition-all duration-500 ease-out ${
                    isMobileMenuOpen
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-4 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isMobileMenuOpen
                      ? `${index * 50 + 100}ms`
                      : "0ms",
                  }}
                >
                  {item}
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
