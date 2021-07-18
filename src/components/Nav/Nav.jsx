/* eslint-disable import/no-anonymous-default-export */

import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Nav, NavList, NavListItem } from './Nav.styles.jsx';
import Icon from '../Icon/Icon.jsx';
import { goto } from '../../store/slider/slider.slice';

export default () => {
  const dispatch = useDispatch();

  const handleClick = () => dispatch(goto(0));

  return (
    <Nav className="nav">
      <NavList className="nav__list">
        <NavListItem className="nav__list-item">
          <Link to="/" className="nav__link" onClick={handleClick}>
            <Icon name="home" width={22} height={19} />
          </Link>
        </NavListItem>
        <NavListItem>
          <Link to="/#" className="nav__link">
            <Icon name="project" width={80} height={12} />
          </Link>
        </NavListItem>
      </NavList>
    </Nav>
  );
};
