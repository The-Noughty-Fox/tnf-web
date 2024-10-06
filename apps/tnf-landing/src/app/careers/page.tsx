import { CareersContent } from '../../components/careers-page/careers-content';

export const metadata = {
  title: 'TNF | Careers',
};

export default function Index() {
  return (
    <div className="my-15 md:my-20 lg:my-30">
      <CareersContent />
    </div>
  );
}
