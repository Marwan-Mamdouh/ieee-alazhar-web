import { Section, CardEvent } from "../component";
import aiGame from "../assets/events-img/AI Game.jpg";
import codeBaker from "../assets/events-img/Code Baker.jpg";
import juniorCamp from "../assets/events-img/Junior Camp.jpg";
import kickStart from "../assets/events-img/KickStart.jpg";
import Semicolon from "../assets/events-img/The Semicolon Show.jpg";
const Events = () => {
	return (
		<div>
			<Section
				text={`We Are IEEE\nThe Heart of Student Tech`}
				additionalText="A community of tech enthusiasts driving innovation"
			/>
			<div className="px-10 py-1 mt-6">
				<h2 className="flex flex-col sm:flex-row items-start sm:items-center text-lg sm:text-2xl font-bold gap-2 mb-8">
					<span className="bg-red-600 text-white px-2 py-1 rounded-tr-2xl rounded-br-2xl">
						Our Events
					</span>
					<span className="text-[#000000]">
						Dive into a variety of events that fuel learning, creativity, and
						discovery.
					</span>
				</h2>
			</div>
			<div className="px-4 md:px-9 grid grid-cols-1 md:grid-cols-2 gap-6">
				<CardEvent
					id={1}
					image={aiGame}
					title="AI Game"
					text="An event introducing the fundamentals of artificial intelligence (AI) and its applications."
					date="29 Feb 2024"
					location="Al-Azhar University"
					className={`grid lg:grid-cols-2`}
				/>
				<CardEvent
					id={2}
					image={codeBaker}
					title="Code Baker"
					text="A camp offering technical and non-technical training in various fields"
					date="End of year vacation"
					location="Online/Offline"
					className={`grid lg:grid-cols-2`}
				/>
				<CardEvent
					id={3}
					image={juniorCamp}
					title="Junior Camp"
					text="Camp designed for children and teenagers aged 5 to 18, focusing on programming and digital skills."
					date="Mid-year vacation"
					location="Online/Offline"
					className={`grid lg:grid-cols-2`}
				/>
				<CardEvent
					id={4}
					image={kickStart}
					title="KickStart"
					text="Program introducing participants to computer science, programming, and tech career paths."
					date="16, 18 Des 2023"
					location="Al-Azhar University"
					className={`grid lg:grid-cols-2`}
				/>
				<CardEvent
					id={5}
					image={Semicolon}
					title="The Semicolon Show"
					text="A problem-solving competition aimed at enhancing problem-solving skills and fostering a competitive spirit."
					date="Second Semester"
					location="Online/Offline"
					className={`grid lg:grid-cols-2`}
				/>
			</div>
		</div>
	);
};

export default Events;
