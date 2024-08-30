'use client';
import { useEffect, useRef } from 'react';

export const useScrollbarWidth = () => {
  const innerRef = useRef<HTMLDivElement | null>(null);
  const outerRef = useRef<HTMLDivElement | null>(null);

  return useEffect(() => {
    if (outerRef.current) {
      return;
    }

    const outer = document.createElement('div');
    const inner = document.createElement('div');

    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll';
    document.body.appendChild(outer);
    outer.appendChild(inner);

    outerRef.current = outer;
    innerRef.current = inner;

    const handleResize = () => {
      if (outerRef.current && innerRef.current) {
        document.documentElement.style.setProperty(
          '--scrollbar-width',
          `${outerRef.current?.offsetWidth - innerRef.current?.offsetWidth}px`
        );
        console.log(
          outerRef.current?.offsetWidth - innerRef.current?.offsetWidth
        );
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
};
