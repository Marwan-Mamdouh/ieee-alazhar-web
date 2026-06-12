import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaArrowUp } from "react-icons/fa";
import Logo from "../assets/logo.WebP";

interface NavLinkItem {
  label: string;
  to: string;
}

const navLinks: NavLinkItem[] = [
  { label: "Homepage", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Events", to: "/events" },
  { label: "Committees", to: "/committees" },
  { label: "Board", to: "/board" },
];

const contactButtonClassName =
  "flex items-center gap-2 bg-white text-[#05568D] font-bold py-1.5 px-3 rounded-full transition duration-300 w-max";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`text-white px-6 py-4 w-full z-[999999] transition-all duration-300 bg-[linear-gradient(to_right,_#0F3063,_#1E61C9_600px)] fixed`}
    >
      <div className="container mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" aria-label="Homepage">
          <img src={Logo} alt="IEEE Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:inline-flex justify-center space-x-6 bg-[#acabab50] p-2 rounded-full w-fit mx-auto h-10">
          {navLinks.map((link) => (
            <NavLink
              to={link.to}
              key={link.to}
              className={({ isActive }) =>
                `font-medium px-3 py-1.5 rounded-full hover:bg-[#ffffff] hover:text-[#05568d] transition duration-300 ease-in-out flex items-center justify-center ${
                  isActive
                    ? "bg-white text-[#05568d] pointer-events-none cursor-default"
                    : "text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop Contact Button */}
        <Link
          to="/contactus"
          className={`${contactButtonClassName} hidden md:flex ml-6`}
        >
          <span>Contact Us</span>

          <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#05568D]">
            <FaArrowUp className="text-white rotate-90 text-sm" />
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center space-y-2 z-[999999]">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={"font-medium hover:text-gray-300 transition"}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}

          <Link
            to="/contactus"
            className={contactButtonClassName}
            onClick={closeMenu}
          >
            <span>Contact Us</span>
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#05568D]">
              <FaArrowUp className="text-white rotate-90 text-sm" />
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
