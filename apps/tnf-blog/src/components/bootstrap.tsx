import { useScrollbarWidth } from '@tnf-workspace/react-components';
import { SmoothScroll } from '@tnf-workspace/react-components';

type BootstrapProps = {};

export const Bootstrap = ({}: BootstrapProps) => {
  useScrollbarWidth();
  return (
    <>
      <SmoothScroll />
    </>
  );
};
