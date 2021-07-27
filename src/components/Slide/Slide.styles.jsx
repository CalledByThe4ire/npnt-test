import styled from 'styled-components/macro';

export const Slide = styled.li`
  position: relative;
  display: flex;
  flex-flow: column wrap;
  width: inherit;
  height: inherit;
  cursor: grab;
`;

export const SlideHeader = styled.header`
  z-index: 666;
  position: absolute;
  left: 42px;
  top: 24px;
  display: flex;
  flex-flow: row wrap;
`;

export const SlideMain = styled.main`
  display: flex;
  flex-flow: row wrap;
  width: inherit;
  height: inherit;
`;

export const SlideFooter = styled.footer`
  z-index: 666;
  position: absolute;
  bottom: 10px;
  left: 70px;
  display: flex;
  flex-flow: row wrap;

  > a {
    svg {
      fill: ${({ theme: { colors } }) => colors.black};
      transition: all 0.3s ease;

      & > path {
        transition: inherit;
      }
    }
  }
`;
