// Board.jsx (الكود النهائي المبسَّط للوصول العام)
import React from "react";
import useFetch from "./hooks/useFetch";
import Section from "./component/Section";
import Card from "./component/Card";
import CardSlider from "./component/CardSlider";

// *******************************************************
// الإعدادات - نستخدم الرابط مباشرة من متغيرات بيئة Vite
// *******************************************************

const Board = () => {
	const lastYear = (new Date().getFullYear() - 1).toString();

	const { data, isLoading, error } = useFetch("/api/v1/board", {
		queryParams: {
			yearFrom: lastYear,
			memberType: "officer,technical,operation,branding",
		},
	});

	const boardData = {
		officer: data?.officer ?? [],
		technical: data?.technical ?? [],
		branding: data?.branding ?? [],
		operation: data?.operation ?? [],
	};

	// دالة مساعدة لتصيير (Render) قسم المجلس
	const renderBoardSection = (title, data) => (
		<React.Fragment key={title}>
			<div className="px-10 py-1 mt-6">
				<h2 className="flex flex-col sm:flex-row items-start sm:items-center text-lg sm:text-2xl font-bold gap-2 mb-8">
					<span className="bg-red-600 text-white px-2 py-1 rounded-tr-2xl rounded-br-2xl">
						{title}
					</span>
					<span className="text-[#000000]">
						The Heart of IEEE Al-Azhar SB: Talented Individuals, Shared
						Goals{" "}
					</span>
				</h2>
			</div>
			<CardSlider
				cards={data.map((member) => (
					<Card
						key={member.id}
						title={member.name}
						subtitle={member.position}
						imageSrc={member.image}
						linkedinLink={member.linkedin}
					/>
				))}
			/>
		</React.Fragment>
	);

	if (isLoading) {
		return (
			<div className="flex justify-center items-center h-screen">
				<p>Loading...</p>
			</div>
		);
	}

	if (error) {
		return (
			<div className="flex justify-center items-center h-screen">
				<p className="text-red-600 font-bold">{error}</p>
			</div>
		);
	}

	const sectionsToRender = [
		{ title: "Our Officers", key: "officer" },
		{ title: "Technical Board", key: "technical" },
		{ title: "Branding Board", key: "branding" },
		{ title: "Operation Board", key: "operation" },
	];

	return (
		<div>
			<Section
				text={`We Are IEEE\nThe Heart of Student Tech`}
				additionalText="A community of tech enthusiasts driving innovation"
			/>

			{sectionsToRender.map((section) =>
				renderBoardSection(section.title, boardData[section.key]),
			)}
		</div>
	);
};

export default Board;
