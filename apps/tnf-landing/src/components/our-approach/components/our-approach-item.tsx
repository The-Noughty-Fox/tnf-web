import clsx from 'clsx';
import { useRef } from 'react';

type OurApproachItemProps = {
  text: string;
  summary: string;
};

export const OurApproachItem = ({ text, summary }: OurApproachItemProps) => {
  const common = clsx('absolute border-orange-800 h-7 aspect-[2/1]');
  const beforeCn = clsx(common, 'before -top-4 -left-4 border-l-2 border-t-2');
  const afterCn = clsx(
    common,
    'after -bottom-4 -right-4 border-r-2 border-b-2'
  );
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={ref}
      className="relative text-h5 text-center h-[240px] our-approach__item max-w-[320px] md:max-w-auto m-auto"
    >
      <div className={beforeCn}></div>
      <div className="our-approach__content">
        <div className="flex items-center justify-center min-h-23 font-fivo uppercase font-black text-orange-300">
          {text}
        </div>
        <p className="mt-4 text-body leading-1.5">{summary}</p>
      </div>
      <div className={afterCn}></div>
    </div>
  );
};
