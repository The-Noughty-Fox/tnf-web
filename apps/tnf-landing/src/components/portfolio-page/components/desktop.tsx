import clsx from 'clsx';
import { Background } from './background';
import NextImage, { StaticImageData } from 'next/image';
import { ArrowUpRightSvg } from '@tnf-workspace/react-components';
import { Domain } from './domain';
import { ReactNode } from 'react';
import { text } from '@tnf-workspace/ts-lib';
import NextLink from 'next/link';
import styles from '../index.module.scss';

type DesktopProps = {
  TitleLogo: ReactNode;
  description: string;
  cta?: {
    text: string;
    link: string;
  };
  domains: string[];
  twTheme?: {
    twTextColor?: string;
    twDomainIndicatorColor?: string;
    twDomainTextColor?: string;
    twCtaTextColor?: string;
    twCtaBgColor?: string;
  };
  img: {
    desktop: {
      twWidth?: string;
      img: StaticImageData;
    };
    mobile: StaticImageData;
  };
  background?: {
    img?: StaticImageData;
    color?: string;
    tint?: {
      twColor: string;
      twOpacity: string;
    };
  };
  link: string;
};

export const Desktop = ({
  cta,
  domains,
  twTheme,
  img,
  TitleLogo,
  description,
  background,
  link,
}: DesktopProps) => {
  const descriptionClasses = clsx(
    twTheme?.twTextColor || 'text-current-color',
    'text-16*24 font-semibold mt-2 md:mt-3'
  );
  console.log({
    description,
    twTheme,
  });
  const ctaClasses = clsx(
    styles.link,
    twTheme?.twCtaTextColor || 'text-current-color',
    twTheme?.twCtaBgColor || 'bg-woodsmoke-50'
  );

  return (
    <div className="desktop rounded-10 overflow-hidden relative aspect-[1272/600] min-h-[417px] w-full max-w-[1272px]">
      {background && (
        <div className="desktop">
          <Background background={background} />
        </div>
      )}
      <div className="flex *:flex-1 h-full">
        <div className="relative">
          <div className="flex flex-col pl-8*23 py-8*18 h-full">
            <div className="flex flex-wrap gap-11">
              {domains.map((domain) => (
                <Domain
                  key={domain}
                  domain={domain}
                  theme={{
                    twDomainIndicatorColor:
                      twTheme?.twDomainIndicatorColor || 'bg-current-color',
                    twDomainTextColor:
                      twTheme?.twDomainTextColor || 'text-current-color',
                  }}
                />
              ))}
            </div>
            <div className="flex flex-col items-start my-auto">
              <div className="mt-auto">{TitleLogo}</div>
              <div className={descriptionClasses}>{description}</div>
              <NextLink
                data-text={text.view_case_study}
                className={ctaClasses}
                href={link}
              >
                <div className="overflow-hidden flex justify-center items-center gap-2">
                  <span
                    data-text={text.view_case_study}
                    className={styles.link__text}
                  >
                    {text.view_case_study}
                  </span>
                  <ArrowUpRightSvg width={20} height={20} />
                </div>
              </NextLink>
            </div>
          </div>
        </div>
        <div className="relative">
          <div
            className="absolute-center"
            style={{
              width: img.desktop.twWidth || 'w-auto',
            }}
          >
            <NextImage src={img.desktop.img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
