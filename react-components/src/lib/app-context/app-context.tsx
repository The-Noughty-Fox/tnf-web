'use client';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import Lenis from 'lenis';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';

type AppContextValue = {
  lenis?: Lenis | null;
};

const AppContext = createContext<AppContextValue>({} as AppContextValue);

type AppContextProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppContextProps) => {
  const lenis = useSmoothScroll();

  const contextValue = useMemo(() => ({ lenis }), [lenis]);
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
