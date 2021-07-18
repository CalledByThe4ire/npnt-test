/* eslint-disable import/no-anonymous-default-export */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';

import { GlobalStyle } from '../../styles';
import { GlobalFonts } from '../../assets/fonts';
import { Slider, SliderItemsList } from './Slider.styles.jsx';
import Slide from '../Slide/Slide.jsx';
import View from '../../views/View.jsx';
import { goto, sliderSelector } from '../../store/slider/slider.slice';

export default () => {
  const dispatch = useDispatch();
  const { currentIndex, items } = useSelector(sliderSelector);
  const handleChangeIndex = (index) => dispatch(goto(index));

  return (
    <>
      <GlobalStyle />
      <GlobalFonts />
      <Slider className="slider">
        <SliderItemsList className="slider__list">
          <SwipeableViews
            index={currentIndex}
            onChangeIndex={handleChangeIndex}
          >
            {items.map((element, index) => {
              return (
                <Slide key={element.id}>
                  <View name={element.name} />
                </Slide>
              );
            })}
          </SwipeableViews>
        </SliderItemsList>
      </Slider>
    </>
  );
};
