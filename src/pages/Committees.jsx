import { useState } from "react";
import { Section, CardLogo } from "../component";
import Huan from "../assets/committee-img/Human-resources.svg";
import Publicrelations from "../assets/committee-img/Public-relations.svg";
import Logistics from "../assets/committee-img/Logistics.svg";
import Socialmediamarketing from "../assets/committee-img/social-media-marketing.svg";
import Graphicsdesign from "../assets/committee-img/Graphics-design.svg";
import videoediting from "../assets/committee-img/video-editing.svg";
import Photography from "../assets/committee-img/camera.svg";
import Java from "../assets/committee-img/java.svg";
import Advanced from "../assets/committee-img/data.svg";
import Python from "../assets/committee-img/snakes.svg";
import Data from "../assets/committee-img/science.svg";
import Embedded from "../assets/committee-img/cpu.svg";
import UI from "../assets/committee-img/web-design.svg";
import Cyber from "../assets/committee-img/cyber.svg";
import Front from "../assets/committee-img/webpage.svg";
import Back from "../assets/committee-img/framework.svg";
import Network from "../assets/committee-img/network.svg";
import AI from "../assets/committee-img/ai.svg";
import Power from "../assets/committee-img/distribution.svg";
import C from "../assets/committee-img/c.svg";
import Problem from "../assets/committee-img/problem.svg";
import Scientific from "../assets/committee-img/research.svg";

const sections = {
	operation: [
		{
			id: 1,
			imageSrc: Huan,
			title: "Human resources (HR) ",
			description:
				"Learn how to recruit, engage, and support team members to build a positive and productive environment.",
		},
		{
			id: 2,
			imageSrc: Publicrelations,
			title: "Public relations (PR)",
			description:
				"Explore how to build connections, communicate with audiences, and represent your team professionally.",
		},
		{
			id: 3,
			imageSrc: Logistics,
			title: "Logistics",
			description:
				"Understand how to plan, organize, and execute events smoothly through strong coordination and resource management.",
		},
	],
	branding: [
		{
			id: 1,
			imageSrc: Socialmediamarketing,
			title: "Social media marketing",
			description:
				"Learn how to plan and create engaging content through creative digital strategies.",
		},
		{
			id: 2,
			imageSrc: Graphicsdesign,
			title: "Graphics design",
			description:
				"Learn the fundamentals of design and create visuals for events, social media, and team branding.",
		},
		{
			id: 3,
			imageSrc: videoediting,
			title: "Video editing",
			description:
				"Practice editing techniques to produce creative videos that showcase team activities and projects.",
		},
		{
			id: 4,
			imageSrc: Photography,
			title: "Photography",
			description:
				"Learn the photography basics and apply them to capture moments that tell powerful stories.",
		},
	],
	technical: [
		{
			id: 1,
			imageSrc: Java,
			title: "Java beginner",
			description:
				"Learn Java programming, a powerful language for developing applications, web services, and Android apps with an object-oriented approach.",
		},
		{
			id: 2,
			imageSrc: Advanced,
			title: "Advanced programming",
			description:
				"Deepen your knowledge of advanced programming concepts, including object-oriented programming, data structures, and system design.",
		},
		{
			id: 3,
			imageSrc: Python,
			title: "Python",
			description:
				"Master one of the most versatile programming languages used in data analysis, artificial intelligence, and software development.",
		},
		{
			id: 4,
			imageSrc: Data,
			title: "Data science",
			description:
				"Discover the field of data science, from data processing and analysis to building predictive models and making data-driven decisions.",
		},
		{
			id: 5,
			imageSrc: Embedded,
			title: "Embedded systems",
			description:
				"Learn how to program embedded systems, control smart devices, and work with microcontrollers and sensors.",
		},
		{
			id: 6,
			imageSrc: UI,
			title: "UI&UX",
			description:
				"Learn how to design intuitive user interfaces and enhance user experience for digital products, ensuring usability and accessibility.",
		},
		{
			id: 7,
			imageSrc: Cyber,
			title: "Cyber security",
			description:
				"Explore the fundamentals of cybersecurity, from protecting systems against cyber threats to securing networks and data.",
		},
		{
			id: 8,
			imageSrc: Front,
			title: "Front-End",
			description:
				"Learn how to build interactive and visually appealing web interfaces using HTML, CSS, and JavaScript while focusing on user experience.",
		},
		{
			id: 9,
			imageSrc: Back,
			title: "Back-End",
			description:
				"Explore backend development, building servers, managing databases, and developing APIs using Asp.net.",
		},
		{
			id: 10,
			imageSrc: Network,
			title: "Network",
			description:
				"Understand the basics of networking, how connections work, and how to manage and secure networks effectively.",
		},
		{
			id: 11,
			imageSrc: AI,
			title: "AI",
			description:
				"Dive into the world of Artificial Intelligence, including machine learning and neural networks, and explore its real-world applications.",
		},
		{
			id: 12,
			imageSrc: Power,
			title: "Power Distribution",
			description:
				"Gain knowledge about power distribution systems, electrical grid design, and methods for improving energy efficiency.",
		},
		{
			id: 13,
			imageSrc: C,
			title: "C",
			description:
				"Learn the fundamentals of C programming, widely used in system development, embedded software, and game development.",
		},
		{
			id: 14,
			imageSrc: Problem,
			title: "Problem Solving",
			description:
				"Enhance your analytical thinking and problem-solving skills through algorithms, data structures, and coding challenges.",
		},
		{
			id: 15,
			imageSrc: Scientific,
			title: "Scientific Research",
			description:
				"Develop your curiosity and investigative skills by exploring scientific methods, conducting experiments, and analyzing data to discover new insights.",
		},
	],
};

