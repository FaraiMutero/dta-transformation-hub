
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Network, Database, Shield } from 'lucide-react';

const ServicesOverview = () => {
  const services = [
    {
      icon: Users,
      title: 'Digital Identity Systems',
      description: 'Comprehensive digital ID solutions enabling secure citizen identification and authentication across government services.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Network,
      title: 'Digital Public Infrastructure',
      description: 'Building robust, interoperable digital foundations that connect governments, citizens, and businesses seamlessly.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Database,
      title: 'E-Government Platforms',
      description: 'Modernizing public service delivery through integrated digital platforms and citizen-centric solutions.',
      color: 'from-orange-500 to-amber-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity & Governance',
      description: 'Ensuring secure, transparent, and accountable digital transformation with robust cybersecurity frameworks.',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Core
            <span className="text-transparent bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text"> Expertise</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Transforming African governments through comprehensive digital solutions 
            that enhance service delivery, promote transparency, and drive inclusive economic growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 hover:from-slate-700 hover:to-slate-600 transition-all duration-500 transform group-hover:scale-105 group-hover:shadow-2xl border border-slate-600/50">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-amber-300 group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                {/* Learn More Link */}
                <div className="flex items-center text-orange-400 font-semibold group-hover:text-amber-300 transition-colors duration-300">
                  <span className="mr-2">Learn More</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
