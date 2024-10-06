import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
} from 'react';

type ScrollTargets = 'open-vacancies';
const scrollTargets: Record<ScrollTargets, ScrollTargets> = {
  'open-vacancies': 'open-vacancies',
};

type CareersContextType = {
  scrollTo: (scrollTargets: ScrollTargets) => void;
  scrollTargets: Record<ScrollTargets, ScrollTargets>;
};

export const CareersContext = createContext<CareersContextType>(
  {} as CareersContextType
);

export const CareersProvider = ({ children }: PropsWithChildren) => {
  const scrollTo = useCallback((scrollTarget: ScrollTargets) => {
    const target = document.getElementById(scrollTarget);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const contextValue = useMemo(
    () => ({
      scrollTargets,
      scrollTo,
    }),
    []
  );
  return (
    <CareersContext.Provider value={contextValue}>
      {children}
    </CareersContext.Provider>
  );
};

export const useCareersContext = () => {
  return useContext(CareersContext);
};
