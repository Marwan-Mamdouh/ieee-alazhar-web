// Home.jsx (الكود النهائي المبسَّط للوصول العام)
import { useFetch } from "../hooks";
import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import { CardSlider, CardEvent, CardLogo, Card } from "../component";

// imports المحتوى الثابت
import Logo from "../assets/logo.WebP";
import discover from "../assets/home-img/discover.jpg";
import pic1 from "../assets/home-img/pic-1.jpg";
import pic2 from "../assets/home-img/pic-2.jpg";
import pic3 from "../assets/home-img/pic-3.jpg";
import bubble1 from "../assets/section-bubles/bubble1.png";
import bubble2 from "../assets/section-bubles/bubble2.png";
import multi from "../assets/home-img/multi.svg";
import operation from "../assets/home-img/operation.svg";
import tech from "../assets/home-img/tech.svg";
import { useEffect, useState } from "react";
import { getEvents } from "../service/events";

// قائمة الأحداث الثابتة
const Home = () => {
  const lastYear = new Date().getFullYear().toString();
  const { data, isLoading, error } = useFetch(`/api/v1/board`, {
    queryParams: {
      yearFrom: lastYear,
      memberType: "officer",
    },
  });
  const officers = data?.officer ?? [];
  const [events, setEvents] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await getEvents();
      setEvents(result);
    })();
  }, []);

  return (
    <div>
      {/* --------------------------- HEADER SECTION --------------------------- */}
      <div
        className="text-white pt-6 z-5"
        style={{
          backgroundImage: "linear-gradient(to right, #0F3063 , #1E61C9 600px)",
        }}
      >
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative mt-[5rem]">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold leading-snug">
              Empower Your Future, <br /> Engineer the World with
            </h1>

            <div className="flex items-center gap-4 border border-white rounded-md px-4 py-2 w-fit">
              <img
                src={Logo}
                alt="IEEE Logo"
                className="w-10 h-10 object-contain"
                loading="lazy"
              />
              <span className="z-20 text-2xl font-bold">IEEE</span>
            </div>

            <p className="text-base md:text-lg max-w-md z-40">
              Be part of the movement that pushes the limits of what's possible
              in technology.
            </p>

            <Link
              to="/joinus"
              className=" flex items-center gap-2 bg-white text-blue-600 font-bold py-2 px-4 rounded-full transition duration-300 w-max hover:bg-gray-100 z-40"
            >
              <span>join Us</span>
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600">
                <FaArrowUp className="text-white transform rotate-90 text-sm" />
              </span>
            </Link>
          </div>
          <div className="relative flex justify-center items-center h-[400px] ">
            <img
              src={pic1}
              alt="Team 1"
              loading="lazy"
              className="w-[130px] h-[130px] md:w-36 md:h-36 lg:w-[200px] lg:h-[200px] object-cover rounded-full absolute top-0 left-[205px] lg:left-[470px] transform -translate-x-1/2 z-20"
            />
            <img
              src={pic2}
              alt="Team 2"
              loading="lazy"
              className="w-[130px] h-[130px] md:w-36 md:h-36 lg:w-[200px] lg:h-[200px] object-cover rounded-full absolute bottom-0 left-[205px] lg:left-[350px] transform -translate-x-1/2 z-20"
            />
            <img
              src={pic3}
              alt="Team 3"
              loading="lazy"
              className="w-[130px] h-[130px] md:w-36 md:h-36 lg:w-[200px] lg:h-[200px] object-cover rounded-full absolute top-1/2 left-[10px] lg:left-[0px] transform -translate-y-1/2 z-20"
            />
            <img
              src={bubble1}
              alt="bubble1"
              loading="lazy"
              className="absolute lg:bottom-[-100px] lg:right-[90px] lg:-translate-y-[20%] bottom-[120px] left-[-10px] w-[250px] sm:w-434 lg:w-[350px] rotate-[43.61deg]"
            />
            <img
              src={bubble2}
              alt="bubble2"
              loading="lazy"
              className="absolute lg:top-[200px] lg:left-[206px] lg:-translate-y-[30%] w-[250px] sm:w-[350px] lg:w-601.6 rotate-[151.52deg]"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2  w-full">
        <div className="bg-white flex items-center justify-center py-1 px-6">
          <div className="bg-gray-100 rounded-full px-6 py-4 text-center text-sm md:text-base font-medium text-gray-800">
            Connect, Learn, and Build Tomorrow's Technology Together
          </div>
        </div>
        <div className="bg-[#1E61C9] rounded-bl-[20px] hidden sm:block" />
      </div>

      <div className="px-10 py-10">
        {/* --------------------------- DISCOVER SECTION --------------------------- */}
        <h2 className="flex flex-col sm:flex-row items-start sm:items-center text-lg sm:text-2xl gap-2">
          <span className="font-bold bg-red-600 text-white px-2 py-1 rounded-tr-2xl rounded-br-2xl">
            Discover IEEE Al-Azhar SB
          </span>
          <span className="text-[#1A1A1A]">
            Empowering Future Innovators Through Connection and Knowledge{" "}
          </span>
        </h2>
        <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <img
              src={discover}
              alt="About Section"
              className="w-full max-w-sm rounded-lg shadow-lg object-cover"
              loading="lazy"
            />
          </div>
          <div className="space-y-6">
            <p className="text-gray-700 text-base md:text-lg">
              IEEE Al-Azhar SB is dependent on the "IEEE Egypt Section" which
              was established on September 8, 1955, as the 2nd IEEE section
              outside the US, The 2nd IEEE section in R8 (Africa, Europe and the
              Middle East). The IEEE Egypt section is supervising various
              activities in Egyptian Universities through IEEE student branches.
            </p>
            <Link
              to="/about"
              className="flex items-center gap-2 text-[#05568D] font-semibold w-max hover:underline"
            >
              <span>See More</span>
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#05568D]">
                <FaArrowUp className="text-white transform rotate-90 text-sm" />
              </span>
            </Link>
          </div>
        </div>
        {/* --------------------------- OUR EVENTS HEADING --------------------------- */}
        <h2 className="flex flex-col sm:flex-row items-start sm:items-center text-lg sm:text-2xl gap-2">
          <span className="font-bold bg-red-600 text-white px-2 py-1 rounded-tr-2xl rounded-br-2xl">
            Our Events
          </span>
          <span className="text-[#1A1A1A]">
            Stay Connected with the Latest Conferences, Workshops, and
            Competitions
          </span>
        </h2>
      </div>

      {/* 🚨🚨🚨 قسم EVENTS الثابت 🚨🚨🚨 */}
      <div className="mt-5">
        <CardSlider
          cards={
            events?.map((event) => {
              return (
                <CardEvent
                  key={event._id}
                  id={event._id}
                  image={event.coverImage?.asset?.url}
                  title={event.title}
                  text={event.subtitle}
                  date={`${new Date(event.startDate).toLocaleDateString()} - ${event.endDate ? new Date(event.endDate).toLocaleDateString() : "TBD"}`}
                  location={event.location}
                />
              );
            })
          }
        >
          {/* لن تعمل بهذه الطريقة، يجب تمريرها كـ cards */}
        </CardSlider>

        {/* 🌟 الزر الذي يوجه إلى صفحة Events 🌟 */}
        <div className="flex justify-center mt-6 mb-12">
          <Link
            to="/events"
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-full transition duration-300 w-max"
          >
            <span>View All Events</span>
            <span className="w-5 h-5 flex items-center justify-center rounded-full bg-white">
              <FaArrowUp className="text-red-600 transform rotate-90 text-sm" />
            </span>
          </Link>
        </div>
      </div>

      <section className="w-full px-4 md:px-12 py-12">
        {/* --------------------------- OUR COMMITTEES SECTION --------------------------- */}
        <h2 className="flex flex-col sm:flex-row items-start sm:items-center text-lg sm:text-2xl  gap-2">
          <span className="font-bold bg-red-600 text-white px-2 py-1 rounded-tr-2xl rounded-br-2xl">
            Our Committees
          </span>
          <span className="text-[#1A1A1A]">
            The Backbone of IEEE Al-Azhar SB—Where Vision Meets Action
          </span>
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mt-5">
          <div className="md:w-1/2 w-full">
            <h2 className="text-gray-800 text-lg md:text-xl font-medium leading-relaxed">
              The Technical, Multimedia, and Operations Committees ensure the
              success of IEEE Al-Azhar SB. The Technical Committee advances
              innovation and research, the Multimedia Committee creates engaging
              visual content, and the Operations Committee manages logistics and
              planning. Together, they blend expertise, creativity, and
              organization to drive our branch forward.
            </h2>

            <Link
              to="/committees"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full transition duration-300 mt-6 w-max"
            >
              <span>Explore Committees</span>
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-white">
                <FaArrowUp className="text-blue-600 transform rotate-45 text-sm" />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-1/2 w-full bg-gray-100 rounded-xl p-6">
            <CardLogo
              imageSrc={tech}
              title="Technical Committees"
              description="Technical Committees focus on advancing specific technology fields, driving research, standards, and innovation."
            />
            <CardLogo
              imageSrc={operation}
              title="Operation Committees"
              description="Operation Committees focus on managing logistics, organizing events, and ensuring smooth execution of all activities."
            />
            <CardLogo
              imageSrc={multi}
              title="Multi Media Committees"
              description="Multimedia Committees focus on crafting the team's identity through creative content, design, and digital communication."
            />
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* OUR TEAM SECTION (DYNAMICALLY LOADED OFFICERS) */}
      {/* -------------------------------------------------------------------------- */}
      <div className="px-10 py-10">
        <h2 className="flex flex-col sm:flex-row items-start sm:items-center text-lg sm:text-2xl gap-2">
          <span className="font-bold bg-red-600 text-white px-2 py-1 rounded-tr-2xl rounded-br-2xl">
            Our Team
          </span>
          <span className="text-[#1A1A1A]">
            The Heart of IEEE Al-Azhar SB: Talented Individuals, Shared Goals
          </span>
        </h2>
      </div>

      <div className="mt-10">
        {isLoading ? (
          <div className="text-center p-8">Loading...</div>
        ) : (
          error && (
            <div className="text-center p-8 text-red-600 font-bold">
              {error}
            </div>
          )
        )}
        {!isLoading && !error && (
          <CardSlider
            cards={officers.map((member) => (
              <Card
                key={member.id}
                title={member.name}
                subtitle={member.position}
                imageSrc={member.image_url}
                linkedinLink={member.linkedin}
              />
            ))}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
