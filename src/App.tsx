import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { PickupSection } from './components/PickupSection'; // رجعنا دي
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { CartSidebar } from './components/CartSidebar';

function App() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [user, setUser] = useState<{ name: string } | null>(null);

  const handleLogin = (name: string) => {
    setUser({ name });
  };

  return (
    <div className="font-tajawal antialiased">
      <Navbar 
        onOpenAuth={() => setIsAuthOpen(true)} 
        user={user} 
      />
      
      <CartSidebar />
      
      <Hero />
      <MenuSection />
      <PickupSection /> {/* القسم الأسود الفخم رجع تاني */}
      <Footer />
      
      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        onLogin={handleLogin} 
      />
    </div>
  );
}

export default App;