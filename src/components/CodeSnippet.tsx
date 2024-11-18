import React from 'react';
import { Terminal } from './Terminal';

export function CodeSnippet() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Terminal
          command="node spread-joy.js"
          output={`const christmas = {
  date: '2023-12-25',
  mood: '🎄 Festive',
  caffeine: '☕️ Unlimited',
  bugs: null,
  wishes: ['Peace', 'Joy', 'Clean Code']
};

spreadJoy(...christmas.wishes);
// Output: Spreading Peace, Joy, and Clean Code to all developers!`}
        />
      </div>
    </div>
  );
}