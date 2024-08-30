'use client';
import styles from './styles.module.scss';
import clsx from 'clsx';
import gsap from 'gsap';
import { ReactNode, useEffect, useRef } from 'react';
import { ParticleGrid } from './index';
type DynamicGridProps = {
  children: ReactNode;
};

export const DynamicGrid = ({ children }: DynamicGridProps) => {
  const containerClsx = clsx(styles['dynamic-grid'], 'relative');
  const ref = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current && gridRef.current) {
      const tl = gsap.timeline();

      tl.fromTo(
        gridRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 3,
          scrollTrigger: {
            trigger: gridRef.current,
            start: '40% 90%',
            end: '60% 70%',
            scrub: 3,
          },
        }
      );
      tl.to(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
        },
        yPercent: -15,
      });
    }
  }, []);

  return (
    <div className={containerClsx}>
      <div ref={gridRef}>
        <ParticleGrid />
      </div>
      <div
        ref={ref}
        className="flex justify-center max-w-[100vw] absolute left-0 right-0 top-1/3 lg:top-1/4 px-6"
      >
        {children}
      </div>
    </div>
  );
};
