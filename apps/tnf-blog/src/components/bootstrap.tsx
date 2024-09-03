'use client';
import { useScrollbarWidth } from '@tnf-workspace/react-components';
import { SmoothScroll } from '@tnf-workspace/react-components';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

type BootstrapProps = {};

export const Bootstrap = ({}: BootstrapProps) => {
  useScrollbarWidth();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return (
    <>
      <SmoothScroll />
    </>
  );
};
