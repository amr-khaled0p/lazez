import React from 'react';
import { Phone, MapPin, Mail, Instagram, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-secondary text-white pt-20 pb-10 relative overflow-hidden">
      {/* الشريط الملون العلوي */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-red via-brand-yellow to-brand-red"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          
          {/* العمود الأول: اللوجو والوصف */}
          <div className="space-y-6">
            <div className="block">
              <span className="font-black text-4xl text-white tracking-tight">لذيذ<span className="text-brand-yellow">.</span></span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm font-medium">
              نجمع بين أصالة المطبخ العربي وراحة التكنولوجيا. وجبات طازجة، مكونات مختارة بعناية، وخدمة صممت لراحتك.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-red hover:border-brand-red hover:scale-110 transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:scale-110 transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* العمود الثاني: روابط سريعة */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
                <span className="w-8 h-1 bg-brand-red rounded-full"></span>
                روابط سريعة
            </h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-brand-yellow hover:pr-2 transition-all block font-medium">الرئيسية</a></li>
              <li><a href="#menu" className="text-gray-400 hover:text-brand-yellow hover:pr-2 transition-all block font-medium">القائمة</a></li>
              <li><a href="#pickup" className="text-gray-400 hover:text-brand-yellow hover:pr-2 transition-all block font-medium">اطلب واستلم</a></li>
            </ul>
          </div>

          {/* العمود الثالث: تواصل معنا (بيانات مصرية) */}
          <div>
             <h3 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
                <span className="w-8 h-1 bg-brand-yellow rounded-full"></span>
                تواصل معنا
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <MapPin className="text-brand-red ml-3 mt-1 flex-shrink-0 group-hover:text-brand-yellow transition-colors" size={20} />
                <span className="text-gray-400 group-hover:text-white transition-colors">وسط البلد، القاهرة، مصر</span>
              </li>
              <li className="flex items-center group">
                <Phone className="text-brand-red ml-3 flex-shrink-0 group-hover:text-brand-yellow transition-colors" size={20} />
                <span className="text-gray-400 text-left group-hover:text-white transition-colors" dir="ltr">010 1234 5678</span>
              </li>
              <li className="flex items-center group">
                <Mail className="text-brand-red ml-3 flex-shrink-0 group-hover:text-brand-yellow transition-colors" size={20} />
                <span className="text-gray-400 group-hover:text-white transition-colors">info@laziz.com</span>
              </li>
            </ul>
          </div>

          {/* العمود الرابع: ساعات العمل */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
                <span className="w-8 h-1 bg-white rounded-full"></span>
                ساعات العمل
            </h3>
            <div className="bg-white/5 rounded-xl p-5 border border-white/10 hover:border-brand-yellow/50 transition-colors">
                <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex justify-between border-b border-white/10 pb-2">
                    <span>السبت - الخميس</span>
                    <span className="font-mono text-brand-yellow">12:00 م - 12:00 ص</span>
                </li>
                <li className="flex justify-between font-bold pt-1">
                    <span>الجمعة</span>
                    <span className="font-mono text-brand-yellow">01:00 م - 01:00 ص</span>
                </li>
                </ul>
            </div>
          </div>
        </div>
        
        {/* حقوق الملكية */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} جميع الحقوق محفوظة لمطعم <span className="text-white font-bold">لذيذ</span>.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
             <a href="#" className="hover:text-brand-yellow transition-colors">الشروط والأحكام</a>
             <a href="#" className="hover:text-brand-yellow transition-colors">سياسة الخصوصية</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
