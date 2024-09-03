'use client';
import {
  Button,
  Footer as FooterComponent,
} from '@tnf-workspace/react-components';
import * as process from 'node:process';

type FooterProps = {};

export const Footer = () => {
  return (
    <FooterComponent
      client:load
      links={[
        { href: '#', name: 'Services' },
        { href: '/', name: 'Blog' },
        { href: '#', name: 'Portfolio' },
        { href: '#', name: 'Contact us' },
        { href: '#', name: 'Q & A' },
        { href: '#', name: 'Privacy & Terms' },
      ]}
      ContactUs={
        <Button
          text="Contact us"
          onClick={() => {
            window.location.href = process.env.PUBLIC_CONTACT_US_PAGE;
          }}
          size="small"
        />
      }
    />
  );
};
