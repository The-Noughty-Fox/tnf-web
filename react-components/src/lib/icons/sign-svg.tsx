import { SVGProps } from 'react';

export const SignSvg = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="110"
      height="80"
      viewBox="0 0 110 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.50934 49.2497C9.50934 43.5149 16.2804 12.5169 16.0211 29.6289C15.8118 43.4456 8.65475 54.8576 2.72624 67.1171C-1.57871 76.0193 14.679 55.3892 14.2575 67.4511C14.1309 71.075 7.78724 81.6343 12.1321 76.7187C17.8567 70.2423 28.7073 55.0241 39.4907 55.2612C47.5611 55.4385 43.7341 68.7235 41.4351 72.2101C37.4781 78.2116 65.1777 40.1352 64.6786 47.1624C64.1823 54.1498 47.7312 83.8488 54.6396 61.4396C57.5353 52.0466 81.7747 1.71716 81.9077 5.58309C82.1194 11.7411 82.3363 13.4251 85.8419 6.585C93.8964 -9.13141 103.102 19.9696 106.734 27.7921C109.756 34.3025 91.3679 28.1982 83.7617 29.128C79.5578 29.6419 55.2204 35.1927 55.8153 41.2344C56.3244 46.4044 105.497 27.3446 108 31.9667"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};
