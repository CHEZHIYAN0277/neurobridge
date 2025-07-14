
import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FeaturesSection from '../components/FeaturesSection';
import DemoWalkthrough from '../components/DemoWalkthrough';
import TechStackSection from '../components/TechStackSection';
import ImpactSection from '../components/ImpactSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import DarkModeToggle from '../components/DarkModeToggle';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <DarkModeToggle />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <DemoWalkthrough />
      <TechStackSection />
      <ImpactSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
