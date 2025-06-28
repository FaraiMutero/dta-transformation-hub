
import React from 'react';
import Hero from '../components/Hero';
import ServicesOverview from '../components/ServicesOverview';
import NewsEvents from '../components/NewsEvents';
import Partners from '../components/Partners';
import Stats from '../components/Stats';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Hero />
      <Stats />
      <ServicesOverview />
      <NewsEvents />
      <Partners />
    </div>
  );
};

export default Index;
