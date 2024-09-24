'use client';
import { Burger } from '../burger';
import { ReactElement, useEffect, useRef, useState } from 'react';
import { Logo } from '../logo';
import { Container } from '../container';
import styles from './index.module.scss';
import { Button } from '../button';
import gsap from 'gsap/dist/gsap';
import { screens } from '@tnf-workspace/ts-lib';
import { ListItem } from '../list-item';

type HeaderProps = {
  links: { name: string; href: string }[];
  Link?: ReactElement;
  onMenuToggle?: (isOpened: boolean) => void;
  activeLink?: string;
  homeLink?: string;
};

export const Header = ({
  links,
  Link,
  onMenuToggle,
  activeLink,
  homeLink = '/',
}: HeaderProps) => {
  const navRef = useRef<HTMLElement>(null);
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const appearTlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const menuItems = navRef.current?.querySelectorAll('a');
    const button = navRef.current?.querySelectorAll(`.${styles.controls}`);
    const certain = navRef.current?.querySelectorAll(
      `.${styles['nav-certain']}`
    );

    const m = matchMedia(`(max-width: ${screens.lg - 1}px)`);
    const handler = (m: { matches: boolean }) => {
      if (m.matches) {
        if (navRef.current && menuItems && button && certain) {
          gsap.set(menuItems, {
            opacity: 0,
            skewY: -5,
            yPercent: 100,
          });
          gsap.set(button, {
            opacity: 0,
            yPercent: 100,
          });
          gsap.set(certain, {
            yPercent: -100,
          });

          appearTlRef.current = gsap.timeline({
            paused: true,
            onStart: () => {
              gsap.set(navRef.current, {
                pointerEvents: 'auto',
              });
              gsap.set(certain, {
                opacity: 1,
              });
            },
            onReverseComplete: () => {
              gsap.set(navRef.current, {
                pointerEvents: 'none',
              });
            },
          });

          appearTlRef.current.fromTo(
            certain,
            {
              yPercent: -100,
            },
            {
              yPercent: 0,
              duration: 0.5,
              ease: 'sine',
            }
          );

          appearTlRef.current.to(
            menuItems,
            {
              opacity: 1,
              skewY: 0,
              yPercent: 0,
              duration: 0.75,
              stagger: 0.075,
              ease: 'expo.out',
            },
            0
          );

          appearTlRef.current.to(
            button,
            {
              opacity: 1,
              yPercent: 0,
              duration: 0.75,
              ease: 'expo.out',
            },
            '-=0.8'
          );
        }
      } else {
        setIsMenuOpened(false);
        appearTlRef.current?.kill();

        if (navRef.current && menuItems && button) {
          gsap.set(menuItems, {
            opacity: 1,
            skewY: 0,
            yPercent: 0,
          });
          gsap.set(button, {
            opacity: 1,
            yPercent: 0,
          });
          navRef.current.style.pointerEvents = 'auto';
        }
      }
    };

    m.addEventListener('change', handler);
    handler(m);

    return () => {
      m.removeEventListener('change', handler);
    };
  }, []);

  const toggleMenu = () => {
    console.log('alo');
    setIsMenuOpened((isMenuOpened) => {
      if (isMenuOpened) {
        // means menu is closing
        appearTlRef.current?.timeScale(2.5, true);
        appearTlRef.current?.reverse();
        document.body.style.paddingRight = '0px';
      } else {
        // means menu is opening
        appearTlRef.current?.timeScale(1, true);
        appearTlRef.current?.play();
        document.body.style.paddingRight = 'var(--scrollbar-width)';
      }
      onMenuToggle?.(!isMenuOpened);
      return !isMenuOpened;
    });
  };

  return (
    <header className="w-full relative z-30">
      <Container>
        <div className="flex items-center py-4 lg:py-12">
          <Logo href={homeLink} />

          <Burger
            isActive={isMenuOpened}
            onClick={() => {
              toggleMenu();
            }}
            className="ml-auto text-primary lg:hidden"
          />

          <nav
            style={{
              paddingRight: isMenuOpened ? 'var(--scrollbar-width)' : '0px',
            }}
            ref={navRef}
            className={styles.nav}
          >
            <div className={styles['nav-certain']}></div>
            <ul className={styles.ul}>
              {links.map(({ name, href }) => (
                <ListItem
                  key={name}
                  href={href}
                  name={name}
                  Link={Link}
                  activeLink={activeLink}
                  onClick={() => {
                    if (isMenuOpened) {
                      toggleMenu();
                    }
                  }}
                />
              ))}
              <li>
                <div className={styles.controls}>
                  <Button size="small" text="Contact us" />
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};
