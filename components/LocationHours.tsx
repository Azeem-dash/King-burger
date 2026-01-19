
import React from 'react';
import { ADDRESS, HOURS } from '../constants';

const LocationHours: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-zinc-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-extrabold mb-6">Find Us in Lahore</h2>
              <p className="text-zinc-500 mb-10 text-lg">
                Located in the heart of Khayaban-e-Ameen, we are a convenient spot for late-night students, night owls, and families.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="bg-red-100 text-red-600 p-3 rounded-xl">📍</div>
                <div>
                  <h4 className="font-bold text-zinc-900">Address</h4>
                  <p className="text-zinc-600">{ADDRESS}</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-red-100 text-red-600 p-3 rounded-xl">⏰</div>
                <div>
                  <h4 className="font-bold text-zinc-900">Opening Hours</h4>
                  <p className="text-zinc-600">{HOURS}</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-red-100 text-red-600 p-3 rounded-xl">🚗</div>
                <div>
                  <h4 className="font-bold text-zinc-900">Parking</h4>
                  <p className="text-zinc-600">Ample roadside parking available for dine-in and takeout customers.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white min-h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.8436034375056!2d74.2690852!3d31.3632942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919036c07d30001%3A0x6a2c68e1694d6e90!2sKing%20Burger%20%26%20Pizza!5e0!3m2!1sen!2spk!4v1716300000000!5m2!1sen!2spk" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationHours;
