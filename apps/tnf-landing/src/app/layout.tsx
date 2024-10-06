import './global.scss';
import { AppProvider } from '@tnf-workspace/react-components';
import Link from 'next/link';
import {
  screens,
  containerPx,
  containerPxMd,
  containerPxLg,
} from '@tnf-workspace/ts-lib';
import { Bootstrap } from '../components/bootstrap';
import { CSSProperties, ReactNode } from 'react';
import { pageRoutes } from '../lib/pageRoutes';
import { Footer } from '@tnf-workspace/react-components';
import { AppHeader } from '../components/app-header';
import { Montserrat, Roboto } from 'next/font/google';
import localFont from 'next/font/local';
import { ContactUsBtn } from '../components/contact-us-btn';

const montserrat = Montserrat({
  subsets: ['latin'],
  preload: true,
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
});

const roboto = Roboto({
  subsets: ['latin'],
  preload: true,
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
});

const fivo = localFont({
  src: [
    {
      path: './fonts/fivo-sans/fivosans-bold-webfont.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/fivo-sans/fivosans-heavy-webfont.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  preload: true,
  variable: '--font-fivo',
});

const links = [
  { href: pageRoutes.services, name: 'Services' },
  { href: pageRoutes.blog, name: 'Blog' },
  { href: pageRoutes.portfolio, name: 'Portfolio' },
  { href: pageRoutes.contactUs, name: 'Contact us' },
  { href: pageRoutes.qAndA, name: 'Q & A' },
  { href: pageRoutes.privacyTerms, name: 'Privacy & Terms' },
  { href: pageRoutes.careers, name: 'Careers' },
];

export const metadata = {
  title: 'TNF - Smart Solutions, Foxy Style',
  description:
    'The Noughty Fox offers top-tier mobile and web development services, delivering innovative solutions for businesses of all sizes.',
  keywords:
    'mobile development, custom app development, innovative mobile solutions, complex projects, advanced web development, mobile app consultancy, high-quality development services, app development consultancy, The Noughty Fox, enterprise app development, tailored web solutions, expert mobile consultancy, mobile and web services, digital solutions',
  robots: 'index, follow',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      style={
        {
          '--screen-sm': `${screens.sm}px`,
          '--screen-md': `${screens.md}px`,
          '--screen-lg': `${screens.lg}px`,
          '--screen-xl': `${screens.xl}px`,
          '--full-width': 'calc(100vw - var(--scrollbar-width, 0px))',
          '--container-px': `${containerPx}px`,
          '--container-px-md': `${containerPxMd}px`,
          '--container-px-lg': `${containerPxLg}px`,
        } as CSSProperties
      }
    >
      <Bootstrap />
      <body
        className={`${montserrat.variable} ${roboto.variable} ${fivo.variable}`}
      >
        <div className="flex flex-col min-h-screen relative overflow-hidden">
          <AppProvider>
            <AppHeader />
            <main className="flex-1 flex flex-col *:flex-1 relative ">
              {children}
            </main>
            <Footer
              links={links}
              Link={<Link href="" />}
              ContactUs={<ContactUsBtn />}
            />
          </AppProvider>
        </div>
      </body>
    </html>
  );
}
