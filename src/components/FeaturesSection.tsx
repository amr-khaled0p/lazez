import React from 'react';
import { Clock, Award, ShieldCheck } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-brand-offwhite relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-brand-black mb-4">
            ليه تاكل من <span className="text-brand-red">لذيذ؟</span>
          </h2>
          <p className="text-gray-500 text-xl font-medium max-w-2xl mx-auto">
            مش مجرد مطعم، دي تجربة معمولة بمزاج عشانك.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* الميزة 1 */}
          <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-hard transition-all duration-300 transform hover:-translate-y-2 text-center group">
            <div className="w-20 h-20 mx-auto bg-red-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-red transition-colors">
              <Clock size={40} className="text-brand-red group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-black text-brand-black mb-3">أسرع ديليفري</h3>
            <p className="text-gray-500 font-medium">
              الجوع كافر وإحنا عارفين! عشان كدة طلبك بيوصلك سخن ومولع في وقت قياسي.
            </p>
          </div>

          {/* الميزة 2 */}
          <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-hard transition-all duration-300 transform hover:-translate-y-2 text-center group">
            <div className="w-20 h-20 mx-auto bg-yellow-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-yellow transition-colors">
              <Award size={40} className="text-brand-yellow group-hover:text-black transition-colors" />
            </div>
            <h3 className="text-2xl font-black text-brand-black mb-3">جودة عالمية</h3>
            <p className="text-gray-500 font-medium">
              بنستخدم أجود أنواع اللحوم والخضار الطازج يومياً. مفيش عندنا حاجة بايتة.
            </p>
          </div>

          {/* الميزة 3 */}
          <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-hard transition-all duration-300 transform hover:-translate-y-2 text-center group">
            <div className="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-black transition-colors">
              <ShieldCheck size={40} className="text-brand-black group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-black text-brand-black mb-3">شيفات محترفين</h3>
            <p className="text-gray-500 font-medium">
              الأكل عندنا نفس.. والشيفات بتوعنا بيطبخوا بحب وخبرة سنين طويلة.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
