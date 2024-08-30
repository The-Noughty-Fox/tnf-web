import EnclavesImg_main from '../../assets/portfolio/enclaves/enclaves_main.webp';
import EnclavesImg_mobile from '../../assets/portfolio/enclaves/enclaves_mobile.jpg';
import WildlyImgBg from '../../assets/portfolio/wildly/portfolio_wildly_bg.webp';
import WildlyImg_main from '../../assets/portfolio/wildly/wildly_main.webp';
import WildlyImg_mobile from '../../assets/portfolio/wildly/wildly_mobile.jpg';
import VeraImg_main from '../../assets/portfolio/vera/vera_main.webp';
import VeraImg_mobile from '../../assets/portfolio/vera/vera_mobile.jpg';
import PoolexImg_main from '../../assets/portfolio/poolex/poolex_main.webp';
import PoolexImg_mobile from '../../assets/portfolio/poolex/poolex_mobile.jpg';
import PvolveImg_main from '../../assets/portfolio/pvolve/pvolve_main.webp';
import PvolveImg_mobile from '../../assets/portfolio/pvolve/pvolve_mobile.jpg';
import PvolveImg_bg from '../../assets/portfolio/pvolve/pvolve_bg.png';
import TestAppImg_main from '../../assets/portfolio/testapp/testapp_main.jpg';
import TestAppImg_title from '../../assets/portfolio/testapp/testapp_title.png';
import TestAppImg_mobile from '../../assets/portfolio/testapp/testapp_mobile.jpg';
import EnclavesImg_title from '../../assets/clients/enclaves.png';
import PvolveImg_title from '../../assets/clients/pvolve.png';
import PoolexImg_title from '../../assets/clients/poolex.png';
import VeraImg from '../../assets/clients/vera.png';
import WildlyImg from '../../assets/clients/wildy.png';
import { ProjectCardType } from '../types/projects';
import { clampValue } from '@tnf-workspace/ts-lib';
import { pageRoutes } from '../pageRoutes';
import NextImage from 'next/image';

