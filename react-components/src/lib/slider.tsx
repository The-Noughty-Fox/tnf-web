'use client';
import Swiper from 'swiper';
import { Mousewheel, Pagination, FreeMode } from 'swiper/modules';
import clsx from 'clsx';
import {
  Children,
  cloneElement,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
} from 'react';

type SliderProps = {
  children: ReactNode;
  pagination?: boolean;
  className?: string;
};

export const Slider = ({
  children,
  className,
  pagination = true,
}: SliderProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const paginationRef = useRef<HTMLDivElement | null>(null);
  const cn = clsx('swiper', className);

  useEffect(() => {
    if (ref.current) {
      new Swiper(ref.current!, {
        slidesPerView: 'auto',
        spaceBetween: 32,
        direction: 'horizontal',
        mousewheel: {
          forceToAxis: true,
          sensitivity: 0.01,
          thresholdDelta: 10,
        },
        watchSlidesProgress: true,
        pagination: {
          enabled: pagination,
          dynamicBullets: true,
          el: paginationRef.current,
          clickable: true,
        },
        freeMode: {
          enabled: true,
          momentum: true,
          momentumRatio: 1,
          momentumVelocityRatio: 1,
          momentumBounce: false,
        },
        modules: [Pagination, Mousewheel, FreeMode],
        resistance: false,
        cssMode: true,
        preventInteractionOnTransition: false,
      });
    }
  }, []);

  return (
    <div className={cn} ref={ref}>
      <div className="swiper-wrapper">
        {Children.map(children, (child) => (
          <div className="swiper-slide h-auto w-auto">
            {cloneElement(child as ReactElement)}
          </div>
        ))}
      </div>

      <div ref={paginationRef} className="swiper-pagination"></div>
    </div>
  );
};
