
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
    title: "Facial Gesture Recognition",
    description: "Control devices with simple facial expressions like smiles, blinks, and head movements using advanced computer vision.",
    color: "from-pink-500 to-rose-400"
  },
  {
    icon: Brain,
    title: "EEG Signal Control",
    description: "Direct brain-computer interface allowing thought-based control of smart home devices through neural signal processing.",
    color: "from-purple-500 to-indigo-400",
    highlight: true
  },
  {
    icon: Home,
    title: "Smart IoT Home Control",
    description: "Seamlessly manage lights, fans, temperature, and appliances through integrated IoT ecosystem.",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: Laptop,
    title: "React-Based Accessible Dashboard",
    description: "Intuitive, screen-reader compatible interface designed with WCAG accessibility standards in mind.",
    color: "from-green-500 to-emerald-400"
  },
  {
    icon: Languages,
    title: "Multilingual Voice Feedback",
    description: "Natural language support for Hindi, Tamil, English, and more with high-quality text-to-speech synthesis.",
    color: "from-orange-500 to-amber-400"
  },
  {
    icon: MessageCircle,
    title: "GPT-Powered AI Chatbot",
    description: "Intelligent conversational assistant that understands context and provides helpful responses.",
    color: "from-teal-500 to-cyan-400"
  },
  {
    icon: Camera,
    title: "AR Overlay Control",
    description: "Augmented reality interface overlay for visual control indicators and real-time device status.",
    color: "from-violet-500 to-purple-400"
  },
  {
    icon: AlertTriangle,
    title: "Emergency SMS Alert System",
    description: "Instant emergency notifications to caregivers and family members with location and status updates.",
    color: "from-red-500 to-pink-400"
  },
  {
    icon: Radio,
    title: "Live WebSocket Device Sync",
    description: "Real-time synchronization across all devices ensuring instant response and status updates.",
    color: "from-indigo-500 to-blue-400"
  },
  {
    icon: Mic,
    title: "Voice Input/Output Integration",
    description: "Comprehensive voice control with natural speech recognition and crystal-clear audio feedback.",
    color: "from-gray-500 to-slate-400"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-8 animate-fade-in">
            Innovative Features
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Cutting-Edge <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Technology</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Discover the powerful features that make NeuroBridge Home+ the most advanced assistive technology platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className={`group hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 ${
                  feature.highlight ? 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 ring-2 ring-blue-200 dark:ring-blue-400/30' : 'bg-white dark:bg-gray-800/50'
                } animate-fade-in`}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
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
