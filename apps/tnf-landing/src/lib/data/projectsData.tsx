import EnclavesImg_main from '../../assets/portfolio/enclaves/enclaves_main.png';
import EnclavesImg_mobile from '../../assets/portfolio/enclaves/enclaves_mobile.png';
import EnclavesSlide1 from '../../assets/portfolio/enclaves/slides/slide_1.webp';
import EnclavesSlide2 from '../../assets/portfolio/enclaves/slides/slide_2.webp';
import EnclavesSlide3 from '../../assets/portfolio/enclaves/slides/slide_3.webp';
import EnclavesSlide4 from '../../assets/portfolio/enclaves/slides/slide_4.webp';
import EnclavesSlide5 from '../../assets/portfolio/enclaves/slides/slide_5.webp';
import EnclavesSlide6 from '../../assets/portfolio/enclaves/slides/slide_6.webp';
import EnclavesImg_challenges from '../../assets/portfolio/enclaves/challenges_img.webp';

import WildlyImg_main from '../../assets/portfolio/wildly/wildly_main.png';
import WildlyImg_mobile from '../../assets/portfolio/wildly/wildly_mobile.png';
import WildlySlide1 from '../../assets/portfolio/wildly/slides/slide_1.png';
import WildlySlide2 from '../../assets/portfolio/wildly/slides/slide_2.png';
import WildlySlide3 from '../../assets/portfolio/wildly/slides/slide_3.png';
import WildlySlide4 from '../../assets/portfolio/wildly/slides/slide_4.png';
import WildlySlide5 from '../../assets/portfolio/wildly/slides/slide_5.png';
import WildlySlide6 from '../../assets/portfolio/wildly/slides/slide_6.png';
import WildlyChallengesImg from '../../assets/portfolio/wildly/challenges_img.png';

import PvolveImg_main from '../../assets/portfolio/pvolve/pvolve_main.png';
import PvolveImg_mobile from '../../assets/portfolio/pvolve/pvolve_mobile.png';
import PvolveImg_challenges from '../../assets/portfolio/pvolve/challenges_img.webp';
import PvolveSlide1 from '../../assets/portfolio/pvolve/slides/slide_1.png';
import PvolveSlide2 from '../../assets/portfolio/pvolve/slides/slide_2.png';

import PoolexImg_main from '../../assets/portfolio/poolex/poolex_main.png';
import PoolexImg_mobile from '../../assets/portfolio/poolex/poolex_mobile.png';
import PoolexImg_challenges from '../../assets/portfolio/poolex/challenges_img.png';
import PoolexSlide1 from '../../assets/portfolio/poolex/slides/slide_1.png';
import PoolexSlide2 from '../../assets/portfolio/poolex/slides/slide_2.png';
import PoolexSlide3 from '../../assets/portfolio/poolex/slides/slide_3.png';
import PoolexSlide4 from '../../assets/portfolio/poolex/slides/slide_4.png';

import VeraImg_main from '../../assets/portfolio/vera/vera_main.png';
import VeraMobile from '../../assets/portfolio/vera/vera_mobile.png';
import VeraImg_challenges from '../../assets/portfolio/vera/challenges_img.png';
import VeraSlide1 from '../../assets/portfolio/vera/slides/slide_1.png';
import VeraSlide2 from '../../assets/portfolio/vera/slides/slide_2.png';
import VeraSlide3 from '../../assets/portfolio/vera/slides/slide_3.png';

import TestAppSlide1 from '../../assets/portfolio/testapp/slides/slide_1.png';
import TestAppSlide2 from '../../assets/portfolio/testapp/slides/slide_2.png';
import TestAppSlide3 from '../../assets/portfolio/testapp/slides/slide_3.png';
import TestAppSlide4 from '../../assets/portfolio/testapp/slides/slide_4.png';
import TestAppImg_challenges from '../../assets/portfolio/testapp/challenges_img.png';

import { technologies } from './technologies';
import { ProjectType } from '../types/projects';
import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

