import Footer from "./component/Footer";
import Section from "./component/Section";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCommentDots,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
const ContactUs = () => {
  return (
    <div>
      <Section
        showSocialIcons={true}
        text={`Get in touch with us. 
               We're here to assist you.`}
        additionalText={`Contact us for assistance, feedback, or collaboration opportunities.`}
      />
      <div className="container mx-auto px-4 py-8">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
              <FaUser className="text-[#05568D]" />
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
              <FaEnvelope className="text-[#05568D]" />
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
              <FaPhone className="text-[#05568D]" />
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
              <FaCommentDots className="text-[#05568D]" />
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Write your message here..."
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>
          </div>
          <div className="md:col-span-2 flex justify-end">
            <button
              type="submit"
              className="bg-[#05568D] text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 font-semibold"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <div className="bg-gray-100 py-10 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800">
          <div>
            <h4 className="text-sm font-light uppercase">Contact Info</h4>
            <p className="text-xl font-bold mt-2">
              We are always happy to assist you
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold uppercase mb-1">Contact Us</h4>
            <div className="w-10 h-0.5 bg-blue-600 mb-4"></div>
            <p className="text-base mb-1">
              <strong>Email:</strong> alazharieee@gmail.com
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold uppercase mb-1">Social Media</h4>
            <div className="w-10 h-0.5 bg-blue-600 mb-4"></div>
            <div className="flex gap-3">
              {[
                {
                  icon: FaFacebookF,
                  url: "https://www.facebook.com/share/1A7kWQHZ4e/",
                },
                {
                  icon: FaInstagram,
                  url: "https://www.instagram.com/ieee.alazhar?igsh=MTAwN2tmd2doNG44NA==",
                },
                {
                  icon: FaLinkedinIn,
                  url: "https://www.linkedin.com/company/ieee-alazhar/",
                },
              ].map(({ icon: Icon, url }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#05568D] text-white flex items-center justify-center shadow hover:bg-gray-200 transition duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
