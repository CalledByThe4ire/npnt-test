import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const initialState = {
  currentIndex: 0,
  items: [
    { id: uuidv4(), name: 'intro' },
    { id: uuidv4(), name: 'details' },
    { id: uuidv4(), name: 'guide' },
  ],
};

const sliderSlice = createSlice({
  name: 'slider',
  initialState,
  reducers: {
    prev: (state) => {
      state.currentIndex = state.currentIndex - (1 % state.items.length);
    },
    next: (state) => {
      state.currentIndex = state.currentIndex + (1 % state.items.length);
    },
    goto: (state, { payload }) => {
      state.currentIndex = payload;
    },
  },
});

export const { prev, next, goto } = sliderSlice.actions;
export const sliderSelector = (state) => state.slider;
export default sliderSlice.reducer;
