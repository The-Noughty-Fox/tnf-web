import EnclavesImg_main from '../../assets/portfolio/enclaves/enclaves_main.png';
import EnclavesImg_mobile from '../../assets/portfolio/enclaves/enclaves_mobile.png';
import EnclavesSlide1 from '../../assets/portfolio/enclaves/slides/slide_1.webp';
import EnclavesSlide2 from '../../assets/portfolio/enclaves/slides/slide_2.webp';
import EnclavesSlide3 from '../../assets/portfolio/enclaves/slides/slide_3.webp';
import EnclavesSlide4 from '../../assets/portfolio/enclaves/slides/slide_4.webp';
import EnclavesSlide5 from '../../assets/portfolio/enclaves/slides/slide_5.webp';
import EnclavesSlide6 from '../../assets/portfolio/enclaves/slides/slide_6.webp';
import EnclavesImg_challenges from '../../assets/portfolio/enclaves/challenges_img.webp';

import WildyImg_main from '../../assets/portfolio/wildy/wildy_main.png';
import WildyImg_mobile from '../../assets/portfolio/wildy/wildy_mobile.png';
import WildySlide1 from '../../assets/portfolio/wildy/slides/slide_1.png';
import WildySlide2 from '../../assets/portfolio/wildy/slides/slide_2.png';
import WildySlide3 from '../../assets/portfolio/wildy/slides/slide_3.png';
import WildySlide4 from '../../assets/portfolio/wildy/slides/slide_4.png';
import WildySlide5 from '../../assets/portfolio/wildy/slides/slide_5.png';
import WildySlide6 from '../../assets/portfolio/wildy/slides/slide_6.png';
import WildyChallengesImg from '../../assets/portfolio/wildy/challenges_img.png';

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
  socials: {
    type: 'app store' | 'google play' | 'personal' | 'figma' | 'upwork';
    link: string;
  }[];
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

