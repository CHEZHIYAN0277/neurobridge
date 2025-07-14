
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Mail } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 medical-gradient">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block px-6 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-8 animate-fade-in">
          Get Started Today
        </div>
        
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Ready to <span className="gradient-text">Improve Your Life?</span>
        </h2>
        
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Take the first step towards a more independent and comfortable lifestyle. 
          Our team is here to help you every step of the way.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button variant="outline" size="lg" className="border-2 border-primary/30 text-primary hover:bg-primary/10 px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105">
            <Heart className="mr-2 h-5 w-5" />
            Contact Our Care Team
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="healthcare-card group">
            <Heart className="w-8 h-8 text-primary group-hover:scale-110 mb-4 transition-all duration-300" />
            <h3 className="font-semibold text-card-foreground mb-2">Patient Support</h3>
            <p className="text-muted-foreground text-sm">
              Dedicated support team available to help you with setup and daily use
            </p>
          </div>
          
          <div className="healthcare-card group">
            <Mail className="w-8 h-8 text-primary group-hover:scale-110 mb-4 transition-all duration-300" />
            <h3 className="font-semibold text-card-foreground mb-2">Get in Touch</h3>
            <p className="text-muted-foreground text-sm">
              Have questions about how NeuroBridge can help you? We're here to listen
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
