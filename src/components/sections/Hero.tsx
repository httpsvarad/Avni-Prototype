import React from 'react';
import { ArrowRight, Database } from 'lucide-react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen pt-28 pb-20 md:pt-32 md:pb-28 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] -top-40 -right-20 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute w-[500px] h-[500px] top-40 -left-40 bg-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6">
              <Database className="w-4 h-4" />
              Empowering NGOs with Digital Solutions
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-100 mb-8 leading-tight animate-fade-in-up animation-delay-150">
            Digitize Your Field Programs with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Ease
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed animate-fade-in-up animation-delay-300">
            A powerful open-source platform built for NGOs and social impact organizations.
            Transform your field operations with our comprehensive digital solution.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-450">
            <Button 
              variant="primary" 
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300"
            >
              Schedule a Demo
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transform hover:-translate-y-1 transition-all duration-300"
            >
              Explore Features <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-20 text-white/80">
            <div>
              <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">200+</div>
              <div className="text-sm">Organizations</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">40+</div>
              <div className="text-sm">Countries</div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">100K+</div>
              <div className="text-sm">Beneficiaries Reached</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave shape divider */}
      {/* <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path 
            fill="#F9FAFB" 
            fillOpacity="1" 
            d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,42.7C840,32,960,32,1080,37.3C1200,43,1320,53,1380,58.7L1440,64L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"
          ></path>
        </svg>
      </div> */}
      
    </section>
  );
};

export default Hero;