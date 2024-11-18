import React, { useMemo } from 'react';
import { Code2 } from 'lucide-react';

export function SnowflakeAnimation() {
  const snowflakes = useMemo(() => 
    Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 3 + 2}s`
    })), []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {snowflakes.map(({ id, left, delay, duration }) => (
        <Code2
          key={id}
          className={`absolute text-white/20 animate-fall-${id + 1}`}
          style={{
            left,
            animationDelay: delay,
            animationDuration: duration,
          }}
        />
      ))}
    </div>
  );
}