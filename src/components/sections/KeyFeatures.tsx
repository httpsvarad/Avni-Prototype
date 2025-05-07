import React from 'react';
import { Users, ClipboardList, LineChart, Calendar } from 'lucide-react';
import FeatureCard from '../ui/FeatureCard';

const KeyFeatures: React.FC = () => {
  const features = [
    {
      id: 1,
      title: 'Case Management',
      description: 'Track individuals, families, households, and groups with custom data models.',
      icon: <Users className="h-10 w-10 text-blue-600" />,
    },
    {
      id: 2,
      title: 'Form Designer',
      description: 'Build rich data collection forms with algorithmic decision logic.',
      icon: <ClipboardList className="h-10 w-10 text-green-600" />,
    },
    {
      id: 3,
      title: 'Reports & Dashboards',
      description: 'Visualize your program data and make informed decisions.',
      icon: <LineChart className="h-10 w-10 text-purple-600" />,
    },
    {
      id: 4,
      title: 'Fieldwork Diary',
      description: 'Ensure your field staff never miss an activity or client interaction.',
      icon: <Calendar className="h-10 w-10 text-red-600" />,
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful tools designed specifically for the unique needs of social impact organizations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;