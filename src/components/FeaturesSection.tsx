
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Smile, 
  Brain, 
  Home, 
  Laptop, 
  Languages, 
  MessageCircle, 
  Camera, 
  AlertTriangle, 
  Radio, 
  Mic 
} from 'lucide-react';

const features = [
  {
    icon: Smile,
    title: "Simple Smile Control",
    description: "Control your home devices with just a smile - turn on lights, music, or call for help with natural facial expressions.",
    color: "from-blue-500 to-blue-400"
  },
  {
    icon: Brain,
    title: "Thought-Based Control",
    description: "Use your thoughts to control devices around you - no physical movement needed, just think and it happens.",
    color: "from-blue-600 to-blue-500",
    highlight: true
  },
  {
    icon: Home,
    title: "Complete Home Control",
    description: "Manage every aspect of your home environment - lighting, temperature, entertainment, and security systems.",
    color: "from-blue-500 to-blue-400"
  },
  {
    icon: Laptop,
    title: "Easy-to-Use Dashboard",
    description: "Simple, clear interface designed specifically for patients with large buttons and easy navigation.",
    color: "from-blue-500 to-blue-400"
  },
  {
    icon: Languages,
    title: "Speaks Your Language",
    description: "Communicate in your preferred language - Hindi, Tamil, English, and more with clear voice responses.",
    color: "from-blue-500 to-blue-400"
  },
  {
    icon: MessageCircle,
    title: "AI Health Assistant",
    description: "Get instant answers to health questions and receive medication reminders from your personal AI assistant.",
    color: "from-blue-500 to-blue-400"
  },
  {
    icon: Camera,
    title: "Visual Status Display",
    description: "See the status of all your devices clearly with visual indicators and easy-to-understand displays.",
    color: "from-blue-500 to-blue-400"
  },
  {
    icon: AlertTriangle,
    title: "Emergency Help System",
    description: "Instantly alert family members and caregivers in case of emergency with one simple gesture or thought.",
    color: "from-red-500 to-red-400"
  },
  {
    icon: Radio,
    title: "Always Connected",
    description: "Stay connected to all your devices with reliable, instant communication that works 24/7.",
    color: "from-blue-500 to-blue-400"
  },
  {
    icon: Mic,
    title: "Voice Communication",
    description: "Talk naturally to control your environment or communicate with others using clear voice commands.",
    color: "from-blue-500 to-blue-400"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 medical-gradient">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-8 animate-fade-in">
            Patient-Focused Features
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Designed for <span className="gradient-text">Your Comfort</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Every feature is designed with patients in mind - simple, reliable, and focused on improving your daily life
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
                <Card 
                key={index} 
                className={`healthcare-card group hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                  feature.highlight ? 'ring-2 ring-primary/30 bg-primary/5' : ''
                } animate-fade-in`}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
