import styled from 'styled-components/macro';
import { darken, rgba } from 'polished';
import { Link } from 'react-router-dom';

export const GuideModal = styled.div`
  z-index: 666;
  position: absolute;
  top: 65%;
  left: 65%;
  min-width: 822px;
  min-height: 573px;
  transform: translate(-65%, -65%);

  &.guide-modal {
    width: initial;
    height: initial;
  }
`;

export const GuideModalOverlay = styled.div`
  z-index: 555;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 822px;
  height: 100%;
  min-height: 573px;
  background-color: ${({ theme: { colors } }) =>
    darken(0.5, rgba(colors.secondary, 0.3))};
  cursor: pointer;
`;

export const GuideModalContent = styled.div`
  position: relative;
  display: flex;
  flex-flow: column wrap;
  padding: 40px;
  padding-left: 50px;
  background-color: ${({ theme: { colors } }) => colors.white};
  border-radius: 40px;
`;

export const GuideModalClose = styled(Link)`
  position: absolute;
  top: 30px;
  right: 30px;
  display: flex;
`;

export const GuideModalSlider = styled.ul`
  display: flex;
  flex-flow: column wrap;
  list-style: none;
`;

export const GuideModalSlide = styled.li`
  display: flex;
  margin-bottom: 65px;
`;

export const GuideModalControlsList = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  padding: 0;
  padding-left: 120px;
  list-style: none;
`;

export const GuideModalControlsListItem = styled.li`
  display: flex;

  a {
    display: inherit;
  }
`;

export const GuideModalControlsListItemPrev = styled(
  GuideModalControlsListItem
)`
  display: flex;
  transform: rotate(-180deg);
`;

export const GuideModalControlsListItemPagination = styled(
  GuideModalControlsListItem
)`
  margin-left: 20px;
  margin-right: 20px;
`;

export const GuideModalControlsListItemNext = styled(
  GuideModalControlsListItem
)`
  display: flex;
`;

export const GuideModalPagination = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  padding: 0;
  list-style: none;
`;

export const GuideModalPaginationItem = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-of-type) {
    margin-right: 10px;
  }
`;

export const GuideModalPaginationDot = styled(Link)`
  display: flex;
  width: 10px;
  height: 10px;
  border: 1px solid ${({ theme: { colors } }) => colors.black};
  border-radius: 50%;
`;

export const GuideModalPaginationDotActive = styled(GuideModalPaginationDot)`
  border: 1px solid ${({ theme: { colors } }) => colors.primary};
  background-color: ${({ theme: { colors } }) => colors.primary};
`;

export const GuideModalAdvantagesList = styled.ul`
  display: flex;
  flex-flow: column wrap;
  margin-top: 20px;
  padding: 0;
  padding-left: 120px;
  padding-right: 60px;
  list-style: none;
`;

export const GuideModalAdvantagesListItem = styled.li`
  position: relative;
  display: flex;
  flex-flow: column wrap;
  padding-top: 35px;
  font-family: 'DINPro', Arial, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 25px;
  line-height: 1.2;
  color: ${({ theme: { colors } }) => colors.black};

  p {
    margin: 0;
    padding: 0;
  }

  &:not(:last-of-type) {
    margin-bottom: 15px;
  }

  &::after {
    content: '${({ marker }) => marker}';
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    font-family: 'Gilroy ExtraBold', Arial, sans-serif;
    font-weight: 800;
    color: ${({ theme: { colors } }) => colors.secondary};
  }
`;
