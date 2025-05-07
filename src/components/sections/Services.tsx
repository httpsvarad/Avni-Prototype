import React from 'react';
import { Cloud, Settings, Headphones, Database } from 'lucide-react';
import ServiceCard from '../ui/ServiceCard';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Cloud Hosting',
      description: 'Secure, affordable, with full control of your data.',
      icon: <Cloud className="h-8 w-8 text-blue-600" />,
    },
    {
      id: 2,
      title: 'Customisation',
      description: 'Tailor the platform to your program\'s unique needs.',
      icon: <Settings className="h-8 w-8 text-green-600" />,
    },
    {
      id: 3,
      title: 'Training & Support',
      description: 'Learn to customize it yourself. Ongoing technical assistance.',
      icon: <Headphones className="h-8 w-8 text-purple-600" />,
    },
    {
      id: 4,
      title: 'Data Migration & Integration',
      description: 'Bring your existing data. Connect with other tools.',
      icon: <Database className="h-8 w-8 text-red-600" />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">All-In-One Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to successfully implement and maintain your digital platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;