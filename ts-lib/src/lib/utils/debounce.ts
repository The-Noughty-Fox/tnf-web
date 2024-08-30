// debounce
type DebouncedFunctionWithOptions = (...args: unknown[]) => void;

interface DebounceOptions {
  debounceType?: 'trailing' | 'leading' | 'both';
}

export const debounce = (
  func: DebouncedFunctionWithOptions,
  wait: number,
  options: DebounceOptions = {}
): DebouncedFunctionWithOptions => {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  let lastArgs: unknown[] | null = null;
  const { debounceType = 'leading' } = options;

  return function (...args: unknown[]) {
    if (['leading', 'both'].includes(debounceType) && !timeout) {
      func(...args);
    }

    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      if (['trailing', 'both'].includes(debounceType) && lastArgs) {
        func(...lastArgs);
      }
      timeout = null;
    }, wait);

    lastArgs = args;
  };
};
