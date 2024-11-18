import React from 'react';
import { Heart } from 'lucide-react';

export function HeartBeat() {
  return (
    <div className="absolute top-10 left-1/2 -translate-x-1/2">
      <Heart className="w-16 h-16 text-red-500 animate-pulse" fill="currentColor" />
    </div>
  );
}