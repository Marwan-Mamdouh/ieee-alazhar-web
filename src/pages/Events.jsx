import { useEventsQuery } from "../hooks";
import { Section, CardEvent } from "../component";

const Events = () => {
  const { data: events } = useEventsQuery();

  return (
    <div>
      <Section
        text={`We Are IEEE\nThe Heart of Student Tech`}
        additionalText="A community of tech enthusiasts driving innovation"
      />
      <div className="px-10 my-6 2xl:mt-12">
        <h2 className="flex flex-col sm:flex-row items-start sm:items-center text-lg sm:text-2xl font-bold gap-2 my-6">
          <span className="bg-red-600 text-white px-2.5 py-1 rounded-tr-full rounded-br-full">
            Our Events
          </span>
          <span className="text-[#000000]">
            Dive into a variety of events that fuel learning, creativity, and
            discovery.
          </span>
        </h2>
      </div>
      <div className="px-4 md:px-9 grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {events?.map((event) => {
          return (
            <CardEvent
              key={event._id}
              id={event._id}
              image={event.coverImage?.asset?.url}
              title={event.title}
              text={event.subtitle}
              date={`${new Date(event.startDate).toLocaleDateString()} - ${event.endDate ? new Date(event.endDate).toLocaleDateString() : "TBD"}`}
              location={event.location}
              className={"grid lg:grid-cols-2"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Events;
