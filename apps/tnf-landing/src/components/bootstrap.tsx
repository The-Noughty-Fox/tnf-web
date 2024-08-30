'use client';

import { useScrollbarWidth } from '@tnf-workspace/react-components';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { registerBubbleUpEffect } from '../lib/gsap/effects/bubble-up';
import { registerGlitchEffect } from '../lib/gsap/effects/glitch/full-glitch';

export const Bootstrap = () => {
  useScrollbarWidth();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    registerBubbleUpEffect();
    registerGlitchEffect();
  }, []);

  return <></>;
};
