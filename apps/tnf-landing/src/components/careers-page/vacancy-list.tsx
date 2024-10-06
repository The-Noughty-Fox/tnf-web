'use client';

import { Vacancy } from './vacancy/vacancy';
import { careers } from '../../lib/data/careers';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useCareersContext } from './context';

export const VacancyList = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const bubbleUpItemsRef = useRef<HTMLElement[]>([]);
  const { scrollTargets } = useCareersContext();

  useEffect(() => {
    gsap.effects.bubbleUp(bubbleUpItemsRef.current, {
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
        end: 'bottom 20%',
      },
    });
  }, []);

  return (
    <div ref={ref} id={scrollTargets['open-vacancies']}>
      <h2
        ref={(el) => {
          if (el) {
            bubbleUpItemsRef.current.push(el);
          }
        }}
        className="text-accent-small text-[45px] uppercase text-center mb-6 md:mb-12"
      >
        Open positions
      </h2>
      {careers.vacancies.map((vacancy, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) {
              bubbleUpItemsRef.current.push(el);
            }
          }}
        >
          <Vacancy
            title={vacancy.title}
            tags={vacancy.tags}
            image={vacancy.image}
            weAreLookingFor={vacancy.weAreLookingFor}
            jobProperties={vacancy.jobProperties}
            lists={vacancy.lists}
          />
        </div>
      ))}
    </div>
  );
};
