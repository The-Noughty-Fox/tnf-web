'use client';
import { FoxFilledSvg, FoxOutlinedSvg } from '..';
import { clampValue } from '@tnf-workspace/ts-lib';
import gsap from 'gsap';
import { useEffect } from 'react';

export const NotFoundFox = () => {
  useEffect(() => {
    gsap.to('.fox-outlined', {
      duration: 1.5,
      ease: 'elastic.out(1, 0.1)',
      y: 20,
      x: -12,
      delay: 1,
    });
  }, []);

  return (
    <div className="relative">
      <FoxFilledSvg
        className="h-auto text-orange-700"
        style={{
          width: clampValue({ minSize: 193, maxSize: 355 }),
        }}
      />
      <FoxOutlinedSvg className="absolute w-full h-full fox-outlined top-0 left-0 text-orange-600" />
    </div>
  );
};
