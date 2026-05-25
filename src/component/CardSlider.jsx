// component/CardSlider.jsx (الكود المصحح والحماية)
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React from "react"; 

// المكون الآن يستقبل فقط مصفوفة البطاقات الجاهزة للعرض
export default function CardSlider({ cards }) {

    // 🚨 التصحيح: يجب وضع الحماية هنا أولاً!
    // نتحقق من أن 'cards' موجودة وأنها مصفوفة.
    if (!cards || !Array.isArray(cards) || cards.length === 0) {
        return null; // لا تعرض شيء أثناء التحميل أو إذا كانت البيانات فارغة
    }
    
    // نحدد المصدر النهائي للشرائح (Slides)
    // الآن أصبحنا متأكدين أن 'cards' مصفوفة صالحة
    const finalSlides = cards.map((card, index) => (
        <SwiperSlide key={index} className="flex justify-center">
            <div className="w-[500px] mb-14">{card}</div>
        </SwiperSlide>
    ));

    const totalSlides = cards.length; 
    // 💡 تم إزالة التحقق المتأخر: if (totalSlides === 0) 

    return (
        <div className="w-full px-3 py-0 -mt-5 mb-6">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                centeredSlides={true}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                speed={700}
                loop={totalSlides > 3 ? true : false} 
                loopedslides={totalSlides} 
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
                className="relative"
            >
                {finalSlides}
            </Swiper>

            {/* ... (كود الـ style المتبقي) ... */}
            <style dangerouslySetInnerHTML={{__html: `
                .swiper-slide { opacity: 0.5; transform: scale(0.9); transition: all 0.5s ease; }
                /* ... (باقي الـ CSS) ... */
                .swiper-slide-active { opacity: 1; transform: scale(1); }
                .swiper-button-next, .swiper-button-prev { color: #000; top: auto; bottom: -1px; width: 35px; height: 35px; z-index: 10; }
                .swiper-button-prev { left: 40%; transform: translateX(-50%); }
                .swiper-button-next { right: 40%; transform: translateX(50%); }
                .swiper-button-next::after, .swiper-button-prev::after { font-size: 20px; font-weight: bold; }
                .swiper-pagination-bullet-active { background: #000; transform: scale(1.3); }
                @media (max-width: 768px) {
                    .swiper-button-prev { left: 30%; bottom: 3px; transform: translateX(-50%); }
                    .swiper-button-next { right: 30%; bottom: 3px; transform: translateX(50%); }
                    .swiper-button-next, .swiper-button-prev { width: 28px; height: 28px; }
                    .swiper-button-next::after, .swiper-button-prev::after { font-size: 16px; }
                    .swiper-pagination-bullet { width: 4px !important; height: 4px !important; margin: 0 4px !important; }
                    .swiper-pagination-bullet-active { transform: scale(1.2); }
                }
            `}} />
        </div>
    );
} 