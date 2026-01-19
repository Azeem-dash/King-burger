
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-zinc-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">👨‍👩‍👧‍👦</div>
            <h3 className="text-xl font-bold mb-2">Family Friendly</h3>
            <p className="text-zinc-500 leading-relaxed">
              Spacious and clean environment perfect for family dinners and weekend hangouts.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">✨</div>
            <h3 className="text-xl font-bold mb-2">Fresh Ingredients</h3>
            <p className="text-zinc-500 leading-relaxed">
              We never compromise on quality. Our beef is fresh, our vegetables are crisp, and our dough is handmade daily.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">⭐</div>
            <h3 className="text-xl font-bold mb-2">Highly Rated</h3>
            <p className="text-zinc-500 leading-relaxed">
              Rated 4.2★ by 50+ happy customers on Google. Loved by Lahore locals for quick, tasty meals—even at 3 AM!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
