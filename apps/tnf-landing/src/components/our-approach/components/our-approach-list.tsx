'use client';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { OurApproachItem } from './our-approach-item';

const items = [
  {
    text: 'Small Native Teams',
    summary: 'Our teams are experts in their specific technologies',
  },
  {
    text: 'Reusable & Custom Solutions',
    summary: 'We use reusable, platform-specific code to solve common problems',
  },
  {
    text: 'No Cross-Platform, Go Cross-Project',
    summary:
      'Cross-platform is great for MVPs, but we prioritize cross-project solutions as projects grow',
  },
  {
    text: 'Latest Tech Stack',
    summary:
      'Our mobile platform uses cutting-edge tech for scalable, future-proof app development',
  },
];

export const OurApproachList = () => {
  const tlRef = useRef<gsap.core.Timeline>();

  useEffect(() => {
    const items = document.querySelectorAll('.our-approach__item');
    const content = document.querySelectorAll('.our-approach__content');
    const afters = document.querySelectorAll('.after');
    const befors = document.querySelectorAll('.before');

    tlRef.current = gsap.timeline({
      scrollTrigger: {
        trigger: content,
        start: 'top 90%',
        end: 'bottom 20%',
      },
    });
    tlRef.current.add(gsap.effects.bubbleUp(items));

    tlRef.current.fromTo(
      afters,
      {
        y: 20,
        x: 20,
        opacity: 0,
      },
      {
        y: 0,
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'elastic.out(1, 0.3)',
        stagger: 0.1,
      },
      0
    );
    tlRef.current.fromTo(
      befors,
      {
        y: -20,
        x: -20,
        opacity: 0,
      },
      {
        y: 0,
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'elastic.out(1, 0.3)',
        stagger: 0.1,
      },
      0
    );
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll('.our-approach__item');

    const listeners = Array.from(items).map((item) => {
      const master = gsap.timeline({ paused: true });

      const handleMouseEnter = () => {
        master.play();
      };

      const handleMouseLeave = () => {
        master.reverse();
      };

      item.addEventListener('mouseenter', handleMouseEnter);
      item.addEventListener('mouseleave', handleMouseLeave);

      master.fromTo(item, { scale: 1 }, { scale: 1.05, duration: 0.175 });

      return {
        item,
        handleMouseEnter,
        handleMouseLeave,
      };
    });

    return () => {
      listeners.forEach(({ item, handleMouseEnter, handleMouseLeave }) => {
        item.removeEventListener('mouseenter', handleMouseEnter);
        item.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  useEffect(() => {
    const foxContainer = document.querySelector('.fox-container');
    const fox = foxContainer?.querySelector('.fox');
    const foxHeading = foxContainer?.querySelector('.fox-heading');

    gsap.effects.bubbleUp([fox, foxHeading], {
      scrollTrigger: {
        trigger: foxContainer,
        start: 'top 75%',
        end: 'bottom 20%',
      },
    });
  }, []);

  return (
    <div className="mt-22 grid md:grid-cols-2 lg:grid-cols-4 justify-center gap-10 md:gap-20 lg:gap-15">
      {items.map(({ text, summary }) => (
        <OurApproachItem key={text} text={text} summary={summary} />
      ))}
    </div>
  );
};
