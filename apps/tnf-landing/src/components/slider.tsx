import Swiper from 'swiper';
import { FreeMode, Mousewheel, Pagination } from 'swiper/modules';
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
};

export const Slider = ({ children }: SliderProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const paginationRef = useRef<HTMLDivElement | null>(null);
  const childrenArray = Children.toArray(children);
  const cn = clsx('swiper bleed');

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
        freeMode: {
          enabled: true,
          momentum: true,
          momentumRatio: 1,
          momentumVelocityRatio: 1,
          momentumBounce: false,
        },
        modules: [Mousewheel, FreeMode],
        resistance: false,
        cssMode: true,
        preventInteractionOnTransition: false,
      });
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const wrapper = ref.current!.querySelector('.swiper-wrapper');

      if (wrapper) {
        const visibleSlides = Array.from(
          wrapper.querySelectorAll('.swiper-slide-fully-visible')
        );

        if (visibleSlides.length === childrenArray.length) {
          wrapper.classList.add('justify-center');
        } else {
          wrapper.classList.remove('justify-center');
        }
      }
    };
    const debouncedHandleResize = debounce(handleResize, 150);
    handleResize();

    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, [childrenArray.length]);

  return (
    <div className={cn} ref={ref}>
      <div className="swiper-wrapper py-14">
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
