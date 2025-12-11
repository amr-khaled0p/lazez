import React, { useState } from 'react';
import { X, Mail, Lock, User, ArrowRight } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (name: string) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // لو مدخلش اسم، بنقوله يا غالي
    onLogin(name || 'يا غالي');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* الخلفية الغامقة */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      
      <div className="bg-white rounded-2xl w-full max-w-md relative z-10 overflow-hidden shadow-2xl transform transition-all animate-fade-in-up">
        
        {/* الجزء العلوي الملون */}
        <div className="bg-gradient-to-r from-brand-red to-red-700 p-6 text-white text-center relative">
          <button 
            onClick={onClose} 
            className="absolute top-4 left-4 text-white/80 hover:text-white transition-colors bg-white/10 p-1 rounded-full hover:bg-white/20"
          >
            <X size={20} />
          </button>
          <h2 className="text-2xl font-bold mb-1">
            {isLogin ? 'منورنا تاني! 👋' : 'لسه جديد؟'}
          </h2>
          <p className="text-red-100 text-sm font-medium">
            {isLogin ? 'سجل دخولك عشان تطلب أسرع.' : 'اعمل حساب وتعال نروق عليك.'}
          </p>
        </div>

        {/* التبديل بين دخول وتسجيل */}
        <div className="flex border-b border-gray-100">
          <button 
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-4 text-center font-bold text-sm transition-colors relative ${isLogin ? 'text-brand-red' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            دخول
            {isLogin && <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-red rounded-t-full"></div>}
          </button>
          <button 
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-4 text-center font-bold text-sm transition-colors relative ${!isLogin ? 'text-brand-red' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            حساب جديد
            {!isLogin && <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-red rounded-t-full"></div>}
          </button>
        </div>

        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">الاسم بالكامل</label>
                <div className="relative">
                    <User className="absolute right-3 top-3 text-gray-400" size={20} />
                    <input 
                    type="text" 
                    placeholder="اسمك ايه؟" 
                    className="w-full pr-10 pl-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red outline-none transition-all"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    />
                </div>
              </div>
            )}
            
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">البريد الإلكتروني</label>
              <div className="relative">
                <Mail className="absolute right-3 top-3 text-gray-400" size={20} />
                <input 
                    type="email" 
                    placeholder="name@example.com" 
                    className="w-full pr-10 pl-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red outline-none transition-all"
                    required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">كلمة المرور</label>
              <div className="relative">
                <Lock className="absolute right-3 top-3 text-gray-400" size={20} />
                <input 
                    type="password" 
                    placeholder="••••••••" 
                    className="w-full pr-10 pl-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red outline-none transition-all"
                    required
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full py-3.5 mt-6 bg-brand-red text-white font-bold rounded-xl shadow-lg shadow-brand-red/30 hover:bg-red-700 hover:shadow-xl transition-all flex items-center justify-center gap-2 transform active:scale-95"
            >
              {isLogin ? 'يلا بينا' : 'إنشاء الحساب'}
              <ArrowRight size={20} />
            </button>
          </form>

          {isLogin && (
            <div className="mt-6 text-center">
                <a href="#" className="text-sm font-semibold text-gray-500 hover:text-brand-red transition-colors">
                نسيت الباسورد؟
                </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
