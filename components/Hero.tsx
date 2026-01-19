
import React from 'react';
import { FOODPANDA_URL, RESTAURANT_PHONE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-12">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 -left-20 w-80 h-80 bg-red-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-orange-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left space-y-6">
          <div className="inline-block px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-bold uppercase tracking-wider">
            🌙 Late-Night Cravings Solved
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter text-zinc-900">
            Lahore’s Favorite <br />
            <span className="text-red-600">Late-Night</span> <br />
            Burger Spot
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 font-medium max-w-lg">
            Open Until 4 AM • Dine-in • Takeout • Delivery. Freshly grilled burgers, loaded fries, and the best pizza in Khayaban-e-Ameen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href={FOODPANDA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#d70f64] text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-red-200 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              Order on Foodpanda
            </a>
            <a 
              href={`tel:${RESTAURANT_PHONE}`}
              className="bg-zinc-900 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-zinc-200 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              Call to Order
            </a>
          </div>
        </div>

        <div className="relative group flex justify-center">
          <div className="absolute inset-0 bg-red-600/5 rounded-3xl -rotate-3 scale-105 group-hover:rotate-0 transition-transform duration-700" />
          <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white">
            <img 
              src="https://picsum.photos/seed/burger-hero/800/800" 
              alt="Delicious Burger" 
              className="w-full aspect-square object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg flex justify-between items-center">
              <div>
                <p className="text-xs font-bold text-red-600 uppercase">Bestseller</p>
                <p className="font-bold text-zinc-900">Double Beef King</p>
              </div>
              <div className="text-red-600 font-extrabold text-xl">Rs. 599</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
