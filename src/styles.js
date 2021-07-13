import { createGlobalStyle } from 'styled-components/macro';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  ${normalize}
`;
