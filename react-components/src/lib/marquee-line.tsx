'use client';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

export const MarqueeLine = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const stripeRef = useRef<HTMLDivElement | null>(null);
  const [elementsNeeded, setElementsNeeded] = useState(1);
  const moveRef = useRef<ReturnType<typeof gsap.to> | null>(null);

  const getMarginRight = (element: HTMLElement) => {
    return parseFloat(window.getComputedStyle(element).marginRight);
  };

  useEffect(() => {
    if (elementsNeeded && stripeRef.current) {
      const firstChild = stripeRef.current.firstElementChild! as HTMLElement;
      const x =
        (parseFloat(firstChild.getBoundingClientRect().width.toFixed(2)) +
          getMarginRight(firstChild)) *
        -1;
      moveRef.current = gsap.to(stripeRef.current, {
        x,
        duration: 5,
        ease: 'linear',
        repeat: -1,
      });
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current && stripeRef.current) {
        const screenWidth = document.documentElement.clientWidth;
        const firstChild = stripeRef.current.firstElementChild! as HTMLElement;
        const textWidth = firstChild.getBoundingClientRect().width;

        setElementsNeeded(
          Math.ceil(screenWidth / textWidth + getMarginRight(firstChild)) + 1
        );
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="bleed overflow-hidden text-[45px] font-fivo text-primary uppercase"
    >
      <div
        ref={stripeRef}
        onMouseEnter={() => {
          gsap.to(moveRef.current, {
            timeScale: 0.5,
            duration: 1,
          });
        }}
        onMouseLeave={() => {
          gsap.to(moveRef.current, {
            timeScale: 1,
            duration: 1,
          });
        }}
        className="ml-4 inline-flex relative translate-x-0 will-change-transform"
      >
        {Array.from({ length: elementsNeeded }).map((_, i) => (
          <div className="whitespace-nowrap 2 mr-4" key={i}>
            The noughty fox
          </div>
        ))}
      </div>
    </div>
  );
};
