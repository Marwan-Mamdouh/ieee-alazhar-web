import React from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaMapMarkerAlt, FaArrowUp } from "react-icons/fa"; 

const Card = ({ image, title, text, date, location,className,id}) => {
  return (
    <div
      className={`w-full max-w-[700px] grid grid-cols-1 sm:grid-cols-1 bg-white shadow-lg rounded-lg gap-4 mx-auto pt-[10px] pr-[10px] pl-[10px] pb-[50px] ${className}`}
    >
      <div className="w-full h-full overflow-hidden  sm:w-full px-4 pt-8">
        <img
          src={image}
          alt="card image"
          className="w-full h-full object-cover rounded-lg sm:w-full"
        />
      </div>

      <div className="col-span-2 sm:col-span-1 px-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="mt-2 text-gray-600">{text}</p>

        <div className="mt-4 flex items-center text-gray-500">
          <FaCalendarAlt className="w-5 h-5 mr-2" />
          <span>{date}</span>
        </div>

        <div className="mt-2 flex items-center text-gray-500">
          <FaMapMarkerAlt className="w-5 h-5 mr-2" />
          <span>{location}</span>
        </div>
        <Link
          to={`/eventdetails/${id}`}
          className="flex items-center gap-2 bg-[#05568D] hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full transition duration-300 mt-4 w-max"
        >
          <span>Explore Event</span>
          <span className="w-6 h-6 flex items-center justify-center rounded-full bg-white">
            <FaArrowUp className="text-[#05568D] transform rotate-45 text-sm" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Card;
