
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Zap, Clock } from 'lucide-react';

const stats = [
  {
    icon: Users,
    number: "60M+",
    label: "Speech Impaired Worldwide",
    description: "People who can benefit from our technology",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: Zap,
    number: "100%",
    label: "Offline Control",
    description: "Complete functionality without internet dependency",
    color: "from-green-500 to-emerald-400"
  },
  {
    icon: Clock,
    number: "10x",
    label: "Faster Home Access",
    description: "Compared to traditional assistive devices",
    color: "from-purple-500 to-indigo-400"
  }
];

const ImpactSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-indigo-900/50"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-indigo-400/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-400/10 rounded-full blur-xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm text-blue-200 rounded-full text-sm font-medium mb-8 animate-fade-in">
            Global Impact
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-bold mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            AI for Accessibility,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
              Inclusion, and Empowerment
            </span>
          </h2>
          
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Breaking barriers and creating opportunities for millions of people worldwide through innovative assistive technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card 
                key={index} 
                className="group bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-4xl sm:text-5xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors duration-300">
                    {stat.number}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-blue-200 mb-3">
                    {stat.label}
                  </h3>
                  
                  <p className="text-blue-300 leading-relaxed">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Quote Section */}
        <div className="text-center bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <blockquote className="text-2xl sm:text-3xl font-light text-blue-100 leading-relaxed mb-6">
            "Technology should be a bridge, not a barrier. NeuroBridge Home+ transforms how we think about accessibility, 
            making smart homes truly inclusive for everyone."
          </blockquote>
          <cite className="text-blue-300 font-medium">
            — The NeuroBridge Team
          </cite>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
