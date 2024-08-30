import { ReactNode } from 'react';
import { PlatformType } from './common';
import { StaticImageData } from 'next/image';

export const projects = [
  'enclaves',
  'wildly',
  'vera',
  'poolex',
  'pvolve',
  'testapp',
] as const;

export type ProjectCardProps = {
  domains: string[];
  TitleLogo: ReactNode;
  description: string;
  title: string;
  cta?: {
    text: string;
    link: string;
  };
  twTheme?: {
    twTextColor?: string;
    twDomainIndicatorColor?: string;
    twDomainTextColor?: string;
    twCtaTextColor?: string;
  };
  link: string;
  img: {
    desktop: {
      twWidth?: string;
      img: StaticImageData;
    };
    mobile: StaticImageData;
  };
  background?: {
    img?: StaticImageData;
    twColor?: string;
    tint?: {
      twColor: string;
      twOpacity: string;
    };
  };
};

export type ProjectType = (typeof projects)[number];

export type ProjectCardType = ProjectCardProps & {
  key: ProjectType;
  platform: PlatformType[];
};
