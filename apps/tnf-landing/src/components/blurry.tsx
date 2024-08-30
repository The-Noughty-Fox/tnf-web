'use client';
import { colors } from '@tnf-workspace/ts-lib';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

type BlurryProps = {
  width: number;
  height: number;
};

export const Blurry = ({ height, width }: BlurryProps) => {
  const ref = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const ctx = ref.current.getContext('2d');

      const radius = ref.current.width / 10; // Radius is half of the canvas width
      const centerX = ref.current.width / 2;
      const centerY = ref.current.height / 2;

      gsap.fromTo(
        canvasContainerRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 5,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: canvasContainerRef.current,
          },
        }
      );

      if (ctx) {
        ctx.filter = 'blur(170px)';
        ctx.shadowBlur = 350;
        ctx.shadowColor = colors.orange['700'];
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.fillStyle = colors.orange['700'];
        ctx.fill();
      }
    }
  }, []);

  return (
    <div ref={canvasContainerRef}>
      <canvas width={width} height={height} ref={ref}></canvas>
    </div>
  );
};
