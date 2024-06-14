import { useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@store/reducers';
import { PaintingCardInfoType } from 'types';

export const useBookmarkStatus = (paintingId: number): [boolean, () => void] => {
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const paintings = useSelector((state: RootState) => state.paintings);

  const isPaintingBookmarked = paintings.some((painting: PaintingCardInfoType) => painting.id === paintingId);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return [isPaintingBookmarked, toggleBookmark];
};
