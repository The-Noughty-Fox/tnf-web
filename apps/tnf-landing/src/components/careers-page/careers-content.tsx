'use client';

import { Container } from '@tnf-workspace/react-components';
import { CareersBanner } from './careers-banner';
import { Gallery } from './gallery/gallery';
import { VacancyList } from './vacancy-list';
import { CoreTeam } from '../core-team';
import { CareersProvider } from './context';
import { clampValue } from '@tnf-workspace/ts-lib';

export const CareersContent = () => {
  return (
    <div className="mb-15 md:mb-20 lg:mb-30">
      <CareersProvider>
        <Container>
          <CareersBanner />
          <div className="mt-12">
            <Gallery />
          </div>
          <div
            style={{
              marginTop: clampValue({ minSize: 48, maxSize: 96 }),
            }}
          >
            <VacancyList />
          </div>
          <div
            style={{
              marginTop: clampValue({ minSize: 48, maxSize: 96 }),
            }}
          >
            <CoreTeam />
          </div>
        </Container>
      </CareersProvider>
    </div>
  );
};
