'use client';
import { pageRoutes } from '../lib/pageRoutes';
import Link from 'next/link';
import { Header, useAppContext } from '@tnf-workspace/react-components';
import { usePathname } from 'next/navigation';

export const AppHeader = () => {
  const { lenis } = useAppContext();
  const pathname = usePathname();

  return (
    <Header
      links={[
        { name: 'Services', href: pageRoutes.services },
        { name: 'Portfolio', href: pageRoutes.portfolio },
        { name: 'Contact us', href: pageRoutes.contactUs },
        { name: 'Blog', href: process.env.NEXT_PUBLIC_BLOG_PAGE || '' },
      ]}
      onMenuToggle={(isOpened: boolean) => {
        if (isOpened) {
          lenis?.stop();
        } else {
          lenis?.start();
        }
      }}
      Link={<Link href="" />}
      activeLink={pathname}
    />
  );
};
