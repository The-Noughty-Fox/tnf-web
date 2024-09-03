import { projects } from '../../lib/types/projects';
import { projectCards } from '../../lib/data/projectCards';
import { Background } from '../portfolio-page/components/background';
import { Mobile } from '../portfolio-page/components/mobile';
import NextImage from 'next/image';

type BannerProps = {
  project: (typeof projects)[number];
};

export const Banner = ({ project }: BannerProps) => {
  const projectData = projectCards.find((card) => card.key === project);

  if (!projectData) {
    return null;
  }

  return (
    <div>
      <div className="desktop relative banner w-full h-[353px] bg-white rounded-6 md:rounded-10 overflow-hidden">
        {projectData.background && (
          <Background background={projectData.background} />
        )}
        <div className="relative flex h-full *:flex-1">
          <div
            className={`flex flex-col justify-center pl-8*23 ${projectData.twTheme?.twTextColor}`}
          >
            <div className="text-h1 uppercase">{projectData.title}</div>
            <div
              className="text-h5 mt-2 line-clamp-3 pr-4"
              title={projectData.description}
            >
              {projectData.description}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0">
              <div
                className="absolute left-5 top-5"
                style={{
                  width: projectData.img.desktop.twWidth,
                }}
              >
                <NextImage
                  className="banner-particle"
                  src={projectData.img.desktop.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Mobile
        title={projectData.title}
        description={projectData.description}
        img={projectData.img.mobile}
        link={projectData.link}
      />
    </div>
  );
};
