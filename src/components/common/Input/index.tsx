import React, { InputHTMLAttributes, ReactNode } from 'react';

import { StyledInput } from './styled';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
  placeholder?: string;
  value: number | readonly string[] | string | undefined;
}

export function Input({ children, placeholder, value, ...props }: InputProps) {
  return (
    <StyledInput placeholder={placeholder} value={value} {...props}>
      {children}
    </StyledInput>
  );
}
