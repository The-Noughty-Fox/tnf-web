/* eslint-disable react/display-name */
import gsap from 'gsap';
import styles from './index.module.scss';
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

export const HeroTitle = forwardRef((_, ref) => {
  const tlRef = useRef<gsap.core.Timeline>(gsap.timeline());

  useImperativeHandle(ref, () => ({
    tl: tlRef.current,
  }));

  useEffect(() => {
    tlRef.current.to(`.${styles.title}`, {
      opacity: 1,
      duration: 3,
      ease: 'expo.out',
    });
    tlRef.current.fromTo(
      `.${styles['title__item']}`,
      {
        yPercent: 100,
        skewY: '-5deg',
      },
      {
        yPercent: 0,
        skewY: '0deg',
        duration: 2.5,
        stagger: 0.05,
        opacity: 1,
        delay: (i) => {
          return [0, 1].includes(i) ? 0 : 0.05;
        },
        ease: 'expo.out',
      },
      0
    );
  }, []);

  return (
    <h1 className={styles.title}>
      <div className="md:-mt-10">
        <div className="md:inline-block overflow-hidden pt-10">
          <span
            className={`${styles['title__item']} text--outlined--primary-2 lg:text--outlined--primary-3 text-transparent hover:text--outlined--white-2 lg:hover:text--outlined--white-3`}
          >
            best
          </span>
        </div>{' '}
        <div className="md:inline-block overflow-hidden">
          <span className={styles['title__item']} data-text="native">
            <span className="hover:text-primary">mobile</span>
          </span>
        </div>
      </div>
      <div className="md:pt-10 md:-mt-18">
        <div className="md:inline-block overflow-hidden">
          <span
            className={`${styles['title__item']} text--outlined--primary-2 lg:text--outlined--primary-3 text-transparent hover:text--outlined--white-2 lg:hover:text--outlined--white-3`}
          >
            native
          </span>
        </div>{' '}
        <div className="md:inline-block overflow-hidden hover:text-primary">
          <span className={styles['title__item']}>team</span>
        </div>
      </div>
    </h1>
  );
});
