
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ServicesOverview from '../components/ServicesOverview';
import NewsEvents from '../components/NewsEvents';
import Partners from '../components/Partners';
import Stats from '../components/Stats';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <Hero />
      <Stats />
      <ServicesOverview />
      <Partners />
      <Footer />
    </div>  
  );
};

export default Index;
