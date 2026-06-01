// component/Card.jsx (النسخة المدمجة والنهائية)

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"; // استيراد أيقونة LinkedIn

// نستخدم props النظام الجديد: title (الاسم), subtitle (المنصب), imageSrc, text (البايو), linkedinLink
const Card = ({ title, subtitle, imageSrc, text, linkedinLink }) => {
  return (
    // 🚨 حماية الأبعاد: نستخدم min-h لضمان ظهور الكارد بطول كافٍ
    <div className="relative w-full max-w-xs h-[450px] sm:h-[500px] rounded-lg overflow-hidden shadow-lg m-4">
      
      {/* 1. الصورة: تملأ الكارد بالكامل مع object-cover */}
      <img
        src={imageSrc}
        alt={title || "Member Image"}
        className="w-full h-full object-cover"
      />

      {/* 2. حاوية المحتوى: خلفية شفافة في الأسفل */}
      {/* bg-[#ffffff9b] للشفافية البيضاء أو bg-[#000000a0] للشفافية الداكنة */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#ffffff99] backdrop-blur-sm p-4 flex flex-col items-center space-y-2">
        
        {/* الاسم (Title) */}
        <p className="text-black text-[20px] text-center font-bold">
          {title}
        </p>
        
        {/* المنصب (Subtitle) */}
        {subtitle && (
          <p className="text-red-700 text-sm text-center font-medium capitalize">
            {subtitle}
          </p>
        )}
        
        {/* البايو (Text) */}
        {text && (
            // نستخدم هذا لضمان أن النص لا يطول بشكل مبالغ فيه
            <p className="text-gray-900 text-xs text-center max-h-16 overflow-hidden text-ellipsis"> 
                {text}
            </p>
        )}

        {/* 3. زر LinkedIn الأنيق */}
        {linkedinLink && (
          <a
            href={linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            // 🚨 تصميم الزر الأنيق المطلوب
            className="inline-flex items-center gap-1 bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold py-2 px-4 rounded-full transition duration-300 mt-2"
          >
            <FontAwesomeIcon icon={faLinkedin} className="h-3 w-3" /> 
            <span>LinkedIn</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;