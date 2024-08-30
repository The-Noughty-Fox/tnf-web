'use client';
import { projectCards } from '../../lib/data/projectCards';
import { ProjectCard } from './components/project-card';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

export const PortfolioList = () => {
  const ref = useRef<HTMLDivElement>(null);
  const cardRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardRef.current.forEach((card) =>
      gsap.effects.bubbleUp(card, {
        scrollTrigger: {
          trigger: card,
        },
      })
    );
  }, []);

  return (
    <div ref={ref} className="flex flex-col gap-21 md:gap-13">
      {projectCards.map(
        ({
          key,
          TitleLogo,
          description,
          cta,
          domains,
          twTheme,
          title,
          link,
          img,
          background,
        }) => (
          <div
            key={key}
            ref={(el) => {
              cardRef.current.push(el);
            }}
          >
            <ProjectCard
              link={link}
              domains={domains}
              TitleLogo={TitleLogo}
              description={description}
              cta={cta}
              twTheme={twTheme}
              title={title}
              img={img}
              background={background}
            />
          </div>
        )
      )}
    </div>
  );
};
