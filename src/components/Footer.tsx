import React from 'react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="absolute bottom-0 w-full py-6 text-center text-white/70">
      <p className="flex items-center justify-center gap-2 text-sm">
        Made with <Heart className="w-4 h-4 text-red-500" fill="currentColor" /> for you
      </p>
    </footer>
  );
}