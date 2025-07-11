
import { useState, useEffect, useRef } from 'react';

// Easing function for a smooth animation (easeInOutCubic)
const easeInOutCubic = (t: number): number => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

export const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let observer: IntersectionObserver;

    const startAnimation = () => {
      let startTimestamp: number | null = null;

      const step = (timestamp: number) => {
        if (!startTimestamp) {
          startTimestamp = timestamp;
        }
        
        const elapsedTime = timestamp - startTimestamp;
        const progress = Math.min(elapsedTime / duration, 1);
        const easedProgress = easeInOutCubic(progress);

        setCount(Math.floor(easedProgress * end));

        if (progress < 1) {
          animationFrameId.current = requestAnimationFrame(step);
        }
      };

      animationFrameId.current = requestAnimationFrame(step);
    };

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          // Disconnect the observer after the animation starts to prevent it from re-triggering.
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(node);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      if (observer) {
        observer.disconnect();
      }
    };
  }, [end, duration]);

  return { count, ref };
};
