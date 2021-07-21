import styled from 'styled-components/macro';
import SuperQuery from '@themgoncalves/super-query';
import { Link } from 'react-router-dom';
import introBgImage from '../../assets/images/intro/intro__bg.jpg';
import introBgImageRetina from '../../assets/images/intro/intro__bg@2x.jpg';
import introLinkImage from '../../assets/images/intro/intro__link--effect.png';
import introLinkImageRetina from '../../assets/images/intro/intro__link--effect@2x.png';

export const Intro = styled.section`
  position: relative;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: inherit;
  height: inherit;
  padding-top: 165px;
  padding-left: 65px;
  background: url(${introBgImage}) #fff no-repeat center center / contain;
  overflow: hidden;

  ${SuperQuery().minResolution.of('192dpi').css`
    background-image: url(${introBgImageRetina});
  `}
`;

export const IntroLead = styled.span`
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 20px;
  font-family: 'DINPro', Arial, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 27px;
  line-height: 1;
  color: #242424;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const IntroTitle = styled.h1`
  z-index: 10;
  position: relative;
  display: flex;
  flex-flow: row wrap;
  margin: 0;
  padding: 0;
  font-family: 'Gilroy', Arial, sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 109px;
  line-height: 117px;
  color: #242424;
  text-transform: uppercase;
  letter-spacing: 6px;

  span {
    display: flex;
    flex-basis: 100%;
  }

  strong {
    font-family: 'Gilroy', Arial, sans-serif;
    font-weight: 800;
    font-style: normal;
  }
`;

export const IntroElements = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const IntroElement = styled.img`
  z-index: 15;
  position: absolute;
  display: flex;
`;

export const IntroElementCell1 = styled(IntroElement)`
  top: 65px;
  right: 215px;
`;

export const IntroElementCell2 = styled(IntroElement)`
  top: 200px;
  right: 50px;
`;

export const IntroElementCell3 = styled(IntroElement)`
  bottom: -100px;
  right: 255px;
`;

export const IntroElementCell4 = styled(IntroElement)`
  z-index: 0;
  left: 20px;
  bottom: 190px;
`;

export const IntroElementSperm = styled(IntroElement)`
  top: 155px;
  right: 0;
`;

export const IntroLink = styled(Link)`
  z-index: 10;
  position: absolute;
  top: 465px;
  right: 110px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  width: 290px;
  height: 80px;
  padding-left: 90px;
  border-radius: 80px / 80px;
  font-family: 'DINPro', Arial, sans-serif;
  font-size: 27px;
  line-height: 1;
  color: #171717;
  text-decoration: none;
  letter-spacing: 1px;
  background: url(${introLinkImage}) #ff6a9f no-repeat 14px center;
  transition: all 0.3s ease-in-out;

  ${SuperQuery().minResolution.of('192dpi').css`
    background-image: url(${introLinkImageRetina});
  `}

  svg {
    z-index: 1;
    position: absolute;
    left: 35px;
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
    background-color: #272727;
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    background-color: #3fc2fd;
    color: #ffffff;

    svg {
      > path {
        stroke: #171717;
      }
    }

    &::after {
      background-color: #ffffff;
    }
  }

  &:active {
    background-color: #118bbb;
  }
`;
