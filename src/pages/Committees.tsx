import { useState, useEffect } from "react";
import { Section, CardLogo } from "../component";
import { getCommittees, type Committee } from "../service/committees";

const Committees = () => {
  const [activeTab, setActiveTab] = useState("operation");
  const [committees, setCommittees] = useState<Record<string, Committee[]>>({});

  useEffect(() => {
    getCommittees().then((data) => {
      setCommittees(data);
    });
  }, []);
  return (
    <div>
      <Section
        text="Empowering Through Action"
        additionalText="Committees working together to achieve our goals."
      />

      <div className="px-10 pt-3 2xl:pt-16">
        <div className="inline-flex md:flex flex-wrap justify-center items-center mx-auto bg-[#acabab50] p-2 rounded-2xl w-full sm:gap-4 sm:w-fit sm:rounded-full h-13 mb-4">
          {Object.keys(committees).map((section) => (
            <button
              onClick={() => setActiveTab(section)}
              className={`px-4 py-1 text-white ${
                activeTab === section ? "bg-[#05568D]" : "bg-gray-400"
              } rounded-full w-full sm:w-auto mb-2 sm:mb-0`}
            >
              {section} Section
            </button>
          ))}
        </div>
      </div>

      <div className="px-3 sm:px-10">
        <h2 className="flex flex-col sm:flex-row items-start sm:items-center text-lg sm:text-2xl font-bold gap-2">
          <span className="bg-red-600 text-white px-2 py-1 rounded-tr-full rounded-br-full capitalize">
            {activeTab && `${activeTab} committees`}
          </span>
          <span className="text-[#1A1A1A]">
            {activeTab === "operation" &&
              "The Backbone of Strategic Execution, Empowering Every Initiative and Driving Long-Term Success"}
            {activeTab === "branding" &&
              "Our events foster creativity and teamwork, pushing the boundaries of technology."}
            {activeTab === "technical" &&
              "Your First Step into the World of Technical"}
          </span>
        </h2>
      </div>

      <div className="px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 mb-6">
        {committees[activeTab] &&
          committees[activeTab].map((card) => (
            <CardLogo
              key={card._id}
              imageSrc={card.logo.asset.url}
              title={card.name}
              description={card.description}
            />
          ))}
      </div>
    </div>
  );
};

export default Committees;
