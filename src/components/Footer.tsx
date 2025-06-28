import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-6 border-t border-slate-700/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Description */}
          <div className="mb-4 md:mb-0">
            <Link to="/" className="flex items-center">
              <div className="text-2xl font-bold">
                <span className="text-transparent bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text">
                  DTA
                </span>
              </div>
              <div className="ml-2 text-sm font-medium hidden sm:block">
                Digital Transformation Africa
              </div>
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              Empowering Africa through digital transformation.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <Link to="/about" className="hover:text-orange-400 transition-colors">
              About Us
            </Link>
            <Link to="/our-work" className="hover:text-orange-400 transition-colors">
              Our Work
            </Link>
            <Link to="/resources" className="hover:text-orange-400 transition-colors">
              Resources
            </Link>
            <Link to="/news-events" className="hover:text-orange-400 transition-colors">
              News & Events
            </Link>
            <Link to="/contact" className="hover:text-orange-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Digital Transformation Africa. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;