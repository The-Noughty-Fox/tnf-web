'use client';

import {
  ArrowUpRightSvg,
  Button,
  CaretRightSvg,
} from '@tnf-workspace/react-components';
import { useEffect, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './index.module.scss';
import { gsap } from 'gsap';

type VacancyProps = {
  title: string;
  tags: string[];
  image: StaticImageData;
  weAreLookingFor: {
    title: string;
    body: string;
  };
  jobProperties: { title: string; value: string }[];
  lists: { title: string; items: string[] }[];
  applicationUrl: string;
};

export const Vacancy = ({
  tags,
  title,
  image,
  weAreLookingFor,
  jobProperties,
  lists,
  applicationUrl,
}: VacancyProps) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const isFirstRenderRef = useRef(true);
  const panelRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (panelRef.current) {
      const iconElement = panelRef.current.querySelector(`.${styles['icon']}`);
      const answerElement = panelRef.current.querySelector(
        `.${styles['panel-body']}`
      );

      if (iconElement) {
        gsap.to(iconElement, {
          rotate: isOpened ? -90 : 0,
          duration: isFirstRenderRef.current ? 0 : 1,
          ease: 'elastic.out(1, 0.4)',
        });
      }

      if (answerElement) {
        const tl = gsap.timeline();
        tl.to(
          answerElement,
          {
            height: isOpened ? 'auto' : 0,
            duration: isFirstRenderRef.current ? 0 : 0.35,
            ease: 'expo.inOut(1, 1)',
          },
          0
        );
        tl.to(
          answerElement,
          {
            opacity: isOpened ? 1 : 0,
            duration: isFirstRenderRef.current ? 0 : isOpened ? 0.5 : 0.35,
            ease: 'sine.inOut(1, 0.7)',
          },
          0
        );
      }

      if (isFirstRenderRef.current) {
        isFirstRenderRef.current = false;
      }
    }
  }, [isOpened]);

  const handleSectionClick = () => {
    setIsOpened((prev) => !prev);
  };

  return (
    <section
      ref={panelRef}
      className="relative text-woodsmoke-950 bg-white rounded-6 md:rounded-10"
    >
      <h3
        role="button"
        tabIndex={0}
        aria-expanded={isOpened}
        aria-label={title}
        className={`${styles['panel-head']} p-6 md:p-9*12`}
        onClick={handleSectionClick}
      >
        <div className="flex-1 text-[18px] md:text-[20px] font-bold">
          <div className="flex gap-4">
            <div className="w-[98px] h-[98px] rounded-3 hidden md:block">
              <Image src={image} alt="" />
            </div>
            <div className="flex flex-col justify-center md:gap-4">
              <div className="text-h5">{title}</div>
              <div className="text-body font-normal">{tags.join(' / ')}</div>
            </div>
          </div>
        </div>
        <CaretRightSvg
          className={`text-primary ${styles.icon} ${
            isOpened ? '-rotate-90' : 'rotate-0'
          }`}
        />
      </h3>
      <div
        className={`${styles['panel-body']} ${
          isOpened ? 'h-auto' : 'h-0'
        } overflow-hidden`}
      >
        <div className="px-6 pb-6 md:px-9*12 md:pb-9*12">
          <div className="flex flex-col lg:flex-row gap-12 justify-start">
            <div>
              <div
                className="text-h3 font-medium"
                dangerouslySetInnerHTML={{ __html: weAreLookingFor.title }}
              />
              <div
                className="text-body font-normal mt-3.5"
                dangerouslySetInnerHTML={{ __html: weAreLookingFor.body }}
              />
            </div>
            <div>
              <div className={styles['job-properties']}>
                {jobProperties.map(({ title, value }, index) => (
                  <div key={index}>
                    <div className="whitespace-nowrap text-h4 leading-1 text-primary">
                      {title}
                    </div>
                    <div className="text-h6 mt-2 md:mt-6 leading-1">
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {lists.map(({ title, items }, index) => (
            <div key={index} className="mt-12">
              <div
                className="text-h4 font-medium"
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <ul className={styles['list']}>
                {items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex justify-center md:justify-start mt-12 md:mt-16">
            <div>
              <Button
                variant="inversed"
                text="Apply for the job"
                Icon={<ArrowUpRightSvg />}
                size="small"
                onClick={() => {
                  window.open(applicationUrl, '_blank');
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
