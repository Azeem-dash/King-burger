
import React from 'react';
import { FOODPANDA_URL, RESTAURANT_PHONE } from '../constants';

const OrderingOptions: React.FC = () => {
  return (
    <section id="order" className="py-20 bg-red-600">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-white mb-6">Hungry Right Now?</h2>
        <p className="text-red-100 max-w-xl mx-auto mb-10 text-lg">
          We are firing up the grill and baking the freshest pizzas until 4 AM. Choose your favorite way to order.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Foodpanda Card */}
          <div className="bg-white p-8 rounded-3xl shadow-2xl flex flex-col items-center">
            <div className="bg-[#d70f64] w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <span className="text-white text-3xl">🐼</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Order on Foodpanda</h3>
            <p className="text-zinc-500 mb-8">Fast delivery to your doorstep anywhere in Khayaban-e-Ameen & surroundings.</p>
            <a 
              href={FOODPANDA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#d70f64] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#c00d5a] transition-all"
            >
              Order Online
            </a>
          </div>

          {/* Call Card */}
          <div className="bg-zinc-900 p-8 rounded-3xl shadow-2xl flex flex-col items-center">
            <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <span className="text-white text-3xl">📞</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Direct Call</h3>
            <p className="text-zinc-400 mb-8">Prefer to speak to us? We take orders by phone till 4 AM for pickup or local delivery!</p>
            <a 
              href={`tel:${RESTAURANT_PHONE}`}
              className="w-full bg-white text-zinc-900 py-4 rounded-xl font-bold text-lg hover:bg-zinc-100 transition-all"
            >
              Call +92 305 4348080
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderingOptions;
