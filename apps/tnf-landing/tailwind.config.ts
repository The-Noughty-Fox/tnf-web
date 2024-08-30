// eslint-disable-next-line @nx/enforce-module-boundaries
import {
  colors,
  clampValue,
  generateSpacing,
  rem,
  screensTheme,
} from '../../dist/ts-lib';
import { createGlobPatternsForDependencies } from '@nx/react/tailwind';
import { join } from 'path';
import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    colors,
    screens: {
      ...screensTheme,
      'max-md': { max: screensTheme.md },
    },
    fontFamily: {
      primary: ['var(--font-montserrat)'],
      secondary: ['var(--font-roboto)'],
      fivo: ['var(--font-fivo)'],
    },
    spacing: {
      ...generateSpacing([
        { keyStep: 0.5, valueStep: 2, until: 20 },
        { keyStep: 1, valueStep: 4, until: 120 },
      ]),
      '6*9': clampValue({ minSize: 24, maxSize: 36 }),
      '9*12': clampValue({ minSize: 36, maxSize: 48 }),
      '8*23': clampValue({ minSize: 32, maxSize: 92 }),
      '8*18': clampValue({ minSize: 32, maxSize: 72 }),
      '80p*200p': clampValue({ minSize: 80, maxSize: 200 }),
    },
    borderRadius: () => ({
      ...generateSpacing([
        { keyStep: 0.5, valueStep: 2, until: 20 },
        { keyStep: 1, valueStep: 4, until: 40 },
      ]),
      full: '9999px',
    }),
    lineHeight: {
      1: '1',
      '1.15': '1.15',
      '1.25': '1.25',
      '1.5': '1.5',
      '1.75': '1.75',
      '2': '2',
    },
    extend: {
      animation: {
        'spin-slow': 'spin 2s linear infinite',
      },
      fontSize: {
        '16*24': clampValue({ minSize: 16, maxSize: 24 }),
        '18*30': clampValue({ minSize: 16, maxSize: 30 }),
        '16*36': clampValue({ minSize: 16, maxSize: 36 }),
        '11*25': clampValue({ minSize: 45, maxSize: 100 }),
      },
      borderWidth: {
        none: 'none',
        1: '1px',
        2: '2px',
        3: '3px',
        4: '4px',
      },
      gridTemplateColumns: {
        'fit-140-1fr': 'repeat( auto-fit, minmax(140px, 1fr) )',
        '1-450-1': '1fr minmax(275px, 450px) 1fr',
      },
      maxWidth: {
        '3/4': '75%',
        '1/2': '50%',
        '1/3': '33.3%',
        '1/4': '25%',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.text-display': {
          fontSize: clampValue({ minSize: 48, maxSize: 100 }),
          lineHeight: '1.5',
          fontWeight: '700',
        },
        '.text-accent-big': {
          fontSize: clampValue({ minSize: 40, maxSize: 100 }),
          lineHeight: '1',
          fontWeight: '900',
          fontFamily: theme('fontFamily.fivo'),
        },
        '.text-accent-small': {
          fontSize: clampValue({ minSize: 31, maxSize: 45 }),
          lineHeight: '1.25',
          fontWeight: '700',
          fontFamily: theme('fontFamily.fivo'),
        },
        '.text-h1': {
          fontSize: clampValue({ minSize: 31, maxSize: 45 }),
          lineHeight: '1.25',
          fontWeight: '700',
        },
        '.text-h2': {
          fontSize: clampValue({ minSize: 28, maxSize: 36 }),
          lineHeight: '1.25',
          fontWeight: '700',
        },
        '.text-h3': {
          fontSize: clampValue({ minSize: 25, maxSize: 31 }),
          lineHeight: '1.25',
          fontWeight: '700',
        },
        '.text-h4': {
          fontSize: clampValue({ minSize: 22, maxSize: 27 }),
          lineHeight: '1.25',
          fontWeight: '700',
        },
        '.text-h5': {
          fontSize: clampValue({ minSize: 20, maxSize: 22 }),
          lineHeight: '1.25',
          fontWeight: '600',
        },
        '.text-h6': {
          fontSize: '18px',
          lineHeight: '1.25',
          fontWeight: '700',
        },
        '.text-body': {
          fontSize: '18px',
          lineHeight: '1.25',
          fontWeight: '500',
        },
        '.text-callout': {
          fontSize: '16px',
          lineHeight: '1.25',
        },
        '.text-caption': {
          fontSize: clampValue({ minSize: 12, maxSize: 14 }),
          lineHeight: '1.25',
        },
        '.text--outlined--primary-1': {
          '-webkit-text-stroke-color': theme('colors.primary'),
          '-webkit-text-strokeWidth': '1px',
        },
        '.text--outlined--primary-2': {
          '-webkit-text-stroke-color': theme('colors.primary'),
          '-webkit-text-strokeWidth': '2px',
        },
        '.text--outlined--primary-3': {
          '-webkit-text-stroke-color': theme('colors.primary'),
          '-webkit-text-strokeWidth': '3px',
        },
        '.form-group': {
          display: 'flex',
          flexDirection: 'column',
          '& + &': {
            marginTop: theme('spacing.7'),
          },
        },
        '.form-container': {
          maxWidth: rem(612),
          margin: 'auto',
        },
        '.image-cover': {
          objectFit: 'cover',
          width: '100%',
          height: '100%',
        },
      });
    }),
  ],
};
