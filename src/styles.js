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

export const theme = {
  colors: {
    primary: '#fb6da3',
    secondary: '#8cc9e8',
    black: '#242424',
    white: '#ffffff',
  }
}
