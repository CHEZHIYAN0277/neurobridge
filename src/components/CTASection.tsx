
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Mail, Users } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block px-6 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-8 animate-fade-in">
          Join the Revolution
        </div>
        
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Ready to Transform <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Accessibility?</span>
        </h2>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Join us in building the future of assistive technology. Whether you're a developer, researcher, or advocate, 
          there's a place for you in the NeuroBridge community.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button variant="outline" size="lg" className="border-2 border-blue-300 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/20 px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105">
            <Users className="mr-2 h-5 w-5" />
            Contact for Collaboration
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
            <Github className="w-8 h-8 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-4 transition-colors duration-300" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Open Source</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Contribute to our GitHub repository and help improve accessibility for everyone
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
            <Mail className="w-8 h-8 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-4 transition-colors duration-300" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Get in Touch</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Have questions or want to collaborate? We'd love to hear from you
            </p>
          </div>
        </div>
        
        {/* Social Share */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Share NeuroBridge Home+</p>
          <div className="flex justify-center space-x-4">
            <button className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors duration-300">
              <span className="text-sm font-bold">f</span>
            </button>
            <button className="w-10 h-10 bg-blue-400 hover:bg-blue-500 text-white rounded-full flex items-center justify-center transition-colors duration-300">
              <span className="text-sm font-bold">t</span>
            </button>
            <button className="w-10 h-10 bg-blue-700 hover:bg-blue-800 text-white rounded-full flex items-center justify-center transition-colors duration-300">
              <span className="text-sm font-bold">in</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
