
import React from 'react';

const Partners = () => {
  const partners = [
    { name: 'African Union', logo: 'AU' },
    { name: 'World Bank', logo: 'WB' },
    { name: 'UNDP', logo: 'UNDP' },
    { name: 'NEPAD', logo: 'NEPAD' },
    { name: 'African Development Bank', logo: 'AfDB' },
    { name: 'GIZ', logo: 'GIZ' },
    { name: 'USAID', logo: 'USAID' },
    { name: 'European Union', logo: 'EU' }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Strategic
            <span className="text-transparent bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text"> Partners</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Collaborating with leading international organizations to drive Africa's digital transformation
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="group flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-br from-slate-700 to-slate-600 rounded-xl flex items-center justify-center mb-3 group-hover:from-slate-600 group-hover:to-slate-500 transition-all duration-300 transform group-hover:scale-110">
                <span className="text-white font-bold text-sm text-center">
                  {partner.logo}
                </span>
              </div>
              <span className="text-slate-400 text-xs text-center group-hover:text-slate-300 transition-colors duration-300">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        {/* Partnership CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 max-w-2xl mx-auto border border-slate-600/50">
            <h3 className="text-2xl font-bold text-white mb-4">
              Become a Partner
            </h3>
            <p className="text-slate-300 mb-6">
              Join our network of organizations committed to advancing digital transformation across Africa
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
