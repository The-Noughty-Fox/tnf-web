import { Hero } from '../components/home-page/hero';
import '../lib/gsap/effects';
import { OurServices } from '../components/home-page/our-services';
import { PingUs } from '../components/ping-us';
import { OurApproach } from '../components/our-approach';
import { clampValue } from '@tnf-workspace/ts-lib';
import { Testimonials } from '../components/testimonials';
import { CoreTeam } from '../components/core-team';
import { Contacts } from '../components/contacts';

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
        <Testimonials
          testimonials={[
            {
              text: `Very communicative and pleasant to work with, highly motivated and eager to provide the best possible solution. They respond quickly, have great skills, and vast relevant knowledge. They provided excellent plans and timelines for a complex project.`,
              name: 'Oren Cohen',
              role: 'VP of R&D',
              company: 'ResonAI',
              thumbnail: '',
            },
            {
              text: `Very communicative and pleasant to work with, highly motivated and eager to provide the best possible solution. They respond quickly, have great skills, and vast relevant knowledge. They provided excellent plans and timelines for a complex project.`,
              name: 'Oren Cohen',
              role: 'VP of R&D',
              company: 'ResonAI',
              thumbnail: '',
            },
            {
              text: `Very communicative and pleasant to work with, highly motivated and eager to provide the best possible solution. They respond quickly, have great skills, and vast relevant knowledge. They provided excellent plans and timelines for a complex project.`,
              name: 'Oren Cohen',
              role: 'VP of R&D',
              company: 'ResonAI',
              thumbnail: '',
            },
            {
              text: `Very communicative and pleasant to work with, highly motivated and eager to provide the best possible solution. They respond quickly, have great skills, and vast relevant knowledge. They provided excellent plans and timelines for a complex project.`,
              name: 'Oren Cohen',
              role: 'VP of R&D',
              company: 'ResonAI',
              thumbnail: '',
            },
          ]}
        />
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
        <Contacts />
      </section>
    </div>
  );
}
