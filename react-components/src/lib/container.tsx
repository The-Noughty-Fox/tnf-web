import { PropsWithChildren } from 'react';

export const Container = ({ children }: PropsWithChildren) => {
  return (
    <div className="max-w-[var(--screen-xl)] m-auto w-full px-[var(--container-px)] md:px-[var(--container-px-md)] lg:px-[var(--container-px-lg)]">
      {children}
    </div>
  );
};
