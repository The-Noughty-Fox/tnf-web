'use client';
import styles from './index.module.scss';
import ServicesImg from '../../../assets/services.jpg';
import { gsap } from 'gsap';
import { useEffect } from 'react';
import NextImage from 'next/image';
import { Button, Container, StarSvg } from '@tnf-workspace/react-components';

type ServicesHeroProps = {
  title: string;
  description: string;
};

export const ServicesHero = ({ title, description }: ServicesHeroProps) => {
  useEffect(() => {
    gsap.effects.bubbleUp(`.${styles['hero-item']}`, {
      delay: 0.5,
    });
  }, []);

  return (
    <div className={styles['services-hero']}>
      <div className="absolute inset-0">
        <NextImage
          src={ServicesImg}
          alt=""
          className="image-cover"
          priority
          width={5472}
          height={3648}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(255,118,10,0.34) 0%, rgba(252,176,69,0.1) 100%)',
          }}
        ></div>
      </div>
      <Container>
        <div className="relative">
          <div className={`text-accent-big ${styles['hero-item']}`}>
            {title}
          </div>
          <p
            className={`${styles['hero-item']} flex mt-3 lg:mt-5 text-white items-center gap-4 text-18*30`}
          >
            <StarSvg className="star" />
            <span>{description}</span>
          </p>
        </div>
      </Container>

      <div className={styles['services-hero__controls']}>
        <Container>
          <div className="mt-30 items-center md:mt-0 flex flex-col md:flex-row justify-center gap-3 md:gap-10">
            <div className={`${styles['hero-item']} w-[320px]`}>
              <Button
                variant="dark"
                text="Free consultation"
                size="small"
                fluid
              />
            </div>
            <div className={`${styles['hero-item']} w-[320px]`}>
              <Button
                variant="light"
                text="View Portfolio"
                size="small"
                fluid
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
