// Board.jsx (الكود النهائي المبسَّط للوصول العام)
import { Fragment, useState } from "react";
import { useFetch } from "../hooks";
import { Section, CardSlider, Card, BoardYearSelector } from "../component";
import { selectMemberPosition } from "../utils/member.position";

// *******************************************************
// الإعدادات - نستخدم الرابط مباشرة من متغيرات بيئة Vite
// *******************************************************

const sectionsToRender = [
	{ title: "Our Officers", key: "officer" },
	{ title: "Technical Board", key: "technical" },
	{ title: "Branding Board", key: "branding" },
	{ title: "Operation Board", key: "operation" },
];

const Board = () => {
	// Default to current year; the selector will auto-confirm or override this.
	const [selectedYear, setSelectedYear] = useState(
		new Date().getFullYear().toString(),
	);

	const { data, isLoading, error } = useFetch("/api/v1/board", {
		queryParams: {
			yearFrom: selectedYear,
			yearTo: selectedYear,
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
	const renderBoardSection = (title, data) => {
		if (!data || data.length === 0) return null;
		return (
			<Fragment key={title}>
				<div className="px-10 py-1 mt-6">
					<h2 className="flex flex-col sm:flex-row items-start sm:items-center text-lg sm:text-2xl font-bold gap-2 mb-8">
						<span className="bg-red-600 text-white px-2 py-1 rounded-tr-2xl rounded-br-2xl">
							{title}
						</span>
						<span className="text-[#000000]">
							The Heart of IEEE Al-Azhar SB: Talented Individuals, Shared Goals
						</span>
					</h2>
				</div>
				<CardSlider
					cards={data.map((member) => {
						let position = selectMemberPosition(
							member,
							boardData?.officer[0]?.gender,
						);
						return (
							<Card
								key={member.id}
								title={member.name}
                subtitle={position}
                text={member.bio}
								imageSrc={member.image_url}
								linkedinLink={member.linkedin_url}
							/>
						);
					})}
				/>
			</Fragment>
		);
	};

	return (
		<div>
			<Section
				text={`We Are IEEE\nThe Heart of Student Tech`}
				additionalText="A community of tech enthusiasts driving innovation"
			/>

			{/* ── Year selector ─────────────────────────────────────────────────────── */}
			<div className="px-10 pt-6 flex justify-end items-center gap-4">
				<BoardYearSelector
					selectedYear={selectedYear}
					onYearChange={setSelectedYear}
				/>
			</div>

			{/* ── Loading / error states ────────────────────────────────────────────── */}
			{isLoading && (
				<div className="flex justify-center items-center h-64">
					<p>Loading…</p>
				</div>
			)}

			{error && (
				<div className="flex justify-center items-center h-64">
					<p className="text-red-600 font-bold">{error}</p>
				</div>
			)}

			{/* ── Board sections ─────────────────────────────────────────────────────── */}
			{!isLoading &&
				!error &&
				sectionsToRender.map((section) =>
					renderBoardSection(section.title, boardData[section.key]),
				)}
		</div>
	);
};

export default Board;

