'use client';
import { notFound } from 'next/navigation';
import {
  AppleStoreSvg,
  Container,
  FigmaSvg,
  PlayMarketStoreSvg,
  UpworkSvg2,
} from '@tnf-workspace/react-components';
import { Banner } from '../../../components/project-details-page/banner';
import { projects, ProjectType } from '../../../lib/types/projects';
import { projectsData } from '../../../lib/data/projectsData';
import { ProjectInfo } from '../../../components/project-details-page/project-info';
import { Technologies } from '../../../components/technologies';
import { Challenges } from '../../../components/project-details-page/challenges';
import { ProjectResults } from '../../../components/project-details-page/project-results';
import { Quote } from '../../../components/project-details-page/quote';
import { ExploreOther } from '../../../components/explore-other';
import { projectCards } from '../../../lib/data/projectCards';

export default function Index({ params }: { params: { project: string } }) {
  const project = params.project as ProjectType;

  if (!project || !projects.includes(project)) {
    notFound();
  }

  const data = projectsData[project];

  const renderSocials = () => {
    return data.socials.map((social) => {
      if (social.type === 'app store') {
        return (
          <button
            key="app-store"
            onClick={() => {
              window.open(social.link, '_blank');
            }}
          >
            <AppleStoreSvg />
          </button>
        );
      }

      if (social.type === 'google play') {
        return (
          <button
            key="play market store"
            onClick={() => {
              window.open(social.link, '_blank');
            }}
          >
            <PlayMarketStoreSvg />
          </button>
        );
      }

      if (social.type === 'figma') {
        return (
          <button
            type="button"
            className="flex items-center justify-center gap-2 w-[180px] h-[52px] text-h5 text-woodsmoke-950 bg-white rounded-2"
            key="figma"
            onClick={() => {
              window.open(social.link, '_blank');
            }}
          >
            <FigmaSvg width={40} height={40} />
            <span>Figma</span>
          </button>
        );
      }

      if (social.type === 'upwork') {
        return (
          <button
            type="button"
            className="flex items-center justify-center gap-2 w-[180px] h-[52px] text-h5 text-woodsmoke-950 rounded-2 bg-white"
            key="figma"
            onClick={() => {
              window.open(social.link, '_blank');
            }}
          >
            <UpworkSvg2 width={32} height={32} />
            <span>Upwork</span>
          </button>
        );
      }

      return (
        <button
          key="visit"
          onClick={() => {
            window.open(social.link, '_blank');
          }}
        >
          Visit
        </button>
      );
    });
  };

  return (
    <div className="mb-80p*200p">
      <Container>
        <Banner project={project as ProjectType} />
        {data.socials.length > 0 && (
          <div className="social-btns flex flex-col gap-6 md:flex-row lg:gap-11 mt-6 md:mt-17">
            {renderSocials()}
          </div>
        )}
        <div className="mt-18 md:mt-30">
          <ProjectInfo
            infoTitle={data.projectInfo.infoTitle}
            infoDescription={data.projectInfo.infoDescription}
            infoItems={data.projectInfo.infoItems}
          />
        </div>
        {data.projectScope && (
          <div className="project-scope mt-11 md:mt-24">
            <div className="text-h3 leading-1.15">
              {data.projectScope.projectScopeTitle}
            </div>
            <div className="text-body mt-3.5">
              {data.projectScope.projectScopeDescription}
            </div>
          </div>
        )}
        <div className="mt-24 lg:mt-30">
          <Technologies projectTechnologies={data.technologies} />
        </div>
        <div className="mt-18 md:mt-30">
          <Challenges
            img={data.challengesImg}
            challengesAndSolutions={data.challengesAndSolutions}
          />
        </div>
        <div className="mt-18 md:mt-30">
          <ProjectResults results={data.results} slides={data.slides} />
        </div>
        <div className="mt-30">
          <Quote text={data.quote.text} author={data.quote.author} />
        </div>
        <div className="mt-30">
          <ExploreOther
            projects={projectCards.filter(
              ({ key }) => key !== (project as ProjectType)
            )}
          />
        </div>
      </Container>
    </div>
  );
}
