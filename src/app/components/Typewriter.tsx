'use client';

import { useEffect, useState } from 'react';

export default function Typewriter({
  text,
  speed = 20,
  delay = 5,
}: {
  text: string;
  speed?: number;
  delay?: number;
}) {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const startTyping = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayedText((prev) => {
          const nextChar = text.charAt(prev.length);
          if (nextChar === '') {
            clearInterval(interval);
            return prev;
          }
          return prev + nextChar;
        });
      }, speed);
    }, delay);

    return () => clearTimeout(startTyping);
  }, [text, speed, delay]);

  return <span>{displayedText}</span>;
}
