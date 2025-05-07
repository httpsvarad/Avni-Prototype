import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  organization: string;
  avatar: string;
}

const ImpactStories: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "This platform has transformed how our field staff collect and use data. We've been able to reach 40% more beneficiaries with the same team size.",
      author: "Sarah Johnson",
      role: "Program Director",
      organization: "Global Health Partners",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      id: 2,
      quote: "The mobile forms with offline capabilities have been a game-changer for our rural vaccination programs. We're seeing faster reporting and fewer errors.",
      author: "Michael Chen",
      role: "Field Coordinator",
      organization: "Community Health Initiative",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      id: 3,
      quote: "Being able to visualize our impact data in real-time dashboards has improved our decision-making and helped us secure additional funding.",
      author: "Priya Sharma",
      role: "Impact Assessment Lead",
      organization: "Rural Development Trust",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((current) => 
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((current) => 
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section id="impact" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Impact Stories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how organizations like yours are transforming their field operations.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-xl shadow-md p-8 md:p-10">
            <div className="absolute top-6 left-10 text-blue-500 opacity-30">
              <Quote size={60} />
            </div>
            
            <div className="relative z-10">
              <p className="text-xl md:text-2xl text-gray-700 mb-8 italic">
                "{testimonials[activeIndex].quote}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonials[activeIndex].avatar} 
                  alt={testimonials[activeIndex].author} 
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonials[activeIndex].author}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[activeIndex].role}, {testimonials[activeIndex].organization}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-white shadow-md hover:bg-blue-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-white shadow-md hover:bg-blue-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStories;