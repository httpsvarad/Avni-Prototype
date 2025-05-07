import React from 'react';
import { CheckCircle } from 'lucide-react';

const WhyPlatform: React.FC = () => {
  const benefits = [
    'Open-source and community-driven',
    'Cost-effective compared to custom development',
    'Scales with your organization',
    'Data ownership and privacy by design',
    'Regular updates and improvements',
    'Supports offline field operations',
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sustainable. Scalable. Shared.
            </h2>
            <div className="w-24 h-1 bg-green-400 mx-auto mb-8"></div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <p className="text-xl mb-6 leading-relaxed">
                Building your own data system can be costly and hard to maintain. This platform offers a ready-made, flexible solution that evolves with your needs — all while staying open-source and community-driven.
              </p>
              
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">
                  Join our community of impact
                </h3>
                <p className="mb-6">
                  Over 200 organizations across 40 countries are using this platform to manage their field programs more effectively.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Health</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Education</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Agriculture</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Microfinance</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Disaster Response</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Community Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPlatform;