'use client';
import { text } from '../lib/text';
import { Button } from '@tnf-workspace/react-components';
import { DynamicGrid } from './particle-grid/dynamic-grid';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const PingUs = () => {
  const ref = useRef<HTMLDivElement | null>(null);

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
    <DynamicGrid>
      <div ref={ref} className="flex flex-col">
        <div
          className="text-center uppercase max-w-[748px] text-accent-big"
          style={{
            filter: 'drop-shadow(rgba(0, 0, 0, 0.5) 0px 0px 64px)',
          }}
        >
          <span className="text-primary">Got</span> nothing but an{' '}
          <span className="text-primary">idea</span>?
        </div>
        <div className="mt-15 lg:mt-30 flex justify-center">
          <Button text={text.ping_us} />
        </div>
      </div>
    </DynamicGrid>
  );
};
