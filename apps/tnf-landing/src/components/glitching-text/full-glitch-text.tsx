'use client';
import styles from './styles/full-glitch.module.scss';
import clsx from 'clsx';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

type GlitchingTextProps = {
  text: string;
  className?: string;
};

export const FullGlitchText = ({ text, className }: GlitchingTextProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const cn = clsx(styles.hero, styles.glitch, className);
  const glitchRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (ref.current) {
      glitchRef.current = gsap.effects.fullGlitch(ref.current, {
        repeat: -1,
        delay: 2,
        repeatDelay: 7,
      });
    }
  }, []);

  return (
    <>
      <div className={cn} ref={ref}>
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </>
  );
};
