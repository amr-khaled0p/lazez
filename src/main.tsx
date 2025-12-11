import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { CartProvider } from './context/CartContext'; // استدعاء الملف الجديد

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider> {/* تغليف الموقع بالسلة */}
      <App />
    </CartProvider>
  </StrictMode>,
);