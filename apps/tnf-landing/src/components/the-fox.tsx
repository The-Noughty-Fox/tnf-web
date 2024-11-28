import clsx from 'clsx';
import gsap from 'gsap';
import { useEffect } from 'react';
import { colors } from '@tnf-workspace/ts-lib';

type TheFoxProps = {
  className?: string;
};

export const TheFox = ({ className }: TheFoxProps) => {
  const classes = clsx('the-fox', className, 'opacity-0');

  useEffect(() => {
    const fox = document.querySelectorAll('.the-fox');
    const gradient = document.querySelectorAll('#the-fox__gradient');
    const [, stop2] = Array.from(
      document.querySelectorAll('#the-fox__gradient stop')
    );

    gsap.set(stop2, { willChange: 'stop-color, stop-opacity' });
    gsap.set(gradient, { transformOrigin: 'center center' });
    const tl = gsap.timeline();

    tl.to(fox, {
      opacity: 1,
      duration: 0.5,
      delay: 1,
      ease: 'elastic.in(2, 0,1)',
    });

    tl.to(stop2, {
      attr: { 'stop-opacity': 1 },
      duration: 3,
      ease: 'none',
    });

    tl.to(stop2, {
      attr: { 'stop-color': colors.orange['800'] },
      duration: 5,
      repeat: -1,
      yoyo: true,
    });

    tl.to(
      fox,
      {
        duration: 2,
        opacity: 0.75,
        ease: 'expo.in',
      },
      '<'
    );
  }, []);

  return (
    <svg
      width="425"
      height="448"
      viewBox="0 0 425 448"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
      style={{
        width: 'min(60%, 425px)',
        height: 'auto',
      }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M141.308 282.132C160.843 291.689 176.781 285.237 184.132 266.184C188.956 266.542 189.392 266.539 192.42 266.21C176.645 260.394 170.081 260.064 146.858 241.857C135.959 231.419 118.17 232.13 108.336 235.289C93.911 240.176 115.721 236.275 117.305 236.57C124.759 239.922 114.668 244.819 114.064 257.62C115.922 271.445 115.527 268.936 104.227 275.033C115.184 270.778 130.238 277.2 141.308 282.132Z"
        fill="#cc4102"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M132.75 272.095C151.149 279.392 157.143 284.669 167.31 277.531C170.13 275.551 173.232 273.411 174.053 264.423C155.597 261.301 132.587 224.892 124.03 254.068C122.467 258.552 123.359 262.333 124.086 266.966C124.51 269.644 125.136 270.028 132.75 272.095Z"
        fill="white"
      />
      <path
        opacity="1"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M270.567 282.394C274.72 282.237 279.286 281.052 282.354 279.523C290.745 275.343 293.061 270.139 299.636 265.611C332.616 246.536 348.063 272.816 350.198 277.074C347.238 260.239 339.604 259.264 335.072 254.945C326.322 248.895 331.972 244.945 330.534 232.405C330.354 230.832 329.831 227.902 330.798 226.027C334.793 224.076 335.104 228.465 338.416 229.904C329.685 205.746 305.029 209.332 288.848 216.81C265.644 227.534 255.18 254.618 225.405 267.409C229.79 267.693 232.611 265.868 235.504 265.808C243.852 276.803 256.668 282.933 270.569 282.4L270.567 282.394Z"
        fill="#822c0c"
      />
      <path
        opacity="0.6"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M312.467 225.267C276.464 222.63 269.506 248.373 245.935 262.717C248.051 266.706 253.407 270.445 258.615 272.577C290.631 285.369 284.689 254.924 318.813 254.239C320.104 248.556 323.048 224.166 312.467 225.267Z"
        fill="white"
      />
      <path
        opacity="0.6"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M160.815 91.5453C158.978 89.7925 156.836 87.6821 154.932 85.8043C144.569 75.5927 128.907 60.1597 108.815 46.0642C84.2681 28.8471 59.0372 17.9094 33.823 13.5577L16.4549 10.5601L15.3734 28.532C13.1867 64.766 14.0616 96.145 18.0487 124.462C22.3103 154.731 30.1283 182.123 41.8981 207.965C38.0372 218.36 32.8796 229.32 27.4703 240.815L27.39 240.986L27.3883 240.99C11.8574 273.983 -5.74464 311.376 1.80517 350.056L4.84438 365.655L12.1584 364.324L6.20667 383.134L33.1447 377.186C39.8509 375.705 47.0093 374.848 54.4185 374.639C76.1453 374.025 99.3016 378.835 121.368 388.56C144.403 398.706 164.819 413.664 180.408 431.816L181.323 432.883L182.407 433.771C191.675 441.37 202.038 448.352 214.994 447.986C215.109 447.983 215.225 447.979 215.34 447.975C215.522 447.968 215.705 447.959 215.888 447.949C216.037 447.945 216.186 447.944 216.335 447.942C216.483 447.941 216.632 447.94 216.78 447.936C229.737 447.57 239.688 440.014 248.514 431.904L249.545 430.956L250.399 429.839C264.939 410.838 284.479 394.751 306.907 383.321C328.403 372.377 351.24 366.256 372.965 365.642C380.374 365.433 387.568 365.884 394.349 366.985L421.579 371.402L414.577 352.958L421.948 353.874L424.103 338.128C429.461 299.085 409.779 262.744 392.414 230.68L392.412 230.677L392.409 230.671C386.327 219.441 380.529 208.735 376.067 198.526C386.36 172.061 392.622 144.272 395.17 113.811C397.555 85.3137 396.659 53.9354 392.435 17.8824L390.347 0L373.176 3.97314C348.247 9.74109 323.673 22.0855 300.132 40.6666C280.897 55.8525 266.144 72.121 256.372 82.8957L256.332 82.9404L256.217 83.0668L256.216 83.0677L256.215 83.0694L256.213 83.0717C254.448 85.0192 252.48 87.19 250.782 89.0043L160.815 91.5453ZM358.886 198.589C363.904 186.556 368.041 174.157 371.262 161.495C367.821 161.385 364.442 160.521 361.353 158.962C358.264 157.404 355.537 155.186 353.356 152.458C351.176 149.731 349.592 146.558 348.712 143.153C347.832 139.748 347.677 136.19 348.256 132.72C348.835 129.25 350.135 125.948 352.069 123.038C354.003 120.127 356.525 117.676 359.466 115.848C362.407 114.021 365.697 112.861 369.116 112.445C372.534 112.03 376.001 112.37 379.282 113.441C379.926 106.02 380.335 98.5295 380.508 90.9684C376.631 90.841 372.949 89.189 370.231 86.3565C367.512 83.5239 365.965 79.7292 365.913 75.7629C365.861 71.7965 367.307 67.9643 369.95 65.0645C372.593 62.1647 376.23 60.421 380.102 60.1964C379.475 46.9837 378.303 33.5279 376.692 19.7921C324.195 31.9386 287.124 72.8427 267.959 93.9897C262.953 99.5129 259.169 103.688 256.65 105.652C248.866 104.89 226.423 104.342 206.231 104.418L206.161 104.419C185.997 105.488 163.621 107.302 155.892 108.497C153.263 106.679 149.244 102.719 143.928 97.4804C123.596 77.4457 84.2877 38.7121 31.2014 29.55C27.29 94.3847 32.6094 152.533 59.0567 207.058C54.7611 220.25 48.3019 233.972 41.6782 248.043C26.6832 279.897 10.8449 313.542 17.3566 346.901L35.3822 343.618L29.778 361.332C81.8846 349.829 150.349 372.252 192.319 421.129C200.941 428.199 207.755 432.311 215.434 431.734C223.127 431.877 229.698 427.386 237.914 419.841C277.062 368.673 344.153 342.427 396.825 350.966L390.232 333.596L408.414 335.856C413.026 302.186 395.317 269.49 378.551 238.535C371.143 224.858 363.919 211.521 358.886 198.589Z"
        fill="url(#the-fox__gradient)"
      />
      <defs>
        <linearGradient
          id="the-fox__gradient"
          x1="41.612"
          y1="36.6154"
          x2="176.674"
          y2="455.895"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.3" stopColor={colors.violet} stopOpacity="0" />
          <stop offset="1" stopColor={colors.orange['500']} stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
