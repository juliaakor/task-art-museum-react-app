import React, { ReactElement } from 'react';

import { SectionContainer, SectionName, SubSectionName } from './styled';

interface SectionProps {
  children?: ReactElement;
  info: string;
  title: string;
}

export function Section({ children, info, title, ...props }: SectionProps) {
  return (
    <SectionContainer {...props}>
      <SubSectionName>{info}</SubSectionName>
      <SectionName>{title}</SectionName>
      {children}
    </SectionContainer>
  );
}
