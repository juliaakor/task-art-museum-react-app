import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTheme } from 'styled-components';

import { fetchData, getPaintingDetailsByIdUrl, getPaintingImageUrl } from '@api/index';
import { BookmarkIcon } from '@components/Icons';
import { Loader, Overview } from '@components/index';
import { ROUTES } from '@constants/routes';
import { useBookmarkStatus } from '@hooks/index';
import { SubHeading } from '@styles/index';
import { PaintingsDetailsSchema, FullPaintingInfoType } from '@validation/index';

import {
  ArtistName,
  ButtonWrapper,
  DetailsContainer,
  OverviewContainer,
  PaintingImage,
  PaintingWrapper,
  YearsLabel,
} from './styled';

export function DetailInfoPage() {
  const theme = useTheme();
  const { id: stringId } = useParams();
  const id = Number(stringId);
  const navigate = useNavigate();
  const [isBookmarked, toggleBookmark] = useBookmarkStatus(id);

  const [data, setData] = useState<FullPaintingInfoType>();

  useEffect(() => {
    async function getData() {
      try {
        const validatedData = await fetchData({
          url: `${getPaintingDetailsByIdUrl(stringId)}`,
          validationScheme: PaintingsDetailsSchema,
        });
        setData(validatedData.data);
      } catch (error) {
        navigate(ROUTES.ERROR_OCCURRED);
      }
    }

    getData();
  }, [navigate, stringId]);

  function handleBookmarkClick(event: React.MouseEvent) {
    event.stopPropagation();
    isBookmarked
      ? toggleBookmark(id)
      : toggleBookmark({
          artist_title: data?.artist_title || '',
          id,
          image_id: data?.image_id || (data?.alt_image_ids ? data.alt_image_ids[0] : ''),
          is_public_domain: data?.is_public_domain || false,
          title: data?.title || '',
        });
  }

  return (
    <DetailsContainer>
      {data ? (
        <>
          <PaintingWrapper>
            <PaintingImage
              src={getPaintingImageUrl(data.image_id || (data.alt_image_ids ? data.alt_image_ids[0] : ''))}
            />
            <ButtonWrapper onClick={handleBookmarkClick}>
              <BookmarkIcon color={isBookmarked ? `${theme.buttonActiveIcon}` : `${theme.textHighlight}`} />
            </ButtonWrapper>
          </PaintingWrapper>
          <OverviewContainer>
            <div>
              <SubHeading>{data.title}</SubHeading>
              <ArtistName>{data.artist_title}</ArtistName>
              <YearsLabel>{data.date_start}</YearsLabel>
            </div>
            <Overview {...data} />
          </OverviewContainer>
        </>
      ) : (
        <Loader />
      )}
    </DetailsContainer>
  );
}
