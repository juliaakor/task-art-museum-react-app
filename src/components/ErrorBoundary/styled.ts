import { styled } from 'styled-components';

export const ErrorBoundaryWrapper = styled.div`
  margin: 10% auto;
  width: fit-content;
  color: ${(props) => props.theme.textPrimary};
  font-size: var(--c-font-size-2);
  font-weight: var(--c-font-weight-thin);
  border-radius: 15px;
  padding: 10px 30px;
  box-shadow: 3px 6px 26px -16px ${(props) => props.theme.brandPrimary};
`;
