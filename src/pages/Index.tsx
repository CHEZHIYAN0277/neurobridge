
import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FeaturesSection from '../components/FeaturesSection';
import DemoWalkthrough from '../components/DemoWalkthrough';

import ImpactSection from '../components/ImpactSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import DarkModeToggle from '../components/DarkModeToggle';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-accent/20 via-background to-primary/10 dark:from-gray-900 dark:via-gray-800 dark:to-primary/5 transition-colors duration-300">
      <DarkModeToggle />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <DemoWalkthrough />
      <ImpactSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
