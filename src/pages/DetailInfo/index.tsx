import { BookmarkIcon } from '@components/Icons';
import { Loader } from '@components/Loader';
import { Overview } from '@components/Overview';
import { SubHeading } from '@constants/css';
import { ROUTES } from '@constants/routes';
import { getPaintingDetailsByIdUrl, getPaintingImageUrl } from '@utils/api';
import { FullPaintingInfoSchema, FullPaintingInfoType } from '@utils/yup';
import React, { useEffect, useState } from 'react';
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
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState<FullPaintingInfoType | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`${getPaintingDetailsByIdUrl(id)}`);
        const fetchedData = await response.json();

        const validatedData = await FullPaintingInfoSchema.validate(fetchedData.data, { stripUnknown: true });

        setData(validatedData);
      } catch (error) {
        navigate(ROUTES.ERROR_OCCURRED);
      }
    };

    getData();
  }, [id, navigate]);

  const handleBookmarkClick = () => {};

  return (
    <DetailsContainer>
      {data ? (
        <>
          <PaintingWrapper>
            <PaintingImage src={getPaintingImageUrl(data.image_id)} />
            <ButtonWrapper onClick={() => handleBookmarkClick()}>
              <BookmarkIcon />
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
