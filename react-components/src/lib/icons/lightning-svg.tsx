import { SVGProps } from 'react';

export const LightningSvg = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="1393"
      height="640"
      viewBox="0 0 1393 640"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_df_712_10996)">
        <path
          d="M630.558 378.769L90.5776 462.443L232.168 582.14L828.264 407.381L685.663 305.836L1181.8 258.429L1035.94 147.346L1351.87 107.514L1355.69 89L895.117 134.443L992.336 233.744L482.472 250.855L630.558 378.769Z"
          fill="url(#paint0_linear_712_10996)"
        />
      </g>
      <path
        d="M630.558 378.769L90.5776 462.443L232.168 582.14L828.264 407.381L685.663 305.836L1181.8 258.429L1035.94 147.346L1351.87 107.514L1355.69 89L895.117 134.443L992.336 233.744L482.472 250.855L630.558 378.769Z"
        stroke="#FF5C00"
        strokeOpacity="0.2"
      />
      <g filter="url(#filter1_f_712_10996)">
        <path
          d="M403.302 493.486L356.378 457.257L701.044 407.266L403.302 493.486Z"
          fill="#FF5C00"
          fillOpacity="0.05"
        />
        <path
          d="M679.9 284.538L668.178 261.508L929.713 255.33L679.9 284.538Z"
          fill="#FF5C00"
          fillOpacity="0.05"
        />
        <path
          d="M1068.93 206.463L1021.41 219.943L995.281 168.549L1068.93 206.463Z"
          fill="#FF5C00"
          fillOpacity="0.05"
        />
        <path
          d="M1057.65 135.409L1047.16 125.58L1196.19 114.627L1057.65 135.409Z"
          fill="#FF5C00"
          fillOpacity="0.05"
        />
      </g>
      <defs>
        <filter
          id="filter0_df_712_10996"
          x="53.5781"
          y="72"
          width="1339.12"
          height="567.139"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="20" />
          <feGaussianBlur stdDeviation="18.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 0.360784 0 0 0 0 0 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_712_10996"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_712_10996"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="5"
            result="effect2_foregroundBlur_712_10996"
          />
        </filter>
        <filter
          id="filter1_f_712_10996"
          x="321.379"
          y="79.627"
          width="909.812"
          height="448.859"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="17.5"
            result="effect1_foregroundBlur_712_10996"
          />
        </filter>
        <linearGradient
          id="paint0_linear_712_10996"
          x1="1513.64"
          y1="27"
          x2="972.098"
          y2="897.165"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.102668" stopColor="white" />
          <stop offset="0.587426" stopColor="#1C1C1C" />
        </linearGradient>
      </defs>
    </svg>
  );
};
