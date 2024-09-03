'use client';
import { cloneElement, MutableRefObject, ReactElement, useRef } from 'react';
import styles from './header/index.module.scss';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const clearTimerRef = (timerRef: MutableRefObject<NodeJS.Timeout | null>) => {
  if (timerRef.current) {
    clearTimeout(timerRef.current);
    timerRef.current = null;
  }
};

type ListItemProps = {
  name: string;
  href: string;
  Link?: ReactElement;
  className?: string;
  activeLink?: string;
  onClick?: () => void;
};

export const ListItem = ({
  name,
  href,
  Link,
  className,
  activeLink,
  onClick,
}: ListItemProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const enterTimeout = useRef<NodeJS.Timeout | null>(null);
  const leaveTimeout = useRef<NodeJS.Timeout | null>(null);
  const allowReverseAnimationRef = useRef(false);

  const handleMouseEnter = () => {
    if (ref.current) {
      if (leaveTimeout.current) {
        clearTimeout(leaveTimeout.current);
      }
      enterTimeout.current = setTimeout(() => {
        if (ref.current) {
          ref.current.style.transformOrigin =
            ref.current.style.transformOrigin === 'right center'
              ? 'left'
              : 'right';
          allowReverseAnimationRef.current = true;
          clearTimerRef(enterTimeout);
        }
      }, 310);
    }
  };

  const handleMouseLeave = () => {
    if (ref.current) {
      if (enterTimeout.current) {
        clearTimeout(enterTimeout.current);
      } else if (allowReverseAnimationRef.current) {
        leaveTimeout.current = setTimeout(() => {
          if (ref.current) {
            ref.current.style.transformOrigin = 'left';
            allowReverseAnimationRef.current = false;
            clearTimerRef(leaveTimeout);
          }
        }, 310);
      }
    }
  };

  return (
    <li className={styles.li} onClick={onClick}>
      {cloneElement(
        Link || <a></a>,
        {
          key: name,
          href,
          className: clsx(
            'font-bold leading-1 text-h1 lg:text-[18px]',
            twMerge(
              'relative overflow-hidden py-2 lg:py-3',
              activeLink === href ? 'text-primary' : 'text-white',
              className
            )
          ),
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave,
        },
        <>
          <span>{name}</span>
          <div ref={ref} className={styles['runner']}></div>
        </>
      )}
    </li>
  );
};
