import styled, { createGlobalStyle } from 'styled-components/macro';
import SuperQuery from '@themgoncalves/super-query';
import { normalize } from 'styled-normalize';
import { Link } from 'react-router-dom';

import buttonEffectImage from './assets/images/button--effect.png';
import buttonEffectImageRetina from './assets/images/button--effect@2x.png';

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
  },
};

export const Button = styled(Link)`
  position: relative;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  min-width: 260px;
  height: 80px;
  padding-left: 90px;
  border-radius: 80px / 80px;
  font-family: 'DINPro', Arial, sans-serif;
  font-size: 27px;
  line-height: 1;
  color: ${({ theme: { colors } }) => colors.black};
  text-decoration: none;
  letter-spacing: 1px;
  background: url(${buttonEffectImage})
    ${({ theme: { colors } }) => colors.primary} no-repeat 14px center;
  transition: all 0.3s ease-in-out;

  ${SuperQuery().minResolution.of('192dpi').css`
    background-image: url(${buttonEffectImageRetina});
    background-size: auto 75%;
  `}

  & .svg-icon {
    z-index: 1;
    position: absolute;
    top: 50%;
    left: calc(20px + (50px / 2));
    transform: translate(-50%, -50%);
    transition: all 0.3s ease-in-out;

    & > path {
      transition: inherit;
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 15px;
    left: 20px;
    display: flex;
    width: 50px;
    height: 50px;
    background-color: ${({ theme: { colors } }) => colors.black};
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.secondary};
    color: ${({ theme: { colors } }) => colors.white};

    svg {
      transition: all 0.3s ease-in-out;

      > path {
        transition: inherit;
        stroke: ${({ theme: { colors } }) => colors.black};
        fill: ${({ theme: { colors } }) => colors.black};
      }
    }

    &::after {
      background-color: ${({ theme: { colors } }) => colors.white};
    }
  }
`;
