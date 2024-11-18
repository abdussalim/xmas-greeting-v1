import React, { useState } from 'react';
import { Mail, Heart } from 'lucide-react';

interface EnvelopeProps {
  onOpen: () => void;
  isOpen: boolean;
}

export function Envelope({ onOpen, isOpen }: EnvelopeProps) {
  return (
    <div 
      className={`relative cursor-pointer transform transition-transform duration-700 ${
        isOpen ? 'scale-150 translate-y-[-100px]' : 'hover:scale-105'
      }`}
      onClick={onOpen}
    >
      {/* Envelope body */}
      <div className="w-80 h-48 bg-red-600 rounded-lg shadow-xl relative overflow-hidden">
        {/* Envelope flap */}
        <div 
          className={`absolute top-0 left-0 w-full h-24 bg-red-700 origin-top transition-transform duration-700 z-20 ${
            isOpen ? 'rotate-180' : ''
          }`}
          style={{
            clipPath: 'polygon(0 0, 50% 50%, 100% 0)'
          }}
        />
        
        {/* Envelope inside */}
        <div className="absolute inset-2 bg-white/10 rounded flex items-center justify-center">
          {!isOpen && (
            <div className="flex flex-col items-center gap-2 text-white/90">
              <Mail className="w-8 h-8 animate-bounce" />
              <p className="text-sm font-medium">Click to Open</p>
            </div>
          )}
        </div>

        {/* Heart decoration */}
        <Heart 
          className="absolute top-4 right-4 w-6 h-6 text-pink-300"
          fill="currentColor"
        />
      </div>
    </div>
  );
}