import { NotFound } from '@tnf-workspace/react-components';
import { GoHomeBtn } from '../components/not-found-page/go-home-btn';

export default function NotFoundPage() {
  return <NotFound goHomeControl={<GoHomeBtn />} />;
}
