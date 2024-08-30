'use client';
import styles from './index.module.scss';
import { gsap } from 'gsap';
import { useEffect } from 'react';
import { Container } from '@tnf-workspace/react-components';
import { Blurry } from '../../blurry';

type ServicesSummaryProps = {
  title: string;
  description: string;
};

export const ServicesSummary = ({
  title,
  description,
}: ServicesSummaryProps) => {
  useEffect(() => {
    gsap.effects.bubbleUp(`.${styles['bubble-item']}`);
  }, []);

  return (
    <div className={styles['services-summary']}>
      <Container>
        <div className={styles['services-summary__content']}>
          <div>
            <div className="w-full relative">
              <div className={`text-h1 max-w-[10ch] ${styles['bubble-item']}`}>
                {title}
              </div>

              <div className="absolute right-0 top-1/2 -translate-y-1/2 -z-10">
                <Blurry height={1200} width={1200} />
              </div>
            </div>
          </div>
          <div>
            <div className="w-full">
              <div
                className={`text-body leading-1.75 ${styles['bubble-item']}`}
              >
                {description}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
