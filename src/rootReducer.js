import { combineReducers } from 'redux';
import sliderReducer from '././store/slider/slider.slice';
import modalReducer from '././store/modal/modal.slice';

const rootReducer = combineReducers({
  slider: sliderReducer,
  modal: modalReducer,
});

export default rootReducer;
