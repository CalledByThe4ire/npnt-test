/* eslint-disable import/no-anonymous-default-export */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';
import { ThemeProvider } from 'styled-components/macro';

import { GlobalStyle, theme } from '../../styles';
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
      <ThemeProvider theme={theme}>
        <Slider className="slider">
          <SliderItemsList className="slider__list">
            <SwipeableViews
              index={currentIndex}
              onChangeIndex={handleChangeIndex}
              enableMouseEvents={true}
            >
              {items.map((element, index) => {
                return (
                  <Slide key={element.id}>
                    <View name={element.name} index={index} />
                  </Slide>
                );
              })}
            </SwipeableViews>
          </SliderItemsList>
        </Slider>
      </ThemeProvider>
    </>
  );
};
