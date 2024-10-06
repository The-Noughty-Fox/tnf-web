import { Container } from '@tnf-workspace/react-components';
import { PortfolioList } from '../../components/portfolio-page/portfolio-list';

export const metadata = {
  title: 'TNF | Portfolio',
};

export default function Index() {
  return (
    <div className="mb-80p*200p">
      <Container>
        <PortfolioList />
      </Container>
    </div>
  );
}
