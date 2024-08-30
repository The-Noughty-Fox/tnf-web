import { rem } from './rem';

type GenerateSpacingType = {
  valueStep: number;
  until: number;
  keyStep: number;
}[];

export const generateSpacing = (
  configs: GenerateSpacingType
): Record<string, string> => {
  const spacing: Record<string, string> = {};
  let current = 0;
  let key = 0;

  configs.forEach((config) => {
    while (current < config.until) {
      spacing[key.toString()] = rem(current);
      current += config.valueStep;
      key += config.keyStep;
    }

    spacing[key.toString()] = rem(current);
  });

  return spacing;
};
