
import React from 'react';

const technologies = [
  { name: 'React', color: '#61DAFB', description: 'Frontend Framework' },
  { name: 'Flask', color: '#000000', description: 'Backend API' },
  { name: 'ESP32', color: '#E7352C', description: 'IoT Hardware' },
  { name: 'MediaPipe', color: '#4285F4', description: 'Computer Vision' },
  { name: 'MQTT', color: '#660066', description: 'IoT Communication' },
  { name: 'GPT-4o', color: '#10A37F', description: 'AI Assistant' },
  { name: 'Google TTS', color: '#4285F4', description: 'Text-to-Speech' },
  { name: 'Twilio', color: '#F22F46', description: 'SMS Services' },
  { name: 'WebRTC', color: '#333333', description: 'Real-time Communication' },
  { name: 'AR.js', color: '#FFA500', description: 'Augmented Reality' }
];

const TechStackSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-8 animate-fade-in">
            Technology Stack
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Built with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Cutting-Edge</span> Tools
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Powered by industry-leading technologies for reliability, scalability, and performance
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800/50 rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-110 border border-gray-100 dark:border-gray-700 animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div 
                className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                style={{ backgroundColor: tech.color }}
              >
                {tech.name.substring(0, 2)}
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {tech.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Architecture Diagram */}
        <div className="bg-white dark:bg-gray-800/50 rounded-3xl p-8 shadow-xl animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            System Architecture
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white font-bold text-lg">UI</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Frontend Layer</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">React Dashboard, AR Interface, Voice Control</p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white font-bold text-lg">API</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Backend Services</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Flask API, GPT Integration, Real-time Processing</p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white font-bold text-lg">IoT</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Hardware Layer</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">ESP32, Sensors, Smart Home Devices</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
