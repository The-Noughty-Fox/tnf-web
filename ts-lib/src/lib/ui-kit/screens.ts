import { rem } from '../utils/rem';

const screens = {
  sm: 390,
  md: 834,
  lg: 1182,
  xl: 1440,
};

const screenMin = screens.sm;
const screenMax = screens.xl;

const screensTheme = Object.entries(screens).reduce<Record<string, string>>(
  (acc, [key, value]) => {
    acc[key] = rem(value);
    return acc;
  },
  {}
);
screensTheme['max'] = screensTheme['xl'];

const containerPx = 28;
const containerPxMd = 48;
const containerPxLg = 120;

export {
  screens,
  screensTheme,
  screenMin,
  screenMax,
  containerPx,
  containerPxMd,
  containerPxLg,
};
