'use client';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { Heading } from './heading';
import { technologies } from '../lib/data/technologies';
import NextImage from 'next/image';

type TechnologiesProps = {
  projectTechnologies: (keyof typeof technologies)[];
};

export const Technologies = ({ projectTechnologies }: TechnologiesProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const items = ref.current.querySelectorAll('.tech');

      gsap.effects.bubbleUp(items, {
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          end: 'bottom 20%',
        },
      });
    }
  }, []);

  return (
    <section className="technologies">
      <Heading text={'Technologies'} />
      <div
        ref={ref}
        className="grid gap-6 mt-12 place-content-center grid-cols-fit-140-1fr md:grid-cols-fit-200"
      >
        {projectTechnologies.map((t) => (
          <div
            key={t}
            className="tech text-center flex flex-col items-center md:items-stretch"
          >
            <div
              key={t}
              className="text-center aspect-square flex flex-col items-center justify-center rounded-6 bg-woodsmoke-950 p-5"
              style={{
                filter: `drop-shadow(#FF5C0033 0px 0px 8px)`,
              }}
            >
              <NextImage src={technologies[t].src} alt="" />
            </div>
            <div className="mt-4 text-h3">{technologies[t].title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
