const {
  createGlobPatternsForDependencies,
} = require('@nxtensions/astro/tailwind');
const { join } = require('path');
const { colors, generateSpacing, clampValue, rem, screensTheme } = require('../../dist/ts-lib')
import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      'src/**/!(*.stories|*.spec).{astro,html,js,jsx,md,svelte,ts,tsx,vue}'
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
      fivo: ['var(--font-fivo)'],
    },
    spacing: {
      ...generateSpacing([
        { keyStep: 0.5, valueStep: 2, until: 20 },
        { keyStep: 1, valueStep: 4, until: 120 },
      ]),
      '80p*200p': clampValue({ minSize: 80, maxSize: 200 }),
    },
    lineHeight: {
      1: '1',
      '1.15': '1.15',
      '1.25': '1.25',
      '1.5': '1.5',
      '1.75': '1.75',
      '2': '2',
    },
    borderRadius: () => ({
      ...generateSpacing([
        { keyStep: 0.5, valueStep: 2, until: 20 },
        { keyStep: 1, valueStep: 4, until: 40 },
      ]),
      full: '9999px',
    }),
    extend: {
      fontSize: {
        '16*24': clampValue({ minSize: 16, maxSize: 24 }),
        '18*30': clampValue({ minSize: 16, maxSize: 30 }),
        '16*36': clampValue({ minSize: 16, maxSize: 36 }),
        '11*25': clampValue({ minSize: 45, maxSize: 100 }),
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
          '-webkit-text-stroke-width': '1px',
        },
        '.text--outlined--primary-2': {
          '-webkit-text-stroke-color': theme('colors.primary'),
          '-webkit-text-stroke-width': '2px',
        },
        '.text--outlined--primary-3': {
          '-webkit-text-stroke-color': theme('colors.primary'),
          '-webkit-text-stroke-width': '3px',
        },
        '.text--outlined--white-1': {
          '-webkit-text-stroke-color': theme('colors.white'),
          '-webkit-text-stroke-width': '1px',
        },
        '.text--outlined--white-2': {
          '-webkit-text-stroke-color': theme('colors.white'),
          '-webkit-text-stroke-width': '2px',
        },
        '.text--outlined--white-3': {
          '-webkit-text-stroke-color': theme('colors.white'),
          '-webkit-text-stroke-width': '3px',
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
    })
  ],
};
