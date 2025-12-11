import React, { useState, useEffect } from 'react';
import { Menu, X, User, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext'; // 1. استدعاء السلة

interface NavbarProps {
  onOpenAuth: () => void;
  user: { name: string } | null;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAuth, user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // 2. هات دالة فتح السلة وعدد العناصر
  const { setIsCartOpen, cartCount } = useCart(); 

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 py-4 px-4`}>
      <div className={`max-w-7xl mx-auto rounded-full transition-all duration-300 ${isScrolled ? 'bg-brand-black/95 backdrop-blur-md shadow-xl py-2 px-6' : 'bg-transparent py-2 px-0'}`}>
        <div className="flex justify-between items-center h-14">
          {/* اللوجو */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <a href="#" className={`font-black text-3xl tracking-tighter ${isScrolled ? 'text-brand-yellow' : 'text-brand-black'}`}>
                لذيذ<span className="text-brand-red">.</span>
            </a>
          </div>
          
          {/* روابط الكمبيوتر */}
          <div className={`hidden md:flex items-center space-x-8 space-x-reverse ${isScrolled ? 'text-white' : 'text-brand-black'}`}>
            <a href="#home" className="hover:text-brand-yellow font-bold text-lg transition-colors">الرئيسية</a>
            <a href="#menu" className="hover:text-brand-yellow font-bold text-lg transition-colors">القائمة</a>
          </div>

          {/* أزرار الإجراءات */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-2 font-bold bg-white text-brand-black px-4 py-2 rounded-full shadow-hard-sm border-2 border-transparent hover:border-brand-yellow transition-all cursor-default">
                <User size={18} className="text-brand-red" />
                <span>أهلاً، {user.name}</span>
              </div>
            ) : (
              <button 
                onClick={onOpenAuth}
                className={`font-bold hover:text-brand-yellow transition-colors ${isScrolled ? 'text-white' : 'text-brand-black'}`}
              >
                تسجيل دخول
              </button>
            )}
            
            {/* زرار السلة الجديد */}
            <button 
              onClick={() => setIsCartOpen(true)} // لما يدوس يفتح السلة
              className="bg-brand-red text-white px-6 py-2 rounded-full font-black hover:bg-red-600 transition-all shadow-hard-sm flex items-center gap-2 transform hover:-translate-y-0.5 hover:scale-105 active:scale-95 relative"
            >
              <ShoppingBag size={18} />
              <span>سلة الطلبات</span>
              
              {/* العداد الأحمر الصغير */}
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-yellow text-black text-xs w-6 h-6 flex items-center justify-center rounded-full border-2 border-brand-black font-black animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* زرار الموبايل */}
          <div className="flex items-center md:hidden gap-4">
             {/* زرار السلة للموبايل كمان */}
             <button 
                onClick={() => setIsCartOpen(true)}
                className="bg-brand-red text-white p-2 rounded-full shadow-hard-sm relative"
             >
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-brand-yellow text-black text-[10px] w-5 h-5 flex items-center justify-center rounded-full border border-brand-black font-black">
                    {cartCount}
                    </span>
                )}
             </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isScrolled ? 'text-white' : 'text-brand-black'} p-2`}
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* قائمة الموبايل */}
      {isOpen && (
        <div className="absolute top-24 left-4 right-4 bg-brand-black rounded-3xl p-6 shadow-2xl md:hidden animate-fade-in-up border-2 border-brand-yellow z-50">
            <div className="flex flex-col space-y-4 text-center">
                <a href="#home" className="text-white text-xl font-bold hover:text-brand-yellow py-2" onClick={() => setIsOpen(false)}>الرئيسية</a>
                <a href="#menu" className="text-white text-xl font-bold hover:text-brand-yellow py-2" onClick={() => setIsOpen(false)}>القائمة</a>
                
                <div className="h-px bg-gray-800 my-2"></div>
                
                {user ? (
                    <div className="text-brand-yellow font-bold text-xl py-2 flex items-center justify-center gap-2">
                        <User size={24} />
                        {user.name}
                    </div>
                ) : (
                    <button 
                        onClick={() => { setIsOpen(false); onOpenAuth(); }}
                        className="bg-gray-800 text-white w-full py-3 rounded-xl font-bold"
                    >
                        تسجيل الدخول
                    </button>
                )}
            </div>
        </div>
      )}
    </nav>
  );
};
