import React from 'react';

import { ModsenLogoIcon, MuseumLogoIcon } from '@components/Icons';

import { Footer as FooterContainer } from './styled';

export const Footer = () => {
  return (
    <FooterContainer>
      <MuseumLogoIcon color="var(--c-palette-color-black)" />
      <ModsenLogoIcon />
    </FooterContainer>
  );
};
