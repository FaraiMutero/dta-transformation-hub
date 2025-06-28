
import React from 'react';
import Header from '../components/Header';
import { Button } from '@/components/ui/button';
import { Download, FileText, BookOpen } from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      title: "Digital Africa 2030 Framework",
      type: "Policy Document",
      description: "Comprehensive framework for digital transformation across African Union member states.",
      size: "2.4 MB",
      icon: FileText
    },
    {
      title: "DPI Implementation Guide",
      type: "Technical Guide",
      description: "Step-by-step guide for implementing Digital Public Infrastructure in developing nations.",
      size: "1.8 MB",
      icon: BookOpen
    },
    {
      title: "Interoperability Standards",
      type: "Technical Specification",
      description: "Technical standards for ensuring cross-border digital service interoperability.",
      size: "956 KB",
      icon: FileText
    },
    {
      title: "Digital Identity Best Practices",
      type: "White Paper",
      description: "Best practices and lessons learned from national digital identity implementations.",
      size: "1.2 MB",
      icon: BookOpen
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
              <span className="text-transparent bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text">Resources</span>
            </h1>
            
            <p className="text-xl text-slate-300 text-center mb-12">
              Access our comprehensive library of guides, frameworks, and research to support your digital transformation journey.
            </p>

            <div className="space-y-6">
              {resources.map((resource, index) => (
                <div key={index} className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-colors duration-300">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-3 rounded-lg">
                        <resource.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">{resource.title}</h3>
                        <p className="text-orange-400 text-sm font-medium mb-2">{resource.type}</p>
                        <p className="text-slate-300 mb-3">{resource.description}</p>
                        <p className="text-slate-400 text-sm">Size: {resource.size}</p>
                      </div>
                    </div>
                    <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-700">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
