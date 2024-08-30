import { LogoSvg } from './icons/logo-svg';
import { LogoTextSvg } from './icons/logo-text-svg';

type LogoProps = {
  href: string;
};

export const Logo = ({ href }: LogoProps) => {
  return (
    <a href={href} className="flex flex-col items-center gap-2">
      <LogoSvg className="" />
      <LogoTextSvg className="hidden lg:inline-block" />
    </a>
  );
};
