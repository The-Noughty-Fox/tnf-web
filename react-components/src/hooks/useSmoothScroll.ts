'use client';
import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap/dist/gsap';
import { isMac } from '@tnf-workspace/ts-lib';

export const useSmoothScroll = () => {
  const [lenis, setLenis] = useState<Lenis | null>();

  useEffect(() => {
    if (!isMac()) {
      const lenis = new Lenis({
        autoResize: true,
        duration: 1,
        wheelMultiplier: 0.8,
      });
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time: number) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
      setLenis(lenis);
    }
  }, []);

  return lenis;
};
