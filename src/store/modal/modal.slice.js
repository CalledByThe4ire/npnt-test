import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  isOpen: true,
  slider: {
    currentIndex: 0,
    itemsCount: 0,
  },
};

const sliderSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggle: (state) => {
      state.isOpen = !state.isOpen;
    },
    getItemsCount: (state, { payload }) => {
      state.slider.itemsCount = payload;
    },
    prev: (state) => {
      const newIndex = state.slider.currentIndex - 1;

      if (newIndex >= 0) {
        state.slider.currentIndex = newIndex;
      }
    },
    next: (state) => {
      const {
        slider: { itemsCount },
      } = state;

      const newIndex = state.slider.currentIndex + 1;

      if (newIndex < itemsCount) {
        state.slider.currentIndex = newIndex;
      }
    },
    goto: (state, { payload }) => {
      state.slider.currentIndex = payload;
    },
  },
});

export const { toggle, getItemsCount, prev, next, goto } = sliderSlice.actions;
export const modalSelector = (state) => state.modal;
export default sliderSlice.reducer;
