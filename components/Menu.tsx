
import React, { useState } from 'react';
import { CATEGORIES, MENU_ITEMS } from '../constants';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].id);

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold mb-4">Our Menu</h2>
          <p className="text-zinc-500 font-medium">
            From our signature grilled burgers to cheesy pizzas and loaded chips, we have everything you need to satisfy those late-night cravings.
          </p>
        </div>

        {/* Categories Tab */}
        <div className="flex overflow-x-auto pb-4 mb-12 gap-3 no-scrollbar scroll-smooth">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`whitespace-nowrap px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2 ${
                activeCategory === cat.id 
                ? 'bg-red-600 text-white shadow-lg shadow-red-100' 
                : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
              }`}
            >
              <span>{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group bg-white rounded-3xl overflow-hidden border border-zinc-100 hover:border-red-100 transition-all hover:shadow-xl">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full font-extrabold text-red-600 shadow-sm">
                  Rs. {item.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">{item.name}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map((s) => (
                      <span key={s} className="text-yellow-400 text-xs">★</span>
                    ))}
                  </div>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Lahore Favorite</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
