import React from 'react';
import TimelineStep from '../ui/TimelineStep';
import { Video, Settings, Users, Rocket } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: 'Book a Demo / Consultation',
      description: 'Tell us about your program and your team\'s technical capacity.',
      icon: <Video className="h-6 w-6 text-white" />,
    },
    {
      id: 2,
      title: 'Choose the Services You Need',
      description: 'DIY or full-service customization — you decide.',
      icon: <Settings className="h-6 w-6 text-white" />,
    },
    {
      id: 3,
      title: 'Co-Create the Platform',
      description: 'Work alongside our experts and get trained along the way.',
      icon: <Users className="h-6 w-6 text-white" />,
    },
    {
      id: 4,
      title: 'Launch & Scale',
      description: 'Go live, go digital, and transform your fieldwork.',
      icon: <Rocket className="h-6 w-6 text-white" />,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2 block">Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your journey to digital transformation made simple and effective.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-0 bottom-0 left-[27px] w-px bg-gradient-to-b from-blue-600/20 to-transparent"></div>
          {steps.map((step, index) => (
            <TimelineStep
              key={step.id}
              title={step.title}
              description={step.description}
              icon={step.icon}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;