'use client';
import styles from './index.module.scss';
import clsx from 'clsx';
import { ReactElement, useRef } from 'react';

type ButtonProps = {
  text: string;
  onClick?: () => void;
  size?: 'small' | 'large';
  variant?: 'primary' | 'dark' | 'light' | 'inversed';
  fluid?: boolean;
  Icon?: ReactElement;
  className?: string;
};

export const Button = ({
  text,
  onClick,
  size = 'large',
  variant = 'primary',
  fluid,
  Icon,
  className,
}: ButtonProps) => {
  const btnClsx = clsx(
    styles.btn,
    {
      [styles['btn--small']]: size === 'small',
      [styles['btn--large']]: size === 'large',
      [styles['btn--primary']]: variant === 'primary',
      [styles['btn--inversed']]: variant === 'inversed',
      [styles['btn--dark']]: variant === 'dark',
      [styles['btn--light']]: variant === 'light',
      [styles['btn--fluid']]: fluid,
    },
    className
  );
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <button onClick={onClick} className={btnClsx}>
      <span className={styles['btn__ripple']}>
        <span></span>
      </span>
      <div className="overflow-hidden flex items-center gap-2">
        <div ref={ref} data-text={text} className={styles['btn__text']}>
          {text}
        </div>
        {Icon && <div className="relative z-50">{Icon}</div>}
      </div>
    </button>
  );
};
