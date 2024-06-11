import { useEffect, useState } from 'react';

interface DebounceProps {
  cb: CallableFunction;
  delay: number;
}

export const useDebounce = ({ cb, delay }: DebounceProps) => {
  const [debounceValue, setDebounceValue] = useState(cb);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(cb);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [cb, delay]);

  return debounceValue;
};