export type ProjectDataItemType = {
  socials: { type: 'app store' | 'google play' | 'personal'; link: string }[];
  title: string;
  description: string;
  img: {
    x1: StaticImageData;
    x2?: StaticImageData;
    mobile: StaticImageData;
  };
  slides: { items: StaticImageData[]; width: number };
  challengesImg: {
    src: StaticImageData;
    width: number;
  };
  technologies: (keyof typeof technologies)[];
  challengesAndSolutions: { challenge: string; solution: string }[];
  projectInfo: {
    infoTitle: string;
    infoDescription: string;
    infoItems: { label: string; value: string }[];
  };
  projectScope?: {
    projectScopeTitle: string;
    projectScopeDescription: string;
  };
  quote: {
    text: string | ReactNode;
    author: {
      name: string;
      role: string;
      company: string;
    };
  };
  results: {
    label: string;
    value: string;
  }[];
};

type ProjectDataType = Record<ProjectType, ProjectDataItemType>;

export const projectsData: ProjectDataType = {
  enclaves: {
    socials: [
      { link: '', type: 'app store' },
      { link: '', type: 'google play' },
    ],
    title: 'Enclaves',
    description: 'Walk, conquer, and compete with others',
    img: {
      x1: EnclavesImg_main,
      mobile: EnclavesImg_mobile,
    },
    slides: {
      width: 300,
      items: [
        EnclavesImg_challenges,
        EnclavesSlide1,
        EnclavesSlide2,
        EnclavesSlide3,
        EnclavesSlide4,
        EnclavesSlide5,
        EnclavesSlide6,
      ],
    },
    challengesImg: {
      src: EnclavesImg_challenges,
      width: 358,
    },
    technologies: ['swift', 'swiftUi', 'uiKit', 'kotlin', 'jetpackCompose'],
    challengesAndSolutions: [
      {
        challenge:
          'Challenge number 1 was very hard, at first we didn’t know how to do it.',
        solution:
          'Solution number 1, since we are very professional guys we managed to find solution quickly.',
      },
      {
        challenge:
          'Challenge number 2 was even more harder, at first we didn’t know how to do it.',
        solution:
          'Solution number 2, since we are kapet very professional guys we managed to find solution efficiently.',
      },
      {
        challenge:
          'Challenge number 3 at first seemed easy, but then turned out very hard.',
        solution:
          'Solution number 3, since we are cine stie professional guys we managed to find solution for this too.',
      },
    ],
    projectInfo: {
      infoTitle: 'App that will boost your activity.',
      infoDescription: `Enclaves is a personal project of mine that I wanted to get into the world. I envisioned the app back in 2020, and, after many iterations, team meetings, and beta tests, in 2023 I released it to the public. It revolves around walking and conquering territories in your city, competing with other people and discovering new places, and is one of a kind.`,
      infoItems: [
        { label: 'Industries', value: 'Fitness' },
        { label: 'Services', value: 'iOS, Android' },
        { label: 'Team', value: '1 Android dev, 1 iOS devs, Backend dev' },
        { label: 'Country', value: 'USA' },
        { label: 'Year', value: '2021' },
        { label: 'Duration', value: '6 month' },
      ],
    },
    projectScope: {
      projectScopeTitle: 'Project scope (this one will be optional)',
      projectScopeDescription: `A short description, here we will give a sneak pic to intrigue the reader, like we had a super puper had technical problem and we managed to solve it in a blink of an eye.
      `,
    },
    quote: {
      text: (
        <>
          Very communicative and <b>pleasant to work with, highly motivated</b>{' '}
          and eager to provide the best possible solution. They respond quickly,
          have great skills, and vast relevant knowledge. They{' '}
          <b>provided excellent plans</b> and timelines for a complex project.
        </>
      ),
      author: {
        name: 'Oren Cohen',
        role: 'VP of R&D',
        company: 'ResonAI',
      },
    },
    results: [
      { label: 'Downloads', value: '10k' },
      { label: 'Active users', value: '5k' },
      { label: 'AppStore Rating', value: '4.5' },
    ],
  },
  poolex: {
    socials: [
      { link: '', type: 'app store' },
      { link: '', type: 'google play' },
    ],
    title: 'Poolex',
    description:
      'What could be more incredible than discovering new people, who want to do the same things as you, with you?  ',
    img: {
      x1: PoolexImg_main,
      mobile: PoolexImg_mobile,
    },
    slides: {
      width: 320,
      items: [
        PoolexImg_challenges,
        PoolexSlide1,
        PoolexSlide2,
        PoolexSlide3,
        PoolexSlide4,
      ],
    },
    challengesImg: {
      src: PoolexImg_challenges,
      width: 358,
    },
    technologies: ['swift', 'swiftUi', 'uiKit', 'kotlin', 'jetpackCompose'],
    challengesAndSolutions: [
      {
        challenge:
          'Challenge number 1 was very hard, at first we didn’t know how to do it.',
        solution:
          'Solution number 1, since we are very professional guys we managed to find solution quickly.',
      },
      {
        challenge:
          'Challenge number 2 was even more harder, at first we didn’t know how to do it.',
        solution:
          'Solution number 2, since we are kapet very professional guys we managed to find solution efficiently.',
      },
      {
        challenge:
          'Challenge number 3 at first seemed easy, but then turned out very hard.',
        solution:
          'Solution number 3, since we are cine stie professional guys we managed to find solution for this too.',
      },
    ],
    projectInfo: {
      infoTitle: 'App that will boost your activity.',
      infoDescription: `Enclaves is a personal project of mine that I wanted to get into the world. I envisioned the app back in 2020, and, after many iterations, team meetings, and beta tests, in 2023 I released it to the public. It revolves around walking and conquering territories in your city, competing with other people and discovering new places, and is one of a kind.`,
      infoItems: [
        { label: 'Industries', value: 'Fitness' },
        { label: 'Services', value: 'iOS, Android' },
        { label: 'Team', value: '1 Android dev, 1 iOS devs, Backend dev' },
        { label: 'Country', value: 'USA' },
        { label: 'Year', value: '2021' },
        { label: 'Duration', value: '6 month' },
      ],
    },
    projectScope: {
      projectScopeTitle: 'Project scope (this one will be optional)',
      projectScopeDescription: `A short description, here we will give a sneak pic to intrigue the reader, like we had a super puper had technical problem and we managed to solve it in a blink of an eye.
      `,
    },
    quote: {
      text: (
        <>
          Very communicative and <b>pleasant to work with, highly motivated</b>{' '}
          and eager to provide the best possible solution. They respond quickly,
          have great skills, and vast relevant knowledge. They{' '}
          <b>provided excellent plans</b> and timelines for a complex project.
        </>
      ),
      author: {
        name: 'Oren Cohen',
        role: 'VP of R&D',
        company: 'ResonAI',
      },
    },
    results: [
      { label: 'Downloads', value: '10k' },
      { label: 'Active users', value: '5k' },
      { label: 'AppStore Rating', value: '4.5' },
    ],
  },
  pvolve: {
    socials: [
      { link: '', type: 'app store' },
      { link: '', type: 'google play' },
    ],
    title: 'Pvolve',
    description:
      'Pvolve is a fitness company with a revolutionary method combining low-impact functional movements with resistance equipment for unbeatable results.',
    img: {
      x1: PvolveImg_main,
      mobile: PvolveImg_mobile,
    },
    technologies: ['swift', 'swiftUi', 'uiKit', 'kotlin', 'jetpackCompose'],
    slides: {
      width: 300,
      items: [PvolveImg_challenges, PvolveImg_main, PvolveSlide1, PvolveSlide2],
    },
    challengesImg: {
      src: PvolveImg_challenges,
      width: 358,
    },
    challengesAndSolutions: [
      {
        challenge:
          'Challenge number 1 was very hard, at first we didn’t know how to do it.',
        solution:
          'Solution number 1, since we are very professional guys we managed to find solution quickly.',
      },
      {
        challenge:
          'Challenge number 2 was even more harder, at first we didn’t know how to do it.',
        solution:
          'Solution number 2, since we are kapet very professional guys we managed to find solution efficiently.',
      },
      {
        challenge:
          'Challenge number 3 at first seemed easy, but then turned out very hard.',
        solution:
          'Solution number 3, since we are cine stie professional guys we managed to find solution for this too.',
      },
    ],
    projectInfo: {
      infoTitle: 'App that will boost your activity.',
      infoDescription: `Enclaves is a personal project of mine that I wanted to get into the world. I envisioned the app back in 2020, and, after many iterations, team meetings, and beta tests, in 2023 I released it to the public. It revolves around walking and conquering territories in your city, competing with other people and discovering new places, and is one of a kind.`,
      infoItems: [
        { label: 'Industries', value: 'Fitness' },
        { label: 'Services', value: 'iOS, Android' },
        { label: 'Team', value: '1 Android dev, 1 iOS devs, Backend dev' },
        { label: 'Country', value: 'USA' },
        { label: 'Year', value: '2021' },
        { label: 'Duration', value: '6 month' },
      ],
    },
    quote: {
      text: (
        <>
          Very communicative and <b>pleasant to work with, highly motivated</b>{' '}
          and eager to provide the best possible solution. They respond quickly,
          have great skills, and vast relevant knowledge. They{' '}
          <b>provided excellent plans</b> and timelines for a complex project.
        </>
      ),
      author: {
        name: 'Oren Cohen',
        role: 'VP of R&D',
        company: 'ResonAI',
      },
    },
    results: [
      { label: 'Downloads', value: '10k' },
      { label: 'Active users', value: '5k' },
      { label: 'AppStore Rating', value: '4.5' },
    ],
  },
  vera: {
    socials: [
      { link: '', type: 'app store' },
      { link: '', type: 'google play' },
    ],
    title: 'Vera',
    description:
      'Vera is elevating the Mall experience by creating an intelligent ecosystem for building management using embedded AI and AR.',
    img: {
      x1: VeraImg_main,
      mobile: VeraMobile,
    },
    technologies: ['swift', 'swiftUi', 'uiKit', 'kotlin', 'jetpackCompose'],
    slides: {
      width: 330,
      items: [VeraImg_challenges, VeraSlide1, VeraSlide2, VeraSlide3],
    },
    challengesImg: {
      src: VeraImg_challenges,
      width: 358,
    },
    challengesAndSolutions: [
      {
        challenge:
          'Challenge number 1 was very hard, at first we didn’t know how to do it.',
        solution:
          'Solution number 1, since we are very professional guys we managed to find solution quickly.',
      },
      {
        challenge:
          'Challenge number 2 was even more harder, at first we didn’t know how to do it.',
        solution:
          'Solution number 2, since we are kapet very professional guys we managed to find solution efficiently.',
      },
      {
        challenge:
          'Challenge number 3 at first seemed easy, but then turned out very hard.',
        solution:
          'Solution number 3, since we are cine stie professional guys we managed to find solution for this too.',
      },
    ],
    projectInfo: {
      infoTitle: 'App that will boost your activity.',
      infoDescription: `Enclaves is a personal project of mine that I wanted to get into the world. I envisioned the app back in 2020, and, after many iterations, team meetings, and beta tests, in 2023 I released it to the public. It revolves around walking and conquering territories in your city, competing with other people and discovering new places, and is one of a kind.`,
      infoItems: [
        { label: 'Industries', value: 'Fitness' },
        { label: 'Services', value: 'iOS, Android' },
        { label: 'Team', value: '1 Android dev, 1 iOS devs, Backend dev' },
        { label: 'Country', value: 'USA' },
        { label: 'Year', value: '2021' },
        { label: 'Duration', value: '6 month' },
      ],
    },
    quote: {
      text: (
        <>
          Very communicative and <b>pleasant to work with, highly motivated</b>{' '}
          and eager to provide the best possible solution. They respond quickly,
          have great skills, and vast relevant knowledge. They{' '}
          <b>provided excellent plans</b> and timelines for a complex project.
        </>
      ),
      author: {
        name: 'Oren Cohen',
        role: 'VP of R&D',
        company: 'ResonAI',
      },
    },
    results: [
      { label: 'Downloads', value: '10k' },
      { label: 'Active users', value: '5k' },
      { label: 'AppStore Rating', value: '4.5' },
    ],
  },
  wildly: {
    socials: [
      { link: '', type: 'app store' },
      { link: '', type: 'google play' },
    ],
    title: 'Wildly',
    description:
      'Transform Intention into Action: Simplify Your Start, Track Your Journey, Visualize Your Progress',
    img: {
      x1: WildlyImg_main,
      mobile: WildlyImg_mobile,
    },
    technologies: ['swift', 'swiftUi', 'uiKit', 'kotlin', 'jetpackCompose'],
    slides: {
      width: 300,
      items: [
        WildlySlide1,
        WildlySlide2,
        WildlySlide3,
        WildlySlide4,
        WildlySlide5,
        WildlySlide6,
      ],
    },
    challengesImg: {
      src: WildlyChallengesImg,
      width: 358,
    },
    challengesAndSolutions: [
      {
        challenge:
          'Challenge number 1 was very hard, at first we didn’t know how to do it.',
        solution:
          'Solution number 1, since we are very professional guys we managed to find solution quickly.',
      },
      {
        challenge:
          'Challenge number 2 was even more harder, at first we didn’t know how to do it.',
        solution:
          'Solution number 2, since we are kapet very professional guys we managed to find solution efficiently.',
      },
      {
        challenge:
          'Challenge number 3 at first seemed easy, but then turned out very hard.',
        solution:
          'Solution number 3, since we are cine stie professional guys we managed to find solution for this too.',
      },
    ],
    projectInfo: {
      infoTitle: 'App that will boost your activity.',
      infoDescription: `Enclaves is a personal project of mine that I wanted to get into the world. I envisioned the app back in 2020, and, after many iterations, team meetings, and beta tests, in 2023 I released it to the public. It revolves around walking and conquering territories in your city, competing with other people and discovering new places, and is one of a kind.`,
      infoItems: [
        { label: 'Industries', value: 'Fitness' },
        { label: 'Services', value: 'iOS, Android' },
        { label: 'Team', value: '1 Android dev, 1 iOS devs, Backend dev' },
        { label: 'Country', value: 'USA' },
        { label: 'Year', value: '2021' },
        { label: 'Duration', value: '6 month' },
      ],
    },
    quote: {
      text: (
        <>
          Very communicative and <b>pleasant to work with, highly motivated</b>{' '}
          and eager to provide the best possible solution. They respond quickly,
          have great skills, and vast relevant knowledge. They{' '}
          <b>provided excellent plans</b> and timelines for a complex project.
        </>
      ),
      author: {
        name: 'Oren Cohen',
        role: 'VP of R&D',
        company: 'ResonAI',
      },
    },
    results: [
      { label: 'Downloads', value: '10k' },
      { label: 'Active users', value: '5k' },
      { label: 'AppStore Rating', value: '4.5' },
    ],
  },
  testapp: {
    socials: [
      { link: '', type: 'app store' },
      { link: '', type: 'google play' },
    ],
    title: 'TestApp',
    description: 'Effortless distribution Game-changing feedback',
    img: {
      x1: WildlyImg_main,
      mobile: WildlyImg_mobile,
    },
    technologies: ['swift', 'swiftUi', 'uiKit', 'kotlin', 'jetpackCompose'],
    slides: {
      width: 320,
      items: [
        TestAppImg_challenges,
        TestAppSlide1,
        TestAppSlide2,
        TestAppSlide3,
        TestAppSlide4,
      ],
    },
    challengesImg: {
      src: TestAppImg_challenges,
      width: 358,
    },
    challengesAndSolutions: [
      {
        challenge:
          'Challenge number 1 was very hard, at first we didn’t know how to do it.',
        solution:
          'Solution number 1, since we are very professional guys we managed to find solution quickly.',
      },
      {
        challenge:
          'Challenge number 2 was even more harder, at first we didn’t know how to do it.',
        solution:
          'Solution number 2, since we are kapet very professional guys we managed to find solution efficiently.',
      },
      {
        challenge:
          'Challenge number 3 at first seemed easy, but then turned out very hard.',
        solution:
          'Solution number 3, since we are cine stie professional guys we managed to find solution for this too.',
      },
    ],
    projectInfo: {
      infoTitle: 'App that will boost your activity.',
      infoDescription: `Enclaves is a personal project of mine that I wanted to get into the world. I envisioned the app back in 2020, and, after many iterations, team meetings, and beta tests, in 2023 I released it to the public. It revolves around walking and conquering territories in your city, competing with other people and discovering new places, and is one of a kind.`,
      infoItems: [
        { label: 'Industries', value: 'Fitness' },
        { label: 'Services', value: 'iOS, Android' },
        { label: 'Team', value: '1 Android dev, 1 iOS devs, Backend dev' },
        { label: 'Country', value: 'USA' },
        { label: 'Year', value: '2021' },
        { label: 'Duration', value: '6 month' },
      ],
    },
    quote: {
      text: (
        <>
          Very communicative and <b>pleasant to work with, highly motivated</b>{' '}
          and eager to provide the best possible solution. They respond quickly,
          have great skills, and vast relevant knowledge. They{' '}
          <b>provided excellent plans</b> and timelines for a complex project.
        </>
      ),
      author: {
        name: 'Oren Cohen',
        role: 'VP of R&D',
        company: 'ResonAI',
      },
    },
    results: [
      { label: 'Downloads', value: '10k' },
      { label: 'Active users', value: '5k' },
      { label: 'AppStore Rating', value: '4.5' },
    ],
  },
};
