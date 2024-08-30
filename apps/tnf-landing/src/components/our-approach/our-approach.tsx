import { clampValue } from '@tnf-workspace/ts-lib';
import {
  Container,
  FoxFilledSvg,
  FoxOutlinedSvg,
} from '@tnf-workspace/react-components';
import { Heading } from '../heading';
import { Blurry } from '../blurry';
import { OurApproachList } from './components/our-approach-list';

export const OurApproach = () => {
  return (
    <div>
      <Container>
        <div className="relative fox-container">
          <div className="fox relative flex items-center justify-center">
            <FoxFilledSvg
              className="h-auto text-orange-800"
              style={{
                width: clampValue({ minSize: 193, maxSize: 355 }),
              }}
            />
            <FoxOutlinedSvg className="absolute w-full h-full fox-outlined top-5 -left-3" />
          </div>
          <div className="fox-heading absolute-center whitespace-nowrap">
            <Heading text={'Our Approach'} />
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 -top-1/2 -z-10">
            <Blurry height={1200} width={1200} />
          </div>
        </div>
        <OurApproachList />
      </Container>
    </div>
  );
};
