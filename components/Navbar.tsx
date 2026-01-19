
import React from 'react';
import { RESTAURANT_NAME } from '../constants';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-zinc-100 shadow-sm px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white font-extrabold text-xl shadow-md">
          K
        </div>
        <span className="font-extrabold text-lg tracking-tight uppercase hidden sm:block">
          {RESTAURANT_NAME}
        </span>
        <span className="font-extrabold text-lg tracking-tight uppercase sm:hidden">
          King Burger
        </span>
      </div>
      
      <div className="hidden md:flex items-center gap-6 font-semibold text-zinc-600">
        <a href="#menu" className="hover:text-red-600 transition-colors">Menu</a>
        <a href="#about" className="hover:text-red-600 transition-colors">Why Us</a>
        <a href="#location" className="hover:text-red-600 transition-colors">Location</a>
      </div>

      <a 
        href="tel:+923054348080"
        className="hidden md:flex items-center gap-2 bg-zinc-900 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-zinc-800 transition-all"
      >
        📞 +92 305 4348080
      </a>
    </nav>
  );
};

export default Navbar;
