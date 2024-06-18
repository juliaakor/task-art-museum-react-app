import React, { useCallback, useEffect, useState } from 'react';

import { ArrowIcon } from '@components/Icons';
import { Modal } from '@components/index';

import { SelectWrapper, StyledOption, StyledSelect, IconWrapper } from './styled';

interface SearchToolbarProps {
  setSearchQuery: (query: string) => void;
}

export function SearchToolbar({ setSearchQuery }: SearchToolbarProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState('desc');
  const [sortBy, setSortBy] = useState('timestamp');

  const handleSortOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
    handleModal();
  };

  const handleSortByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
    handleModal();
  };

  const handleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  const getParams = useCallback(
    function () {
      return `&sort[${sortBy}][order]=${sortOrder}`;
    },
    [sortBy, sortOrder]
  );

  useEffect(() => {
    setSearchQuery(getParams());
  }, [getParams, setSearchQuery]);

  return (
    <>
      <IconWrapper onClick={handleModal}>
        <ArrowIcon />
      </IconWrapper>
      <Modal isOpen={isModalOpen}>
        <>
          <SelectWrapper>
            <label htmlFor="sortOrder">Sort Order:</label>
            <StyledSelect id="sortOrder" value={sortOrder} onChange={handleSortOrderChange}>
              <StyledOption value="asc">Ascending</StyledOption>
              <StyledOption value="desc">Descending</StyledOption>
            </StyledSelect>
          </SelectWrapper>
          <SelectWrapper>
            <label htmlFor="sortBy">Sort By:</label>
            <StyledSelect id="sortBy" value={sortBy} onChange={handleSortByChange}>
              <StyledOption value="timestamp">Default (Timestamp)</StyledOption>
              <StyledOption value="date_start">Start Date</StyledOption>
            </StyledSelect>
          </SelectWrapper>
        </>
      </Modal>
    </>
  );
}