const enclaves: ProjectDataItemType = {
  socials: [
    {
      link: 'https://apps.apple.com/lt/app/enclaves/id1621019774',
      type: 'app store',
    },
    {
      link: 'https://play.google.com/store/apps/details?id=com.thenoughtyfox.enclaves&hl=en_US',
      type: 'google play',
    },
    {
      link: 'https://www.figma.com/design/f6rym01amKjsxRamBQCKl6/Enclaves-app?node-id=11-55&t=We8gZEiKuNJ5es2x-1',
      type: 'figma',
    },
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
  technologies: [
    'swift',
    'swiftUi',
    'uiKit',
    'kotlin',
    'jetpackCompose',
    'mapbox',
    'h3',
  ],
  challengesAndSolutions: [
    {
      challenge:
        '<em>PERFORMANCE</em><br>Displaying that many elements on a map while keeping the smooth scroll is very challenging.',
      solution:
        '<em>MAPBOX</em><br>We ended up using Mapbox and their advanced rendering algorithms to make sure the app runs smoothly on all devices.',
    },
    {
      challenge:
        '<em>WALKING DETECTION</em><br>Detecting accurately whether the user is currently walking or not proved to be a big challenge.',
      solution:
        '<em>SENSOR PIPELINE</em><br>We built a pipeline involving the accelerometer, gyroscope and GPS data to accurately detect the user’s activity.',
    },
    {
      challenge:
        "<em>CLUSTERING</em><br>Clustering users' walking paths on into something tangible on a map was a challenge we struggled to solve for a long time.",
      solution:
        "<em>H3</em><br>We ended up using Uber's H3 library to cluster the paths, and it solved many other issues in the process.",
    },
  ],
  projectInfo: {
    infoTitle: 'Conquer your city',
    infoDescription:
      'Walk out the door, put the phone in your pocket and re-discover your city. <br><br>Compete with friends and people from your city for the biggest territory!',
    infoItems: [
      { label: 'Industries', value: 'Fitness<br>Gaming' },
      { label: 'Services', value: 'Mobile<br>Backend<br>Design' },
      {
        label: 'Team',
        value: 'Android<br>iOS<br>Backend<br>UX Designer',
      },
      { label: 'Country', value: 'Moldova' },
      { label: 'Year', value: '2021' },
      { label: 'Duration', value: '1.5 years' },
    ],
  },
  projectScope: {
    projectScopeTitle: 'Project scope',
    projectScopeDescription:
      'The project involved building a real-time application that would allow users to walk around the city and conquer territories. The app had to be engaging, easy to use, and visually appealing. It should work smoothly on all devices, and displaying that many elements on a map is very challenging.',
  },
  quote: {
    text: (
      <>
        This was a personal project of mine following{' '}
        <b>my passion for walking and discovering new places</b> in the city.
        The project will always stay in my heart as it was the project we{' '}
        <b>built the team and the company</b> around.
      </>
    ),
    author: {
      name: 'Alex Culeva',
      role: 'CEO',
      company: 'The Noguhty Fox',
    },
  },
  results: [
    { label: 'Walks Finished', value: '11.2k' },
    { label: 'Coordinates Tracked', value: '4.7M' },
    { label: 'Countries Walked', value: '17' },
    { label: 'Hexagons Conquered', value: '47.3k' },
  ],
};

/* PORTFOLIO DATA */
const wildy: ProjectDataItemType = {
  socials: [
    { link: 'https://www.figma.com/design/UHMlrCi4K2aKolP0MjJfyP/Wildy-Training-journal?node-id=1420-4069&t=1CEX2VxHk8wRhx3L-1', type: 'figma' },
  ],
  title: 'Wildy',
  description: 'Making Working Out Fun Again',
  img: {
    x1: WildyImg_main,
    mobile: WildyImg_mobile,
  },
  technologies: ['swift', 'swiftUi', 'uiKit', 'kotlin', 'jetpackCompose'],
  slides: {
    width: 300,
    items: [
      WildySlide1,
      WildySlide2,
      WildySlide3,
      WildySlide4,
      WildySlide5,
      WildySlide6,
    ],
  },
  challengesImg: {
    src: WildyChallengesImg,
    width: 358,
  },
  challengesAndSolutions: [
    {
      challenge: '<em>TEMPLATES</em><br>Creating generic enough workout templates that would fit all types of exercises was a challenge',
      solution: '<em>GENERIC DATA MODEL</em><br>We ended up creating such a generic data model that even a metric type was generic.',
    },
    {
      challenge: '<em>SHARING</em><br>Sharing workout templates with people, letting them edit it and keeping the history was difficult.',
      solution: '<em>VERSION GRAPH</em><br>We ended up implementing a version graph for the templates, so that people could see the history and reuse specific versions.',
    },
  ],
  projectInfo: {
    infoTitle: 'Social Training Journal',
    infoDescription: "Wildy is a social training journal that helps you track your workouts, share them with friends, and get inspired by others.<br><br>It's a fun and engaging way to stay motivated and reach your fitness goals.",
    infoItems: [
      { label: 'Industries', value: 'Fitness' },
      { label: 'Services', value: 'Mobile' },
      { label: 'Team', value: 'Design' },
      { label: 'Country', value: 'Moldova' },
      { label: 'Year', value: '2021' },
      { label: 'Duration', value: '1 month' },
    ],
  },
  quote: {
    text: (
      <>
        It was a common project of ours following our love for working out and fitness.

        We constantly tracked our workouts in a physical diary, and in order to share it between ourselves we had to basically take photos of a page in that diary.
      </>
    ),
    author: {
      name: 'Alex Culeva, Victor Lisnic',
      role: 'CEO, CTO',
      company: 'The Noughty Fox',
    },
  },
  results: [],
}

const vera: ProjectDataItemType = {
  socials: [
    { link: 'https://apps.apple.com/il/app/vera-by-resonai/id1518779942', type: 'app store' },
    { link: 'https://play.google.com/store/apps/details?id=com.resonai.irocket&hl=en', type: 'google play' },
    { link: 'https://www.resonai.com', type: 'personal' }
  ],
  title: 'Vera',
  description:
    'Vera is elevating the Mall experience by creating an intelligent ecosystem for building management using embedded AI and AR.',
  img: {
    x1: VeraImg_main,
    mobile: VeraMobile,
  },
  technologies: ['swift', 'kotlin', 'arKit', 'arCore', 'gRPC'],
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
      challenge: '<em>PERFORMANCE</em><br>Performance was a big challenge. Running ARKit in 60fps, rendering and communicating with a webview, and processing each frame on-device is very resource-heavy.',
      solution: '<em>METAL</em><br>We ended up using Metal for rendering, and after off-loading many operations on background threads, we managed to get from 13fps to 60fps.',
    },
    {
      challenge: '<em>RENDER SYNC</em><br>Syncing the ARKit (camera) frames with the webview frames was a challenge as we wanted the content to move in sync with the world.',
      solution: '<em>FRAME SYNC</em><br>We implemented a custom frame sync mechanism that would not render the ARKit frame until webview wouldn\'t finalize it\'s pipeline, and it worked like a charm.',
    },
    {
      challenge: '<em>ASYNC STATE MANAGEMENT</em><br>Managing the state of the ARKit, webview, GRPC connection, many background services, and the UI was a major challenge.',
      solution: '<em>THE MALL</em><br>We ended up implementing a custom asynchronous architecture called \'The Mall\' on top of Combine and Coroutines that would fully manage all the state of the app.',
    },
    {
      challenge: '<em>SDK</em><br>Creating an SDK that would allow other developers to create their own experiences on top of Vera was a challenge.',
      solution: '<em>THE MALL</em><br>We ended up building Native iOS and Android SDKs, and a React Native wrapper on top, along with web SDKs.',
    },
  ],
  projectInfo: {
    infoTitle: 'AI and AR-powered Digital Twins',
    infoDescription: `Vera transforms buildings into intelligent digital twins with embedded AI and real-time data, creating environments where people and devices operate seamlessly.<br><br>Vera enables context-aware applications for efficient operations and personalized, engaging experiences in office buildings, retail stores, healthcare facilities and much more.`,
    infoItems: [
      { label: 'Industries', value: 'Indoor Navigation<br>Building Management' },
      { label: 'Services', value: 'iOS<br>Android' },
      { label: 'Team', value: '1 Android<br>1 iOS' },
      { label: 'Country', value: 'Israel' },
      { label: 'Year', value: '2022' },
      { label: 'Duration', value: '2.5 years' },
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
    { label: 'Performance', value: '60fps' },
    { label: 'Business Clients', value: '13' },
    { label: 'Trips to HQ', value: '8' },
  ],
}

