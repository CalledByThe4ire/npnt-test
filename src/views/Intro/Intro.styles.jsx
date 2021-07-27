import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import SuperQuery from '@themgoncalves/super-query';
import { useSpring, animated, config } from 'react-spring';
import { ANIMATION } from '../../utils/constants/view.intro.constants';

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

export const IntroElementsListItemImage = styled(animated.img)`
  z-index: 15;
  position: absolute;
  display: flex;
`;

const StyledCell1 = styled(IntroElementsListItemImage).attrs((props) => ({
  className: `${props.className}--${props.modifier}`,
}))`
  top: 65px;
  right: 215px;
`;

export const IntroElementsListItemImageCell1 = ({
  modifier,
  isViewActive,
  ...otherProps
}) => {
  return (
    <StyledCell1
      modifier={modifier}
      {...otherProps}
      style={useSpring(ANIMATION[modifier](isViewActive, config.molasses))}
    />
  );
};

const StyledCell2 = styled(IntroElementsListItemImage).attrs((props) => ({
  className: `${props.className}--${props.modifier}`,
}))`
  top: 200px;
  right: 50px;
`;

export const IntroElementsListItemImageCell2 = ({
  modifier,
  isViewActive,
  ...otherProps
}) => {
  return (
    <StyledCell2
      modifier={modifier}
      {...otherProps}
      style={useSpring(ANIMATION[modifier](isViewActive, config.molasses))}
    />
  );
};

const StyledCell3 = styled(IntroElementsListItemImage).attrs((props) => ({
  className: `${props.className}--${props.modifier}`,
}))`
  bottom: -100px;
  right: 255px;
`;

export const IntroElementsListItemImageCell3 = ({
  modifier,
  isViewActive,
  ...otherProps
}) => {
  return (
    <StyledCell3
      modifier={modifier}
      {...otherProps}
      style={useSpring(ANIMATION[modifier](isViewActive, config.molasses))}
    />
  );
};

const StyledCell4 = styled(IntroElementsListItemImage).attrs((props) => ({
  className: `${props.className}--${props.modifier}`,
}))`
  z-index: 0;
  left: 20px;
  bottom: 190px;
`;

export const IntroElementsListItemImageCell4 = ({
  modifier,
  isViewActive,
  ...otherProps
}) => {
  return (
    <StyledCell4
      modifier={modifier}
      {...otherProps}
      style={useSpring(ANIMATION[modifier](isViewActive, config.molasses))}
    />
  );
};

const StyledSperm = styled(IntroElementsListItemImage).attrs((props) => ({
  className: `${props.className}--${props.modifier}`,
}))`
  top: 155px;
  right: 0;
`;

export const IntroElementsListItemImageSperm = ({
  modifier,
  isViewActive,
  ...otherProps
}) => {
  return (
    <StyledSperm
      modifier={modifier}
      {...otherProps}
      style={useSpring(ANIMATION[modifier](isViewActive, config.molasses))}
    />
  );
};

IntroElementsListItemImage.propTypes = {
  modifier: PropTypes.string.isRequired,
  isViewActive: PropTypes.bool.isRequired,
};
