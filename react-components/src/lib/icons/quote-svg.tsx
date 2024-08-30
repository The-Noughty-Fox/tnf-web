import { SVGProps } from 'react';

export const QuoteSvg = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="35"
      height="30"
      viewBox="0 0 35 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M23.8925 29.2H34.1325L26.4525 0.399994H18.7725L23.8925 29.2ZM5.9725 29.2H16.2125L8.5325 0.399994H0.852497L5.9725 29.2Z"
        fill="#FF5C00"
      />
    </svg>
  );
};
