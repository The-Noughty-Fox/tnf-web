'use client';
import { gsap } from 'gsap';
import { text } from '../lib/text';
import { useEffect, useRef } from 'react';
import { Heading } from './heading';
import { Slider } from './slider';
import NextLink from 'next/link';
import { pageRoutes } from '../lib/pageRoutes';
import { ProjectCardType } from '../lib/types/projects';
import NextImage from 'next/image';

type ExploreOtherProps = {
  title?: string;
  projects: ProjectCardType[];
};

export const ExploreOther = ({
  title = text.explore_other,
  projects,
}: ExploreOtherProps) => {
  const ref = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

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
      gsap.effects.bubbleUp(
        sliderRef.current?.querySelectorAll('.swiper-slide'),
        {
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%',
            end: 'bottom 20%',
          },
        }
      );
    }
  }, []);

  return (
    <section ref={ref}>
      {title && <Heading text={title} />}
      <div ref={sliderRef}>
        <Slider>
          {projects.map((project) => (
            <NextLink
              key={project.key}
              href={pageRoutes.projectDetails(project.key)}
            >
              <div key={project.title} className="w-[350px]">
                <div className="relative rounded-10 overflow-hidden h-[417px]">
                  <NextImage
                    src={project.img.mobile}
                    alt=""
                    className="image-cover"
                  />
                </div>
                <div className="mt-4.5">
                  <div className="text-[18px] leading-1 font-bold uppercase text-orange-400">
                    {project.title}
                  </div>
                  <div className="leading-1.25 mt-2.5">
                    {project.description}
                  </div>
                </div>
              </div>
            </NextLink>
          ))}
        </Slider>
      </div>
    </section>
  );
};