export const projectCards: ProjectCardType[] = [
  {
    key: 'enclaves',
    img: {
      desktop: {
        img: EnclavesImg_main,
        twWidth: clampValue({ minSize: 150, maxSize: 425 }),
      },
      mobile: EnclavesImg_mobile,
    },
    background: {
      twColor: 'bg-white',
    },
    link: pageRoutes.projectDetails('enclaves'),
    TitleLogo: (
      <NextImage
        style={{
          width: clampValue({
            minSize: 166,
            maxSize: 288,
          }),
        }}
        src={EnclavesImg_title}
        alt="Enclaves project logo"
      />
    ),
    title: 'Enclaves',
    description: 'Walk, conquer, and compete with others',
    domains: ['Fitness', 'Travel'],
    cta: {
      text: 'View case study',
      link: '#',
    },
    twTheme: {
      twDomainIndicatorColor: 'bg-black',
      twDomainTextColor: 'text-black',
      twTextColor: 'text-black',
      twCtaTextColor: 'text-black',
    },
    platform: ['ios', 'android'],
  },
  {
    key: 'wildly',
    img: {
      desktop: {
        img: WildlyImg_main,
        twWidth: clampValue({ minSize: 150, maxSize: 425 }),
      },
      mobile: WildlyImg_mobile,
    },
    background: {
      img: WildlyImgBg,
      tint: {
        twOpacity: 'opacity-50',
        twColor: 'bg-violet',
      },
    },
    link: pageRoutes.projectDetails('wildly'),
    TitleLogo: (
      <NextImage
        style={{
          width: clampValue({
            minSize: 94,
            maxSize: 166,
          }),
        }}
        src={WildlyImg}
        alt="Wildly project logo"
      />
    ),
    title: 'Wildly',
    description:
      'Transform Intention into Action: Simplify Your Start, Track Your Journey, Visualize Your Progress',
    domains: ['Fitness'],
    cta: {
      text: 'View case study',
      link: '#',
    },
    twTheme: {
      twDomainIndicatorColor: 'bg-violet',
      twTextColor: 'text-woodsmoke-50',
      twCtaTextColor: 'text-woodsmoke-950',
      twDomainTextColor: 'text-woodsmoke-50',
    },
    platform: ['android', 'ios'],
  },
  {
    key: 'vera',
    img: {
      desktop: {
        img: VeraImg_main,
        twWidth: clampValue({ minSize: 150, maxSize: 425 }),
      },
      mobile: VeraImg_mobile,
    },
    background: {
      twColor: 'bg-gradient-to-r from-[#00737B] to-[#00AEBF]',
    },
    link: pageRoutes.projectDetails('vera'),
    TitleLogo: (
      <NextImage
        style={{
          width: clampValue({
            minSize: 90,
            maxSize: 190,
          }),
        }}
        src={VeraImg}
        alt={'Vera project logo'}
      />
    ),
    title: 'Vera',
    description:
      'Elevate the mall experience with AI and AR-powered intelligent building management',
    domains: ['Travel', 'VR'],
    cta: {
      text: 'View case study',
      link: '#',
    },
    twTheme: {
      twDomainIndicatorColor: 'bg-cyan',
      twTextColor: 'text-woodsmoke-50',
      twCtaTextColor: 'text-woodsmoke-950',
      twDomainTextColor: 'text-woodsmoke-50',
    },
    platform: ['android', 'ios'],
  },
  {
    key: 'poolex',
    img: {
      desktop: {
        img: PoolexImg_main,
        twWidth: clampValue({ minSize: 150, maxSize: 425 }),
      },
      mobile: PoolexImg_mobile,
    },
    background: {
      twColor: 'bg-gradient-to-r from-[#12BBE2] to-[#00275E]',
    },
    link: pageRoutes.projectDetails('poolex'),
    TitleLogo: (
      <NextImage
        style={{
          width: clampValue({
            minSize: 130,
            maxSize: 288,
          }),
        }}
        src={PoolexImg_title}
        alt="Poolex project logo"
      />
    ),
    title: 'Poolex',
    description: 'Your AI assistant for easy pool maintenance.',
    domains: ['Social'],
    cta: {
      text: 'View case study',
      link: '#',
    },
    twTheme: {
      twDomainIndicatorColor: 'bg-deep-blue',
      twTextColor: 'text-black',
      twCtaTextColor: 'text-woodsmoke-950',
      twDomainTextColor: 'text-woodsmoke-950',
    },
    platform: ['android', 'ios'],
  },
  {
    key: 'pvolve',
    img: {
      desktop: {
        img: PvolveImg_main,
        twWidth: clampValue({ minSize: 150, maxSize: 425 }),
      },
      mobile: PvolveImg_mobile,
    },
    background: {
      img: PvolveImg_bg,
    },
    link: pageRoutes.projectDetails('pvolve'),
    TitleLogo: (
      <NextImage
        style={{
          width: clampValue({
            minSize: 140,
            maxSize: 288,
          }),
        }}
        src={PvolveImg_title}
        alt="Pvolve project logo"
      />
    ),
    title: 'Pvolve',
    description:
      'Fitness through low-impact functional movements and resistance equipment.',
    domains: ['Fitness'],
    cta: {
      text: 'View case study',
      link: '#',
    },
    twTheme: {
      twDomainIndicatorColor: 'bg-woodsmoke-900',
      twTextColor: 'text-woodsmoke-600',
      twCtaTextColor: 'bg-woodsmoke-950',
      twDomainTextColor: 'text-woodsmoke-900',
    },
    platform: ['web'],
  },
  {
    key: 'testapp',
    img: {
      desktop: {
        img: TestAppImg_main,
        twWidth: clampValue({ minSize: 150, maxSize: 525 }),
      },
      mobile: TestAppImg_mobile,
    },
    background: {
      twColor: 'bg-ocean-blue',
    },
    link: pageRoutes.projectDetails('testapp'),
    TitleLogo: (
      <NextImage
        style={{
          width: clampValue({
            minSize: 140,
            maxSize: 288,
          }),
        }}
        src={TestAppImg_title}
        alt="TestApp project logo"
      />
    ),
    title: 'TestApp',
    description: 'Effortless distribution game-changing feedback',
    domains: ['Productivity'],
    cta: {
      text: 'View case study',
      link: '#',
    },
    twTheme: {
      twDomainIndicatorColor: 'bg-white',
      twTextColor: 'text-white',
      twCtaTextColor: 'text-woodsmoke-950',
      twDomainTextColor: 'text-white',
    },
    platform: ['web', 'ios'],
  },
];
