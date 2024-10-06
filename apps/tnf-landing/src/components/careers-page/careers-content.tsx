'use client';

import { Container } from '@tnf-workspace/react-components';
import { CareersBanner } from './careers-banner';
import { Gallery } from './gallery';
import { VacancyList } from './vacancy-list';
import { CoreTeam } from '../core-team';
import { CareersProvider } from './context';

export const CareersContent = () => {
  return (
    <div className="my-15 md:my-20 lg:my-30">
      <CareersProvider>
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
      </CareersProvider>
    </div>
  );
};
