import React, { ReactNode } from 'react';

import { StyledInput } from './styled';

interface InputProps {
  children?: ReactNode;
  placeholder?: string;
  value: number | readonly string[] | string | undefined;
}

export const Input = ({ children, placeholder, value, ...props }: InputProps) => {
  return (
    <StyledInput placeholder={placeholder} value={value} {...props}>
      {children}
    </StyledInput>
  );
};
