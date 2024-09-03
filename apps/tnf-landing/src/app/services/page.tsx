import { ServicesHero } from '../../components/services-page/services-hero';
import { ServicesSummary } from '../../components/services-page/services-summary';
import { ExploreOther } from '../../components/explore-other';
import { projectCards } from '../../lib/data/projectCards';
import { Container } from '@tnf-workspace/react-components';
import { Technologies } from '../../components/technologies';
import { Testimonials } from '../../components/testimonials';
import { ServicesMobileDevelopment } from '../../components/services-page/services-mobile-development';
import { ServicesStats } from '../../components/services-page/services-stats';
import { ServicesProsAndCons } from '../../components/services-page/services-pros-and-cons';
import { testimonials } from '../../lib/data/testimonials';

export default function Index() {
  return (
    <div className="mb-80p*200p">
      <ServicesHero
        title="iOS DEVELOPMENT"
        description="Years of mobile and web development expertise will take your application from the stage of an idea to making an impact of millions of people."
      />
      <ServicesSummary
        title="OUR iOS DEVELOPMENT SERVICES"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <ExploreOther
        title="iOS Projects"
        projects={projectCards.filter((project) =>
          project.platform.includes('ios')
        )}
      />
      <div className="mt-80p*200p">
        <Container>
          <Technologies
            projectTechnologies={[
              'arKit',
              'uiKit',
              'arCore',
              'swift',
              'swiftUi',
              'jetpackCompose',
            ]}
          />
        </Container>
      </div>
      <div className="mt-80p*200p">
        <Testimonials testimonials={testimonials} />
      </div>
      <div className="mt-80p*200p">
        <ServicesMobileDevelopment />
      </div>
      <div className="mt-80p*200p">
        <ServicesStats />
      </div>
      <ServicesProsAndCons
        pros={{
          title: 'Native',
          items: [
            'Direct access to platform features',
            'Low level of abstraction, less places for potential bugs',
            'More advanced customisation capabilities',
            'Engineer has specific platform expertise',
            'User experience usually is better as it   follows system UX and is very familiar',
            'Taking advantage of platform specific language features',
            'Years of open source community development provides high quality platform specific libraries',
          ],
        }}
        cons={{
          title: 'Cross-Platform',
          items: [
            'Two platforms are alike from birds eye view, but differ quite a bit in implementation and continue to drift apart',
            'Resulting cross platform abstraction gets needlessly complex because of that Native SDKs and languages became ergonomic enough to have the same developer experience and speed as cross platform solutions',
            'Cross platform solutions are usually based on community support, so you can get in situations where nobody or someone with no particular expertise implemented a wrapper for a particular platform feature and maintenance can fall on the team',
          ],
        }}
      />
    </div>
  );
}
