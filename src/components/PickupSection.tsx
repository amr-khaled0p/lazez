import React from 'react';
import { Star, Users, Heart } from 'lucide-react';

export const PickupSection: React.FC = () => {
  return (
    <section id="pickup" className="py-24 bg-brand-black text-white relative overflow-hidden">
      <div className="absolute right-0 top-0 text-[200px] font-black text-white opacity-[0.03] leading-none pointer-events-none select-none">
        THE<br/>VIBE
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* النص المعدل */}
            <div>
                {/* شيلنا البادج بتاع التاريخ هنا */}
                <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                    مش مجرد أكل.. <br/> {/* التعديل هنا */}
                    <span className="text-brand-yellow">ده أسلوب حياة.</span>
                </h2>
                <p className="text-gray-400 text-xl font-medium mb-10 max-w-lg leading-relaxed">
                    إحنا مش بنبيع مجرد وجبات، إحنا بنصنع "لحظات". المكان اللي يجمعك مع صحابك، اللمة اللي بتوحشك، والتفاصيل اللي معمولة عشان مزاجك إنت وبس.
                </p>

                <div className="space-y-8">
                    <div className="flex items-start gap-4 group">
                        <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-brand-red transition-colors duration-300">
                           <Users size={28} className="text-brand-yellow group-hover:text-white" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold mb-1 group-hover:text-brand-yellow transition-colors">مجتمع لذيذ</h4>
                            <p className="text-gray-500 text-sm">مكانك ومكان أصحابك، صممناه عشان يكون بيتك التاني.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                        <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-brand-red transition-colors duration-300">
                           <Star size={28} className="text-brand-yellow group-hover:text-white" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold mb-1 group-hover:text-brand-yellow transition-colors">جودة متتساومش</h4>
                            <p className="text-gray-500 text-sm">معايير عالمية في كل تفصيلة، من أول الخدمة لحد التغليف.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 flex items-center gap-4">
                    <span className="font-black text-2xl tracking-tighter">لذيذ<span className="text-brand-red">.</span></span>
                    {/* شيلنا التاريخ من هنا برضه */}
                </div>
            </div>

            <div className="relative h-[600px] w-full hidden lg:block group">
                <div className="absolute inset-0 bg-brand-yellow/10 rounded-tl-[100px] rounded-br-[100px] blur-3xl transform rotate-6"></div>
                <img 
                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop" 
                    alt="Laziz Atmosphere" 
                    className="absolute inset-0 w-full h-full object-cover rounded-tl-[100px] rounded-br-[100px] transform hover:scale-[1.02] transition-transform duration-700 shadow-2xl grayscale-[0.5] group-hover:grayscale-0 border border-white/10"
                />
                <div className="absolute top-10 right-10 bg-black/80 backdrop-blur-md text-white p-4 rounded-xl border border-white/20 shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-300">
                    <div className="flex items-center gap-3">
                        <div className="bg-brand-red p-2 rounded-full animate-pulse">
                            <Heart size={20} fill="white" />
                        </div>
                        <div>
                            <p className="text-[10px] text-gray-400 uppercase tracking-widest">Customer Favorite</p>
                            <p className="font-bold text-lg">الأكثر طلباً ⭐</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
