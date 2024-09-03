import gsap from 'gsap';

export const registerBubbleUpEffect = () => {
  gsap.registerEffect({
    name: 'bubbleUp',
    effect: (
      targets: HTMLElement | HTMLElement[],
      config: gsap.TimelineVars
    ) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: targets,
          start: 'top 90%',
        },
        ...config,
      });
      gsap.set(targets, { willChange: 'transform' });
      tl.fromTo(
        targets,
        {
          opacity: 0,
          y: 75,
        },
        {
          opacity: 1,
          y: 0,
          duration: 2.5,
          ease: 'expo.out',
          stagger: 0.1,
          onComplete: () => {
            gsap.set(targets, { clearProps: 'willChange' });
          },
        }
      );
      return tl;
    },
  });
};
