'use client';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { Heading } from '../heading';
import { text } from '../../lib/text';
import { Slider } from '../slider';
import { clampValue } from '@tnf-workspace/ts-lib';
import NextImage, { StaticImageData } from 'next/image';

type ProjectResultsProps = {
  slides: { items: StaticImageData[]; width: number };
  results: { label: string; value: string }[];
};

export const ProjectResults = ({ slides, results }: ProjectResultsProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const sliderRef2 = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    gsap.effects.bubbleUp(
      sliderRef.current?.querySelectorAll('.swiper-slide'),
      {
        scrollTrigger: {
          trigger: sliderRef.current,
        },
      }
    );
    gsap.effects.bubbleUp(
      sliderRef2.current?.querySelectorAll('.swiper-slide'),
      {
        scrollTrigger: {
          trigger: sliderRef2.current,
        },
      }
    );
    gsap.effects.bubbleUp(
      sliderRef.current?.querySelectorAll('.swiper-slide'),
      {
        scrollTrigger: {
          trigger: sliderRef.current,
          start: 'start 80%',
        },
      }
    );
  }, []);

  return (
    <div className="project-results" ref={ref}>
      <Heading text={text.results} />
      <div ref={sliderRef}>
        <Slider>
          {results.map(({ label, value }, index) => (
            <div
              style={{
                minWidth: clampValue({ minSize: 166, maxSize: 266 }),
                height: 198,
                filter: `drop-shadow(#FF5C0033 0px 0px 8px)`,
              }}
              key={index}
              className="aspect-square bg-woodsmoke-950 rounded-6 p-9 text-center flex flex-col justify-between"
            >
              <div className="text-h1">{value}</div>
              <div className="text-body font-bold">{label}</div>
            </div>
          ))}
        </Slider>
      </div>
      <div ref={sliderRef2} className="mt-8">
        <Slider>
          {slides.items.map((item, index) => (
            <div
              key={index}
              className="min-w-[300px] h-full"
              style={{
                width: slides.width,
              }}
            >
              <NextImage className="image-cover" src={item} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
