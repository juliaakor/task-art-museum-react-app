import { useCallback, useEffect, useRef, useState } from 'react';

interface DebounceProps<T> {
  cb: (args: T) => void;
  delay: number;
}

export const useDebounce = <T>({ cb, delay }: DebounceProps<T>) => {
  const callbackRef = useRef(cb);
  const [debouncedValue, setDebouncedValue] = useState<T | null>(null);

  useEffect(() => {
    callbackRef.current = cb;
  }, [cb]);

  useEffect(() => {
    if (debouncedValue === null) return;

    const handler = setTimeout(() => {
      callbackRef.current(debouncedValue);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [debouncedValue, delay]);

  const debouncedCallback = useCallback((value: T) => {
    setDebouncedValue(value);
  }, []);

  return debouncedCallback;
};
