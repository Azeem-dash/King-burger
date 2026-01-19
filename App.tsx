
import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Menu from './components/Menu.tsx';
import OrderingOptions from './components/OrderingOptions.tsx';
import LocationHours from './components/LocationHours.tsx';
import About from './components/About.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Menu />
        <OrderingOptions />
        <LocationHours />
      </main>
      <Footer />
      
      {/* Mobile Floating CTA */}
      <div className="fixed bottom-4 left-4 right-4 flex gap-2 md:hidden z-50">
        <a 
          href="https://www.foodpanda.pk/restaurants/king-burger-pizza" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 bg-[#d70f64] text-white py-4 rounded-xl font-bold shadow-xl flex items-center justify-center gap-2"
        >
          <span>Order Now</span>
        </a>
        <a 
          href="tel:+923054348080"
          className="flex-1 bg-zinc-900 text-white py-4 rounded-xl font-bold shadow-xl flex items-center justify-center gap-2 border border-zinc-700"
        >
          <span>Call King</span>
        </a>
      </div>
    </div>
  );
};

export default App;
