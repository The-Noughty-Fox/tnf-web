import NextImage, { StaticImageData } from 'next/image';
import NextLink from 'next/link';

type MobileProps = {
  title: string;
  description: string;
  img: StaticImageData;
  link: string;
};

export const Mobile = ({ title, description, img, link }: MobileProps) => {
  return (
    <NextLink href={link}>
      <div className="mobile">
        <div className="rounded-10 overflow-hidden relative aspect-[1272/600] min-h-[417px] w-full max-w-[1272px]">
          <NextImage src={img} alt={''} className="image-cover" />
        </div>
        <div className="mt-4.5">
          <div className="text-[18px] leading-1 font-bold">{title}</div>
          <div className="leading-1.25 mt-2.5">{description}</div>
        </div>
      </div>
    </NextLink>
  );
};
