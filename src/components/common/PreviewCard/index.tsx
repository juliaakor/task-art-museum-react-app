import { BookmarkIcon, NotFoundIcon } from '@components/Icons';
import { IconButtonWrapper } from '@constants/css';
import { getPaintingImageUrl } from '@utils/api';
import React, { useState } from 'react';

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
  $size: 'var(--c-size-large)',
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
  const handleImgError = () => {
    setisImageLoaded(false);
  };

  const handleBookmarkClick = () => {};

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
      <IconButtonWrapper onClick={() => handleBookmarkClick()}>
        <BookmarkIcon key={id} size={24} />
      </IconButtonWrapper>
    </PreviewCardContainer>
  );
};
