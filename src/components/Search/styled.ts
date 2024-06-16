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
    background: ${(props) => props.theme.buttonActiveBackground};
  }
`;

export const SearchError = styled.span`
  color: ${(props) => props.theme.textWarning};
  margin: var(--c-spacing-x-small);
  font-size: var(--c-font-weight-thin);
`;

export const CardListWrapper = styled.div`
  margin: var(--c-spacing-xxx-medium) auto;
  width: fit-content;
`;
