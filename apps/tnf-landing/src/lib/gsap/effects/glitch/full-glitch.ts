import gsap from 'gsap';
import {
  pathsValues,
  fontsValues,
  opacityValues,
  skewValues,
} from './glitchValues';

const interpolateDuration = (duration: number) =>
  gsap.utils.interpolate(0, duration);

const getTextPathsTimeline = (targets: HTMLElement | HTMLElement[]) => {
  const animationDuration = 2;
  const interpolate = interpolateDuration(animationDuration);
  const tl = gsap.timeline();

  Array.from(Array.isArray(targets) ? targets : [targets]).forEach((target) => {
    const spans = target.querySelectorAll('span');

    pathsValues.forEach(({ step, value }, index) => {
      const next = pathsValues[index + 1];
      const durationK = next ? next.step - step : 1 - step;

      tl.to(spans, {
        clipPath: value,
        duration: parseFloat(interpolate(durationK).toFixed(2)),
        ease: 'steps(1)',
      });
    });
  });

  return tl;
};

const getTextSkewTimeline = (targets: HTMLElement | HTMLElement[]) => {
  const animationDuration = 2;
  const interpolate = interpolateDuration(animationDuration);
  const tl = gsap.timeline();

  Array.from(Array.isArray(targets) ? targets : [targets]).forEach((target) => {
    const spans = target.querySelectorAll('span');

    skewValues.forEach(({ step, value }, index) => {
      const next = pathsValues[index + 1];
      const durationK = next ? next.step - step : 1 - step;

      tl.to(spans, {
        transform: value,
        duration: parseFloat(interpolate(durationK).toFixed(2)),
        ease: 'steps(1)',
      });
    });
  });

  return tl;
};

const getTextFontsTimeline = (targets: HTMLElement | HTMLElement[]) => {
  const tl = gsap.timeline({});

  Array.from(Array.isArray(targets) ? targets : [targets]).forEach((target) => {
    const [, span2] = Array.from(target.querySelectorAll('span'));
    const animationDuration = 2;
    const interpolate = interpolateDuration(animationDuration);

    fontsValues.forEach(({ value, step }, index) => {
      const next = fontsValues[index + 1];
      const durationK = next ? next.step - step : 1 - step;

      tl.to(span2, {
        'font-weight': value['font-weight'],
        filter: value['filter'],
        color: value['color'],
        duration: parseFloat(interpolate(durationK).toFixed(2)),
        ease: 'steps(1)',
      });
    });
  });

  return tl;
};

const getTextOpacityTimeline = (targets: HTMLElement | HTMLElement[]) => {
  const tl = gsap.timeline({});

  Array.from(Array.isArray(targets) ? targets : [targets]).forEach((target) => {
    const [, span2] = Array.from(target.querySelectorAll('span'));
    const animationDuration = 3;
    const interpolate = interpolateDuration(animationDuration);

    opacityValues.forEach(({ value, step }, index) => {
      const next = opacityValues[index + 1];
      const durationK = next ? next.step - step : 1 - step;
      tl.to(span2, {
        opacity: value.opacity,
        duration: parseFloat(interpolate(durationK).toFixed(2)),
        ease: 'steps(1)',
      });
    });
  });

  return tl;
};

export const registerGlitchEffect = () => {
  gsap.registerEffect({
    name: 'fullGlitch',
    effect: (
      targets: HTMLElement | HTMLElement[],
      config: gsap.TimelineVars
    ) => {
      const masterTimeline = gsap.timeline(config);
      masterTimeline.add(getTextPathsTimeline(targets));
      masterTimeline.add(getTextFontsTimeline(targets), 0);
      masterTimeline.add(getTextOpacityTimeline(targets), 0);
      masterTimeline.add(getTextSkewTimeline(targets), 0);
      return masterTimeline;
    },
  });
};
