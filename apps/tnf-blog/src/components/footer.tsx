'use client';
import {
  Button,
  Footer as FooterComponent,
} from '@tnf-workspace/react-components';
import * as process from 'node:process';
import { pageRoutes } from '../lib/pageRoutes';

export const Footer = () => {
  return (
    <FooterComponent
      client:load
      links={[
        { href: pageRoutes.services.href, name: pageRoutes.services.label },
        { href: pageRoutes.blog.href, name: pageRoutes.blog.label },
        { href: pageRoutes.portfolio.href, name: pageRoutes.portfolio.label },
        { href: pageRoutes.qAndA.href, name: pageRoutes.qAndA.label },
        {
          href: pageRoutes.privacyAndTerms.href,
          name: pageRoutes.privacyAndTerms.label,
        },
        { href: pageRoutes.contactUs.href, name: pageRoutes.contactUs.label },
      ]}
      ContactUs={
        <Button
          text="Contact us"
          onClick={() => {
            window.location.href = pageRoutes.contactUs.href;
          }}
          size="small"
        />
      }
      linkToHome={pageRoutes.home.href}
    />
  );
};
