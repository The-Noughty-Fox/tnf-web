import { Container } from './container';
import { Logo } from './logo';
import { ClutchSvg } from './icons/clutch-svg';
import { ListItem } from './list-item';
import { ReactElement } from 'react';
import { UpworkSvg } from './icons/upwork-svg';
import { InSvg } from './icons/in-svg';
import { GithubSvg } from './icons/github-svg';
import { MarqueeLine } from './marquee-line';

const socials = [
  { href: 'https://clutch.co/profile/noughty-fox#highlights', Icon: ClutchSvg },
  { href: 'https://www.upwork.com/agencies/thenoughtyfox/', Icon: UpworkSvg },
  {
    href: 'https://www.linkedin.com/company/thenoughtyfox/posts/?feedView=all',
    Icon: InSvg,
  },
  { href: 'https://github.com/The-Noughty-Fox', Icon: GithubSvg },
];

type FooterProps = {
  linkToHome?: string;
  links: { href: string; name: string }[];
  Link?: ReactElement;
  ContactUs?: ReactElement;
};

export const Footer = ({
  links,
  Link,
  ContactUs,
  linkToHome = '/',
}: FooterProps) => {
  return (
    <div className="py-8">
      <Container>
        <div className="flex flex-col md:flex-row gap-5  items-center justify-center md:justify-between">
          <Logo href={linkToHome} />
          <div className="flex gap-3">
            {socials.map(({ Icon, href }) => (
              <a
                key={href}
                className="w-9 h-9 rounded-full bg-[rgba(255,255,255,0.1)] cursor-pointer flex items-center justify-center hover:bg-primary transition-colors duration-500"
                href={href}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
        <div className="flex md:*:flex-1 flex-col gap-4 md:flex-row mt-24">
          <nav>
            <ul
              className="w-full m-auto md:m-0 max-w-[509px] md:max-w-[350px] uppercase grid gap-x-8"
              style={{
                gridTemplateColumns: 'auto 1fr',
              }}
            >
              {links.map(({ name, href }) => (
                <ListItem
                  key={name}
                  href={href}
                  name={name}
                  Link={Link}
                  className="text-[18px] whitespace-nowrap font-bold"
                />
              ))}
            </ul>
          </nav>
          <div className="max-w-[509px] mt-23 md:mt-0 mx-auto md:mx-0 rounded-6 bg-[rgba(255,255,255,0.1)] px-8 md:px-9 pt-6 md:pt-12 pb-6 md:pb-7">
            <div className="text-h6 uppercase">Get in touch</div>
            <div className="text-body mt-4.5 md:mt-6">
              Ready to start your next project or have questions? Reach out to
              us!
            </div>
            <div className="mt-6 md:mt-16">{ContactUs}</div>
          </div>
        </div>
        <div className="mt-23">
          <div className="bleed">
            <MarqueeLine />
          </div>
        </div>
        <div className="text-caption mt-3 md:mt-12">
          ©{new Date().getFullYear()} The Noughty Fox
        </div>
      </Container>
    </div>
  );
};
