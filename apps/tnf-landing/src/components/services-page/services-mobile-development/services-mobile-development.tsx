'use client';
import styles from './index.module.scss';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import {
  CaretDownSvg,
  Container,
  LightningSvg,
} from '@tnf-workspace/react-components';
import { clampValue } from '@tnf-workspace/ts-lib';

const servicesItems = [
  'Discovery Phase',
  'Planning and Alignment',
  'Bringing Ideas to Life',
  'Ensuring Quality and Collaboration',
  'Application Deployment',
  'Post-Launch Support',
];

export const ServicesMobileDevelopment = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          end: 'bottom 20%',
        },
      });
      const servicesItemsTl = gsap.timeline();

      servicesItemsTl.fromTo(
        `.${styles['services-list__item']}`,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: 0.75,
          duration: 1.5,
          ease: 'expo.out',
        }
      );

      tl.add(gsap.effects.bubbleUp(`.${styles['bubble-item']}`));
      tl.add(servicesItemsTl);
    }
  }, []);

  useEffect(() => {
    if (ref.current) {
      const calculateCoefficient = () => {
        const minWidth = 1440; // Minimum screen width where the coefficient starts decreasing
        const maxCoefficient = 1; // Maximum coefficient
        const minCoefficient = 0.1; // Minimum coefficient when the screen is very small

        const currentWidth = window.innerWidth;

        if (currentWidth >= minWidth) {
          return maxCoefficient;
        } else {
          // Calculate the coefficient proportionally between maxCoefficient and minCoefficient
          const coefficient =
            minCoefficient +
            (maxCoefficient - minCoefficient) * (currentWidth / minWidth);
          return Math.max(coefficient, minCoefficient); // Ensure it doesn't go below minCoefficient
        }
      };

      const updateCoefficient = () => {
        const coefficient = calculateCoefficient();
        document.documentElement.style.setProperty(
          '--coefficient',
          String(coefficient)
        );
        if (ref.current) {
          ref.current.style.setProperty('--w', `${ref.current.offsetWidth}px`);
          ref.current.style.setProperty('--h', `${ref.current.offsetHeight}px`);
        }
      };

      // Update coefficient on page load
      updateCoefficient();

      // Update coefficient on window resize
      window.addEventListener('resize', updateCoefficient);
    }
  }, []);

  useEffect(() => {
    const calculateMousePercent = (event: MouseEvent) => {
      const element = event.currentTarget as HTMLElement;

      const rect = element.getBoundingClientRect();

      // Calculate the mouse position relative to the element
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      // Calculate the percentage
      const percentX = (mouseX / rect.width) * 100;
      const percentY = (mouseY / rect.height) * 100;

      return { percentX, percentY };
    };

    ref.current?.addEventListener('mousemove', (event) => {
      const { percentX, percentY } = calculateMousePercent(event);
      console.log(
        `Mouse Position: X: ${percentX.toFixed(2)}%, Y: ${percentY.toFixed(2)}%`
      );
    });
  }, []);

  return (
    <div>
      <Container>
        <div className="text-accent-big uppercase">
          <div className={`text-primary ${styles['bubble-item']}`}>Mobile</div>
          <div className={styles['bubble-item']}>Development</div>
          <div className={`text-primary ${styles['bubble-item']}`}>Process</div>
        </div>
        <div ref={ref} className="relative">
          <LightningSvg className={`image-cover ${styles['bubble-item']}`} />
          <div className={styles['services-list']}>
            {servicesItems.map((item) => (
              <div className={styles['services-list__item']} key={item}>
                <span>{item}</span>
                <CaretDownSvg />
              </div>
            ))}
          </div>
        </div>
        <div className={`text-h5 leading-1.75 mt-12 ${styles['bubble-item']}`}>
          We start by exploring your vision and creating a tailored project
          proposal. Next, we structure the project and conduct a kick-off
          meeting to ensure alignment. Our team then focuses on product design,
          UX/UI, and development to bring your ideas to life. We prioritize
          quality assurance and testing, followed by thorough reviews and
          feedback. Once everything is perfect, we deploy the application and
          efficiently wrap up the project. After launch, we offer ongoing
          support and welcome feedback to foster a long-term partnership.
        </div>
      </Container>
    </div>
  );
};
