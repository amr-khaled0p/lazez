import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';
import { ShoppingBag, ArrowDown } from 'lucide-react';

const SLIDER_IMAGES = [
  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80"
];

export const Hero: React.FC = () => {
  return (
    <div id="home" className="relative min-h-screen bg-brand-offwhite overflow-hidden pt-20 flex flex-col justify-center">
      
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 -rotate-6 opacity-5 pointer-events-none select-none overflow-hidden">
        <div className="whitespace-nowrap animate-marquee flex gap-10">
          <span className="text-[150px] font-black text-black">LAZIZ TASTY FAST HOT FRESH</span>
          <span className="text-[150px] font-black text-black">LAZIZ TASTY FAST HOT FRESH</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          <div className="text-center lg:text-right order-2 lg:order-1">
            <div className="inline-block bg-brand-yellow px-4 py-1 rounded-full border-2 border-black font-black text-xs md:text-sm mb-4 shadow-hard-sm transform -rotate-2">
              🚀 أسرع توصيل في المدينة
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-brand-black leading-[0.9] mb-6 tracking-tight">
              مش مجرد <br />
              <span className="text-brand-red text-outline-white relative inline-block">
                أكل..
                <svg className="absolute w-full h-4 -bottom-1 left-0 text-brand-yellow z-[-1]" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="15" fill="none" />
                </svg>
              </span>
              <br />
              ده <span className="text-brand-yellow text-shadow-black">إدمان!</span>
            </h1>
            
            <p className="text-xl text-gray-700 font-bold mb-8 max-w-lg mx-auto lg:mx-0">
              استعد لتجربة طعم هتاخدك لعالم تاني. برجر، شاورما، ومشاوي معمولة بمزاج عالي.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#pickup" className="group relative px-8 py-4 bg-brand-black text-white rounded-2xl font-black text-xl shadow-hard transition-all hover:-translate-y-1 hover:shadow-hard hover:bg-gray-900 active:translate-y-0 active:shadow-none overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                   اطلب الآن <ShoppingBag size={22} className="group-hover:animate-bounce" />
                </span>
                <div className="absolute inset-0 bg-brand-red transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-300"></div>
              </a>
              
              <a href="#menu" className="px-8 py-4 bg-white text-brand-black border-2 border-brand-black rounded-2xl font-black text-xl hover:bg-brand-yellow transition-colors shadow-hard-sm">
                شوف المنيو 👀
              </a>
            </div>
          </div>

          {/* --- السلايدر المعدل --- */}
          <div className="order-1 lg:order-2 relative h-[450px] md:h-[600px] flex items-center justify-center">
             
             {/* 1. خلفية متحركة (دواير بتلف) */}
             <div className="absolute w-[320px] h-[320px] md:w-[500px] md:h-[500px] border-2 border-dashed border-gray-300 rounded-full animate-spin-slow opacity-60"></div>
             <div className="absolute w-[280px] h-[280px] md:w-[450px] md:h-[450px] bg-brand-yellow/10 rounded-full blur-3xl"></div>

             {/* 2. كونتينر السلايدر */}
             <div className="relative w-full max-w-[320px] md:max-w-[450px] mx-auto z-10 group">
                <Swiper
                    modules={[Autoplay, EffectCreative, Navigation]}
                    effect={'creative'}
                    creativeEffect={{
                      prev: { shadow: true, translate: [0, 0, -400], opacity: 0 },
                      next: { translate: ['100%', 0, 0] },
                    }}
                    speed={1200}
                    loop={true}
                    navigation={true}
                    autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
                    className="w-full aspect-square custom-swiper rounded-[3rem]" // ضفنا rounded هنا للسلايدر نفسه
                >
                    {SLIDER_IMAGES.map((img, index) => (
                    <SwiperSlide key={index} className="flex items-center justify-center p-6"> {/* p-6 دي هي السر، هتعمل هوامش عشان الصورة متلزقش في الحواف */}
                        <img 
                        src={img} 
                        alt="Delicious Food" 
                        // خلينا الصورة تاخد شكل مدور وحطينا بوردر خفيف
                        className="w-full h-full object-cover rounded-[2.5rem] shadow-2xl transition-transform duration-700 hover:scale-105 border-4 border-white"
                        />
                    </SwiperSlide>
                    ))}
                </Swiper>
            </div>
          </div>

        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <ArrowDown size={32} className="text-brand-black opacity-50" />
      </div>

      <style>{`
            .swiper-button-next, .swiper-button-prev {
                color: #000 !important;
                background: rgba(255, 255, 255, 0.8) !important;
                backdrop-filter: blur(4px);
                width: 45px;
                height: 45px;
                border-radius: 50%;
                border: 2px solid black !important;
                transition: all 0.3s ease;
                opacity: 0;
            }
            .group:hover .swiper-button-next, .group:hover .swiper-button-prev { opacity: 1; }
            .swiper-button-next:hover, .swiper-button-prev:hover { background: #F4D03F !important; transform: scale(1.1); }
            
            @keyframes spin-slow {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
            .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        `}</style>
    </div>
  );
};
