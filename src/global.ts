import { createGlobalStyle } from 'styled-components';

import '@constants/css';
import '@styles/index';

export default createGlobalStyle`
  html {
    height: 100%;
    font-size: calc(8px + 0.39vw);
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Lexend Deca', 'Inter', sans-serif;
    transition: all .4s ease-out;
  }

  #root{
    margin: 0 auto;
    isolation: isolate;
    background: ${(props) => props.theme.canvas};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
`;
