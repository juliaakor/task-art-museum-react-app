import React, { useState } from 'react';

import { getPaintingImageUrl } from '@api/index';
import { BookmarkIcon, NotFoundIcon } from '@components/Icons';
import { IconButtonWrapper } from '@constants/css';
import { useBookmarkStatus } from '@hooks/index';

import {
  CardArtist,
  CardInfo,
  CardStatus,
  CardTitle,
  PaintingDefaultWrapper,
  PaintingImage,
  PreviewCardContainer,
} from './styled';

interface PreviewCardProps {
  artist_title: string;
  id: number;
  image_id: string;
  is_public_domain: boolean;
  isFullSize?: boolean;
  position?: string;
  size?: number;
  title: string;
}

const FullSizeCardDefaults = {
  $position: 'absolute',
  $size: '70%',
};

const MiniSizeCardDefaults = {
  $position: 'relative',
  $size: '24rem',
};

export const PreviewCard = ({
  artist_title,
  id,
  image_id,
  is_public_domain,
  isFullSize = true,
  title,
}: PreviewCardProps) => {
  const [isImageLoaded, setisImageLoaded] = useState(true);
  const [isBookmarked, toggleBookmark] = useBookmarkStatus(id);

  const handleImgError = () => {
    setisImageLoaded(false);
  };

  const handleBookmarkClick = (event: React.MouseEvent) => {
    event.preventDefault();
    isBookmarked ? toggleBookmark(id) : toggleBookmark({ artist_title, id, image_id, is_public_domain, title });
  };

  return (
    <PreviewCardContainer {...(isFullSize ? FullSizeCardDefaults : MiniSizeCardDefaults)}>
      {!isFullSize && isImageLoaded ? (
        <PaintingImage onError={handleImgError} src={getPaintingImageUrl(image_id)} />
      ) : (
        !isFullSize &&
        !isImageLoaded && (
          <PaintingDefaultWrapper>
            <NotFoundIcon />
          </PaintingDefaultWrapper>
        )
      )}
      <CardInfo>
        <CardTitle>{title || 'Untitled'}</CardTitle>
        <CardArtist>{artist_title || 'Unknown'}</CardArtist>
        <CardStatus>{is_public_domain ? 'Public' : 'Private'}</CardStatus>
      </CardInfo>
      <IconButtonWrapper onClick={handleBookmarkClick}>
        <BookmarkIcon
          color={isBookmarked ? 'var(--c-palette-color-green-1)' : 'var(--c-palette-color-orange-2)'}
          key={id}
          size={24}
        />
      </IconButtonWrapper>
    </PreviewCardContainer>
  );
};
