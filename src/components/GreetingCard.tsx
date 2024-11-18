import React, { useState, useEffect } from 'react';
import { Envelope } from './Envelope';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const greetings = [
  {
    title: "Merry Christmas, My Love!",
    message: "Every snowflake reminds me of the unique love we share ❄️",
    style: "from-red-300 to-white"
  },
  {
    title: "To My Special Someone",
    message: "Like strings in our code, our hearts are forever intertwined 💝",
    style: "from-pink-300 to-red-300"
  },
  {
    title: "Happy Holidays, Darling",
    message: "You're the perfect match to my function calls 💫",
    style: "from-rose-300 to-pink-300"
  },
  {
    title: "Season's Greetings!",
    message: "Together we debug life's challenges and compile beautiful memories ✨",
    style: "from-red-400 to-rose-300"
  }
];

export function GreetingCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentGreeting, setCurrentGreeting] = useState(0);

  const nextGreeting = () => {
    setCurrentGreeting((prev) => (prev + 1) % greetings.length);
  };

  const prevGreeting = () => {
    setCurrentGreeting((prev) => (prev - 1 + greetings.length) % greetings.length);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-3xl w-full flex flex-col items-center">
        <Envelope onOpen={() => setIsOpen(true)} isOpen={isOpen} />
        
        <div 
          className={`mt-8 transition-all duration-700 ${
            isOpen ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-20'
          }`}
        >
          {isOpen && (
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20">
              <h1 className={`text-4xl md:text-6xl font-bold mb-8 text-center bg-gradient-to-r ${greetings[currentGreeting].style} bg-clip-text text-transparent`}>
                {greetings[currentGreeting].title}
              </h1>
              
              <div className="h-32 flex items-center justify-center relative">
                <button 
                  onClick={prevGreeting}
                  className="absolute left-0 text-white/70 hover:text-white transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <p className="text-xl md:text-2xl text-center text-white/90 transition-opacity duration-500 animate-fade-in px-12">
                  {greetings[currentGreeting].message}
                </p>
                
                <button 
                  onClick={nextGreeting}
                  className="absolute right-0 text-white/70 hover:text-white transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              <div className="mt-8 flex justify-center space-x-2">
                {greetings.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      currentGreeting === index ? 'bg-red-500' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}