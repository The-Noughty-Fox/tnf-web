'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap/dist/gsap';

export const SmoothScroll = () => {
  useEffect(() => {
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
  }, []);

  return <></>;
};