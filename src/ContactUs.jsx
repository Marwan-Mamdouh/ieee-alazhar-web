import { useState, useEffect } from "react"; // Missing import
import useFetch from "./hooks/useFetch"; // Ensure this path correctly points to your hook
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

const icons = [
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
];

const ContactUs = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});

	const [successMessage, setSuccessMessage] = useState("");

	const { mutate, isLoading, error, data } = useFetch("/api/v1/feedback", {
		method: "POST",
	});

	// Reset form and notify user only when the data response actually arrives
	useEffect(() => {
		if (data) {
			setSuccessMessage("Your message has been sent successfully!");

			setFormData({
				name: "",
				email: "",
				phone: "",
				message: "",
			});

			const timer = setTimeout(() => setSuccessMessage(""), 5000);
			return () => clearTimeout(timer);
		}
	}, [data]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// TODO: Add client side validation here before firing
		if (!formData.name || !formData.email || !formData.message) {
			alert("Please fill in all required fields.");
			return;
		}

		mutate(formData);
	};

	return (
		<div>
			<Section
				showSocialIcons={true}
				text={`Get in touch with us.\nWe're here to assist you.`}
				additionalText={`Contact us for assistance, feedback, or collaboration opportunities.`}
			/>
			<div className="container mx-auto px-4 py-8">
				{/* Bind onSubmit handler */}
				<form
					onSubmit={handleSubmit}
					className="grid grid-cols-1 md:grid-cols-2 gap-6"
				>
					{/* Name */}
					<div className="flex flex-col">
						<label className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
							<FaUser className="text-[#05568D]" />
							Name
						</label>
						<input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
							placeholder="Enter your name"
							className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
							required
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
							name="email"
							value={formData.email}
							onChange={handleChange}
							placeholder="Enter your email"
							className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
							required
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
							name="phone"
							value={formData.phone}
							onChange={handleChange}
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
							name="message"
							value={formData.message}
							onChange={handleChange}
							placeholder="Write your message here..."
							className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
							required
						></textarea>
					</div>

					{/* Status Notifications */}
					<div className="md:col-span-2 text-right">
						{error && (
							<p className="text-red-500 text-sm font-medium">{error}</p>
						)}
						{successMessage && (
							<p className="text-green-600 text-sm font-medium">
								{successMessage}
							</p>
						)}
					</div>

					<div className="md:col-span-2 flex justify-end">
						<button
							type="submit"
							disabled={isLoading}
							className={`bg-[#05568D] text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 font-semibold ${
								isLoading ? "opacity-50 cursor-not-allowed" : ""
							}`}
						>
							{isLoading ? "Sending..." : "Send"}
						</button>
					</div>
				</form>
			</div>

			{/* Footer Info */}
			{/* TODO: i do not know if we are actually need this section or not because we already have footer have the same information as this section here  */}
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
							{icons.map(({ icon: Icon, url }, i) => (
								<a
									key={`${i}-${url}`}
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
		</div>
	);
};

export default ContactUs;
