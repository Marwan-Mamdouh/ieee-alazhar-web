import { useState } from "react";
import { Section } from "../component";
import boy from "../assets/home-img/boy.svg";

// كل لجنة ومعاها الأقسام الفرعية
const subCommittees = {
	technical: [
		"Frontend",
		"Backend",
		"AI",
		"Embedded Systems",
		"Java beginner",
		"Advanced programming",
		"Python",
		"Network",
		"Scientific Research",
		"Problem Solving",
		"C Programming",
		"Power Distribution",
		"Cyber security",
		"UI&UX",
		"Embedded systems",
		"Data science",
	],
	multimedia: [
		"Graphic Design",
		"Video Editing",
		"Photography",
		"Social media marketing",
	],
	operations: ["Logistics", "Human resources (HR)", "Public relations (PR)"],
};

const JoinUs = () => {
	const [committee, setCommittee] = useState("");
	const [subCommittee, setSubCommittee] = useState("");

	const handleCommitteeChange = (e) => {
		setCommittee(e.target.value);
		setSubCommittee(""); // لما يغير الأساسي نفرغ الفرعي
	};

	return (
		<div>
			<Section
				showIeeeBox={true}
				text={`Be a Part of the Next Tech\nRevolution`}
				additionalText={`Contact us for assistance, feedback, or collaboration opportunities.`}
			/>
			<div className="px-10 py-10">
				<div className="flex flex-col md:flex-row items-center gap-6 bg-gray-100 rounded-xl p-6 w-full mb-5">
					<img
						src={boy}
						alt="Join us"
						className="w-[119px] h-[119px] object-cover "
					/>

					<div className="text-gray-800 text-base font-medium leading-relaxed">
						By joining, you're entering a world of innovation and opportunities.
						Fill out the form to become part of our community of future tech
						leaders. Let's shape the future!
					</div>
				</div>

				<form className="space-y-8">
					{/* -------- Basic Info -------- */}
					<div>
						<h2 className="flex flex-col sm:flex-row items-start sm:items-center text-lg sm:text-2xl gap-2">
							<span className="font-bold bg-red-600 text-white px-2 py-1 rounded-tr-2xl rounded-br-2xl">
								Basic Information:
							</span>
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
							<div>
								<label className="block text-sm font-medium">
									First Name <span className="text-red-600">*</span>
								</label>
								<input
									type="text"
									placeholder="Enter your first name"
									required
									className="w-full border rounded-md p-2"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium">
									Last Name <span className="text-red-600">*</span>
								</label>
								<input
									type="text"
									placeholder="Enter your last name"
									required
									className="w-full border rounded-md p-2"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium">
									E-mail <span className="text-red-600">*</span>
								</label>
								<input
									type="email"
									placeholder="example@email.com"
									required
									className="w-full border rounded-md p-2"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium">
									Phone Number <span className="text-red-600">*</span>
								</label>
								<input
									type="tel"
									placeholder="Enter your phone number"
									required
									className="w-full border rounded-md p-2"
								/>
							</div>
						</div>
					</div>

					{/* -------- Education Info -------- */}
					<div>
						<h2 className="flex flex-col sm:flex-row items-start sm:items-center text-lg sm:text-2xl gap-2">
							<span className="font-bold bg-red-600 text-white px-2 py-1 rounded-tr-2xl rounded-br-2xl">
								Education Information:
							</span>
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
							<div>
								<label className="block text-sm font-medium">
									University <span className="text-red-600">*</span>
								</label>
								<input
									type="text"
									placeholder="Your university name"
									required
									className="w-full border rounded-md p-2"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium">
									Graduation Year <span className="text-red-600">*</span>
								</label>
								<input
									type="number"
									placeholder="e.g., 2026"
									required
									className="w-full border rounded-md p-2"
								/>
							</div>
						</div>
					</div>

					{/* -------- Committee Info -------- */}
					<div>
						<h2 className="flex flex-col sm:flex-row items-start sm:items-center text-lg sm:text-2xl gap-2">
							<span className="font-bold bg-red-600 text-white px-2 py-1 rounded-tr-2xl rounded-br-2xl">
								Committee Information:
							</span>
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
							<div>
								<label className="block text-sm font-medium">
									Position <span className="text-red-600">*</span>
								</label>
								<select required className="w-full border rounded-md p-2">
									<option value="">Select position</option>
									<option value="member">Member</option>
									<option value="head">Head</option>
									<option value="vice-head">Vice Head</option>
								</select>
							</div>

							{/* Committee الأساسي */}
							<div>
								<label className="block text-sm font-medium">
									Committee <span className="text-red-600">*</span>
								</label>
								<select
									required
									value={committee}
									onChange={handleCommitteeChange}
									className="w-full border rounded-md p-2"
								>
									<option value="">Select committee</option>
									<option value="technical">Technical</option>
									<option value="multimedia">Multimedia</option>
									<option value="operations">Operations</option>
								</select>
							</div>

							{/* Sub-Committee يبان بس لو اختار الأساسي */}
							{committee && subCommittees[committee] && (
								<div>
									<label className="block text-sm font-medium">
										Sub-Committee <span className="text-red-600">*</span>
									</label>
									<select
										required
										value={subCommittee}
										onChange={(e) => setSubCommittee(e.target.value)}
										className="w-full border rounded-md p-2"
									>
										<option value="">Select sub-committee</option>
										{subCommittees[committee].map((sub, index) => (
											<option key={index} value={sub.toLowerCase()}>
												{sub}
											</option>
										))}
									</select>
								</div>
							)}
						</div>
					</div>

					{/* -------- Additional Info -------- */}
					<div>
						<h2 className="flex flex-col sm:flex-row items-start sm:items-center text-lg sm:text-2xl gap-2">
							<span className="font-bold bg-red-600 text-white px-2 py-1 rounded-tr-2xl rounded-br-2xl">
								Additional Information:
							</span>
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
							<div>
								<label className="block text-sm font-medium">LinkedIn</label>
								<input
									type="url"
									placeholder="https://linkedin.com/in/username"
									className="w-full border rounded-md p-2"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium">
									Upload Your CV <span className="text-red-600">*</span>
								</label>
								<label
									htmlFor="upload-cv"
									className="w-full border border-dashed rounded-md p-4 text-center text-sm text-gray-500 cursor-pointer bg-white hover:bg-gray-100 flex flex-col items-center justify-center"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-8 w-8 mb-2 text-gray-400"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={2}
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M7 16V4m0 0L3 8m4-4l4 4m4 8v4m0 0l4-4m-4 4l-4-4"
										/>
									</svg>
									Click here to upload or drop files here
									<input
										id="upload-cv"
										type="file"
										accept=".pdf,.doc,.docx"
										required
										className="hidden"
									/>
								</label>
							</div>
						</div>

						<div className="mt-4">
							<label className="block text-sm font-medium">
								Message <span className="text-red-600">*</span>
							</label>
							<textarea
								required
								rows="5"
								placeholder="Write your message here..."
								className="w-full border rounded-md p-2"
							></textarea>
						</div>
					</div>

					<div className="flex justify-end">
						<button
							type="submit"
							className="bg-[#05568D] text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default JoinUs;
