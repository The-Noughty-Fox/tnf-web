import { screenMax, screenMin } from '../ui-kit/screens';
import { rem } from './rem';

type clampValue = {
  minSize: number;
  maxSize: number;
  minScreen?: number;
  maxScreen?: number;
};

export const clampValue = ({
  minSize,
  maxSize,
  minScreen = screenMin,
  maxScreen = screenMax,
}: clampValue) => {
  const vK = (100 * (maxSize - minSize)) / (maxScreen - minScreen);
  const rK =
    (minScreen * maxSize - maxScreen * minSize) / (minScreen - maxScreen) / 16;

  const fontSizeMin = rem(minSize);
  const fontSizeMax = rem(maxSize);
  const fontSizeCalc = `calc(${vK} * 1vw + ${rK} * 1rem)`;

  return `clamp(${fontSizeMin}, ${fontSizeCalc}, ${fontSizeMax})`;
};
