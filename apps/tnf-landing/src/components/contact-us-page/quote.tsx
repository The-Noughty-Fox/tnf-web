import { QuoteSvg, SignSvg } from '@tnf-workspace/react-components';
import { text } from '../../lib/text';

export const Quote = () => {
  return (
    <div className="relative">
      <QuoteSvg className="md:absolute md:top-0 md:-left-2 md:-translate-x-full md:-translate-y-full" />
      <div className="text-body text-white mt-2 md:m-0 text-center">
        {text.contact_us_ceo_quote}
      </div>
      <div className="relative text-h4 text-orange-300 mt-6 max-w-[15ch] m-auto text-center leading-1">
        <span>{text.contact_us_ceo_name}</span>
        <SignSvg className="relative -right-8 ml-auto w-14 h-10 md:h-auto md:w-auto md:absolute md:-right-2 md:bottom-0 md:translate-x-3/4 md:translate-y-1/2" />
      </div>
    </div>
  );
};
