'use client';
import EnclavesImg_main from '../../../assets/challenges_img.webp';
import NextImage from 'next/image';
import gsap from 'gsap';
import clsx from 'clsx';
import { ReactNode, useEffect, useRef } from 'react';
import { text } from '../../../lib/text';
import {
  CodeSvg,
  PlantSvg,
  UsersFourSvg,
  FileLockSvg,
} from '@tnf-workspace/react-components';
import { Button } from '@tnf-workspace/react-components';
import { Blurry } from '../../blurry';
import { Heading } from '../../heading';
import { useRouter } from 'next/navigation';
import { pageRoutes } from '../../../lib/pageRoutes';

type BlockProps = {
  title: string;
  description: string;
  icon: ReactNode;
};
const Block = ({ icon, title }: BlockProps) => {
  const blockCn = clsx(
    'service-item max-w-[358px] min-h-[295px] md:min-h-[215px] md:aspect-square bg-woodsmoke-950 rounded-6 px-6 py-6 lg:py-9 flex flex-col justify-between items-start gap-2.5 drop-shadow-primary border-1 border-orange-400'
  );
  const blockTitleCn = clsx('text-[20px] font-bold uppercase lg:text-[32px]');

  return (
    <div className={blockCn}>
      <div className="rounded-5 bg-primary flex items-center justify-center p-4">
        {icon}
      </div>
      <div className={blockTitleCn}>{title}</div>
    </div>
  );
};

export const OurServices = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { push } = useRouter();

  useEffect(() => {
    const items = ref.current?.querySelectorAll('.service-item');

    gsap.effects.bubbleUp(items, {
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
        end: 'bottom 20%',
      },
    });
  }, []);

  return (
    <div className="relative flex flex-col" ref={ref}>
      <Heading text={text.our_services} />
      <div className="inline-grid md:grid-cols-1-450-1 m-auto gap-8 md:gap-5 lg:gap-6 mt-13 px-6">
        <div className="flex justify-center flex-col gap-8 md:gap-5 lg:gap-6">
          <Block
            icon={
              <FileLockSvg className="min-w-8 w-8 h-8 lg:min-w-12 lg:w-12 lg:h-12" />
            }
            title="MOBILE SDK DEVELOPMENT"
            description="Enabling seamless app integration and enhanced functionality through custom software development kits tailored to your needs."
          />
          <Block
            icon={
              <CodeSvg className="min-w-8 w-8 h-8 lg:min-w-12 lg:w-12 lg:h-12" />
            }
            title="WEB DEVELOPMENT"
            description="Building dynamic and responsive websites to strengthen your online presence and improve user engagement."
          />
        </div>
        <div className="service-item flex flex-col bg-white border-2 border-orange-400 rounded-6 overflow-hidden pt-11 px-6 text-woodsmoke-950 max-md:min-h-[622px] lg:min-h-[622px]">
          <div className="text-h3 font-bold uppercase text-center">
            <div>MOBILE APP</div>
            <div>DEVELOPMENT</div>
          </div>
          <div className="flex-1 overflow-hidden relative">
            <NextImage
              src={EnclavesImg_main}
              alt=""
              width={420}
              height={852}
              className="absolute top-12 left-1/2 -translate-x-1/2"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center gap-8 md:gap-5 lg:gap-6">
          <Block
            icon={
              <PlantSvg className="min-w-8 w-8 h-8 lg:min-w-12 lg:w-12 lg:h-12" />
            }
            title="WEB DEVELOPMENT"
            description="Rapidly creating minimum viable products to test and validate your business ideas efficiently and cost-effectively."
          />
          <Block
            icon={
              <UsersFourSvg className="min-w-8 w-8 h-8 lg:min-w-12 lg:w-12 lg:h-12" />
            }
            title="STAFF AUGMENTATION"
            description="Providing specialized talent to augment your team, ensuring you meet project goals and deadlines with the right expertise."
          />
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <Button
          text="See our services"
          size="small"
          onClick={() => {
            push(pageRoutes.services);
          }}
        />
      </div>

      <div className="absolute left-1/2 top-1/2  max-md:-translate-y-1/2 md:left-0 -translate-x-1/2 md:-top-1/2 -z-10">
        <Blurry height={1200} width={1200} />
      </div>
    </div>
  );
};
