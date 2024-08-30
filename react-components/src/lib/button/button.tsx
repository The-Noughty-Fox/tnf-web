'use client';
import styles from './index.module.scss';
import clsx from 'clsx';
import { useRef } from 'react';

type ButtonProps = {
  text: string;
  onClick?: () => void;
  size?: 'small' | 'large';
  variant?: 'primary' | 'dark' | 'light';
  fluid?: boolean;
};

export const Button = ({
  text,
  onClick,
  size = 'large',
  variant = 'primary',
  fluid,
}: ButtonProps) => {
  const btnClsx = clsx(styles.btn, {
    [styles['btn--small']]: size === 'small',
    [styles['btn--large']]: size === 'large',
    [styles['btn--primary']]: variant === 'primary',
    [styles['btn--dark']]: variant === 'dark',
    [styles['btn--light']]: variant === 'light',
    [styles['btn--fluid']]: fluid,
  });
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <button onClick={onClick} className={btnClsx}>
      <span className={styles['btn__ripple']}>
        <span></span>
      </span>
      <div className="overflow-hidden">
        <div ref={ref} data-text={text} className={styles['btn__text']}>
          {text}
        </div>
      </div>
    </button>
  );
};
