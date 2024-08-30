'use client';
import styles from './index.module.scss';
import { gsap } from 'gsap';
import { useEffect } from 'react';
import { Container, LightningSvg } from '@tnf-workspace/react-components';

export const ServicesMobileDevelopment = () => {
  useEffect(() => {
    gsap.effects.bubbleUp(`.${styles['bubble-item']}`);
  }, []);

  return (
    <div>
      <Container>
        <div className="text-accent-big uppercase">
          <div className={`text-primary ${styles['bubble-item']}`}>Mobile</div>
          <div className={styles['bubble-item']}>Development</div>
          <div className={`text-primary ${styles['bubble-item']}`}>Process</div>
        </div>
        <div>
          <LightningSvg className={`image-cover ${styles['bubble-item']}`} />
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
