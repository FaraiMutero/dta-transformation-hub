
import React from 'react';
import Header from '../components/Header';

const About = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
              About <span className="text-transparent bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text">Digital Transformation Africa</span>
            </h1>
            
            <div className="prose prose-lg prose-invert max-w-none">
              <div className="bg-slate-800 rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-slate-300 leading-relaxed">
                  Digital Transformation Africa (DTA) is at the forefront of driving comprehensive digital transformation across the African continent. We are committed to empowering governments, organizations, and citizens through innovative digital solutions that promote sustainable development, economic growth, and social inclusion.
                </p>
              </div>

              <div className="bg-slate-800 rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
                <p className="text-slate-300 leading-relaxed">
                  To create a digitally connected Africa where every citizen has access to efficient, transparent, and inclusive digital services that enhance their quality of life and contribute to the continent's prosperity.
                </p>
                <br/>
                <p className="text-slate-300 leading-relaxed">
                By adhering to GovStack's modular approach and other e-government frameworks, DTA enables governments to design systems that prioritize interoperability, scalability, and affordability. This ensures that digital services can be tailored to meet the unique needs of different regions, without the constraints of legacy systems. Through deploying foundational building blocks, such as digital identity, payment systems, and registries, DTA helps governments create robust platforms that streamline administrative processes and enhance service delivery.
                </p>
                <br/>
                <p className="text-slate-300 leading-relaxed">
                At the heart of DTA’s vision lies the belief that technology is a powerful equalizer, capable of bridging gaps in access to education, healthcare, and economic opportunities. By partnering with local governments, international organizations, and private institutions, DTA envisions creating ecosystems where digital services transcend boundaries and deliver meaningful impact to even the most remote communities.
                </p>
              </div>

              <div className="bg-slate-800 rounded-xl p-8" style={{ display: 'none' }}>
                <h2 className="text-2xl font-bold text-white mb-4">Leadership Team</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-slate-700 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">Dr. Amina Kone</h3>
                    <p className="text-orange-400 mb-3">Chief Executive Officer</p>
                    <p className="text-slate-300 text-sm">Leading digital transformation initiatives across 15+ African countries with over 20 years of experience in technology and governance.</p>
                  </div>
                  <div className="bg-slate-700 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">Prof. Kwame Asante</h3>
                    <p className="text-orange-400 mb-3">Chief Technology Officer</p>
                    <p className="text-slate-300 text-sm">Expert in digital infrastructure development with extensive experience in building scalable digital public infrastructure solutions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
