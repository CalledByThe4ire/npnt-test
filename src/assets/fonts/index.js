import { createGlobalStyle } from 'styled-components/macro';

import DINProWoff from './DINPro.woff';
import DINProWoff2 from './DINPro.woff2';
import GilroyLightWoff from './Gilroy-Light.woff';
import GilroyLightWoff2 from './Gilroy-Light.woff2';
import GilroyRegularWoff from './Gilroy-Regular.woff';
import GilroyRegularWoff2 from './Gilroy-Regular.woff2';
import GilroyExtraBoldWoff from './Gilroy-ExtraBold.woff';
import GilroyExtraBoldWoff2 from './Gilroy-ExtraBold.woff2';

export const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'DINPro';
    src: local('DINPro'),
    url(${DINProWoff2}) format('woff2'),
    url(${DINProWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gilroy Light';
    src:
      local('Gilroy Light'),
      local('Gilroy-Light'),
      local('GilroyLight'),
    url(${GilroyLightWoff2}) format('woff2'),
    url(${GilroyLightWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gilroy Regular';
    src:
      local('Gilroy Regular'),
      local('Gilroy-Regular'),
      local('GilroyRegular'),
    url(${GilroyRegularWoff2}) format('woff2'),
    url(${GilroyRegularWoff}) format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gilroy ExtraBold';
    src:
      local('Gilroy ExtraBold'),
      local('Gilroy-ExtraBold'),
      local('GilroyExtraBold'),
    url(${GilroyExtraBoldWoff2}) format('woff2'),
    url(${GilroyExtraBoldWoff}) format('woff');
    font-weight: 800;
    font-style: normal;
  }
`;
