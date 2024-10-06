import { Container } from '@tnf-workspace/react-components';
import { Heading } from '../../components/heading';
import { QAndAList } from '../../components/q-and-a-page/q-and-a-list';

export const metadata = {
  title: 'TNF | Q & A',
};

export default function Index() {
  return (
    <div className="mb-80p*200p">
      <Container>
        <div>
          <Heading text="Q & A" />
          <QAndAList />
        </div>
      </Container>
    </div>
  );
}
