import React from 'react';

interface TimelineStepProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  isLast?: boolean;
}

const TimelineStep: React.FC<TimelineStepProps> = ({ 
  title, 
  description, 
  icon,
  isLast = false 
}) => {
  return (
    <div className="flex group">
      <div className="flex flex-col items-center mr-6">
        <div className="flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        {!isLast && (
          <div className="w-px bg-blue-200 h-full my-4"></div>
        )}
      </div>
      <div className="pb-12">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-lg leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TimelineStep;