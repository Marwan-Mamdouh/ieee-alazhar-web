// Board.jsx (الكود النهائي المبسَّط للوصول العام)
import React, { useState, useEffect } from "react";
import Footer from "./component/Footer";
import Section from "./component/Section";
import Card from "./component/Card";
import CardSlider from "./component/CardSlider";

// *******************************************************
// الإعدادات - نستخدم الرابط مباشرة من متغيرات بيئة Vite
// *******************************************************
const API_BASE_URL = "https://ieee-board-api-production.up.railway.app"; 
// 🚨 لم نعد نحتاج لـ GATEWAY_PASSWORD في هذا الوضع
// *******************************************************

const Board = () => {
    const [boardData, setBoardData] = useState({
        officers: [],
        technical: [],
        branding: [],
        operation: [],
    });
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // 🚨 تم حذف دالة getAuthToken بالكامل

    const fetchBoardData = async () => {
        setIsLoading(true);
        setError(null);

        try {
            // 🚨 طلب مباشر إلى الـ API بدون أي Headers للمصادقة
            const response = await fetch(`${API_BASE_URL}/api/board`); 
            
            if (!response.ok) {
                // إذا فشلت الاستجابة، تحقق مما إذا كان هناك خطأ خادم (500) أو (404)
                throw new Error(`HTTP error! Status: ${response.status}. Check API URL: ${API_BASE_URL}/api/board`);
            }

            const data = await response.json();
            setBoardData(data);
        } catch (e) {
            console.error("Failed to fetch board data:", e);
            setError(e.message || "Failed to fetch board data. Check API connection.");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchBoardData();
    }, []); 

    // دالة مساعدة لتصيير (Render) قسم المجلس
    const renderBoardSection = (title, data) => (
        <React.Fragment key={title}> 
            <div className="px-10 py-1 mt-6">
                <h2 className="flex flex-col sm:flex-row items-start sm:items-center text-lg sm:text-2xl font-bold gap-2 mb-8">
                    <span className="bg-red-600 text-white px-2 py-1 rounded-tr-2xl rounded-br-2xl">
                        {title}
                    </span>
                    <span className="text-[#000000]">
                        The Heart of IEEE Al-Azhar SB: Talented Individuals, Shared Goals{" "}
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
        { title: "Our Officers", key: "officers" },
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
                renderBoardSection(section.title, boardData[section.key])
            )}
            
            <Footer />
        </div>
    );
};

export default Board;