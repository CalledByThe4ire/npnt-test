import styled from 'styled-components/macro';
import SuperQuery from '@themgoncalves/super-query';
import { Button } from '../../styles';
import introBgImage from '../../assets/images/intro/intro__bg.jpg';
import introBgImageRetina from '../../assets/images/intro/intro__bg@2x.jpg';

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
  background: url(${introBgImage}) ${({ theme: { colors } }) => colors.white}
    no-repeat center center / contain;
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
  color: ${({ theme: { colors } }) => colors.black};
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
  color: ${({ theme: { colors } }) => colors.black};
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

export const IntroButton = styled(Button)`
  z-index: 10;
  position: absolute;
  top: 465px;
  right: 110px;
  width: 290px;
`;

export const IntroElementsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const IntroElementsListItem = styled.li`
  display: flex;
`;

export const IntroElementsListItemImage = styled.img`
  z-index: 15;
  position: absolute;
  display: flex;
`;

export const IntroElementsListItemImageCell1 = styled(
  IntroElementsListItemImage
)`
  top: 65px;
  right: 215px;
`;

export const IntroElementsListItemImageCell2 = styled(
  IntroElementsListItemImage
)`
  top: 200px;
  right: 50px;
`;

export const IntroElementsListItemImageCell3 = styled(
  IntroElementsListItemImage
)`
  bottom: -100px;
  right: 255px;
`;

export const IntroElementsListItemImageCell4 = styled(
  IntroElementsListItemImage
)`
  z-index: 0;
  left: 20px;
  bottom: 190px;
`;

export const IntroElementsListItemImageSperm = styled(
  IntroElementsListItemImage
)`
  top: 155px;
  right: 0;
`;
