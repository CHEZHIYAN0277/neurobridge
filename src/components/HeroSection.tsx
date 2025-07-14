
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight, Brain, Home, Mic } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-blue-200/30 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-40 right-20 w-8 h-8 bg-blue-300/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-20 w-12 h-12 bg-blue-100/40 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="text-center lg:text-left space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
              <span className="block">NeuroBridge</span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                Home+
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 font-light max-w-2xl">
              Empowering Disabled Lives with AI, IoT, and Voice
            </p>
            
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl">
              Revolutionary assistive technology that transforms smart homes through gestures, brain signals, and multilingual AI assistance.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Explore Features
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button variant="outline" size="lg" className="border-2 border-blue-300 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/20 px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </div>
        
        {/* Illustration */}
        <div className="relative flex justify-center items-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="relative w-96 h-96 sm:w-[500px] sm:h-[500px]">
            {/* Central Brain Icon */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
              <Brain className="w-16 h-16 text-white" />
            </div>
            
            {/* Orbiting Elements */}
            <div className="absolute top-8 right-8 w-20 h-20 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex items-center justify-center animate-pulse">
              <Home className="w-10 h-10 text-blue-500" />
            </div>
            
            <div className="absolute bottom-8 left-8 w-20 h-20 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex items-center justify-center animate-pulse" style={{ animationDelay: '0.5s' }}>
              <Mic className="w-10 h-10 text-blue-500" />
            </div>
            
            <div className="absolute top-20 left-4 w-16 h-16 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full flex items-center justify-center animate-bounce">
              <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
            </div>
            
            <div className="absolute bottom-20 right-4 w-16 h-16 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '1s' }}>
              <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
            </div>
            
            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 500">
              <defs>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#1E40AF" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <path d="M250,250 L400,100" stroke="url(#connectionGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
              <path d="M250,250 L100,400" stroke="url(#connectionGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
              <path d="M250,250 L80,150" stroke="url(#connectionGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
              <path d="M250,250 L420,350" stroke="url(#connectionGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
