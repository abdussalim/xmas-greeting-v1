import React from 'react';
import { SnowfallEffect } from './components/SnowfallEffect';
import { GreetingCard } from './components/GreetingCard';
import { HeartBeat } from './components/HeartBeat';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-red-900/20 to-gray-900 text-white relative overflow-hidden">
      <SnowfallEffect />
      <div className="relative z-10">
        <HeartBeat />
        <GreetingCard />
        <Footer />
      </div>
    </div>
  );
}

export default App;