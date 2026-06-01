import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom"; 
import { FaArrowUp } from "react-icons/fa";
import Logo from "../assets/logo.WebP";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

const isEventDetailsPage = location.pathname.startsWith("/eventdetails");

  return (
    <nav
      className={`text-white px-6 py-4 w-full z-[999999] transition-all duration-300 
    ${isEventDetailsPage ? "absolute" : "fixed"}
    ${isEventDetailsPage && !isOpen ? "bg-none" : ""}
  `}
      style={{
        backgroundImage:
          !isEventDetailsPage || isOpen
            ? "linear-gradient(to right, #0F3063 , #1E61C9 600px)"
            : "none",
      }}
    >
      <div className="container mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <div>
          <img src={Logo} alt="IEEE Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:inline-flex justify-center space-x-6 bg-[#acabab50] p-2 rounded-full w-fit mx-auto h-10">
          <Link
            to="/"
            className="text-[#ffffff] font-medium px-4 py-3 rounded-full hover:bg-[#ffffff] hover:text-[#05568d] transition flex items-center justify-center hover:px-4 hover:py-3"
          >
            Homepage
          </Link>
          <Link
            to="/about"
            className="text-[#ffffff] font-medium px-3 py-2 rounded-full hover:bg-[#ffffff] hover:text-[#05568d] transition flex items-center justify-center hover:px-4 hover:py-3"
          >
            About Us
          </Link>
          <Link
            to="/events"
            className="text-[#ffffff] font-medium px-3 py-2 rounded-full hover:bg-[#ffffff] hover:text-[#05568d] transition flex items-center justify-center hover:px-4 hover:py-3"
          >
            Events
          </Link>
          <Link
            to="/committees"
            className="text-[#ffffff] font-medium px-3 py-2 rounded-full hover:bg-[#ffffff] hover:text-[#05568d] transition flex items-center justify-center hover:px-4 hover:py-3"
          >
            Committees
          </Link>
          <Link
            to="/board"
            className="text-[#ffffff] font-medium px-3 py-2 rounded-full hover:bg-[#ffffff] hover:text-[#05568d] transition flex items-center justify-center hover:px-4 hover:py-3"
          >
            Board
          </Link>
        </div>

        {/* Explore Button on the side */}
        <Link
          to="/contactus"
          className="hidden md:flex items-center gap-2 bg-white text-[#05568D] font-bold py-2 px-4 rounded-full transition duration-300 w-max ml-6"
        >
          <span>Contact Us</span>
          <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#05568D]">
            <FaArrowUp className="text-white transform rotate-90 text-sm" />
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center space-y-2 z-[999999]">
          <Link
            to="/"
            className="font-medium hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Homepage
          </Link>
          <Link
            to="/about"
            className="font-medium hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/events"
            className="font-medium hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Events
          </Link>
          <Link
            to="/committees"
            className="font-medium hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Committees
          </Link>
          <Link
            to="/board"
            className="font-medium hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Board
          </Link>
          <Link
            to="/contactus"
            className=" flex items-center gap-2 bg-white text-[#05568D] font-bold py-2 px-4 rounded-full transition duration-300 w-max "
          >
            <span>Contact Us</span>
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#05568D]">
              <FaArrowUp className="text-white transform rotate-90 text-sm" />
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
