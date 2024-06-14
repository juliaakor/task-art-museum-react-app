import { styled } from 'styled-components';

export const SearchWrapper = styled.div`
  width: 50%;
  margin: var(--c-spacing-xx-small) auto;
`;

export const FieldWrapper = styled.div`
  position: relative;
`;

export const SubmitIcon = styled.button`
  border: 0;
  background: transparent;
  border-radius: 50%;
  padding: var(--c-spacing-xx-small);
  position: absolute;
  right: var(--c-spacing-xxx-small);
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;

  &:hover {
    background: var(--c-palette-color-orange-3-30);
  }
`;

export const SearchError = styled.span`
  color: var(--c-palette-color-orange-3-70);
  margin: var(--c-spacing-x-small);
  font-size: var(--c-font-weight-thin);
`;

export const CardListWrapper = styled.div`
  margin: var(--c-spacing-x-medium) auto;
  width: 85%;
`;
