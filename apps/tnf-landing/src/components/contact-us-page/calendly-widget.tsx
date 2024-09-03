'use client';
import { InlineWidget } from 'react-calendly';

export const CalendlyWidget = () => {
  return (
    <InlineWidget
      styles={{ height: 1000 }}
      url="https://calendly.com/alex-thenoughtyfox/30min"
    />
  );
};
