'use client';
import styles from './index.module.scss';
import { gsap } from 'gsap';
import { useEffect } from 'react';
import {
  Container,
  CurlyArrow2Svg,
  CurlyArrow3Svg,
} from '@tnf-workspace/react-components';
import { clampValue } from '@tnf-workspace/ts-lib';
import { Blurry } from '../../blurry';

type ServicesProsAndConsProps = {
  pros: {
    title: string;
    items: string[];
  };
  cons: {
    title: string;
    items: string[];
  };
};

export const ServicesProsAndCons = ({
  cons,
  pros,
}: ServicesProsAndConsProps) => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles['pros-and-cons__title-how']}`,
        start: 'top 80%',
        end: 'bottom 20%',
      },
    });

    gsap.set(`.${styles['pros-and-cons__title-how-arrow']}`, {
      transformOrigin: '50% 50%',
    });
    tl.fromTo(
      `.${styles['pros-and-cons__title-how']}`,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2.5,
        ease: 'expo.out',
      }
    );
    tl.fromTo(
      `.${styles['pros-and-cons__title-how']}`,
      {
        y: 30,
        x: 30,
      },
      {
        y: 0,
        x: 0,
        ease: 'elastic.out(1, 0.3)',
        duration: 2,
      },
      0
    );

    tl.to(`.${styles['pros-and-cons__title-how-arrow']}`, {
      duration: 2,
      x: 3,
      y: 5,
      skewX: 10,
      rotate: 3,
      repeat: -1,
      ease: 'sine.inOut',
      yoyo: true,
    });
    tl.to(
      `.${styles['pros-and-cons__title-how-text']}`,
      {
        duration: 3,
        y: 5,
        repeat: -1,
        ease: 'sine.inOut',
        yoyo: true,
      },
      0
    );

    gsap.effects.bubbleUp(`.${styles['bubble-left']}`);
    gsap.effects.bubbleUp(`.${styles['bubble-right']}`);
  }, []);

  return (
    <section className="relative">
      <Container>
        <div className={styles['pros-and-cons']}>
          <div
            style={{
              maxWidth: clampValue({
                minSize: 300,
                maxSize: 460,
              }),
            }}
            className={styles['pros-and-cons__pro']}
          >
            <div className={styles['pros-and-cons__title']}>
              <span className={styles['bubble-left']}>{pros.title}</span>

              <div className={styles['pros-and-cons__title-how']}>
                <CurlyArrow2Svg
                  className={`${styles['pros-and-cons__title-how-arrow']} ${styles.large}`}
                />
                <CurlyArrow3Svg
                  className={`${styles['pros-and-cons__title-how-arrow']} ${styles.small}`}
                />
                <div className={styles['pros-and-cons__title-how-text']}>
                  This is how we do it
                </div>
              </div>
            </div>
            <ul className={styles['pros-and-cons__list']}>
              {pros.items.map((item, index) => (
                <li
                  className={`${styles['pros-and-cons__list-item']} ${styles['bubble-left']}`}
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="absolute left-1/2 -translate-x-1/2 -top-1/2 -z-10">
              <Blurry height={1200} width={1200} />
            </div>
          </div>
          <div
            style={{
              maxWidth: clampValue({
                minSize: 300,
                maxSize: 460,
              }),
            }}
            className={styles['pros-and-cons__con']}
          >
            <div
              className={`${styles['pros-and-cons__title']} ${styles['bubble-right']}`}
            >
              {cons.title}
            </div>
            <ul className={styles['pros-and-cons__list']}>
              {cons.items.map((item, index) => (
                <li
                  className={`${styles['pros-and-cons__list-item']} ${styles['bubble-right']}`}
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};
