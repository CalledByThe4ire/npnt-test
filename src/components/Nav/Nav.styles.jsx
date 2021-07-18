import styled from 'styled-components/macro';

export const Nav = styled.nav`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;

export const NavList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  min-height: 25px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const NavListItem = styled.li`
  position: relative;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  height: 100%;

  &:not(:last-of-type)::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    width: 2px;
    height: 100%;
    background-color: #272727;
    transition: all 0.3s ease-in-out;
  }

  > a {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    height: auto;
    padding-left: 25px;
    padding-right: 25px;

    svg {
      transition: all 0.3s ease-in-out;

      & > path {
        transition: inherit;
      }
    }

    &:hover {
      svg {
        & > path {
          fill: #ffffff;
          stroke: #ffffff;
        }
      }
    }
  }

  &:hover {
    &::after {
      background-color: #ffffff;
    }
  }
`;
