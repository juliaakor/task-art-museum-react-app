import { ModsenLogoIcon, MuseumLogoIcon } from '@components/Icons';
import React from 'react';

import { Footer as FooterContainer } from './styled';

export const Footer = () => {
  return (
    <FooterContainer>
      <MuseumLogoIcon color="var(--c-palette-color-black)" />
      <ModsenLogoIcon />
    </FooterContainer>
  );
};
