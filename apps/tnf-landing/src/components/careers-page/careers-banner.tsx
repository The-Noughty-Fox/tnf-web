'use client';

import { Heading } from '../heading';
import { Button } from '@tnf-workspace/react-components';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const CareersBanner = () => {
  const ref = useRef<HTMLDivElement>(null);
  const bubbleItemsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    gsap.effects.bubbleUp(bubbleItemsRef.current, {
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
        end: 'bottom 20%',
      },
    });
  }, []);

  return (
    <div ref={ref}>
      <Heading text="Join our team" />
      <p
        ref={(el) => {
          if (el) {
            bubbleItemsRef.current.push(el);
          }
        }}
        className="text-h5 max-w-[820px] mx-auto mt-6 text-center"
      >
        We’re looking for talented colleagues to help us on our mission to make
        APIs simple and intuitive for all those building the tools, apps and
        technologies of our time.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-6">
        <div
          ref={(el) => {
            if (el) {
              bubbleItemsRef.current.push(el);
            }
          }}
        >
          <Button text="More about us" size="small" variant="primary" />
        </div>
        <div
          ref={(el) => {
            if (el) {
              bubbleItemsRef.current.push(el);
            }
          }}
        >
          <Button text="Open positions" size="small" variant="inversed" />
        </div>
      </div>
    </div>
  );
};
