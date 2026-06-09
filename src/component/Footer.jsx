import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Logo from "../assets/logo.WebP";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-[#05568D] text-white py-6  rounded-t-lg">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img
            src={Logo}
            alt="IEEE Logo"
            className="w-12 h-12 object-contain"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-10 justify-center text-center text-sm md:text-base underline">
          {[
            { label: "Home", url: "/" },
            { label: "About Us", url: "/about" },
            { label: "Events", url: "/events" },
            { label: "Committees", url: "/committees" },
            { label: "Board", url: "/board" },
            { label: "Contact Us", url: "/contactus" },
          ].map((link, i) => (
            <Link
              key={`${i}-${link.label}`}
              to={link.url}
              className="hover:underline transition duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex gap-3">
          {[
            {
              icon: FaFacebookF,
              url: "https://www.facebook.com/share/1A7kWQHZ4e/",
            },
            {
              icon: FaInstagram,
              url: "https://www.instagram.com/ieee.alazhar?igsh=MTAwN2tmd2doNG44NA==  ",
            },
            {
              icon: FaLinkedinIn,
              url: "https://www.linkedin.com/company/ieee-alazhar/",
            },
          ].map(({ icon: Icon, url }, i) => (
            <a
              key={`${i}-${url}`}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white text-[#05568D] flex items-center justify-center hover:bg-gray-200 transition duration-300"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 grid md:grid-cols-2 gap-6 text-white">
        <div className="p-6 bg-transparent text-white">
          <div className="bg-white text-[#05568D] px-3 rounded-full w-fit">
            <h3 className="font-bold text-xl">reach out:</h3>
          </div>

          <a href="mailto:alazharieee@gmail.com">alazharieee@gmail.com</a>
        </div>

        <div className="flex items-center ">
          <form className="w-full flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-4 py-2 rounded-full border border-white bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-white text-[#05568D] font-bold px-4 py-2 rounded-full hover:bg-blue-50 transition"
            >
              Subscribe to news
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-white mt-8 pt-4 text-center text-sm text-white flex flex-col md:flex-row justify-center items-center gap-2 w-[80%] m-auto">
        <p>© 2024 Positivus. All Rights Reserved.</p>
        <a
          href="#"
          className="underline hover:text-gray-200 transition duration-200"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
