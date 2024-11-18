import React from 'react';
import { Code } from 'lucide-react';
import { Terminal } from './Terminal';

export function Hero() {
  return (
    <div className="relative pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block">
          <Code className="h-20 w-20 text-green-400 mx-auto mb-8 animate-pulse" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          {'<Christmas />'}
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 font-mono">
          $ echo "Merry Christmas, Fellow Developers! 🎄"
        </p>
        <Terminal 
          command="git status"
          output="On branch master
Your tree is up to date with 'origin/christmas'
Changes to be committed:
  🎁 new file: presents.js
  🎄 modified: happiness.css
  ✨ deleted: bugs.js"
        />
      </div>
    </div>
  );
}