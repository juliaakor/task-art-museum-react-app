import { useCallback, useEffect, useState } from 'react';
import * as Yup from 'yup';

import { fetchData, getBaseApiUrl } from '@api/index';
import { PaginationInfoType, PaintingCardInfoType } from '@type/api';

export function usePagination(
  initialPagination: PaginationInfoType,
  initialPaintings: PaintingCardInfoType[],
  paintingsPerPage: number,
  query?: string,
  validationScheme?: Yup.Schema
) {
  const pagesCount = initialPagination.total_pages;
  const [currentPage, setCurrentPage] = useState(initialPagination.current_page);
  const [currentPaintings, setCurrentPaintings] = useState<PaintingCardInfoType[]>(initialPaintings);
  const [isInitial, setIsInitial] = useState(true);
  const [search, setSearch] = useState(query);

  const fetchPaintings = useCallback(
    async function () {
      const data = await fetchData({
        url: `${getBaseApiUrl(search, paintingsPerPage)}&page=${currentPage}`,
        validationScheme,
      });
      setCurrentPaintings(data.data);
    },
    [currentPage, paintingsPerPage, search, validationScheme]
  );

  useEffect(() => {
    if (currentPage !== initialPagination.current_page || !isInitial) {
      fetchPaintings();
    }
  }, [currentPage, fetchPaintings, initialPagination.current_page, isInitial]);

  const handleNextPage = useCallback(
    function () {
      if (currentPage < pagesCount) setCurrentPage(currentPage + 1);
    },
    [currentPage, pagesCount]
  );

  const handlePrevPage = useCallback(
    function () {
      if (currentPage > 1) setCurrentPage(currentPage - 1);
    },
    [currentPage]
  );

  const handlePageClick = useCallback(function (pageNumber: number) {
    setIsInitial(false);
    setCurrentPage(pageNumber);
  }, []);

  return { currentPage, currentPaintings, handleNextPage, handlePageClick, handlePrevPage, pagesCount, setSearch };
}
