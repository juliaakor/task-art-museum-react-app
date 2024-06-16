import { styled } from 'styled-components';

export const SectionContainer = styled.section`
  margin: 0 0 var(--c-spacing-xxx-large) 0;
`;

export const SubSectionName = styled.h3`
  font-size: var(--c-font-size-2);
  padding: 0;
  color: ${(props) => props.theme.textHighlight};
  margin: 0 auto;
  width: max-content;
`;

export const SectionName = styled.div`
  font-size: var(--c-font-size-6);
  padding: 0 0 var(--c-spacing-xxx-medium) 0;
  color: ${(props) => props.theme.textPrimary};
  margin: 0 auto var(--c-spacing-xxx-medium) auto;
  width: max-content;
`;
