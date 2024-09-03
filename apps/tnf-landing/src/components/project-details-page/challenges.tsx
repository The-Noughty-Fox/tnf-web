import clsx from 'clsx';
import NextImage, { StaticImageData } from 'next/image';

type ChallengesProps = {
  img: {
    src: StaticImageData;
    width: number;
  };
  challengesAndSolutions: { challenge: string; solution: string }[];
};

export const Challenges = ({
  img,
  challengesAndSolutions,
}: ChallengesProps) => {
  const itemTitleClsx = clsx(
    'text-accent-small text-primary leading-1.25 uppercase lg:text-center'
  );
  return (
    <div className="project-challenges mt-30 flex flex-col items-center lg:flex-row lg:gap-20">
      <div className="hidden lg:block shrink">
        <NextImage width={img.width} src={img.src} alt="" />
      </div>
      <div className="counter hidden md:grid md:place-content-center md:grid-cols-2 md:gap-10 lg:basis-[650px] lg:shrink-0 lg:flex-grow">
        <div className="contents">
          <div className={itemTitleClsx}>Challenges</div>
          <div className={itemTitleClsx}>Solutions</div>
        </div>
        {challengesAndSolutions.map(({ challenge, solution }, index) => (
          <div key={index} className="contents">
            <p
              className="text-body leading-1.25 counter-item"
              dangerouslySetInnerHTML={{ __html: challenge }}
            />
            <div
              className="text-body leading-1.25"
              dangerouslySetInnerHTML={{ __html: solution }}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-15 md:hidden">
        <div>
          <div className="text-h2 text-primary uppercase">Challenges</div>
          <div className="counter mt-6 flex flex-col gap-11 max-w-[80%]">
            {challengesAndSolutions.map(({ challenge }, index) => (
              <p
                key={index}
                className="text-body leading-1.5 counter-item"
                dangerouslySetInnerHTML={{ __html: challenge }}
              />
            ))}
          </div>
        </div>
        <div>
          <div className="text-h2 text-primary uppercase">Solutions</div>
          <div className="counter mt-6 flex flex-col gap-11 max-w-[80%]">
            {challengesAndSolutions.map(({ solution }, index) => (
              <div
                key={index}
                className="text-body leading-1.5 counter-item"
                dangerouslySetInnerHTML={{ __html: solution }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
