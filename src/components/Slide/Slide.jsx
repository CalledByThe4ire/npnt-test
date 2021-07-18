/* eslint-disable import/no-anonymous-default-export */

import React from 'react';
import { Link } from 'react-router-dom';
import { Slide, SlideHeader, SlideMain, SlideFooter } from './Slide.styles.jsx';
import Nav from '../Nav/Nav.jsx';
import Icon from '../Icon/Icon.jsx';

export default (props) => {
  return (
    <Slide className="slider__item slide">
      <SlideHeader className="slide__header">
        <Nav></Nav>
      </SlideHeader>
      <SlideMain className="slide__main">{props.children}</SlideMain>
      <SlideFooter className="slide__footer footer">
        <Link to="https://onpoint.ru/" className="footer__link">
          <Icon name="logo" width={56} height={11} />
        </Link>
      </SlideFooter>
    </Slide>
  );
};
