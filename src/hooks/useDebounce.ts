import { useCallback, useEffect, useRef, useState } from 'react';

interface DebounceProps<T> {
  cb: (args: T) => void;
  delay: number;
}

export function useDebounce<T>({ cb, delay }: DebounceProps<T>) {
  const callbackRef = useRef(cb);
  const [debouncedValue, setDebouncedValue] = useState<T | null>(null);

  useEffect(() => {
    callbackRef.current = cb;
  }, [cb]);

  useEffect(() => {
    if (debouncedValue === null) return;

    const handler = setTimeout(function () {
      callbackRef.current(debouncedValue);
    }, delay);

    return function () {
      clearTimeout(handler);
    };
  }, [debouncedValue, delay]);

  const debouncedCallback = useCallback(function (value: T) {
    setDebouncedValue(value);
  }, []);

  return debouncedCallback;
}
