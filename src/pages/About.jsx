// About.jsx (الكود النهائي المبسَّط للوصول العام)
import { useBoardQuery } from "../hooks";
import { Section, CardSlider, Card } from "../component";
import { selectMemberPosition } from "../utils/member.position";

// imports المحتوى الثابت
import firstPic from "../assets/about-img/firstpic.jpg";
import secondPic from "../assets/about-img/2rdpic.jpg";
import firstBox from "../assets/about-img/firstbox.svg";
import since2013 from "../assets/about-img/sence2013.svg";
import codeBaker from "../assets/about-img/codebaker.svg";
import workshops from "../assets/about-img/workshops.svg";
import since2018 from "../assets/about-img/sence2018.svg";

const About = () => {
	const lastYear = new Date().getFullYear().toString();

  const { data, isLoading, error } = useBoardQuery({
		year: lastYear,
		memberType: "officer",
		position: "Chair",
  });
  console.log(data, "hello");
  const lastChairPerson = data?.officer ?? [];

	return (
		<div className="w-full overflow-hidden ">
			<Section
				text={`We Are IEEE\nThe Heart of Student Tech`}
				additionalText="A community of tech enthusiasts driving innovation"
			/>

			<div className="flex flex-wrap justify-center gap-4 relative -top-[95px] z-[899999]">
				{[
					{ number: "+50", text: "Workshops" },
					{ number: "+200", text: "Trainees" },
					{ number: "+150", text: "Events" },
					{ number: "+10", text: "Years Experience" },
				].map((item, index) => (
					<div
						key={`${index} + ${item.number} + ${item.text}`}
						className="w-40 h-24 bg-white shadow-lg rounded-lg flex flex-col items-center justify-center text-center p-2 sm:w-44 sm:h-28 md:w-52 md:h-32"
					>
						<h2 className="text-[#05568D] text-2xl sm:text-3xl font-bold">
							{item.number}
						</h2>
						<h2 className="text-[#05568D] text-sm sm:text-base font-semibold">
							{item.text}
						</h2>
					</div>
				))}
			</div>

			<div className="px-10">
				<h2 className="flex flex-col sm:flex-row items-start sm:items-center text-lg sm:text-2xl font-bold gap-2">
					<span className="bg-red-600 text-white px-2.5 py-1 rounded-tr-full rounded-br-full">
						About IEEE
					</span>
					<span className="text-[#1A1A1A]">
						Your First Step into the World of IEEE
					</span>
				</h2>

				<div className="px-4 py-4">
					<div className="flex flex-col lg:flex-row gap-8 mt-8 items-center justify-center">
						<img
							src={firstPic}
							alt="IEEE Group"
							className="w-full max-w-md lg:max-w-xl rounded-lg object-contain"
						/>
						<p className="text-[#1A1A1A99] font-medium text-sm sm:text-base leading-7 max-w-2xl text-center lg:text-left">
							At IEEE Al-Azhar SB, we inspire the next generation of innovators
							by fostering a community of tech enthusiasts dedicated to learning
							and growth. We provide access to resources, mentorship, and
							real-world experiences, empowering students to excel in
							cutting-edge fields. Rooted in creativity, collaboration, and
							inclusivity, we aim to drive technological advancements that
							positively impact society.
						</p>
					</div>
				</div>

				<div className="px-4 py-10">
					<div className="flex flex-col-reverse lg:flex-row gap-8 items-center justify-center">
						<p className="text-[#1A1A1A99] font-medium text-sm sm:text-base leading-7 max-w-2xl text-center lg:text-left">
							IEEE Al-Azhar SB operates under the IEEE Egypt Section,
							established in 1955 as the 2nd section outside the US and in the
							R8 region. The IEEE Egypt Section supports various student
							branches across Egyptian universities, promoting excellence in
							engineering and technology."
						</p>
						<img
							src={secondPic}
							alt="IEEE Group 2"
							className="w-full max-w-md lg:max-w-xl rounded-lg object-contain"
						/>
					</div>
				</div>

				<div className="bg-gradient-to-r from-[#1E61C9] to-[#0F3063] px-4 py-10 flex flex-col md:flex-row items-center">
					<h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-0 md:mr-8 text-center md:text-left">
						How a Passion for Technology Sparked a Movement
					</h2>
					<div className="h-0.5 w-32 bg-white hidden md:block my-6 mx-auto transform rotate-90"></div>
					<p className="text-white text-sm sm:text-base leading-7 text-center md:text-left">
						A shared passion for technology grew into a movement that drives
						innovation and learning. At IEEE, we empower students to push
						boundaries, collaborate, and lead. IEEE Al-Azhar SB, guided by the
						IEEE Egypt Section, nurtures future tech leaders and fosters a
						culture of creativity and excellence.
					</p>
				</div>

				<div className="px-4 py-10">
					<h2 className="flex flex-col sm:flex-row items-start sm:items-center text-lg sm:text-2xl font-bold gap-2 mb-8">
						<span className="bg-red-600 text-white px-2 py-1 rounded-tr-full rounded-br-full">
							What We've Accomplished
						</span>
						<span className="text-[#000000]">
							From Workshops to Networking, See What We Offer Our Members
						</span>
					</h2>

					<div className="lg:ml-[72px] m-[28px] grid md:grid-cols-2 lg:grid-cols-3 gap-[40px] justify-center">
						<div className="bg-[#05568D] relative lg:p-[160px] rounded-2xl md:rounded-[50%] sm:p-[48px] w-[302px] h-[100px] px-10 text-[#FFFFFF] text-[24px] sm:text-[28px] md:text-[32px] font-bold flex flex-col justify-center items-center lg:row-start-2 lg:col-start-2 lg:col-end-4 lg:row-end-5 md:row-start-2 md:col-start-1 sm:col-start-1 sm:row-start-1">
							{" "}
							<p className="text-center">Our</p>
							<p className="text-center">Achievements</p>
						</div>
						<div className="bg-[#FFFFFF] w-[302px] h-[223px] p-[8px] shadow-[0_4px_4px_0_#00000014] rounded-lg grid md:col-start-1 lg:col-start-2">
							<img
								src={firstBox}
								alt=""
								className="w-[50px] sm:w-[60px] md:w-[70px] h-auto object-contain mx-auto"
							/>
							<p className="text-[#1A1A1A] text-sm sm:text-[15px] md:text-[16px] pt-[20px]">
								Coached 1500+ students in embedded systems, communications,
								electronics, and algorithms through workshops.
							</p>
						</div>
						<div className="bg-[#FFFFFF] w-[302px] h-[223px] p-[8px] shadow-[0_4px_4px_0_#00000014] rounded-lg grid lg:row-start-2 lg:col-start-1 md:row-start-1 md:col-start-2">
							<img
								src={since2013}
								alt=""
								className="w-[50px] sm:w-[60px] md:w-[70px] h-auto object-contain mx-auto"
							/>
							<p className="text-[#1A1A1A] text-sm sm:text-[15px] md:text-[16px] pt-[20px]">
								In 2013, we launched a summer training program on Algorithms,
								Web Development, and Cyber Security.
							</p>
						</div>
						<div className="bg-[#FFFFFF] w-[302px] h-[223px] p-[8px] shadow-[0_4px_4px_0_#00000014] rounded-lg grid lg:row-start-2 lg:col-start-3 md:row-start-2 md:col-start-2">
							<img
								src={codeBaker}
								alt=""
								className="w-[50px] sm:w-[60px] md:w-[70px] h-auto object-contain mx-auto"
							/>
							<p className="text-[#1A1A1A] text-sm sm:text-[15px] md:text-[16px] pt-[20px]">
								Launched and supervise the Code Bakers program, preparing
								students for IEEE Xtreme since 2013.
							</p>
						</div>
						<div className="bg-[#FFFFFF] w-[302px] h-[223px] p-[8px] shadow-[0_4px_4px_0_#00000014] rounded-lg grid lg:row-start-4 lg:col-start-1 md:row-start-3 md:col-start-1">
							<img
								src={workshops}
								alt=""
								className="w-[50px] sm:w-[60px] md:w-[70px] h-auto object-contain mx-auto"
							/>
							<p className="text-[#1A1A1A] text-sm sm:text-[15px] md:text-[16px] pt-[20px]">
								Directed workshops on English Skills, Programming,
								Microcontrollers, Web Development, Cyber Security, and Linux.
							</p>
						</div>
						<div className="bg-[#FFFFFF] w-[302px] h-[223px] p-[8px] shadow-[0_4px_4px_0_#00000014] rounded-lg grid lg:row-start-4 lg:col-start-3 md:row-start-3 md:col-start-2">
							<img
								src={since2018}
								alt=""
								className="w-[50px] sm:w-[60px] md:w-[70px] h-auto object-contain mx-auto"
							/>
							<p className="text-[#1A1A1A] text-sm sm:text-[15px] md:text-[16px] pt-[20px]">
								In 2018, 2019, and 2020, IEEE Al-Azhar teams achieved top 4
								local ranks and strong international placements in IEEE Xtreme.
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* Our Last Chairman Section (القسم الديناميكي) */}
			<div className="px-10 py-1 mt-6">
				<h2 className="flex flex-col sm:flex-row items-start sm:items-center text-lg sm:text-2xl font-bold gap-2 mb-8">
					<span className="bg-red-600 text-white px-2 py-1 rounded-tr-full rounded-br-full">
						Our last chairperson
					</span>
					<span className="text-[#000000]">
						The Heart of IEEE Al-Azhar SB: Talented Individuals, Shared
						Goals{" "}
					</span>
				</h2>
			</div>

			<div className="flex justify-center p-8">
				{/* حالات التحميل والخطأ */}
				{isLoading && <p>Loading...</p>}
				{error && <p className="text-red-600 font-bold">{error}</p>}

				{/* 🚨 العرض المصحح: نتحقق من أن lastChairmen مصفوفة ونقوم بتمريرها */}
				{!isLoading && lastChairPerson.length > 0 ? (
					<CardSlider
						cards={lastChairPerson.map((chairPerson) => (
							<Card
								key={chairPerson.id}
								title={chairPerson.name}
								subtitle={selectMemberPosition(chairPerson, chairPerson.gender)} // المنصب + السيزون
								imageSrc={chairPerson.image_url}
								text={chairPerson.bio}
								linkedinLink={chairPerson.linkedin_url}
							/>
						))}
					/>
				) : !isLoading && !error ? (
					<p>No past chairmen data available.</p>
				) : null}
			</div>
		</div>
	);
};

export default About;
