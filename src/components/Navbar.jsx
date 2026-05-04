import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Moon, Sun, X } from "lucide-react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

export default function Navbar() {
  const location = useLocation();
  const [isLightMode, setIsLightMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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

  useEffect(() => {
    if (location.pathname.startsWith("/projects/")) {
      setActiveSection("works");
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    const sections = ["home", "works", "skills", "process", "about", "contact"];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  const navItems = ["Home", "Works", "Skills", "Process", "About", "Contact"];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/10 backdrop-blur-md border-b border-white/10">
        <div className="max-w-[1440px] 2xl:max-w-[1800px] mx-auto flex justify-end items-center p-4 px-6">
          {/* Desktop Links */}
          <ul className="hidden md:flex gap-6 text-bodySm font-medium mr-6 items-center">
            {navItems.map((item) => (
              <a
                key={item}
                href={
                  item.toLowerCase() === "home"
                    ? "/"
                    : `/#${item.toLowerCase()}`
                }
                className={`cursor-pointer transition-colors hover:text-accent ${
                  activeSection === item.toLowerCase()
                    ? "text-accent"
                    : "text-text/70"
                }`}
              >
                <li>{item}</li>
              </a>
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
              className="md:hidden relative z-[60] flex items-center justify-center p-1 text-text hover:text-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X size={28} strokeWidth={1.5} />
              ) : (
                <HiOutlineMenuAlt4 size={28} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 w-full h-screen z-50 bg-primary/95 backdrop-blur-2xl transition-all duration-500 ease-in-out md:hidden flex items-center justify-center ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-10 text-h2 font-display font-semibold text-text">
          {navItems.map((item, index) => (
            <a
              key={item}
              href={
                item.toLowerCase() === "home" ? "/" : `/#${item.toLowerCase()}`
              }
              onClick={() => setIsMobileMenuOpen(false)}
              className={`transition-all duration-500 ${
                activeSection === item.toLowerCase()
                  ? "text-accent"
                  : "text-text"
              } ${
                isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <li className="hover:text-accent transition-colors">{item}</li>
            </a>
          ))}
        </ul>
      </div>
    </>
  );
}
