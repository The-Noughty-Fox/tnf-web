'use client';
import { gsap } from 'gsap';
import { ReactElement, useEffect, useRef } from 'react';
import { Container } from '@tnf-workspace/react-components';
import { Heading } from './heading';
import { Blurry } from './blurry';
import { WriteUs } from './write-us';
import PinSvg from '../assets/pin.svg';
import EnvelopeSvg from '../assets/envelope.svg';
import PhoneSvg from '../assets/phone.svg';
import Image from 'next/image';

type ContactsProps = {
  controlText?: string;
  Icon?: ReactElement;
};

export const Contacts = ({ Icon, controlText = 'Write us' }: ContactsProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      gsap.effects.bubbleUp('.contact-item', {
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          end: 'bottom 20%',
        },
      });
    }
  }, []);

  return (
    <div>
      <Container>
        <Heading text={'Contacts'} />
        <div className="mt-15 flex gap-10 justify-between relative">
          <div className="flex-1 flex justify-center">
            <WriteUs controlText={controlText} Icon={Icon} />
          </div>
          <div ref={ref} className="relative hidden md:block pb-20 mt-15">
            <div className="contact-item">
              <div className="text-accent-small uppercase">find us here</div>
              <a
                href="geo:47.014692372064346,28.826751583616392"
                className="text-h6 text-orange-400"
              >
                Mateevichi str, 27, Chisinau, MD
              </a>
            </div>
            <div className="contact-item mt-[112px]">
              <div className="text-accent-small uppercase">email us</div>
              <a
                href="mailto:info@thenoughtyfox.com"
                className="text-h6 text-orange-400"
              >
                info@thenoughtyfox.com
              </a>
            </div>
            <div className="contact-item mt-[112px]">
              <div className="text-accent-small uppercase">call us</div>
              <a href="tel:+(373)69121314" className="text-h6 text-orange-400">
                +(373) 69 12 13 14
              </a>
            </div>
            <Image
              src={PinSvg}
              alt=""
              className="-z-10 absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"
            />
            <Image
              src={EnvelopeSvg}
              alt=""
              className="-z-10 absolute top-1/2 right-0 translate-x-1/2 -translate-y-full"
            />
            <Image
              src={PhoneSvg}
              alt=""
              className="-z-10 absolute top-1/2 left-0 -translate-x-1/2"
            />
          </div>

          <div className="absolute -translate-x-1/2 -top-1/2 -z-10">
            <Blurry height={1400} width={1400} />
          </div>
        </div>
      </Container>
    </div>
  );
};
