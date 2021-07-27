import styled from 'styled-components/macro';
import { lighten } from 'polished';
import SuperQuery from '@themgoncalves/super-query';
import { useSpring, animated, config } from 'react-spring';

import { ANIMATION } from '../../utils/constants/view.guide.constants';
import { Button } from '../../styles';
import guideBgImage from '../../assets/images/guide/guide__bg.png';
import guideBgImageRetina from '../../assets/images/guide/guide__bg@2x.png';
import guideBottleImage from '../../assets/images/guide/guide__bottle.png';
import guideBottleImageRetina from '../../assets/images/guide/guide__bottle@2x.png';

export const Guide = styled.section`
  position: relative;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  width: inherit;
  height: inherit;
  padding-top: 165px;
  padding-right: 80px;
  padding-bottom: 120px;
  padding-left: 230px;
  background: url(${guideBgImage}) ${({ theme: { colors } }) => colors.white}
    no-repeat center center / contain;
  overflow: hidden;

  ${SuperQuery().minResolution.of('192dpi').css`
    background-image: url(${guideBgImageRetina});
  `}

  &::after {
    content: '';
    z-index: 777;
    position: absolute;
    top: 80px;
    left: 50px;
    display: block;
    width: 233px;
    height: 689px;
    background: url(${guideBottleImage}) no-repeat center / contain;

    ${SuperQuery().minResolution.of('192dpi').css`
      background-image: url(${guideBottleImageRetina});
    `}
  }
`;

export const GuideLead = styled.span`
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 20px;
  padding-left: 125px;
  font-family: 'DINPro', Arial, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 27px;
  line-height: 1;
  color: ${({ theme: { colors } }) => colors.black};
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const GuideTitle = styled.h2`
  position: relative;
  display: flex;
  flex-flow: row wrap;
  margin: 0;
  padding: 0;
  padding-left: 120px;
  font-family: 'Gilroy', Arial, sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 95px;
  line-height: 1;
  color: ${({ theme: { colors } }) => colors.black};
  text-transform: uppercase;
  letter-spacing: 10px;

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

export const GuideButton = styled(Button)`
  margin-top: auto;
`;

export const GuidePanel = styled.ul`
  z-index: 666;
  position: relative;
  display: flex;
  flex-flow: row wrap;
  margin: 0;
  padding: 0;
  margin-top: 75px;
  list-style: none;
`;

export const GuidePanelItem = styled.li`
  display: flex;
  flex-flow: row wrap;
  font-family: 'DINPro', Arial, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 25px;
  line-height: 1.2;
  color: ${({ theme: { colors } }) => colors.black};
`;

export const GuidePanelItemLeft = styled(GuidePanelItem)`
  width: 415px;
  padding-left: 80px;
  margin-right: 35px;
`;

export const GuidePanelItemRight = styled(GuidePanelItem)`
  width: 260px;
`;

export const GuidePanelItemContent = styled.div.attrs(({ className }) => {
  return className;
})`
  position: relative;
  display: flex;
  flex-flow: row wrap;
  align-items: baseline;

  svg {
    position: absolute;
    top: 0;
    left: 40px;
    transform: translateY(-50%);
  }

  p {
    margin: 0;
    padding: 0;
    padding: 40px;
    hyphens: auto;
    background-color: ${({ theme: { colors } }) => colors.white};
    border-radius: 40px;
    box-shadow: 0 0 40px
      ${({ theme: { colors } }) => lighten(0.15, colors.secondary)};
    letter-spacing: -0.2px;
  }

  &.guide-panel-item__content {
    width: initial;
    height: initial;
  }
`;

export const GuideElementsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const GuideElementsListItem = styled.li`
  display: flex;
`;

export const GuideElementsListItemImage = styled(animated.img)`
  z-index: 666;
  position: absolute;
  display: flex;
`;

const StyledBubble1 = styled(GuideElementsListItemImage).attrs((props) => ({
  className: `${props.className}--${props.modifier}`,
}))`
  top: 215px;
  left: 75px;
`;

