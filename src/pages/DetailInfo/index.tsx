import { BookmarkIcon } from '@components/Icons';
import { Loader } from '@components/Loader';
import { Overview } from '@components/Overview';
import { SubHeading } from '@constants/css';
import { ROUTES } from '@constants/routes';
import { deletePainting, savePainting } from '@store/actions';
import { getPaintingDetailsByIdUrl, getPaintingImageUrl } from '@utils/api';
import { useBookmarkStatus } from '@utils/hooks';
import { FullPaintingInfoSchema, FullPaintingInfoType } from '@utils/yup';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import {
  ArtistName,
  ButtonWrapper,
  DetailsContainer,
  OverviewContainer,
  PaintingImage,
  PaintingWrapper,
  YearsLabel,
} from './styled';

export const DetailInfoPage = () => {
  const { id: stringId } = useParams();
  const id = Number(stringId);
  const navigate = useNavigate();
  const [isBookmarked, toggleBookmark] = useBookmarkStatus(id);
  const dispatch = useDispatch();

  const [data, setData] = useState<FullPaintingInfoType>();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`${getPaintingDetailsByIdUrl(stringId)}`);
        const fetchedData = await response.json();

        const validatedData = await FullPaintingInfoSchema.validate(fetchedData.data, { stripUnknown: true });

        setData(validatedData);
      } catch (error) {
        navigate(ROUTES.ERROR_OCCURRED);
      }
    };

    getData();
  }, [id, navigate, stringId]);

  const handleBookmarkClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (isBookmarked) {
      dispatch(deletePainting(id));
    } else {
      dispatch(
        savePainting({
          artist_title: data?.artist_title || '',
          id,
          image_id: data?.image_id || '',
          is_public_domain: data?.is_public_domain || false,
          title: data?.title || '',
        })
      );
    }
    toggleBookmark();
  };

  return (
    <DetailsContainer>
      {data ? (
        <>
          <PaintingWrapper>
            <PaintingImage src={getPaintingImageUrl(data.image_id)} />
            <ButtonWrapper onClick={handleBookmarkClick}>
              <BookmarkIcon
                color={isBookmarked ? 'var(--c-palette-color-green-1)' : 'var(--c-palette-color-orange-2)'}
              />
            </ButtonWrapper>
          </PaintingWrapper>
          <OverviewContainer>
            <div>
              <SubHeading>{data.title}</SubHeading>
              <ArtistName>{data.artist_title}</ArtistName>
              <YearsLabel>{data.fiscal_year}</YearsLabel>
            </div>
            <Overview {...data} />
          </OverviewContainer>
        </>
      ) : (
        <Loader />
      )}
    </DetailsContainer>
  );
};
