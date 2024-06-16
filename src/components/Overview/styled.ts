import { styled } from 'styled-components';

export const PropertyWrapper = styled.div`
  color: ${(props) => props.theme.textPrimary};
  font-size: var(--c-font-size-2);
  font-weight: var(--c-font-weight-regular);
  line-height: var(--c-line-height-text-2);
  padding: 0 0 var(--c-spacing-medium) 0;
`;
