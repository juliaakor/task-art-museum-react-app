import React from 'react';

import { ArrowIcon } from '@components/Icons';

import { PaginationItem, PaginationItemsContainer } from './styled';

interface PaginationProps {
  hasNext?: boolean;
  hasPrev?: boolean;
  onNextPage: () => void;
  onPageClick: (page: number) => void;
  onPrevPage?: () => void;
  page: number;
  pagesCount: number;
}

export const Pagination = ({ onNextPage: handleNextPageClick, onPageClick, page, pagesCount }: PaginationProps) => {
  const startPage = Math.max(1, Math.min(page - 2, pagesCount - 4));
  const endPage = Math.min(pagesCount, startPage + 4);

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationItemsContainer>
      {pageNumbers.map((pageNumber) => (
        <PaginationItem $active={pageNumber === page} key={pageNumber} onClick={() => onPageClick(pageNumber)}>
          {pageNumber}
        </PaginationItem>
      ))}
      <div onClick={() => handleNextPageClick()}>
        <ArrowIcon />
      </div>
    </PaginationItemsContainer>
  );
};
