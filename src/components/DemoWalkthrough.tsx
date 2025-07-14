
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Smile, MessageCircle, Eye, Smartphone } from 'lucide-react';

const steps = [
  {
    icon: Smile,
    title: "Smile to Play Music",
    description: "User smiles at camera",
    result: "Music system activates",
    color: "from-pink-500 to-rose-400"
  },
  {
    icon: MessageCircle,
    title: "Chat to Control Fan",
    description: "Voice command to AI chatbot",
    result: "Smart fan turns on",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: Eye,
    title: "Blink for Emergency",
    description: "Double blink detected",
    result: "SMS alert sent to family",
    color: "from-red-500 to-pink-400"
  },
  {
    icon: Smartphone,
    title: "Voice Control Lights",
    description: "Multilingual voice input",
    result: "Room lighting adjusted",
    color: "from-green-500 to-emerald-400"
  }
];

const DemoWalkthrough = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-8 animate-fade-in">
            How It Works
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Experience the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Magic</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            See how users interact with NeuroBridge Home+ through simple, intuitive gestures and commands
          </p>
        </div>
        
        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
                <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 bg-white dark:bg-gray-800/50 overflow-hidden">
                  <CardContent className="p-8 text-center">
                    {/* Step Number */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {step.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                      {step.description}
                    </p>
                    
                    {/* Arrow */}
                    <div className="flex items-center justify-center mb-4">
                      <ArrowRight className="w-6 h-6 text-blue-400 animate-pulse" />
                    </div>
                    
                    {/* Result */}
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                      <p className="text-blue-700 dark:text-blue-300 font-medium text-sm">
                        {step.result}
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Connection Line (Desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-300 to-transparent transform -translate-y-1/2 z-10">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        {/* Interactive Demo Button */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Try Interactive Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default DemoWalkthrough;
