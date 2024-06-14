import { styled } from 'styled-components';

import { FlexVerticalCenter } from '@constants/css';

export const TextHighlightWrapper = styled.span`
  ${FlexVerticalCenter}
  justify-content: center;

  & svg {
    padding: 4px;
  }
`;
