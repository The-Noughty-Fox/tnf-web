'use client';
import { StarSvg } from '@tnf-workspace/react-components';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { Container } from '@tnf-workspace/react-components';
import { HeroTitle } from './hero-title/hero-title';
import { TheFox } from '../../the-fox';
import { text } from '../../../lib/text';
import { PointingOutlinedArrow } from '../../pointing-outlined-arrow';

export const Hero = () => {
  const masterTlRef = useRef<gsap.core.Timeline>(gsap.timeline());
  const titleTlRef = useRef<{ tl: gsap.core.Timeline }>();
  const paragraphTlRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    titleTlRef.current && masterTlRef.current.add(titleTlRef.current.tl);

    masterTlRef.current.add(
      gsap.effects.bubbleUp(paragraphTlRef.current),
      0.25
    );
  }, []);

  return (
    <div className="relative aspect-video flex flex-col items-center md:max-h-[734px] w-full py-15">
      <Container>
        <div className="px-0 lg:px-12">
          <HeroTitle ref={titleTlRef} />
          <p
            ref={paragraphTlRef}
            className="hidden opacity-0 md:flex mt-3 lg:mt-5 text-white items-center gap-4 text-18*30"
          >
            <StarSvg className="star hidden md:block" />
            {text.hero_p}
          </p>
        </div>
      </Container>
      <div className="absolute flex justify-center top-full -translate-y-1/2">
        <PointingOutlinedArrow />
      </div>
      <TheFox className="max-md:-mt-30 md:-z-10 ml-auto mr-10 md:absolute md:-top-10 md:right-10 pointer-events-none" />
    </div>
  );
};
