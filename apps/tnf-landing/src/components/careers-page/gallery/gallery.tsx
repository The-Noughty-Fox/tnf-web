'use client';

import { clampValue } from '@tnf-workspace/ts-lib';
import { useEffect, useRef } from 'react';
import Img1 from '../../../assets/careers/IMG_9839.jpg';
import Img2 from '../../../assets/careers/IMG_8760.jpg';
import Img3 from '../../../assets/careers/IMG_9838.webp';
import Img4 from '../../../assets/careers/IMG_9837.webp';
import Img5 from '../../../assets/careers/IMG_9788.jpg';
import Img6 from '../../../assets/careers/IMG_1727681256018.webp';
import gsap from 'gsap';
import Image from 'next/image';
import styles from './index.module.scss';

export const Gallery = () => {
  const ref = useRef<HTMLDivElement>(null);
  const bubbleUpItemsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    gsap.effects.bubbleUp(bubbleUpItemsRef.current, {
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
        end: 'bottom 20%',
      },
    });
  }, []);

  const setBubbleUpRef = (el: HTMLElement | null) => {
    if (el) {
      bubbleUpItemsRef.current.push(el);
    }
  };

  return (
    <div ref={ref}>
      <div
        style={{
          gap: clampValue({ minSize: 8, maxSize: 24 }),
        }}
        className={styles.row}
      >
        <div
          style={{
            gap: clampValue({ minSize: 8, maxSize: 24 }),
          }}
          className="absolute flex inset-0"
        >
          <div
            ref={setBubbleUpRef}
            className="bg-orange-800/10 rounded-1 overflow-hidden md:rounded-3 w-[18.65%]"
          >
            <Image src={Img1} alt="" className="image-cover" />
          </div>
          <div
            ref={setBubbleUpRef}
            className="bg-orange-800/10 rounded-1 overflow-hidden md:rounded-3 w-[58.97%]"
          >
            <Image
              src={Img2}
              alt=""
              className="image-cover"
              style={{
                objectPosition: '0 25%',
              }}
            />
          </div>
          <div
            ref={setBubbleUpRef}
            className="bg-orange-800/10 rounded-1 overflow-hidden md:rounded-3 w-[22.38%]"
          >
            <Image src={Img3} alt="" className="image-cover" />
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: clampValue({ minSize: 8, maxSize: 24 }),
        }}
        className={styles.row}
      >
        <div
          style={{
            gap: clampValue({ minSize: 8, maxSize: 24 }),
          }}
          className="absolute inset-0 flex"
        >
          <div
            ref={setBubbleUpRef}
            className="bg-orange-800/10 rounded-1 overflow-hidden md:rounded-3 w-[18.65%]"
          >
            <Image src={Img4} alt="" className="image-cover" />
          </div>
          <div
            ref={setBubbleUpRef}
            className="bg-orange-800/10 rounded-1 overflow-hidden md:rounded-3 w-[22.38%]"
          >
            <Image src={Img5} alt="" className="image-cover" />
          </div>
          <div
            ref={setBubbleUpRef}
            className="bg-orange-800/10 rounded-1 overflow-hidden md:rounded-3 w-[58.97%]"
          >
            <Image src={Img6} alt="" className="image-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};
