
import React from 'react';
import { RESTAURANT_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-900 text-white pt-20 pb-28 md:pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white font-extrabold text-xl">
                K
              </div>
              <span className="font-extrabold text-2xl tracking-tight uppercase">
                {RESTAURANT_NAME}
              </span>
            </div>
            <p className="text-zinc-400 max-w-sm mb-6">
              Lahore's premier destination for late-night fast food. We specialize in grilled burgers, loaded fries, and pizzas made with passion.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">f</a>
              <a href="#" className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">ig</a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-zinc-400">
              <li><a href="#menu" className="hover:text-white transition-colors">Full Menu</a></li>
              <li><a href="#order" className="hover:text-white transition-colors">Order Online</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">Location</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-4 text-zinc-400">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-sm">
          <p>© 2026 {RESTAURANT_NAME}, Lahore. All rights reserved.</p>
          <p>Designed with ❤️ for the Night Owls of Lahore.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
