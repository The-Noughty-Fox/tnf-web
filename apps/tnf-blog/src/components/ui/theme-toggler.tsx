import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

function getInitialColorMode() {
  const persistedColorPreference = window.localStorage.getItem('color-mode');
  const hasPersistedPreference = typeof persistedColorPreference === 'string';

  if (hasPersistedPreference) {
    return persistedColorPreference;
  }

  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const hasMediaQueryPreference = typeof mql.matches === 'boolean';
  if (hasMediaQueryPreference) {
    return mql.matches ? 'dark' : 'light';
  }
  // If they are using a browser/OS that doesn't support
  // color themes, let's default to 'light'.
  return 'light';
}

let btnClsx = clsx(
  'h-6 w-[52px] p-[2px]',
  'focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:outline-none',
  'relative inline-flex items-center flex-shrink-0 cursor-pointer rounded-full'
);

let togglerClsx = clsx(
  'pointer-events-none inline-block h-5 w-5 transform rounded-full shadow ring-0'
);

export const ThemeToggler = () => {
  const [theme, setTheme] = useState<'light' | 'dark' | undefined>(undefined);
  const [btnCns, setBtnCns] = useState<string>('opacity-0');
  const [togglerCns, setTogglerCns] = useState<string>('');
  const initial = useRef(true);

  useEffect(() => {
    setTheme(
      document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    );
  }, []);

  useEffect(() => {
    if (theme === undefined) return;

    if (initial.current) {
      initial.current = false;

      setBtnCns(
        clsx(btnClsx, theme === 'dark' ? 'bg-woodsmoke-900' : 'bg-orange-100')
      );
      setTogglerCns(
        clsx(
          theme === 'dark' ? 'translate-x-7' : 'translate-x-0',
          theme === 'dark' ? 'bg-white' : 'bg-woodsmoke-950',
          togglerClsx
        )
      );
    } else {
      setBtnCns(
        clsx(
          btnClsx,
          theme === 'dark' ? 'bg-woodsmoke-900' : 'bg-orange-100',
          'duration-300 transition opacity-100'
        )
      );
      setTogglerCns(
        clsx(
          theme === 'dark' ? 'translate-x-7' : 'translate-x-0',
          theme === 'dark' ? 'bg-white' : 'bg-woodsmoke-950',
          togglerClsx,
          'transition duration-300'
        )
      );
    }
  }, [theme]);

  const handeClick = () => {
    if (theme) {
      document.documentElement.classList.remove(theme);
    }
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', String(newTheme));
  };

  return (
    <button
      type="button"
      onClick={handeClick}
      class={btnCns}
      role="switch"
      aria-checked="false"
    >
      <span class="sr-only">Use setting</span>
      <span aria-hidden="true" class={togglerCns}></span>
    </button>
  );
};
