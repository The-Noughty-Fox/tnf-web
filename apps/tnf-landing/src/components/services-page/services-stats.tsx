'use client';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { Container } from '@tnf-workspace/react-components';
import { Slider } from '../slider';
import { clampValue } from '@tnf-workspace/ts-lib';

const servicesStats = [
  { value: '10', label: 'Completed projects' },
  { value: '7', label: 'Countries ' },
  { value: '100+', label: 'Volunteer hours annually' },
  { value: '100%', label: 'Satisfaction rate' },
  { value: '100%', label: 'On-time delivery' },
];

export const ServicesStats = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      const items = ref.current.querySelectorAll('.swiper-slide');

      gsap.effects.bubbleUp(items, {
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
      <Container>
        <div ref={ref}>
          <Slider pagination={false}>
            {servicesStats.map(({ value, label }) => (
              <div
                style={{
                  width: clampValue({
                    maxSize: 284,
                    minSize: 150,
                  }),
                }}
                key={label + value}
                className="text-center"
              >
                <div className="text-11*25 font-bold">{value}</div>
                <div className="text-body mt-8 md:px-10">{label}</div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};
