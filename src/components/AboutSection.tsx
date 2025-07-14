
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block px-6 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-8 animate-fade-in">
          Our Mission
        </div>
        
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Supporting <span className="gradient-text">Your Independence</span>
        </h2>
        
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          NeuroBridge Home+ is designed specifically for patients who want to maintain their independence at home. 
          Our simple, reliable technology lets you control your environment with natural movements, thoughts, and voice commands in your preferred language. 
          No complex setup - just easy, comfortable living that adapts to your needs.
        </p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary-foreground">💙</span>
            </div>
            <h3 className="text-lg font-semibold text-card-foreground mb-2">Patient First</h3>
            <p className="text-muted-foreground">Designed with your comfort and ease of use in mind</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary-foreground">🏠</span>
            </div>
            <h3 className="text-lg font-semibold text-card-foreground mb-2">Home Control</h3>
            <p className="text-muted-foreground">Simple connection to all your home devices</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary-foreground">🤝</span>
            </div>
            <h3 className="text-lg font-semibold text-card-foreground mb-2">Always Supported</h3>
            <p className="text-muted-foreground">24/7 care team ready to help you succeed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