export const GuideElementsListItemImageBubble1 = ({
  modifier,
  isViewActive,
  ...otherProps
}) => {
  return (
    <StyledBubble1
      modifier={modifier}
      {...otherProps}
      style={useSpring(ANIMATION[modifier](isViewActive, config.molasses))}
    />
  );
};

const StyledBubble2 = styled(GuideElementsListItemImage).attrs((props) => ({
  className: `${props.className}--${props.modifier}`,
}))`
  z-index: 777;
  top: 320px;
  left: 185px;
`;

export const GuideElementsListItemImageBubble2 = ({
  modifier,
  isViewActive,
  ...otherProps
}) => {
  return (
    <StyledBubble2
      modifier={modifier}
      {...otherProps}
      style={useSpring(ANIMATION[modifier](isViewActive, config.molasses))}
    />
  );
};

const StyledBubble3 = styled(GuideElementsListItemImage).attrs((props) => ({
  className: `${props.className}--${props.modifier}`,
}))`
  top: 65px;
  left: 200px;
`;

export const GuideElementsListItemImageBubble3 = ({
  modifier,
  isViewActive,
  ...otherProps
}) => {
  return (
    <StyledBubble3
      modifier={modifier}
      {...otherProps}
      style={useSpring(ANIMATION[modifier](isViewActive, config.molasses))}
    />
  );
};

const StyledBubble4 = styled(GuideElementsListItemImage).attrs((props) => ({
  className: `${props.className}--${props.modifier}`,
}))`
  bottom: 115px;
  left: 140px;
`;

export const GuideElementsListItemImageBubble4 = ({
  modifier,
  isViewActive,
  ...otherProps
}) => {
  return (
    <StyledBubble4
      modifier={modifier}
      {...otherProps}
      style={useSpring(ANIMATION[modifier](isViewActive, config.molasses))}
    />
  );
};

const StyledBubble5 = styled(GuideElementsListItemImage).attrs((props) => ({
  className: `${props.className}--${props.modifier}`,
}))`
  z-index: 777;
  top: 155px;
  left: 185px;
`;

export const GuideElementsListItemImageBubble5 = ({
  modifier,
  isViewActive,
  ...otherProps
}) => {
  return (
    <StyledBubble5
      modifier={modifier}
      {...otherProps}
      style={useSpring(ANIMATION[modifier](isViewActive, config.molasses))}
    />
  );
};

const StyledBubble6 = styled(GuideElementsListItemImage).attrs((props) => ({
  className: `${props.className}--${props.modifier}`,
}))`
  z-index: 888;
  bottom: -80px;
  left: 185px;
`;

export const GuideElementsListItemImageBubble6 = ({
  modifier,
  isViewActive,
  ...otherProps
}) => {
  return (
    <StyledBubble6
      modifier={modifier}
      {...otherProps}
      style={useSpring(ANIMATION[modifier](isViewActive, config.molasses))}
    />
  );
};

const StyledBubble7 = styled(GuideElementsListItemImage).attrs((props) => ({
  className: `${props.className}--${props.modifier}`,
}))`
  bottom: 280px;
  left: 10px;
`;

export const GuideElementsListItemImageBubble7 = ({
  modifier,
  isViewActive,
  ...otherProps
}) => {
  return (
    <StyledBubble7
      modifier={modifier}
      {...otherProps}
      style={useSpring(ANIMATION[modifier](isViewActive, config.molasses))}
    />
  );
};

const StyledBubble8 = styled(GuideElementsListItemImage).attrs((props) => ({
  className: `${props.className}--${props.modifier}`,
}))`
  z-index: 777;
  bottom: 140px;
  left: 25px;
`;

export const GuideElementsListItemImageBubble8 = ({
  modifier,
  isViewActive,
  ...otherProps
}) => {
  return (
    <StyledBubble8
      modifier={modifier}
      {...otherProps}
      style={useSpring(ANIMATION[modifier](isViewActive, config.molasses))}
    />
  );
};
