import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, deletePainting, savePainting } from '@store/actions';
import { RootState } from '@store/reducers';
import { PaintingCardInfoType } from '@type/api';

export const useBookmarkStatus = (paintingId: number) => {
  const dispatch = useDispatch<AppDispatch>();
  const paintings = useSelector((state: RootState) => state.paintings);
  const isPaintingBookmarked = paintings.some((painting: PaintingCardInfoType) => painting.id === paintingId);

  const [isBookmarked, setIsBookmarked] = useState<boolean>(isPaintingBookmarked);

  const toggleBookmark = (payload: number | PaintingCardInfoType) => {
    isBookmarked
      ? dispatch(deletePainting(payload as number))
      : dispatch(savePainting(payload as PaintingCardInfoType));

    setIsBookmarked((prevState) => !prevState);
  };

  return [isBookmarked, toggleBookmark] as const;
};
