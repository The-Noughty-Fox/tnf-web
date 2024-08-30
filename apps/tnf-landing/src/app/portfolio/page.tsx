import { Container } from '@tnf-workspace/react-components';
import { PortfolioList } from '../../components/portfolio-page/portfolio-list';

export default function Index() {
  return (
    <div className="mb-80p*200p">
      <Container>
        <PortfolioList />
      </Container>
    </div>
  );
}
