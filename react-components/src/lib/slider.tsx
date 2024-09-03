'use client';
import Swiper from 'swiper';
import { Mousewheel, Pagination } from 'swiper/modules';
import { debounce } from '@tnf-workspace/ts-lib';
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
          enabled: true,
          forceToAxis: true,
        },
        watchSlidesProgress: true,
        pagination: {
          enabled: pagination,
          dynamicBullets: true,
          el: paginationRef.current,
          clickable: true,
        },
        modules: [Pagination, Mousewheel],
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
