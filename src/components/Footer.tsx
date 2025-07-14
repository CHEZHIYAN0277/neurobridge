
import React from 'react';
import { Github, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              NeuroBridge Home+
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Empowering disabled lives through AI, IoT, and voice technology. 
              Building bridges between people and technology for a more inclusive world.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-blue-400">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#features" className="hover:text-blue-400 transition-colors duration-300">Features</a></li>
              <li><a href="#demo" className="hover:text-blue-400 transition-colors duration-300">Demo</a></li>
              <li><a href="#tech" className="hover:text-blue-400 transition-colors duration-300">Technology</a></li>
              <li><a href="#impact" className="hover:text-blue-400 transition-colors duration-300">Impact</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-blue-400">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Documentation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">API Reference</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Community</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 sm:mb-0">
            © 2024 NeuroBridge Home+. Built with accessibility in mind.
          </p>
          
          <div className="flex items-center text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 mx-1 text-red-500" fill="currentColor" />
            <span>for accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
