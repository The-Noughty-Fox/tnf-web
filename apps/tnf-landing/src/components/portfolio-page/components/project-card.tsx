import { ReactNode } from 'react';
import NextLink from 'next/link';
import { Desktop } from './desktop';
import { Mobile } from './mobile';
import { StaticImageData } from 'next/image';

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

export const ProjectCard = ({
  domains,
  title,
  description,
  TitleLogo,
  link,
  twTheme = {},
  img,
  background,
}: ProjectCardProps) => {
  return (
    <>
      <Desktop
        TitleLogo={TitleLogo}
        description={description}
        domains={domains}
        img={img}
        twTheme={twTheme}
        background={background}
        link={link}
      />
      <Mobile
        title={title}
        description={description}
        img={img.mobile}
        link={link}
      />
    </>
  );
};
