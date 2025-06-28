
import React from 'react';
import Header from '../components/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const OurWork = () => {
  const projects = [
    {
      title: "National Digital Identity Platform - Ghana",
      category: "Digital ID",
      description: "Comprehensive digital identity system serving 15 million citizens with secure, interoperable credentials and seamless government service integration.",
      impact: "15M+ citizens registered",
      status: "Live"
    },
    {
      title: "E-Government Services Portal - Kenya",
      category: "E-Government",
      description: "Unified digital platform providing access to 200+ government services, reducing bureaucracy and improving citizen experience.",
      impact: "90% digital adoption rate",
      status: "Live"
    },
    {
      title: "Digital Public Infrastructure Framework",
      category: "DPI",
      description: "Continental framework for building interoperable digital infrastructure across African Union member states.",
      impact: "54 countries aligned",
      status: "Implementation"
    },
    {
      title: "Cross-Border Payment System",
      category: "Interoperability",
      description: "Seamless payment integration across West African Economic Community (ECOWAS) member states.",
      impact: "15 countries connected",
      status: "Pilot"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
              Our <span className="text-transparent bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text">Work</span>
            </h1>
            
            <p className="text-xl text-slate-300 text-center mb-12 max-w-3xl mx-auto">
              Transforming Africa through innovative digital solutions that empower governments and citizens across the continent.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="bg-slate-800 border-slate-700">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {project.category}
                      </span>
                      <span className="text-green-400 text-sm font-medium">{project.status}</span>
                    </div>
                    <CardTitle className="text-white">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-300 mb-4">
                      {project.description}
                    </CardDescription>
                    <div className="text-orange-400 font-semibold">
                      Impact: {project.impact}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
