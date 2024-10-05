import { Container } from '@tnf-workspace/react-components';
import { CareersBanner } from '../../components/careers-page/careers-banner';
import { Gallery } from '../../components/careers-page/gallery';
import { CoreTeam } from '../../components/core-team';
import { VacancyList } from '../../components/careers-page/vacancy-list';

export default function Index() {
  return (
    <div className="my-15 md:my-20 lg:my-30">
      <Container>
        <CareersBanner />
        <div className="mt-12">
          <Gallery />
        </div>
        <div className="mt-80p*200p">
          <VacancyList />
        </div>
        <div className="mt-80p*200p">
          <CoreTeam />
        </div>
      </Container>
    </div>
  );
}
