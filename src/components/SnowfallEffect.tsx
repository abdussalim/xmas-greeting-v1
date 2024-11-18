import React, { useMemo } from 'react';
import { Snowflake } from 'lucide-react';

export function SnowfallEffect() {
  const snowflakes = useMemo(() => 
    Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 3 + 2}s`,
      size: Math.random() * 10 + 10
    })), []
  );

  return (
    <div className="fixed inset-0 pointer-events-none">
      {snowflakes.map(({ id, left, delay, duration, size }) => (
        <Snowflake
          key={id}
          className={`absolute text-white/30 animate-fall-${(id % 20) + 1}`}
          style={{
            left,
            animationDelay: delay,
            animationDuration: duration,
            width: size,
            height: size
          }}
        />
      ))}
    </div>
  );
}