import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartSidebar: React.FC = () => {
  const { 
    isCartOpen, 
    setIsCartOpen, 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    cartTotal 
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      {/* خلفية سوداء شفافة */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" 
        onClick={() => setIsCartOpen(false)}
      ></div>

      {/* جسم السلة */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-slide-in-right">
        
        {/* رأس السلة */}
        <div className="p-6 bg-brand-black text-white flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ShoppingBag className="text-brand-yellow" />
            <h2 className="text-xl font-black">سلة طلباتك</h2>
          </div>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* محتوى السلة */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-400">
              <ShoppingBag size={64} className="mb-4 opacity-20" />
              <p className="font-bold text-lg">السلة فاضية يا معلم!</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="mt-4 text-brand-red font-bold hover:underline"
              >
                روح اطلب حاجة
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 border-b border-gray-100 pb-4">
                <img 
                  src={item.imageUrl} 
                  alt={item.name} 
                  className="w-20 h-20 rounded-xl object-cover bg-gray-100"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-brand-black line-clamp-1">{item.name}</h3>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                  <p className="text-brand-red font-black text-sm mb-3">{item.price * item.quantity} ج.م</p>
                  
                  <div className="flex items-center gap-3 bg-gray-50 w-fit rounded-lg p-1">
                    <button 
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-8 h-8 flex items-center justify-center bg-white rounded-md shadow-sm hover:bg-gray-100 font-bold"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="font-black w-4 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-8 h-8 flex items-center justify-center bg-white rounded-md shadow-sm hover:bg-gray-100 font-bold"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* الفاتورة والزرار */}
        {cartItems.length > 0 && (
          <div className="p-6 bg-gray-50 border-t border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-500 font-bold">الإجمالي</span>
              <span className="text-2xl font-black text-brand-black">{cartTotal} جنيه</span>
            </div>
            <button className="w-full bg-brand-red text-white py-4 rounded-xl font-black text-lg shadow-hard hover:bg-red-700 transition-all active:scale-95">
              تأكيد الطلب ({cartTotal} ج.م)
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
