import { ReactNode } from 'react';
import { QuoteSvg } from '@tnf-workspace/react-components';

type QuoteProps = {
  text: string | ReactNode;
  author: {
    name: string;
    role: string;
    company: string;
  };
};

export const Quote = ({ author, text }: QuoteProps) => {
  return (
    <div className="lg:max-w-[80%] px-9 lg:m-auto">
      <QuoteSvg className="ml-4" />
      <div className="mt-3 text-body leading-1.15 font-normal">{text}</div>
      <div className="mt-8 md:mt-14 lg:mt-21 text-body leading-1.15 font-normal flex justify-center items-center">
        <b className="mr-2 flex items-center gap-2 before:w-2 before:h-2 before:rounded-full before:bg-white before:block">
          {author.name}
        </b>
        {author.role} @ {author.company}
      </div>
    </div>
  );
};
