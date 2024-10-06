import { Container } from '@tnf-workspace/react-components';
import { Quote } from '../../components/contact-us-page/quote';
import { WriteUs } from '../../components/write-us';
import { CalendlyWidget } from '../../components/contact-us-page/calendly-widget';

export const metadata = {
  title: 'TNF | Contact Us',
};

export default function Index() {
  return (
    <div className="mb-80p*200p">
      <Container>
        <div className="md:-mb-10 md:-mt-16">
          <CalendlyWidget />
        </div>
        <Quote />
        <div className="mt-[160px] flex justify-center">
          <WriteUs />
        </div>
      </Container>
    </div>
  );
}
