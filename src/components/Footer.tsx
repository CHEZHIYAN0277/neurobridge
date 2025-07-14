
import React from 'react';
import { Mail, Heart, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              NeuroBridge Home+
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Empowering patients with disabilities through AI and smart home technology. 
              Making daily life easier, safer, and more independent.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Patient Resources</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#features" className="hover:text-primary transition-colors duration-300">Features</a></li>
              <li><a href="#demo" className="hover:text-primary transition-colors duration-300">Demo</a></li>
              <li><a href="#impact" className="hover:text-primary transition-colors duration-300">Benefits</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">User Guide</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Patient Support</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Setup Help</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">24/7 Support</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Training</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Contact Care Team</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 sm:mb-0">
            © 2024 NeuroBridge Home+. Designed for patients, by people who care.
          </p>
          
          <div className="flex items-center text-muted-foreground text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 mx-1 text-red-500" fill="currentColor" />
            <span>for better lives</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
