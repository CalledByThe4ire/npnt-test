import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  isOpen: false,
  slider: {
    currentIndex: 0,
  },
};

const sliderSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggle: (state) => {
      state.isOpen = !state.isOpen;
    },
    prev: (state) => {
      state.slider.currentIndex = state.slider.currentIndex - 1;
    },
    next: (state) => {
      state.slider.currentIndex = state.slider.currentIndex + 1;
    },
    goto: (state, { payload }) => {
      state.slider.currentIndex = payload;
    },
  },
});

export const { toggle, prev, next, goto } = sliderSlice.actions;
export const modalSelector = (state) => state.modal;
export default sliderSlice.reducer;
