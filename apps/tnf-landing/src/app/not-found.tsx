import {
  Container,
  CurlyArrow1Svg,
  CurlyArrow4Svg,
} from '@tnf-workspace/react-components';
import { NotFoundFox } from '../components/not-found-page/not-found-fox';
import { clampValue } from '@tnf-workspace/ts-lib';
import { FullGlitchText } from '../components/glitching-text/full-glitch-text';
import { GoHomeBtn } from '../components/not-found-page/go-home-btn';

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center text-center overflow-hidden">
      <Container>
        <div className="mb-20">
          <div className="flex items-center justify-center">
            <NotFoundFox />
            <h1
              style={{
                fontSize: clampValue({ minSize: 96, maxSize: 240 }),
              }}
              className="absolute font-semibold font-fivo"
            >
              <FullGlitchText text="404" />
            </h1>
          </div>
          <h2 className="text-h2 mt-8">WHOOPS</h2>
          <p className="text-body mt-6 md:mt-8">
            The page you&apos;re looking for seems to have taken a wrong turn.
            Try
          </p>
          <div className="mt-20 flex justify-center relative">
            <div className="relative">
              <GoHomeBtn />

              <div className="absolute top-0 -translate-y-1/2 translate-x-full -right-20 hidden lg:block">
                <CurlyArrow1Svg className="animate-levitate-sm md:animate-levitate-md" />
              </div>
              <div className="absolute top-0 -translate-y-1/2 translate-x-full -right-10 lg:hidden">
                <CurlyArrow4Svg className="animate-levitate-sm md:animate-levitate-md" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
