
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block px-6 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-8 animate-fade-in">
          Our Mission
        </div>
        
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Bridging Technology & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Accessibility</span>
        </h2>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          NeuroBridge Home+ revolutionizes smart home accessibility by seamlessly integrating cutting-edge AI, IoT devices, and intuitive interfaces. 
          Our mission is to empower individuals with disabilities through innovative technology that responds to gestures, brain signals, and 
          multilingual voice commands, creating truly inclusive living environments where everyone can control their space with dignity and independence.
        </p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">AI</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Intelligent Control</h3>
            <p className="text-gray-600 dark:text-gray-400">Advanced AI understanding for natural interaction</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">IoT</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Smart Integration</h3>
            <p className="text-gray-600 dark:text-gray-400">Seamless connectivity with home devices</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">♿</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Universal Access</h3>
            <p className="text-gray-600 dark:text-gray-400">Designed for everyone, especially those who need it most</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