const poolex: ProjectDataItemType = {
  socials: [
    { link: '', type: 'app store' },
    { link: '', type: 'google play' },
  ],
  title: 'Poolex',
  description: 'What could be more incredible than discovering new people, who want to do the same things as you, with you?',
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
  technologies: ['swift', 'swiftUi', 'kotlin', 'jetpackCompose'],
  challengesAndSolutions: [
    {
      challenge: '<em>CHATGPT</em><br>Making the integration smooth and real-time',
      solution: '<em>SOCKETS</em><br>We used sockets to make the chat update real-time and quickly',
    },
    {
      challenge: '<em>RELEVANCE</em><br>We wanted to make the responses as relevant as possible',
      solution: '<em>ASSISTANT</em><br>We used a customly trained assistant to ',
    },
  ],
  projectInfo: {
    infoTitle: 'Take better care of your pool',
    infoDescription: `Poolex was a quick project to help pool owners take better care of their pools. <br><br>It would know all the chemicals you need to add, when to clean the filter, when to change the water, and many more.`,
    infoItems: [
      { label: 'Industries', value: 'Chatbot' },
      { label: 'Services', value: 'Mobile' },
      { label: 'Team', value: 'Android<br>iOS' },
      { label: 'Country', value: 'France' },
      { label: 'Year', value: '2024' },
      { label: 'Duration', value: '1 month' },
    ],
  },
  projectScope: {
    projectScopeTitle: 'Pool Assistance',
    projectScopeDescription: `Having a pool in the backyard is a dream for many people, but taking care of it can be a nightmare.`,
  },
  quote: {
    text: '',
    author: {
      name: '',
      role: '',
      company: '',
    },
  },
  results: [
    { label: 'Time to Market', value: '1 month' },
  ],
}

