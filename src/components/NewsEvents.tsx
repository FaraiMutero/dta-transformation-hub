
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const NewsEvents = () => {
  const newsItems = [
    {
      category: 'Digital ID',
      title: 'Ghana Launches National Digital Identity Platform',
      excerpt: 'Revolutionary digital identity system now serves 15 million citizens with secure, interoperable credentials.',
      date: '2024-06-15',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop'
    },
    {
      category: 'E-Government',
      title: 'Kenya Achieves 90% Digital Service Adoption',
      excerpt: 'Comprehensive e-government platform transforms citizen experience across 200+ government services.',
      date: '2024-06-10',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop'
    },
    {
      category: 'Policy',
      title: 'AU Summit: Digital Africa 2030 Framework',
      excerpt: 'Continental framework for digital transformation adopted by 54 African Union member states.',
      date: '2024-06-05',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop'
    }
  ];

  const upcomingEvents = [
    {
      date: '2024-07-15',
      title: 'Digital Africa Summit 2024',
      location: 'Kigali, Rwanda',
      type: 'Conference'
    },
    {
      date: '2024-08-20',
      title: 'DPI Implementation Workshop',
      location: 'Lagos, Nigeria',
      type: 'Workshop'
    },
    {
      date: '2024-09-10',
      title: 'Cybersecurity Policy Forum',
      location: 'Cape Town, South Africa',
      type: 'Forum'
    }
  ];

  return (
    <section className="py-24 bg-slate-800">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Latest
            <span className="text-transparent bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text"> Insights</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Stay informed with the latest developments in Africa's digital transformation journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* News Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <div className="w-1 h-8 bg-gradient-to-b from-orange-400 to-amber-300 rounded-full mr-4"></div>
              Latest News
            </h3>
            
            <div className="space-y-8">
              {newsItems.map((item, index) => (
                <article key={index} className="group">
                  <div className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl overflow-hidden hover:from-slate-600 hover:to-slate-500 transition-all duration-300 transform group-hover:scale-[1.02]">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center mb-3">
                          <span className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                            {item.category}
                          </span>
                          <div className="flex items-center text-slate-400 text-sm ml-4">
                            <Clock className="h-4 w-4 mr-1" />
                            {item.readTime}
                          </div>
                        </div>
                        
                        <h4 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-amber-300 group-hover:bg-clip-text transition-all duration-300">
                          {item.title}
                        </h4>
                        
                        <p className="text-slate-300 mb-4 leading-relaxed">
                          {item.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400 text-sm">
                            {new Date(item.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </span>
                          <div className="flex items-center text-orange-400 font-semibold group-hover:text-amber-300 transition-colors duration-300">
                            <span className="mr-2">Read More</span>
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Events Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <div className="w-1 h-8 bg-gradient-to-b from-green-400 to-blue-400 rounded-full mr-4"></div>
              Upcoming Events
            </h3>
            
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-xl p-6 hover:from-slate-600 hover:to-slate-500 transition-all duration-300 transform group-hover:scale-105">
                    <div className="flex items-start mb-4">
                      <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-lg p-3 mr-4 group-hover:scale-110 transition-transform duration-300">
                        <Calendar className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <span className="text-green-400 text-sm font-semibold">
                          {event.type}
                        </span>
                        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                          {event.title}
                        </h4>
                      </div>
                    </div>
                    
                    <div className="text-slate-300 text-sm space-y-1">
                      <div>📍 {event.location}</div>
                      <div>📅 {new Date(event.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              variant="outline" 
              className="w-full mt-8 border-slate-600 text-white hover:bg-slate-700 transition-all duration-300"
            >
              View All Events
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
