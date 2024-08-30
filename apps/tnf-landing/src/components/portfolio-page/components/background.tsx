import clsx from 'clsx';
import NextImage, { StaticImageData } from 'next/image';

type BackgroundProps = {
  background: {
    img?: StaticImageData;
    twColor?: string;
    tint?: {
      twColor: string;
      twOpacity: string;
    };
  };
};

export const Background = ({ background }: BackgroundProps) => {
  return (
    <div className="absolute-inset">
      {background.twColor && (
        <div className={`absolute-inset ${background.twColor}`}></div>
      )}
      {background.img && (
        <div className="absolute-inset">
          <NextImage src={background.img} alt="" className="image-cover" />
        </div>
      )}
      {background.tint && (
        <div
          className={clsx(
            background.tint.twColor,
            background.tint.twOpacity,
            'absolute-inset'
          )}
        />
      )}
    </div>
  );
};
