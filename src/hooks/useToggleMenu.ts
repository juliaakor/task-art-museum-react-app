import { useEffect, useState } from 'react';

export const useToggleMenu = (isOpen = false, mobileBreakpoint = 500) => {
  const [isMenuOpen, toggleMenu] = useState(isOpen);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= mobileBreakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= mobileBreakpoint);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileBreakpoint]);

  useEffect(() => {
    const body = document.body.style;
    isMenuOpen && isMobile ? (body.overflow = 'hidden') : (body.overflow = 'auto');
  }, [isMenuOpen, isMobile]);

  return { isMenuOpen, isMobile, setIsMobile, toggleMenu };
};
