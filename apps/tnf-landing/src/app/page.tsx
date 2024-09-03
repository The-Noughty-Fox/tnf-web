import { Hero } from '../components/home-page/hero';
import { OurServices } from '../components/home-page/our-services';
import { PingUs } from '../components/ping-us';
import { OurApproach } from '../components/our-approach';
import { clampValue } from '@tnf-workspace/ts-lib';
import { Testimonials } from '../components/testimonials';
import { CoreTeam } from '../components/core-team';
import { Contacts } from '../components/contacts';
import { testimonials } from '../lib/data/testimonials';
import { ArrowUpRightSvg } from '@tnf-workspace/react-components';

export default function Index() {
  return (
    <div className="mb-80p*200p">
      <Hero />
      <section className="mt-80p*200p">
        <OurServices />
      </section>
      <section className="mt-80p*200p">
        <PingUs />
      </section>
      <section className="mt-80p*200p">
        <OurApproach />
      </section>
      <section
        style={{
          marginTop: clampValue({ minSize: 80, maxSize: 400 }),
        }}
      >
        <Testimonials testimonials={testimonials} />
      </section>
      <section
        style={{
          marginTop: clampValue({ minSize: 80, maxSize: 400 }),
        }}
      >
        <CoreTeam />
      </section>
      <section
        style={{
          marginTop: clampValue({ minSize: 80, maxSize: 400 }),
        }}
      >
        <Contacts controlText="Send message" Icon={<ArrowUpRightSvg />} />
      </section>
    </div>
  );
}
