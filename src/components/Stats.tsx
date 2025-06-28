
import React from 'react';

const Stats = () => {
  const stats = [
    {
      number: '15+',
      label: 'Years of Excellence',
      description: 'Leading digital transformation across Africa'
    },
    {
      number: '200M+',
      label: 'Lives Transformed',
      description: 'Through innovative digital solutions'
    },
    {
      number: '45',
      label: 'Partner Countries',
      description: 'Collaborative network across the continent'
    },
    {
      number: '500+',
      label: 'Expert Team',
      description: 'Dedicated professionals driving change'
    }
  ];

  return (
    <section className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl p-8 hover:from-slate-600 hover:to-slate-700 transition-all duration-300 transform group-hover:scale-105">
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-white mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-slate-300">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
