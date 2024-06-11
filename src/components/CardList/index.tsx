import { Card } from '@components/Card';
import { Loader } from '@components/Loader';
import { Pagination } from '@components/Pagination';
import { usePagination } from '@utils/hooks/usePagination';
import React, { useEffect } from 'react';
import { PaintingsListType } from 'types';

import { CardListContainer } from './styled';

export const CardList = ({ data, isFullSize, pagination, query }: PaintingsListType) => {
  const paintingsPerPage = 3;
  const { currentPage, currentPaintings, handleNextPage, handlePageClick, handlePrevPage, pagesCount, setSearch } =
    usePagination(pagination, data, paintingsPerPage, query);

  useEffect(() => {
    setSearch(query);
  }, [query, setSearch]);

  return (
    <div>
      {currentPaintings ? (
        <>
          <CardListContainer>
            {currentPaintings.map((painting) => (
              <Card isFullSize={isFullSize} key={painting.id} painting={painting} />
            ))}
          </CardListContainer>
          <Pagination
            hasNext={currentPage < pagesCount}
            hasPrev={currentPage > 1}
            onNextPage={handleNextPage}
            onPageClick={handlePageClick}
            onPrevPage={handlePrevPage}
            page={currentPage}
            pagesCount={pagesCount}
          />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};
