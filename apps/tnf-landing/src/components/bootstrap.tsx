'use client';

import { useScrollbarWidth } from '@tnf-workspace/react-components';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { registerBubbleUpEffect } from '@tnf-workspace/ts-lib';
import { registerGlitchEffect } from '@tnf-workspace/ts-lib';

export const Bootstrap = () => {
  useScrollbarWidth();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    registerBubbleUpEffect();
    registerGlitchEffect();
  }, []);

  return <></>;
};
