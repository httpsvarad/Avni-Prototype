import React, { useState, useEffect } from 'react';
import { Menu, X, Database } from 'lucide-react';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* <Database className="h-8 w-8 text-yellow-500" /> */}
          <span className="text-xl font-bold text-blue-500">Logo</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className={`${isScrolled ? 'text-blue-500' : 'text-white'} transition-colors`}>Features</a>
          <a href="#services" className={`${isScrolled ? 'text-blue-500' : 'text-white'} transition-colors`}>Services</a>
          <a href="#how-it-works" className={`${isScrolled ? 'text-blue-500' : 'text-white'} transition-colors`}>How it Works</a>
          <a href="#impact" className={`${isScrolled ? 'text-blue-500' : 'text-white'} transition-colors`}>Impact</a>
          <Button variant="primary" className="ml-4">Schedule a Demo</Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4">
          <div className="container mx-auto px-4 flex flex-col gap-4">
            <a 
              href="#features" 
              className="text-gray-700 hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#services" 
              className="text-gray-700 hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#how-it-works" 
              className="text-gray-700 hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              How it Works
            </a>
            <a 
              href="#impact" 
              className="text-gray-700 hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Impact
            </a>
            <Button 
              variant="primary" 
              className="mt-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;