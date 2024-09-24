'use client';
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import Lenis from 'lenis';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';

type AppContextValue = {
  lenis?: Lenis | null;
  disableScroll: () => void;
  enableScroll: () => void;
};

const AppContext = createContext<AppContextValue>({} as AppContextValue);

type AppContextProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppContextProps) => {
  const lenis = useSmoothScroll();

  const disableScroll = useCallback(() => {
    if (lenis) {
      lenis.stop();
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [lenis]);

  const enableScroll = useCallback(() => {
    if (lenis) {
      lenis.start();
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [lenis]);

  const contextValue = useMemo(
    () => ({ lenis, disableScroll, enableScroll }),
    [lenis]
  );
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
