/* eslint-disable import/no-anonymous-default-export */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';
import { Slider, SliderList, SliderItem } from './Slider.styles';
import {
  prev,
  next,
  goto,
  sliderSelector,
} from '../../store/slider/slider.slice';

export default () => {
  const dispatch = useDispatch();
  const { currentIndex, items } = useSelector(sliderSelector);

  return (
    <Slider className="slider">
      <SliderList className="slider__list">
        <SwipeableViews>
          {items.map((element, index) => {
            return (
              <SliderItem className="slider__item" key={element.id}>
                <div>{element.name}</div>
              </SliderItem>
            );
          })}
        </SwipeableViews>
      </SliderList>
    </Slider>
  );
};
