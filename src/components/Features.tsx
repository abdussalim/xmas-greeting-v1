import React from 'react';
import { Code, Gift, Heart } from 'lucide-react';

const features = [
  {
    icon: <Code className="h-8 w-8 text-green-400" />,
    title: "Bug-Free Holidays",
    description: "May your code be bug-free and your commits be merry"
  },
  {
    icon: <Gift className="h-8 w-8 text-red-400" />,
    title: "Git Push Presents",
    description: "Pushing joy and pulling happiness this season"
  },
  {
    icon: <Heart className="h-8 w-8 text-pink-400" />,
    title: "Compile With Love",
    description: "Building memories with every deployment"
  }
];

export function Features() {
  return (
    <div className="py-16 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-900/50 p-6 rounded-lg hover:transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 font-mono">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}