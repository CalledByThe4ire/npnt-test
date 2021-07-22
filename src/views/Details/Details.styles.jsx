import styled from 'styled-components/macro';
import { darken, lighten } from 'polished';
import SuperQuery from '@themgoncalves/super-query';
import detailsBgImage from '../../assets/images/details/details__bg.png';
import detailsBgImageRetina from '../../assets/images/details/details__bg@2x.png';

export const Details = styled.section`
  position: relative;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: inherit;
  height: inherit;
  padding-top: 130px;
  padding-right: 130px;
  padding-bottom: 80px;
  padding-left: 65px;
  background: url(${detailsBgImage}) ${({ theme: { colors } }) => colors.white}
    no-repeat center center / contain;
  overflow: hidden;

  ${SuperQuery().minResolution.of('192dpi').css`
    background-image: url(${detailsBgImageRetina});
  `}
`;

export const DetailsElementsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const DetailsElementsListItem = styled.li`
  display: flex;
`;

export const DetailsElementsListItemImage = styled.img`
  position: absolute;
  display: flex;
  mix-blend-mode: multiply;
`;

export const DetailsElementsListItemImageSperm1 = styled(DetailsElementsListItemImage)`
  top: 98px;
  left: 366px;
`;

export const DetailsElementsListItemImageSperm2 = styled(DetailsElementsListItemImage)`
  top: 95px;
  left: 585px;
`;

export const DetailsElementsListItemImageSperm3 = styled(DetailsElementsListItemImage)`
  top: 75px;
  left: 710px;
`;

export const DetailsElementsListItemImageSperm4 = styled(DetailsElementsListItemImage)`
  bottom: 15px;
  right: -595px;
`;

export const DetailsElementsListItemImageSperm5 = styled(DetailsElementsListItemImage)`
  bottom: 95px;
  right: -190px;
`;

export const DetailsTitle = styled.h2`
  display: flex;
  flex-flow: row wrap;
  margin: 0;
  margin-bottom: 45px;
  padding: 0;
  font-family: 'DINPro', Arial, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 27px;
  line-height: 1.2;
  color: ${({ theme: { colors } }) => colors.black};
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const DetailsPanel = styled.div.attrs(({ className }) => {
  return className;
})`
  position: relative;
  display: block;
  padding: 30px;
  padding-left: ${(props) => (props.hasScroll ? 0 : null)};

  &.panel {
    width: auto;
    height: initial;

    .rcs-custom-scroll {
      .rcs-inner-container {
        direction: rtl;
      }
    }

    .rcs-custom-scrollbar {
      width: 20px;
    }

    .rcs-inner-handle {
      display: inline-block;
      background-image: linear-gradient(
          to right,
          ${({ theme: { colors } }) => darken(0.4, colors.primary)} 0%,
          transparent 45%
        ),
        linear-gradient(
          to left,
          ${({ theme: { colors } }) => lighten(0.25, colors.primary)} 0%,
          transparent 45%
        ),
        linear-gradient(
          to top,
          ${({ theme: { colors } }) => lighten(0.25, colors.primary)} 0%,
          transparent 5%
        ),
        linear-gradient(
          to bottom,
          ${({ theme: { colors } }) => darken(0.4, colors.primary)} 0%,
          transparent 5%
        );
      background-color: ${({ theme: { colors } }) => colors.primary};
      border-radius: 20px;
      cursor: pointer;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 30px;
    left: 10px;
    display: ${(props) => (props.hasScroll ? 'block' : 'none')};
    width: 5px;
    height: calc(100% - 60px);
    border-radius: 5px;
    background-color: ${({ theme: { colors } }) => colors.black};
    transition: all 0.3s ease-in-out;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: ${(props) => (props.hasScroll ? '60px' : 0)};
    display: block;
    width: ${(props) => (props.hasScroll ? 'calc(100% - 60px)' : '100%')};
    height: 100%;
    border-radius: 40px;
    background-color: ${({ theme: { colors } }) => colors.white};
    transition: all 0.3s ease-in-out;
  }
`;

export const DetailsPanelContent = styled.div`
  max-height: 385px;
`;

export const DetailsPanelText = styled.div`
  z-index: 5;
  position: relative;
  display: inline-block;
  font-family: 'DINPro', Arial, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 22px;
  line-height: 30px;
  color: ${({ theme: { colors } }) => colors.black};
  transition: all 0.3s ease-in-out;

  p {
    margin: 0;
    padding: 0;
    padding-left: ${(props) => (props.hasScroll ? '90px' : null)};
    direction: ltr;
    transition: inherit;
  }

  b {
    font-family: 'DINPro-Bold', Arial, sans-serif;
    font-weight: 700;
  }
`;
