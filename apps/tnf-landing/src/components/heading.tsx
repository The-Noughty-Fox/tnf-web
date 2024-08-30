'use client';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

type HeadingProps = {
  text: string;
};

export const Heading = ({ text }: HeadingProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      gsap.effects.bubbleUp(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          end: 'bottom 20%',
        },
      });
    }
  }, []);

  return (
    <div ref={ref} className="text-accent-big uppercase text-center">
      {text}
    </div>
  );
};
