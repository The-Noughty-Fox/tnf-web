import { useEffect, useRef } from 'react';
import { Effect } from './effect/effect';

export const ParticleGrid = () => {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      const scrollWidth =
        document.documentElement.style.getPropertyValue('--scrollbar-width');

      const ctx = ref.current.getContext('2d');
      if (ctx) {
        const effect = new Effect(
          window.innerWidth - parseInt(scrollWidth) ?? 0,
          600,
          ctx
        );

        const animate = () => {
          effect.update();
          requestAnimationFrame(animate);
        };

        animate();
      }
    }
  }, []);

  return (
    <div className="overflow-hidden py-30 flex justify-center">
      <canvas ref={ref}></canvas>
    </div>
  );
};