const Committees = () => {
	const [activeTab, setActiveTab] = useState("operation");

	return (
		<div>
			<Section
				text="Empowering Through Action"
				additionalText="Committees working together to achieve our goals."
			/>

			<div className="px-10 pt-3 ">
				<div className="inline-flex md:flex flex-wrap justify-start gap-0 bg-[#acabab50] p-2 rounded-2xl w-full sm:gap-4 sm:w-fit sm:rounded-full h-13 mb-4">
					<button
						onClick={() => setActiveTab("operation")}
						className={`px-4 py-2 text-white ${
							activeTab === "operation" ? "bg-[#05568D]" : "bg-gray-400"
						} rounded-full w-full sm:w-auto mb-2 sm:mb-0`}
					>
						Operation Section
					</button>
					<button
						onClick={() => setActiveTab("branding")}
						className={`px-4 py-2 text-white ${
							activeTab === "branding" ? "bg-[#05568D]" : "bg-gray-400"
						} rounded-full w-full sm:w-auto mb-2 sm:mb-0`}
					>
						Branding Section
					</button>
					<button
						onClick={() => setActiveTab("technical")}
						className={`px-4 py-2 text-white ${
							activeTab === "technical" ? "bg-[#05568D]" : "bg-gray-400"
						} rounded-full w-full sm:w-auto mb-2 sm:mb-0`}
					>
						Technical Section
					</button>
				</div>
			</div>

			<div className="px-3 sm:px-10">
				<h2 className="flex flex-col sm:flex-row items-start sm:items-center text-lg sm:text-2xl font-bold gap-2">
					<span className="bg-red-600 text-white px-2 py-1 rounded-tr-full rounded-br-full">
						{activeTab === "operation" && "Operation Committees"}
						{activeTab === "branding" && "Branding Committees"}
						{activeTab === "technical" && "Technical Committees"}
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
				{sections[activeTab].map((card) => (
					<CardLogo
						key={card.id}
						imageSrc={card.imageSrc}
						title={card.title}
						description={card.description}
					/>
				))}
			</div>
		</div>
	);
};

export default Committees;
