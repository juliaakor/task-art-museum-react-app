import React from 'react';
import { useTheme } from 'styled-components';

import { ModsenLogoIcon, MuseumLogoIcon } from '@components/Icons';

import { Footer as FooterContainer } from './styled';

export const Footer = () => {
  const theme = useTheme();

  return (
    <FooterContainer>
      <MuseumLogoIcon color={`${theme.textIconBlack}`} />
      <ModsenLogoIcon />
    </FooterContainer>
  );
};
