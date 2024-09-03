'use client';
import TeamMember1 from '../assets/team/ceo-alex-culeva.webp';
import TeamMember2 from '../assets/team/cto-victor-lisnic.webp';
import TeamMember3 from '../assets/team/android-leonid-simonenco.webp';
import TeamMember4 from '../assets/team/project-management-diana-spatari.webp';
import TeamMember5 from '../assets/team/design-daria-slivca.webp';
import TeamMember6 from '../assets/team/android-bodgan-knurenko.webp';
import TeamMember7 from '../assets/team/full-stack-serghei-tibulschi.webp';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { Heading } from './heading';
import { text } from '../lib/text';
import { Slider } from './slider';
import { clampValue } from '@tnf-workspace/ts-lib';
import NextImage from 'next/image';

const items = [
  {
    img: TeamMember1,
    name: 'Alex Culeva',
    role: 'CEO & CO-Founder',
  },
  {
    img: TeamMember2,
    name: 'Victor Lisnic',
    role: 'CTO & CO-Founder',
  },
  {
    img: TeamMember7,
    name: 'Serghei Tibulschi',
    role: 'Full Stack Engineer',
  },
  {
    img: TeamMember3,
    name: 'Leonid Simonenco',
    role: 'Android Lead',
  },
  {
    img: TeamMember4,
    name: 'Diana Spatari',
    role: 'Project Manager',
  },
  {
    img: TeamMember5,
    name: 'Daria Slivca',
    role: 'UI/UX Designer',
  },
  {
    img: TeamMember6,
    name: 'Bogdan Knurenko',
    role: 'Android Engineer',
  },
];

export const CoreTeam = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const slides = ref.current.querySelectorAll('.swiper-slide');

      gsap.effects.bubbleUp(slides, {
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          end: 'bottom 20%',
        },
      });
    }
  }, []);

  return (
    <div>
      <Heading text={text.core_team} />
      <div ref={ref}>
        <Slider>
          {items.map(({ img, role, name }) => (
            <div key={name}>
              <div
                style={{
                  width: clampValue({ minSize: 192, maxSize: 280 }),
                  aspectRatio: '1/1.05',
                }}
                className="overflow-hidden rounded-8"
              >
                <NextImage
                  className="image-cover object-top"
                  src={img}
                  alt={`${name} - ${role}`}
                  width={998}
                  height={1330}
                />
              </div>
              <div>
                <div className="text-h5 uppercase mt-3 md:mt-6 text-primary">
                  {name}
                </div>
                <div className="text-callout mt-2 uppercase">{role}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