const pvolve: ProjectDataItemType = {
  socials: [
    { link: 'https://apps.apple.com/us/app/pvolve/id1429328712', type: 'app store' },
    { link: 'https://play.google.com/store/apps/details?id=com.pvolve.my&hl=en', type: 'google play' },
    { link: 'https://www.pvolve.com', type: 'personal' },
  ],
  title: 'Pvolve',
  description:
    'Pvolve is a fitness company with a revolutionary method combining low-impact functional movements with resistance equipment for unbeatable results.',
  img: {
    x1: PvolveImg_main,
    mobile: PvolveImg_mobile,
  },
  technologies: ['react', 'nodeJs', 'typescript', 'awsLambda'],
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
      challenge: '<em>COMPLEXITY</em><br>It was a complex project integrating multiple services and APIs',
      solution: '<em>BREAKDOWN</em><br>We broke down the project into its consituents, and slowly tackled each service one by one',
    },
    {
      challenge: '<em>LAMBDA</em><br>Using AWS Lambda for the first time was a challenge',
      solution: '<em>TRAINING</em><br>We took a course on AWS Lambda and worked closely with the backend dev to make sure we are doing everything right',
    }
  ],
  projectInfo: {
    infoTitle: 'Update CX and the platform',
    infoDescription: `Pvolve is a fitness company with a revolutionary method combining low-impact functional movements with resistance equipment for unbeatable results.<br><br>They wanted to update their platform and improve the customer experience.`,
    infoItems: [
      { label: 'Industries', value: 'Fitness' },
      { label: 'Services', value: 'Web' },
      { label: 'Team', value: 'Full-Stack Dev' },
      { label: 'Country', value: 'USA' },
      { label: 'Year', value: '2024' },
      { label: 'Duration', value: '6 months' },
    ],
  },
  quote: {
    text: '',
    author: {
      name: '',
      role: '',
      company: '',
    },
  },
  results: [],
}

const testapp: ProjectDataItemType = {
  socials: [
    { link: 'https://apps.apple.com/md/app/testapp-io/id1518972541', type: 'app store' },
    { link: 'https://play.google.com/store/apps/details?id=testapp.io&hl=en', type: 'google play' },
    { link: 'https://www.testapp.io', type: 'personal' },
  ],
  title: 'TestApp.io',
  description: 'Effortless Distribution & Game-changing Feedback',
  img: {
    x1: WildyImg_main,
    mobile: WildyImg_mobile,
  },
  technologies: ['swift', 'uiKit', 'swiftUi'],
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
    infoTitle: 'SDK for gathering QA feedback',
    infoDescription: `TestApp.io is a library for gathering QA feedback from your users. It allows you to distribute your app to a selected group of users, and gather feedback from them in a structured way.<br><br>It’s a great tool for developers who want to improve their apps based on real user feedback.`,
    infoItems: [
      { label: 'Industries', value: 'Productivity' },
      { label: 'Services', value: 'iOS' },
      { label: 'Team', value: 'iOS' },
      { label: 'Country', value: 'UAE' },
      { label: 'Year', value: '2022' },
      { label: 'Duration', value: '9 months' },
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
}

export const projectsData: ProjectDataType = {
  enclaves,
  poolex,
  pvolve,
  vera,
  wildy,
  testapp,
};
