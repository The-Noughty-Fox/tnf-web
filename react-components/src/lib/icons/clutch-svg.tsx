import { SVGProps } from 'react';

export const ClutchSvg = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="28" height="28" fill="url(#pattern0_2082_5189)" />
      <defs>
        <pattern
          id="pattern0_2082_5189"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            href="#image0_2082_5189"
            transform="translate(0.0560606) scale(0.0030303)"
          />
        </pattern>
        <image
          id="image0_2082_5189"
          width="293"
          height="330"
          href="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};